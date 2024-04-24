# terminal-hugo-theme

A theme for hugo made using tailwind CSS library and mono font family

# Live Demo

https://nayanseth.com

![Theme Screenshot](https://raw.githubusercontent.com/techbarrack/terminal-hugo-theme/master/images/screenshot.png)

# Setup

1. This theme uses tailwind CSS
2. [Optional] How to Use Tailwind
   	1. By default, the existing `tailwind.css` file will be used in the theme but if you want to play around with tailwind then follow the steps mentioned below
	2. There are two config files for tailwind located in `assets/csss/tailwind` directory
		1. For dev run `npm run dev` -> This generates all the possible CSS classes from tailwind. Some may still be left out
		2. For prod run `npm run prod` -> This generates only the CSS classes from tailwind that you are using in the theme
4. `hugo new site <SITE_NAME>`
5. `cd <SITE_NAME>`
6. `git submodule add git@github.com:techbarrack/terminal-hugo-theme.git themes/terminal`
7. Replace the contents of `<SITE_NAME>/hugo.yaml` with `<SITE_NAME>/themes/terminal/hugo.yaml`
8. In the root directory of the hugo site, create the directory: `mkdir -p layouts/partials/third_party_js`. This directory is to store any sort of third party javascript like google analytics, disqus, etc
10. Run the website `hugo server --buildDrafts --disableFastRender --gc --ignoreCache --noHTTPCache --forceSyncStatic --verbose -w`		

# Modifying the Contents

1. Uncomment the ignoreFiles attribute in `<SITE_NAME>/hugo.yaml`
2. Start adding the files in `<SITE_NAME>/content` by replicating what is present in `<SITE_NAME>/themes/terminal/content`
3. Update the meta content in `head.html`

# Third Party JS

1. Create partials in `<SITE_NAME>/layouts/partials/third_party_js/<FILE>.html`
2. All the files in `third_party_js` folder will get included before `</body>` tag

# Shortcodes

- `{{< svg logo="blah" >}}` -> Use the following code to add svg in markdown files
	1. Add svg as .html file in `layouts/content/svg`
- Raw HTML
```
{{< rawhtml >}}
  <div>This is raw HTML content</div>
{{< /rawhtml >}}
```


# References

Some reference links for additional info on how to do things in Hugo:

- https://gohugo.io/methods/page/
- https://gohugo.io/methods/pages/groupbydate/
- https://gohugo.io/content-management/taxonomies/
- https://gohugo.io/templates/taxonomy-templates/
- https://gohugo.io/templates/taxonomy-templates/#example-list-tags-in-a-single-page-template
- https://gohugo.io/templates/taxonomy-templates/#example-list-tags-in-a-single-page-template
- https://gohugo.io/methods/page/scratch/
- https://gohugo.io/functions/collections/dictionary/
- https://gohugo.io/methods/page/paginate/
- https://discourse.gohugo.io/t/better-term-listing/10261
- https://gohugo.io/templates/partials/
- https://mertbakir.gitlab.io/hugo/pass-arguments-in-partials-hugo/
- [SVG Icons](https://github.com/coreui/coreui-icons)
