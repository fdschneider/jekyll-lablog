---
title: "Set up your own lab notebook"
author: fdschneider
tags:
 - log
 - howto
---

Getting started with your own lab notebook is very easy.

The requirements are:

- [Jekyll](http://jekyllrb.com/)
- a convenient text editor (e.g. Geany, Notepad, Notepad++, Atom)

Additionally, what helps is some basic knowledge of [git](http://git-scm.com/) and having a Dropbox or GitHub account, or access to a webserver for the deployment on the internet.

## Set-up locally

You can download the [zip-file](https://github.com/fdschneider/jekyll-lablog/archive/dev.zip) or clone the [repository from GitHub](https://github.com/fdschneider/jekyll-lablog)

    git clone git@github.com:fdschneider/jekyll-lablog.git

and use `jekyll serve` to run it locally. It will be available in your browser under the URL `localhost:4000`.


## Personalize

You should open the file `_config.yml` and enter some personal variables, such as a site title and description, your name and contact details.


## Put it online

If you want to access the log from anywhere on the internet you might want one of the solutions described in the  [README](https://github.com/fdschneider/jekyll-lablog#deployment). For instance, you can [use your Dropbox account]({{ site.baseurl }}{% post_url 2014-10-10-put-your-labnotebook-online %}) to make it available online. You just need to specify the `url` and `baseurl`, as well as the target directory for generation `destination` in the `_config.yml`.
