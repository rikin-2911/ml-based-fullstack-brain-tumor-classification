# FastAPI endpoints

from fastapi import FastAPI, UploadFile, File
from api.model import load_model, device
from api.utils import predict
from fastapi.middleware.cors import CORSMiddleware # For CORS errors


# defining app
app = FastAPI(title="Brain Tumor Prediction API")

# CORS handling
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# getting the model and classes from model
model, classes = load_model()

# predict endpoint
@app.post("/predict")
async def predict_api(file: UploadFile = File(...)):
    prediction, confidence = predict(file.file, model, classes, device)

    return {
        "prediction":prediction,
        "confidence":confidence
    }