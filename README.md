##blog-archiver:

> archive page generator for your blog 

[![npm version](https://badge.fury.io/js/blog-archiver.svg)](https://badge.fury.io/js/blog-archiver)

Inputs:
- title: Archive Title
- directory: Directory for files

Options:
- routing: put your custom route for the href
- extension: File Extension for files in directory. Defaults to .md
- capitalize: Capitalize words in Titles or Leaves as is. Defaults to capitalize.

To use with Express / Connect, use as below.

```
var archiver = require('BlogArchiver');
var html = archiver.generateHTML("blog", __dirname + "/node_modules/blog-archiver/blog");
console.log(html);
```

**Examples:**  
See it work for my own blog [here](brianlin.net/blog)


> Copyright (c) 2016, Brian Lin. (MIT Licensed)