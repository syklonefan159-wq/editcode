from PIL import Image
import os

# Path to the image
image_path = '/Users/ankitasingh/Downloads/syklone-breeze-hub-main/src/assets/syklone-logo-icon-transparent.png'

# Open the image
img = Image.open(image_path)

# Convert to RGBA if not already
if img.mode != 'RGBA':
    img = img.convert('RGBA')

# Get the data
data = img.getdata()

# Create a new list to store the modified pixels
new_data = []

# Get the background color (assuming top-left corner is background)
bg_color = data[0]

# Tolerance for color matching
tolerance = 30

for item in data:
    # Check if color is similar to background color
    if (abs(item[0] - bg_color[0]) < tolerance and 
        abs(item[1] - bg_color[1]) < tolerance and 
        abs(item[2] - bg_color[2]) < tolerance):
        # Make it transparent
        new_data.append((255, 255, 255, 0))
    else:
        # Keep the original pixel
        new_data.append(item)

# Put the data back
img.putdata(new_data)

# Save the image
img.save(image_path)

print(f"✓ Background removed from {image_path}")
print(f"✓ Image now has transparent background")
