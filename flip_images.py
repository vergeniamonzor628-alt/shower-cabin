import os
import sys
from PIL import Image, ImageOps

if len(sys.argv) == 3:
    src_path = sys.argv[1]
    dst_path = sys.argv[2]
    if os.path.exists(src_path):
        img = Image.open(src_path)
        img_flipped = ImageOps.mirror(img)
        img_flipped.save(dst_path)
        print(f"Flipped {src_path} to {dst_path}")
    else:
        print(f"Missing {src_path}")
else:
    print("Usage: python flip_images.py <src> <dst>")
