---
layout: post
title: "Markdown and more"
date: "2014-10-30"
author: fdschneider
tags:
 - log
 - howto

---

The lablog basically is best written in Markdown, although other markup is also parsed by Jekyll (e.g. textile or pure html).

The parser that it uses by default is kramdown with github flavouring, which means that it deviates from the markdown syntax in terms of linebreaks. Linebreaks are usually taken literally, unlike classic Markdown, where you always have to add two spaces or make a double linebreak to achieve an actual linebreak.

Also, you can use fenced codeblocks and footnotes[^1] using the syntax:

```
 and footnotes[^1] using

[^1]: This is a footnote

```


[^1]: This is a footnote
