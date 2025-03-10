# veterina-smichov.cz

## Start building your website

Create and edit your site **right from this readme file!**.

🪐 Or edit your entire site in a web-based editor by [clicking here](https://github.dev/veterina-smichov/veterina-smichov.cz/).

<details>
  <summary><strong>📝 Creating and editing pages</strong></summary>

## Creating and editing pages and content

### Pages

Create your site's main content! Pages can be written in HTML or [Markdown](https://www.markdownguide.org/basic-syntax/)!

* [Edit the homepage](https://github.com/veterina-smichov/veterina-smichov.cz/edit/main/src/content/pages/index.md)
* [Create a new page](https://github.com/veterina-smichov/veterina-smichov.cz/new/main/?filename=/src/content/pages/&value=---%0Atitle%3A%20Enter%20page%20title%20here%0A---)

</details>

<details>
  <summary><strong>🎨 Look and Feel</strong></summary>

## Look and Feel

### Navigation

Your site's navigation is how your users will get around! Edit the site's navigation menu in [JSON format](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)!

* [Edit the navigation](https://github.com/veterina-smichov/veterina-smichov.cz/edit/main/src/data/navigation.json)

### Styles

Colors, spacing, and fonts, oh my! You can edit your branding and styles here using CSS, SCSS, and CSS variables! 

* [Edit your branding](https://github.com/veterina-smichov/veterina-smichov.cz/edit/main/src/assets/styles/_branding.scss)
* [Edit your overall styles](https://github.com/veterina-smichov/veterina-smichov.cz/edit/main/src/assets/styles/styles.scss)

Learning CSS can be daunting but there are a ton of useful resources on the web. Check out [SmolCSS](https://smolcss.dev) to get started!

### JavaScript

**Optional!** Add javascript functionality to your site

* [Add Javascript](https://github.com/veterina-smichov/veterina-smichov.cz/edit/main/src/assets/scripts/main.js)

</details>

<details>
  <summary><strong>🚀 Deploy veterina-smichov.cz</strong></summary>

## Deploy veterina-smichov.cz

Once you set up deployment, any time you commit to your repository's `main` branch, GitHub will build and deploy your site.

<details>
  <summary><strong>Deploy to GitHub Pages</strong></summary>

### Setup:

1. [Enable GitHub Pages](https://github.com/veterina-smichov/veterina-smichov.cz/settings/pages) in your repository settings, choose "GitHub Actions" as the source.
2. [Allow "Read and write permissions" for GitHub Workflows](https://github.com/veterina-smichov/veterina-smichov.cz/settings/actions) in your repository settings for the GitHub Actions workflow to run.

</details>

</details>

---

## Get to Know veterina-smichov.cz

Ready to go deeper? Here's how veterina-smichov.cz is laid out:

```sh
example.com                  # Root of your project
├── config/                  # Eleventy configuration
│   ├── build.js             # JavaScript and CSS build and bundler configuration 
│   ├── collections.js       # Add and configure collections (https://www.11ty.dev/docs/collections/)
│   ├── filters.js           # Add and configure filters (https://www.11ty.dev/docs/filters/)
│   ├── passthroughs.js      # Add and configure passthroughs (https://www.11ty.dev/docs/copy/)
│   ├── plugins.js           # Add and configure plugins (https://www.11ty.dev/docs/plugins/)
│   ├── shortcodes.js        # Add and configure shortcodes (https://www.11ty.dev/docs/shortcodes/)
│   ├── templateLanguages.js # Configure custom template languages (https://www.11ty.dev/docs/languages/custom/)
│   ├── watchtargets.js      # Add and configure watch targets (https://www.11ty.dev/docs/watch-serve/)
│   └── logger.json          # Logger for Eleventy build process
├── src/                     # Source directory
│   ├── assets/              # Site assets
│   │   ├── images/
│   │   ├── scripts/
│   │   ├── styles/
│   │   └── config.json      # Shared attributes for files in the directory
│   ├── assets-static/       # Site assets that are not processedall site content
│   │   ├── admin/           # Decap CMS files folder
│   │   ├── fonts/ 
│   │   └── config.json      # Shared attributes for files in the directory
│   ├── content              # A nice, organized, recommended place for all site content
│   │   ├── articles         # Add "articles" collection items here
│   │   └── pages            # Add "pages" collection items here
│   ├── data                 # Customize site data (https://www.11ty.dev/docs/data/)
│   │   └── navigation.json  # Site navigation configuration
│   ├── includes/            # Partial templates to be used by layouts
    └── layouts/             # Layouts to be used by 11ty
├── .eleventy.js             # Core Eleventy config file
└── README.md
```

## Eleventy Configuration

Eleventy configuration is abstracted from the typical `.eleventy.js` file and moved to `/src/config/` for easy organization and configuration of collections, filters, passthroughs, etc.

## Install project dependencies

```bash
npm i
```

## Run the project locally

```bash
npm run dev
```

## Build for staging

(The same as production except every page is flagged `noindex`)

```bash
npm run staging
```

## Build for production

```bash
npm run production
```
