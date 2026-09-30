from pathlib import Path
from PIL import Image, ImageOps

SOURCE_DIR = Path("src/assets/ironcore")
OUTPUT_DIR = SOURCE_DIR / "optimized"

MAX_WIDTH = 1600
QUALITY = 78

OUTPUT_DIR.mkdir(exist_ok=True)

supported = {".jpg", ".jpeg", ".png"}

for image_path in SOURCE_DIR.iterdir():
    if image_path.suffix.lower() not in supported:
        continue

    try:
        with Image.open(image_path) as img:
            img = ImageOps.exif_transpose(img)

            if img.width > MAX_WIDTH:
                new_height = int(
                    img.height * (MAX_WIDTH / img.width)
                )

                img = img.resize(
                    (MAX_WIDTH, new_height),
                    Image.Resampling.LANCZOS
                )

            if img.mode not in ("RGB", "RGBA"):
                img = img.convert("RGB")

            output_path = OUTPUT_DIR / (
                image_path.stem + ".webp"
            )

            img.save(
                output_path,
                "WEBP",
                quality=QUALITY,
                method=6
            )

            original_mb = image_path.stat().st_size / (1024 * 1024)
            optimized_mb = output_path.stat().st_size / (1024 * 1024)

            print(
                f"{image_path.name} -> "
                f"{output_path.name} | "
                f"{original_mb:.2f} MB -> "
                f"{optimized_mb:.2f} MB"
            )

    except Exception as error:
        print(f"ERROR: {image_path.name}: {error}")

print("\nOptimization complete.")