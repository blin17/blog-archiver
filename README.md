##Blog Archiver:

blog archiver - generates an archive page for you blog
Copyright (c) 2016, Brian Lin. (MIT Licensed)
https://github.com/blin17/blog_archiver
 
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

###Examples
see it work here:
brianlin.net/blog