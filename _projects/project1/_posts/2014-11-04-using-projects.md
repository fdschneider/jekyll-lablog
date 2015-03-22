---
layout: post
title: "using projects"
date: "2014-11-04"
tags:
 - project01
---

A lablog is most powerful if you can arrange or subgroup your notes into 'projects'. A project deserves it's own overview page, that collects all the notes, tasks and important references.  

The jekyll-lablog template now allows keeping projects in subdirectories within the directory '_projects'. Each project can contain individual pages, tasklists and posts.

```
_projects
|- project1
|   |- _posts
|   |   |- 2014-11-04-using-projects.md
|   |- project01.md
|   |- todo.md
|- todo.md


```


However, for now, it is not the directory structure that assignes containt to be part of a project. I found it most convenient to link content to a project using **tags**. That is, a project basically is initiated by a project file, e.g. `project01.md`, which has a yml header like this:

```
---
layout: project
title: "Create your projects in jekyll-lablog"
category: project01
menu: "a first project"
github:
website:
contact:

---

```

The `menu:` variable will make jekyll-lablog to add a link to the menu for that project.
The variables `github`, `website` and `contact` will autogenerate links to your projects github repository and issues, to it's website and your contact mailadress.

The layout file `project.html` is used for this page which collects all content that has the same tag as specified in the 'category' variable. Thus, all posts, pages or tasklists, that belong to the project need to specify that tag in their header, e.g.

```
---
layout: post
title: "using projects"
date: "2014-11-04"
tags:
 - project01
---

```

I  intend to automatize the assignment of content to projects using the directory structure mentioned above, therefore I recommend sticking to that, even if it is not necessary at present.
