# Run:  python generate-manifest.py   (same job as generate-manifest.js, no Node needed)
import os, re, json
here = os.path.dirname(os.path.abspath(__file__))
media = re.compile(r'\.(mp4|webm|mov|m4v|ogv|jpe?g|png|gif|webp|avif|svg)$', re.I)
out = {}
for f in ['MMV', 'MD', 'gd']:
    d = os.path.join(here, f)
    out[f] = sorted(n for n in os.listdir(d) if media.search(n)) if os.path.isdir(d) else []
with open(os.path.join(here, 'manifest.js'), 'w') as fh:
    fh.write('window.PORTFOLIO_MEDIA=' + json.dumps(out, indent=1) + ';\n')
print('manifest.js updated:', {k: len(v) for k, v in out.items()})
