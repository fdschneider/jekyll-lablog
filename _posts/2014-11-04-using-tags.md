---
layout: post
title: "using tags"
date: "2014-11-04"
author: fdschneider
tags:
 - log
 - howto
---

Using tags on your posts is straightforward: Just put them in your new post's yml front-matter:

```
---
layout: post
title: "using tags"
date: "2014-11-04"
tags:
 - log
 - howto

---

```

They will be displayed automatically on the page, in the index of posts and on the archive. Of course they will also show up on the 'tags' page.

It is a feature of liquid, which is used to render these pages, that capitalized tags will be sorted before small-case tags (*i.e.* A, B, C, a, b, c). This can be utilized by giving certain tags priority just by using upper case names.

The section 'related posts', which now automatically shows up at the bottom of each post, provides links to posts that share the same set of tags. (This is buggy, though) 
