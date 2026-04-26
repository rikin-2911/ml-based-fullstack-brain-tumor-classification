# prediction logic of  model


from PIL import Image
import torch
from torchvision import transforms

# same transforms that used during training and testing
transform = transforms.Compose([
    transforms.Resize(256),
    transforms.CenterCrop(224),
    transforms.ToTensor(),
    transforms.Normalize([0.485,0.456,0.406],
                         [0.229,0.224,0.225])
])


def predict(image, model, classes, device):

    # open image in RGB form
    image = Image.open(image).convert("RGB")

    # transform the image 
    image = transform(image).unsqueeze(0).to(device)

    with torch.no_grad():
        outputs = model(image)

        probs = torch.softmax(outputs, dim=1)
        conf, pred = torch.max(probs, 1)

    return classes[pred.item()], conf.item()
