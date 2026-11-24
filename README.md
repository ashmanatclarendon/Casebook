# Legal Lab Casebook

A large-print reader of real Australian case studies for VCE Legal Studies Units 3 & 4.
Companion to Legal Lab. Highlighted terms open a definition and the matching Legal Lab lesson.

## Files — all at the TOP level of the repository (no folders)
index.html · app.js · cases.js · sw.js · manifest.json · icon-192.png · icon-512.png · README.md

## Hosting
Use a separate repository (e.g. `legal-casebook`), then Settings → Pages → Deploy from branch → main / (root).

## Adding cases
1. Add a case object to CASES in cases.js (copy an existing one).
2. Mark concepts inline as [[key|text]]. Every key must exist in GLOSSARY.
3. Bump CONTENT_VERSION in cases.js and CACHE in sw.js.
4. Upload cases.js and sw.js.

Write summaries in your own words. Check facts against the listed sources before release.
