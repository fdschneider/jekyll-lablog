---
title: "Snapshots with greenshot"
date: "2014-10-15"
author: fdschneider
tag:
 - log
 - howto
---

It is quite important to have an easy way to save and embed information from websites, documents, powerpoint slides or pdfs quickly into the lablog.

Fortunately, there is an excellent open source software for direct screenshots: [greenshot](http://getgreenshot.org/de/).
Pushing the `print` button calls the selection tool which allows you to mark a rectangular region. You can chose a preset, where and under which format to save the file.
I recommend to store everything in a sub-directory called '_assets', maybe using date based sub-folders.  

## Embedding the snapshot

This is a bit verbose yet, since Jekyll has trouble with relative links. You can use Markdown image syntax `![alternative text / caption](path/to/image.png)` but you will need to specify an absolute path, which can be achieved by prepending the variable `{{ "{{ site.baseurl " }}}}`:

```markdown
![]({{ "{{ site.baseurl " }}}}/_assets/snapshot_fig1.png)
```


## OCR text recognition

Greenshot also supports text recognition using [Microsoft Office Document Imaging (MODI)](https://support2.microsoft.com/kb/982760), which can be installed as part of Office 2007. Alternatively, it can be installed in a package with the free [SharePoint Designer 2007](http://www.microsoft.com/en-US/download/details.aspx?id=21581) which unfortunately is quite a big tool to download, but the installation wizard lets you customize to install MODI only (de-activate all high-level programs, then select only Microsoft Office Document Imaging inside 'Office Tools' for installation).

So after installing that, if you select an area and click on the option OCR, it will copy any content as raw text to the clipboard and lets you paste it wherever you like. However, text recognition is not perfect, depending on the font and quality of the snapshot.
