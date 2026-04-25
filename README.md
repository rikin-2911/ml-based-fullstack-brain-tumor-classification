# 🧠 Brain Tumor MRI Classification using Deep Learning

## 📌 Overview

This project focuses on the automated classification of brain tumor MRI images using deep learning techniques. The system is designed to accurately identify different types of brain tumors from MRI scans, assisting in faster and more reliable medical diagnosis.

The project implements both a **custom-built ResNet18 model** and a **pre-trained ResNet50 model** using transfer learning. Additionally, a **FastAPI-based backend** is developed to serve the trained model for real-time predictions.

---

## 🎯 Objectives

* To classify brain MRI images into tumor categories
* To compare performance between a custom CNN (ResNet18) and a deep pre-trained model (ResNet50)
* To deploy the trained model using an API for real-world usability
* To build a modular and scalable machine learning pipeline

---

## 🧠 Models Used

### 🔹 Custom ResNet18

* Implemented from scratch using PyTorch
* Lightweight and computationally efficient
* Suitable for faster training and inference

### 🔹 Pre-trained ResNet50

* Based on transfer learning
* Pre-trained on ImageNet dataset
* Deeper architecture for better feature extraction

---

## 🛠️ Tech Stack

* **Programming Language:** Python
* **Deep Learning Framework:** PyTorch
* **Backend API:** FastAPI
* **Libraries:** NumPy, Pandas, Matplotlib, Scikit-learn
* **Version Control:** Git & GitHub

---

## 📂 Project Structure

```
brain-tumor-classification/
│
├── data/                  # Dataset (not included in repo)
├── notebooks/             # EDA and experiments
├── src/                   # Core ML code
│   ├── models/            # ResNet architectures
│   ├── training/          # Training and validation
│   ├── data/              # Data handling
│   └── inference/         # Prediction logic
│
├── api/                   # FastAPI backend
├── models/                # Saved model weights
├── tests/                 # Unit tests
├── frontend/              # (Future scope)
│
├── requirements.txt
├── README.md
└── .gitignore
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/rikin-2911/ml-based-fullstack-brain-tumor-classification.git
cd brain-tumor-classification
```

### 2. Create virtual environment

```bash
python -m venv venv
source venv/bin/activate   # For Linux/Mac
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

---

## 🚀 Running the FastAPI Server

```bash
uvicorn api.main:app --reload
```

Open your browser:

```
http://127.0.0.1:8000/docs
```

Use the interactive API interface to test predictions.

---

## 🔍 Model Inference Workflow

1. User uploads an MRI image
2. Image is preprocessed
3. Model predicts tumor class
4. Result is returned via API

---

## 📊 Evaluation Metrics

The models are evaluated using:

* Accuracy
* Precision
* Recall
* F1-Score

These metrics help assess classification performance, especially in medical diagnosis tasks where false predictions can be critical.

---

## 📈 Future Improvements

* Integration with frontend UI (React / Streamlit)
* Deployment using Docker or cloud platforms
* Model optimization for edge devices
* Adding Grad-CAM for model explainability

---

## ⚠️ Note

* Dataset is not included due to size constraints
* Model weights (`.pth` files) are excluded from the repository

---

## 👨‍💻 Author

**Rikin Pithadia**

* AI & Data Science Enthusiast
* Focus Areas: Machine Learning, Deep Learning, Generative AI

---

## 📬 Contact

* LinkedIn: http://www.linkedin.com/in/rikin-pithadia-20b94729b
* GitHub: https://github.com/rikin-2911

---

## ⭐ Acknowledgment

This project is developed as part of hands-on learning in deep learning and real-world AI system design, combining both research understanding and practical implementation.

Thank you..
---