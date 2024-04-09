# terminal-hugo-theme

A theme for hugo made using tailwind CSS library and mono font family

# Live Demo

https://nayanseth.com

# Setup

1. This theme uses tailwind CSS
2. There are two config files for tailwind located in `assets/csss/tailwind` directory
		1. For dev run `npm run dev` -> This generates all the possible CSS classes from tailwind. Some may still be left out
		2. For prod run `npm run prod` -> This generates only the CSS classes from tailwind that you are using in the theme
3. `hugo new site <SITE_NAME>`
4. `cd <SITE_NAME>`
5. `git submodule add git@github.com:techbarrack/terminal-hugo-theme.git themes/terminal`
6. Replace the contents of `<SITE_NAME>/hugo.yaml` with `<SITE_NAME>/themes/terminal/hugo.yaml`
7. Run the website `hugo server --buildDrafts --disableFastRender --gc --ignoreCache --noHTTPCache --forceSyncStatic --verbose -w`		

# Modifying the Contents

1. Uncomment the ignoreFiles attribute in `<SITE_NAME>/hugo.yaml`
2. Start adding the files in `<SITE_NAME>/content` by replicating what is present in `<SITE_NAME>/themes/terminal/content`
3. Update the meta content in `head.html`

# Third Party JS

1. Create partials in `<SITE_NAME>/layouts/partials/third_party_js/<FILE>.html`
2. All the files in `third_party_js` folder will get included before `</body>` tag