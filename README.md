# H.V. Research Journal — GitHub Pages

A static multi-page technical blog inspired by editorial personal research blogs. Built with HTML, CSS, and vanilla JavaScript; no build tools required.

## Customize before publishing
Search/replace:
- `H.V.` / `H.V.`: display name or initials
- `TVietHung305`: GitHub username (already set to the account supplied in the conversation)
- `YOUR_EMAIL@example.com`: email address
- `November 2026`: dates and sample post content
- Social links, About, Achievements, and post text

The three included posts are editable starter examples, not claims about completed research.

## Publish at https://tvietHung305.github.io
The repository for a user site must be named exactly `TVietHung305.github.io` (case-insensitive in URL). If your existing repository is `hvt.github.io`, rename it to `TVietHung305.github.io` in Settings → General → Repository name.

1. Upload the contents of this folder to the repository root (not the ZIP itself).
2. Confirm `index.html` is at the root.
3. Open Settings → Pages.
4. Choose **Deploy from a branch**, branch `main`, folder `/(root)`, then Save.
5. Wait for the Pages deployment to finish in the Actions tab.

If you prefer to keep the repository name `hvt.github.io`, the project URL is `https://TVietHung305.github.io/hvt.github.io/` instead; update feed.xml links accordingly.

## Add a post
1. Duplicate one of the HTML files in `posts/`.
2. Change its title, date, tags, and article body.
3. Add a new row linking to it in `index.html` and `posts.html`.
4. Commit and push to `main`.

All paths are relative, so this site also works as a project site under `/hvt.github.io/`.
