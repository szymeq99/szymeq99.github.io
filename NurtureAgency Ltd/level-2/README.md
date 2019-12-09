# Task

Middle level task is based on HTML, CSS (SCSS), Bootstrap 4 boilerplate.

HTML code is located in `index.html`. Bootstrap 4 is partially loaded from the CDN (JS dependencies), and partially compiled out of SCSS package.

All styling related code should be placed within `assets/custom.scss`, this is where Bootstrap SCSS dependencies are located as well. Custom JS should be placed within `assets/custom.js`.

**Requirements**

* The component is expected to be pixel perfect implementation of the [prototype](https://xd.adobe.com/spec/9981f5d9-8668-4cc6-526f-53b0e436b63e-efb0/). 
* The component should be optimized for all sized devices starting at 320px width. 
* The component should be placed in standard sized container.
* Button should have bootstrap tooltip with random description

**Testing**

Testing procedure for this specific task covers latest version of Chrome with following screen widths: 1280px, 768px, 640px, 320px. You can get extra points for pointing out solutions that won't work in IE11 with suggestions of how to resolve them – no actual work is required to fix issues though.

## Workflow

1. Install all required dependencies - `npm install`
2. Start main gulp task - `gulp` - it will compile SCSS automatically after each change