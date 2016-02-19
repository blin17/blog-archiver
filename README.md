##Blog Archiver:

	blog archiver - generates an archive page for you blog
	Copyright (c) 2016, Brian Lin. (MIT Licensed)
	https://github.com/blin17/blog_archiver

[![NPM version](https://badge.fury.io/js/marked.png)][badge]
 
Inputs:
- title: Archive Title
- directory: Directory for files

Options:
- extension: File Extension for files in directory. Defaults to .md
- capitalize: Capitalize words in Titles or Leaves as is. Defaults to capitalize.

To use with Express / Connect, use as below.

```
var blogarchiver = require('BlogArchiver');
blogarchiver.generateHTML("blog",__dirname+ "/blog");
```

**Examples:**

See it work for my own blog [here](brianlin.net/blog)