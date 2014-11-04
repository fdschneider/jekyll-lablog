---
title: "Creating a New Post"
date: "2014-10-07"
updated: "2014-10-08"
author: fdschneider
tags:
  - posts
  - soup

---

Just create a new file in the `_posts` directory with a filename of the scheme `YYYY-MM-DD-title.md` (file ending .md is for Markdown but [other filetypes are possible]()) and add a YAML front matter, which is two lines of three dashes each, with some information about your post in between:

    ---
    title: "My newest post"
    tags:
     - soup
     - conferences

    ---

    This is about soup, and conferences.



You do not necessarily need to enter any information. You could leave just an empty line between the dashes. But a title and tags make the log functional.
The date of the post is extracted from the file name, but you can overwrite it by specifying a date in the YAML front matter, e.g. If you require a higher resolution because you do multiple posts a day.

Also, you can add the parameter `updated:` which adds this information to the post. For this page the front matter is:

    ---
    title: "Creating a New Post"
    date: "2014-10-07"
    updated: "2014-10-08"

    ---

Posts are typically written in [Markdown](http://kramdown.gettalong.org/syntax.html) (Jekyll by default is using kramdown as a parser, but that can be configured).
