---
author: "John Doe"
date: 2025-01-20
type: "blog"
title: "How to integrate cactus comments in a hugo website"
description: "Exploring emerging trends and technologies shaping the web development landscape in 2025."
categories: ["Web Development"]
tags: ["web development", "trends", "technology", "future"]
draft: false
featured: true
---
To add separate Cactus comments for each blog post in Hugo, you'll need to follow these steps:

**Prerequisites:**

* Make sure you have Hugo installed on your machine.
* You should have a basic understanding of how Hugo works, including themes, layouts, and front matter.
* You'll need to have a Cactus Comments account and have registered your site.

**Steps:**

1. **Install Cactus Comments:** If you haven't already, follow the instructions on the Cactus Comments website to set up your account and register your site. This will involve adding a script and stylesheet to your Hugo project.

2. **Create a Shortcode:** Create a new file in your `layouts/shortcodes` directory called `chat.html`. Add the following code to this file:

    ```html
    <script type="text/javascript" src="https://latest.cactus.chat/cactus.js"></script>
    <link rel="stylesheet" href="https://latest.cactus.chat/style.css" type="text/css">
    <div id="comment-section"></div>
    <script>
      initComments({
        node: document.getElementById("comment-section"),
        site: "{{ .Site.Params.cactusSite }}", // Replace with your Cactus site ID
        path: "{{ .RelPermalink }}", // This will make each post have a unique path
      });
    </script>
    ```

    * Replace `{{ .Site.Params.cactusSite }}` with your actual Cactus site ID.
    * The `path: "{{ .RelPermalink }}"` part is crucial. It ensures that each post has a unique path, which is how Cactus Comments distinguishes between different comment sections.

3. **Add the Shortcode to Your Posts:** In your blog post templates (usually in `layouts/_default/single.html` or a similar file), add the following shortcode where you want the comments to appear:

    ```html
    {{< chat >}}
    ```

4. **Configure Your Site:** In your `config.toml` file, add your Cactus site ID to the `params` section:

    ```toml
    [params]
      cactusSite = "your_cactus_site_id"
    ```

5. **Test Your Setup:** Build your Hugo site and check the comments section on your blog posts. You should now have separate comment sections for each post.

**Explanation:**

* The shortcode `chat.html` includes the necessary JavaScript and CSS for Cactus Comments.
* The `initComments` function initializes the comment section.
* The `path` option in `initComments` is set to `{{ .RelPermalink }}`, which generates a unique path for each post based on its URL. This is what allows Cactus Comments to create separate comment sections.

**Additional Tips:**

* You can customize the appearance of the comments section by modifying the CSS provided by Cactus Comments.
* Refer to the Cactus Comments documentation for more advanced configuration options.
* If you have any issues, check the Cactus Comments support forums or community for assistance.

By following these steps, you can easily add separate Cactus comments for each of your blog posts in Hugo, enhancing the interactivity and engagement of your website.
