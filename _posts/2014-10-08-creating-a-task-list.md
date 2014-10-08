---
title: "Creating a Task list"
date: "2014-10-08"
tags:
 - soup
 - tasks

---

You can create new task list files by setting them up with a frontmatter that specifies

    ---
    layout: tasks
    title : Tasks

    ---

    ## Project 1

    - [ ] fix a bug in `soup.r`
    - [ ] write an [e-mail to Steve]()
    - [ ] write documentation
      - [ ] for `soup.r`
      - [x] soup recipe
    - [x] read [that paper about soup]()


of course you can change the title, but the layout *must* be set as `tasks`. You can write nested task lists, which opens wonderful possibilities for project management. Imagine that tasks can use links to connect to posts on the site, to e-mail addresses, to websites.
