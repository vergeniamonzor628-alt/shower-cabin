import rembg
from PIL import Image
import sys

input_path = "C:/Users/Katya/.gemini/antigravity-ide/brain/5671bf32-c715-49a0-8099-205570a9599f/master_glass_panel_1780951420681.png"
output_path = "C:/Users/Katya/.gemini/antigravity-ide/brain/5671bf32-c715-49a0-8099-205570a9599f/master_transparent.png"

print("Removing background...")
with open(input_path, 'rb') as i:
    with open(output_path, 'wb') as o:
        input_data = i.read()
        output_data = rembg.remove(input_data)
        o.write(output_data)

print("Background removed. Opening to verify transparency bounding box.")
# Crop empty transparent pixels
img = Image.open(output_path)
bbox = img.getbbox()
if bbox:
    img = img.crop(bbox)
    img.save(output_path)

print("Saved transparent and cropped image to:", output_path)
