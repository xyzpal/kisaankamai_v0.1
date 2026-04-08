import os
import re

base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'app'))

# Image mapping rules based on keywords found in the line
# We look for `alt="something"` or `data-alt="something"` around the `picsum` link
images = [
    ('harvester', '/assets/generated/harvester_action.png'),
    ('combin', '/assets/generated/harvester_action.png'),
    ('rotavator', '/assets/generated/rotavator.png'),
    ('till', '/assets/generated/rotavator.png'),
    ('drill', '/assets/generated/seed_drill.png'),
    ('seed', '/assets/generated/seed_drill.png'),
    ('spray', '/assets/generated/sprayer.png'),
    ('handshake', '/assets/generated/farmer_handshake.png'),
    ('yard', '/assets/generated/farm_yard.png'),
    ('dusk', '/assets/generated/farm_yard.png'),
    ('portrait', '/assets/generated/farmer_portrait.png'),
    ('face', '/assets/generated/farmer_portrait.png'),
    ('smiling', '/assets/generated/farmer_portrait.png'),
    ('rajesh', '/assets/generated/farmer_portrait.png'),
    ('sanjay', '/assets/generated/farmer_portrait.png'),
    ('vikas', '/assets/generated/farmer_portrait.png'),
    ('owner', '/assets/generated/farmer_portrait.png'),
    ('entrepreneur', '/assets/generated/modern_farm_tech.png'),
    ('tablet', '/assets/generated/modern_farm_tech.png'),
    ('trailer', '/assets/generated/trolley.png'),
    ('trolley', '/assets/generated/trolley.png'),
    ('tractor', '/assets/generated/hero_tractor.png'),
    ('plough', '/assets/generated/rotavator.png'),
    ('wheat', '/assets/generated/hero_tractor.png'),
    ('field', '/assets/generated/hero_tractor.png')
]
default_image = '/assets/generated/hero_tractor.png'

def replace_picsum_in_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    modified = False
    for i, line in enumerate(lines):
        if 'picsum.photos' in line:
            # try to find keywords in line
            line_lower = line.lower()
            replacement = default_image
            for kw, img in images:
                if kw in line_lower:
                    replacement = img
                    break
            
            # replace src="..." or '...' or `...` containing picsum
            new_line = re.sub(r'https://picsum\.photos[^\'"\s`]*', replacement, line)
            
            if new_line != lines[i]:
                lines[i] = new_line
                modified = True
                
    if modified:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.writelines(lines)
        print(f"Updated images in {os.path.relpath(filepath, base_dir)}")

for root, dirs, files in os.walk(base_dir):
    for file in files:
        if file.endswith('.tsx'):
            replace_picsum_in_file(os.path.join(root, file))

print("Image replacement via AI Context mapping complete!")
