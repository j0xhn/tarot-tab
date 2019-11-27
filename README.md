# Tarot Tab

### What is this?

Get a daily tarot reading, with added delights 🔮✨🔮

### Installation

- Install dependencies with `npm i`
- Build with `npm run build`. This will create a _dist_ folder with static files
- In Chrome navigate to the extensions page [chrome://extensions/](chrome://extensions/)
- Click Load unpacked and choose _dist_ folder
- Open a new tab and you should see the new tab override

### Building

`npm run prebuild` : removes dist folder
`npm run postbuild` : copies manifest.json file into dist
`npm run build` : outputs static files to _dist_ folder (if it doesn't exist); runs prebuild + build + postbuild commands

### Development

`npm run dev` will build, watch and serve the files at [http://localhost:1234](http://localhost:1234)

[ ] Create links in JSON for biddy tarot, same way as url to image so we can link
[ ] Bring over all images so on slow internet, images load instantly... or creating loading state.