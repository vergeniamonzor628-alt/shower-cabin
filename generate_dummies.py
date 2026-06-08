import os
from PIL import Image, ImageDraw

base_dir = "public/images"
os.makedirs(base_dir, exist_ok=True)

cabins = ["corner", "niche", "bath", "walkin"]
door_types = ["stationary", "sliding", "folding", "swing"]
positions = ["left", "right"]

def generate_dummy(cabin, dtype, dpos, hpos=None):
    filename = f"{cabin}_{dtype}_{dpos}_overlay.png"
    if dtype == "swing" and hpos:
        filename = f"{cabin}_swing_{hpos}_{dpos}_overlay.png"
    if dtype == "stationary":
        filename = f"{cabin}_stationary_overlay.png"
        
    path = os.path.join(base_dir, filename)
    
    # Create transparent image
    img = Image.new("RGBA", (1024, 1024), (255, 255, 255, 0))
    draw = ImageDraw.Draw(img, "RGBA")
    
    # Base color for glass (light blue semi-transparent)
    glass_color = (135, 206, 235, 80)
    # Border for glass
    outline_color = (135, 206, 235, 200)
    # Highlight
    highlight = (255, 255, 255, 120)

    # Some generic coordinates based on pos
    x_offset = 200 if dpos == 'left' else 500
    if dtype == 'stationary':
        x_offset = 350
        draw.rectangle([x_offset, 200, x_offset + 300, 900], fill=glass_color, outline=outline_color, width=4)
        draw.text((x_offset + 50, 500), "STATIONARY", fill=(0,0,0,255))
    elif dtype == 'sliding':
        draw.rectangle([x_offset, 200, x_offset + 300, 900], fill=glass_color, outline=outline_color, width=4)
        # Add sliding arrow
        arrow_start = x_offset + 150
        arrow_end = arrow_start - 100 if dpos == 'left' else arrow_start + 100
        draw.line([(arrow_start, 500), (arrow_end, 500)], fill=(0,0,0,255), width=5)
        draw.text((x_offset + 50, 500), "SLIDING", fill=(0,0,0,255))
    elif dtype == 'folding':
        # two smaller panels
        draw.rectangle([x_offset, 200, x_offset + 150, 900], fill=glass_color, outline=outline_color, width=4)
        draw.rectangle([x_offset+150, 200, x_offset + 300, 900], fill=glass_color, outline=outline_color, width=4)
        draw.text((x_offset + 50, 500), "FOLDING", fill=(0,0,0,255))
    elif dtype == 'swing':
        # hinged panel
        draw.rectangle([x_offset, 200, x_offset + 300, 900], fill=glass_color, outline=outline_color, width=4)
        hinge_x = x_offset if hpos == 'left' else x_offset + 300
        # Draw hinges
        draw.ellipse([hinge_x-10, 300, hinge_x+10, 320], fill=(50,50,50,255))
        draw.ellipse([hinge_x-10, 800, hinge_x+10, 820], fill=(50,50,50,255))
        draw.text((x_offset + 50, 500), f"SWING (Hinge: {hpos})", fill=(0,0,0,255))
        
    img.save(path)
    print(f"Saved {path}")

for cabin in cabins:
    generate_dummy(cabin, "stationary", "left")
    for pos in positions:
        generate_dummy(cabin, "sliding", pos)
        generate_dummy(cabin, "folding", pos)
        for hpos in positions:
            generate_dummy(cabin, "swing", pos, hpos)

print("All dummies generated.")
