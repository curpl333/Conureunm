FOLDERS
  MMV/  -> Multimedia Music Video   (mp4, webm, mov, m4v)
  MD/   -> Motion design            (mp4, webm, mov, m4v)
  gd/   -> Graphic design           (jpg, png, gif, webp, avif, svg)

Drop your files in those folders. File names become the titles
(night-shift_v2.mp4 shows as "night shift v2"). Order is A to Z, numbers sorted naturally.

MAKING THEM SHOW UP
  Local preview with a server (e.g. python -m http.server): files show automatically.
  Opening index.html by double-click, or uploading to Netlify by drag and drop:
    run  node generate-manifest.js  (or  python generate-manifest.py)  first.
  Netlify connected to Git: netlify.toml already runs the script on every deploy.

TIP: keep videos H.264 .mp4 and compressed (under ~50 MB each) so they play in every browser.
