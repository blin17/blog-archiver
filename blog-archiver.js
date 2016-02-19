/*!
 * blog archiver - generates an archive page for you blog
 * Copyright (c) 2016, Brian Lin. (MIT Licensed)
 * https://github.com/blin17/blog_archiver
 */

/**
 * Module dependencies.
 */
var fs = require('fs'),
	path = require("path");

 /**
 * Blog Archiver:
 *
 * Generates a archive page for your blog
 * 
 * Inputs:
 *   - title: Archive Title
 *   - directory: directory for files
 * 
 * Options:
 *   - extension: File Extension for files in directory. Defaults to .md
 *   - capitalize: Capitalize words in Titles. Or Leaves as is.
 *
 * To use with Express / Connect, use as below.
 *
 * var blogarchiver = require('BlogArchiver');
 * blogarchiver.generateHTML("blog",__dirname+ "/blog");
 *
 * @param {Object} options
 * @return {Object}
 * @api public
 */

var BlogArchiver = {};

module.exports = BlogArchiver;


BlogArchiver.generateHTML = function(title, directory, options){
	if (!title || !directory){
		throw new Error("Missing needed inputs");
	}
	options = options || {};
	var capitalize = options.capitalize || true;
	var extension = options.extension || ".md";
	var files = fs.readdirSync(directory);

	var html_string = ("<h3>" + title + "</h3>\n");
	html_string += ("<ul class = \"posts\">\n");
	for (var i = 0; i < files.length; i ++){
		fn_split = files[i].split("-");
		if (fn_split.length >= 4){
			var date = fn_split[0] + " " + fn_split[1] + " " + fn_split[2];
			var title = capitalize? capitalizeFirstLetter(fn_split[3]) : fn_split[3];
			for (var t = 4; t <fn_split.length; t++){
				title += " " + (capitalize? capitalizeFirstLetter(fn_split[t]): fn_split[t]);
			} 

			html_string += "<li><span id = \"date\">";
			html_string += date;
			html_string += "</span> - <a href =\"";
			html_string += path.join(directory,(files[i] + extension));
			html_string += ">";
			html_string += title;
			html_string += "</a></li>\n";
		}
		else{
			throw new Error("Invalid File Format for Blog");
		}
	}
	html_string += "</ul>";
	return html_string;
	
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
