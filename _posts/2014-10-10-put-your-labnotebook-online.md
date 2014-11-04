---
title: "Put your labnotebook online"
author: fdschneider
tag:
 - log
 - howto

---


In my opinion the perfect solution for a quick and semi-private deployment: Dropbox can host a static site placed in the `/Public` folder. Just keep the log directory anywhere on your PC, but preferably somewhere in a private section of your Dropbox, edit the `_config.yml` and specify

    destination: ../../Public/mylabnotebook

i.e. the relative path from your blog directory to the target directory. Then build your blog.

    jekyll build

Now, wait for the sync to happen and go to your Dropbox account online, navigate to your public directory, and there to the newly created directory `mylabnotebook`. Right-click on the `index.html` file to get the public link. The root of this link (without `/index.html`) will be required for the next step:

Go to your  `_config.yml` file and set

    url: "https://dl.dropboxusercontent.com"
    baseurl: "u/xxxxxx/lablog"

Now build again and navigate in your browser to `https://dl.dropboxusercontent.com/u/xxxxxx/mylabnotebook/index.html`

Save this long, cryptic link as a bookmark or to load at browser start-up. For the future, all you need is to re-run the simple `jekyll build` command each time you updated a file (which also can be done by a simple bash script or a background process that listens to changes; you'll figure that out later)!
