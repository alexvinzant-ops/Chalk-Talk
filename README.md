# Chalk Talk Playbook

A basketball playbook your players can open in any browser, with no account. They can step through animated offense and defense plays, quiz themselves on where to go, and save a play as a GIF.

## What's in this folder

| File | What it is |
| --- | --- |
| `index.html` | The whole app |
| `plays.json` | Your playbook. This is the file you update to publish plays. |
| `manifest.webmanifest`, `icon-*.png` | Let players add the app to their phone's home screen |
| `sw.js` | Keeps the app working when the gym's signal is weak |

## For players

- Open the link your coach shares.
- On a phone, choose **Share → Add to Home Screen** (iPhone) or **⋮ → Add to Home screen** (Android) to keep it like an app.
- Study progress and quiz scores are saved on each player's own device.

## For the coach: adding and changing plays

1. Open the site and choose **Turn on coach tools** at the bottom of the page. This only affects your browser.
2. Draw plays in the **Edit** tab, or bring them in from the **Import** tab:
   - **From a play file:** add a `.json` file another coach sent you, or paste play code.
   - **Trace a diagram:** take a screenshot of a play from a website or PDF and choose it, or paste it with Ctrl+V. It shows under the court so you can drag players on top of it.
   - **Use an AI assistant:** copy the instructions, give them to Claude with the play's description or diagram, and paste the answer back into the box.
3. Your changes are saved on your device only. To publish them, choose **Download plays.json**.
4. Upload the new `plays.json` to the GitHub repository (**Add file → Upload files**, then **Commit changes**). The site updates for everyone within a minute or two.

The page also works on its own: if `plays.json` is missing, it shows five example plays.

## Putting it online with GitHub Pages

1. Create a repository on github.com and upload every file in this folder.
2. In the repository, go to **Settings → Pages**, set **Source** to **Deploy from a branch**, then choose `main` and `/ (root)`.
3. After about a minute your site is at `https://<your-username>.github.io/<repository-name>/`.

A public repository means anyone with the link can see your plays. GitHub Pages from a private repository needs a paid plan, which teachers can get free through GitHub Education.
