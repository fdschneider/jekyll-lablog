---
layout: page
title: About
menu: true

---

This is a template for the static site generator [Jekyll](http://jekyllrb.com/). Starting from [Jekyll's default theme by jglovier](https://github.com/jglovier/jekyll-new) I added functionality that targets at the use as a research log or notebook.
You can view the [code and documentation on GitHub](https://github.com/fdschneider/jekyll-lablog).

### getting started

1. clone it via git

        git clone git@github.com:fdschneider/jekyll-lablog.git

2. Install [Jekyll](http://jekyllrb.com/) and run

        jekyll serve /jekyll-lablog

3. Open your browser and navigate to `localhost:4000`.


### Features:

- **Todo Lists** using the GitHub syntax `- [ ]`.
- **Tags** allow you to link posts of a certain topic, project or field of interest. Buttons for the **next and previous post** and automatic linking to **related posts** based on common tags facilitates browsing through posts.
- **Post Archive** is a chronological list of all posts, which is perfect for the use as a lab logbook.  
- **Multi-authoring** for entire research groups due to an `author` tag in the front-matter
- **log your geolocation** with the `place` parameter in the yaml front matter
- **math equations** using [mathjax.org]() (renders $ \LaTeX $ syntax).
- **smart Menu** that compiles your tasklists, projects and a custom MENU.md file into a responsive navbar
