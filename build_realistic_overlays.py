import os
from PIL import Image, ImageDraw

base_dir = "public/images"
os.makedirs(base_dir, exist_ok=True)

master_path = "C:/Users/Katya/.gemini/antigravity-ide/brain/5671bf32-c715-49a0-8099-205570a9599f/master_transparent.png"
if not os.path.exists(master_path):
    print("Master image not found!")
    exit(1)

master_img = Image.open(master_path).convert("RGBA")

# Resize master to a standard height for the cabin (e.g., 700px)
target_h = 700
aspect = master_img.width / master_img.height
target_w = int(target_h * aspect)
master_img = master_img.resize((target_w, target_h), Image.Resampling.LANCZOS)

# Flip horizontally for right-hinge (since our prompt made left hinge)
master_img_flipped = master_img.transpose(Image.FLIP_LEFT_RIGHT)

cabins = ["corner", "niche", "bath", "walkin"]
door_types = ["stationary", "sliding", "folding", "swing"]
positions = ["left", "right"]

def compose_overlay(cabin, dtype, dpos, hpos=None):
    filename = f"{cabin}_{dtype}_{dpos}_overlay.png"
    if dtype == "swing" and hpos:
        filename = f"{cabin}_swing_{hpos}_{dpos}_overlay.png"
    if dtype == "stationary":
        filename = f"{cabin}_stationary_overlay.png"
        
    path = os.path.join(base_dir, filename)
    
    # Create 1024x1024 canvas
    canvas = Image.new("RGBA", (1024, 1024), (255, 255, 255, 0))
    
    # Calculate base positions. Let's make the shower area centered at x=512, y=512
    # So y starts at (1024-700)/2 = 162
    y_pos = 162
    # The shower area might be around 600px wide, from x=212 to x=812.
    # Left side: x=212, Right side: x=812 - target_w
    
    left_x = 512 - target_w
    right_x = 512
    
    x_pos = left_x if dpos == 'left' else right_x
    
    if dtype == 'stationary':
        # Put stationary panel in the center
        center_x = 512 - (target_w // 2)
        canvas.paste(master_img, (center_x, y_pos), master_img)
        
    elif dtype == 'sliding':
        # Two panels. Sliding means one is slightly offset.
        # Fixed panel
        fixed_x = right_x if dpos == 'left' else left_x
        canvas.paste(master_img_flipped, (fixed_x, y_pos), master_img_flipped)
        # Sliding panel (slightly overlapping in the center)
        slide_offset = 50 if dpos == 'left' else -50
        slide_x = x_pos + slide_offset
        canvas.paste(master_img, (slide_x, y_pos), master_img)
        
    elif dtype == 'folding':
        # Two narrower panels
        fold_w = target_w // 2
        folded_panel1 = master_img.resize((fold_w, target_h), Image.Resampling.LANCZOS)
        folded_panel2 = master_img_flipped.resize((fold_w, target_h), Image.Resampling.LANCZOS)
        
        # Position them side by side
        canvas.paste(folded_panel1, (x_pos, y_pos), folded_panel1)
        canvas.paste(folded_panel2, (x_pos + fold_w, y_pos), folded_panel2)
        
    elif dtype == 'swing':
        # hinged panel
        panel = master_img if hpos == 'left' else master_img_flipped
        canvas.paste(panel, (x_pos, y_pos), panel)
        
    canvas.save(path)
    print(f"Saved {path}")

# Generate everything
for cabin in cabins:
    compose_overlay(cabin, "stationary", "left")
    for pos in positions:
        compose_overlay(cabin, "sliding", pos)
        compose_overlay(cabin, "folding", pos)
        for hpos in positions:
            compose_overlay(cabin, "swing", pos, hpos)

print("All realistic overlays generated.")
