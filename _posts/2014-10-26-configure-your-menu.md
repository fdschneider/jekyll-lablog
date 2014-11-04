---
layout: post
title: "Configure your menu"
date: "2014-10-26"
author: fdschneider
menu: true
tags:
 - log
 - howto
---

The smart menu compiles all the information you want to have at hand. It links to the archive and tags page, to the global tasklist, and to any project pages you might have included in your repository (any page that calls `layout: project` in the yml front matter).

But you are very flexible in extending it. You can add the parameter `menu: true` in the front matter of literally *any* page or post, which will automatically generate a link to that page.

You can include the entire content of a file called `MENU.md` (must have a yml front matter), or of any file that calls `layout: menu` in it's front matter. But you should use this only on files with little content.

The order in which the menu is built is as follows

1. Home page
2. global tasklist `tasks.md`  or `tasks.html`
3. tags `tags.md` or `tags.html`
4. archive `archive.md` or `archive.html`
5. project pages `layout: project`
6. pages with `menu: true`
7. posts with `menu: true`
8. content of `MENU.md`
9. content of all files with `layout: menu`
