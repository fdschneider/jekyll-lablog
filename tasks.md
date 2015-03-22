---
layout: default
title: Tasks
---

<div class="post">

  <header class="post-header">
    <h1 class="post-title">{{ page.title }}</h1>
  </header>

  <article class="post-content">

  {% for page in site.pages %}
  {% if page.layout == "tasks" %}

  <p class = "tasklist_id">{{ page.path }}</p>

    {{ page.content | markdownify | replace: '<ul>', '<ul class = "tasklist">' | replace: '<li>[ ]', '<li class = "box">' | replace: '<li>[x]', '<li class = "box_done">' | replace: '<h1> [ ]', '<h1 class = "milestone">' | replace: '<h2> [ ]', '<h2 class = "milestone">' | replace: '(!)', '<span class = "task_quite_important">!</span>' | replace: '(!!)', '<span class = "task_important">!</span>' | replace: '(!!!)', '<span class = "task_very_important">!</span>'}}

  {% endif %}
  {% endfor %}

  </article>

</div>
