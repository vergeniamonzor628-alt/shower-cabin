import os
from PIL import Image, ImageOps

base_dir = "public/images"
cabins = ["corner", "niche", "bath"]

def flip(src_name, dst_name):
    src_path = os.path.join(base_dir, src_name)
    dst_path = os.path.join(base_dir, dst_name)
    if os.path.exists(src_path):
        img = Image.open(src_path)
        img_flipped = ImageOps.mirror(img)
        img_flipped.save(dst_path)
        print(f"Flipped {src_name} to {dst_name}")
    else:
        print(f"Missing {src_name}")

for cabin in cabins:
    # Sliding
    flip(f"{cabin}_sliding_left_render.png", f"{cabin}_sliding_right_render.png")
    # Folding
    flip(f"{cabin}_folding_left_render.png", f"{cabin}_folding_right_render.png")
    # Swing: left_left -> right_right
    flip(f"{cabin}_swing_left_left_render.png", f"{cabin}_swing_right_right_render.png")
    # Swing: right_left -> left_right
    flip(f"{cabin}_swing_right_left_render.png", f"{cabin}_swing_left_right_render.png")

print("Done flipping images.")
