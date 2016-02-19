blog archiver - generates an archive page for you blog
Copyright (c) 2016, Brian Lin. (MIT Licensed)
https://github.com/blin17/blog_archiver


##Blog Archiver:

Generates a archive page for your blog
 
Inputs:
- title: Archive Title
- directory: directory for files

Options:
- extension: File Extension for files in directory. Defaults to .md
- capitalize: Capitalize words in Titles. Or Leaves as is.

To use with Express / Connect, use as below.

```
var blogarchiver = require('BlogArchiver');
blogarchiver.generateHTML("blog",__dirname+ "/blog");

```
