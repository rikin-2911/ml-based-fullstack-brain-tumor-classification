# Loading the trained model


import torch
import torchvision
import numpy as np
import torchvision.models as models
import torch.nn as nn
import json


device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

# loading the trained model
def load_model():

    #getting the model from PyTorch
    model = models.resnet18(pretrained=False)

    # setting the number of neurons in Linear layer
    num_features = model.fc.in_features

    # custom fully connected layer
    model.fc = nn.Sequential(
                nn.Linear(num_features, out_features=256),
                nn.ReLU(),
                nn.Dropout(0.5),
                nn.Linear(in_features=256, out_features=4)
                )

    # load the trained model from models path
    checkpoint = torch.load("/home/rikin/brain-tumor-classification/models/checkpoints.pth", map_location=device)

    model.load_state_dict(checkpoint['model_state_dict'])

    # shifting model to GPU
    model.to(device)

    # evaluation state
    model.eval()

    with open("/home/rikin/brain-tumor-classification/models/classes.json", "r") as f:
        classes = json.load(f)

    return model, classes