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
 * blog-archiver:
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
	var routing = options.routing || "/blog";
	var extension = options.extension || "md";
	var capitalize = (options.capitalize === false)? false: true;
	var long = (options.long === false)? false: true;
	var files = fs.readdirSync(directory);
	files.sort(function(a, b) {
		a_split = a.split("-");
		b_split = b.split("-");
		date_diff = ((b_split[0] - a_split[0]) * 10000) 
				+ ((b_split[1] - a_split[1]) * 100)
				+ (b_split[2] - a_split[2]);
		return date_diff;
	});
	var html_string = "";
	if (long){
		html_string = ("<h3>" + title + "</h3>\n");
		html_string += ("<ul class = \"posts\">\n");
	}
	for (var i = 0; i < files.length; i ++){
		fn_split = files[i].split("-");
		var ext = fn_split[fn_split.length-1].split(".")[1];
		if (ext == extension){
			if (fn_split.length >= 4){
				var date = month_conversionENUM[parseInt(fn_split[1])] + " " + fn_split[2] + " " + fn_split[0];
				var filename = fn_split[0] + "-" + fn_split[1] + "-" + fn_split[2];
				var title = "";
				for (var t = 3; t <fn_split.length; t++){
					var title_word = fn_split[t];
					if (t == fn_split.length-1){
						var separate_extension = fn_split[t].split(".");
						title_word = separate_extension[0];
					}
					filename += "-" + title_word;
					title += (capitalize? capitalizeFirstLetter(title_word): title_word) + ((t == fn_split.length-1)? "":" ");
				}
				html_string += "<li><span id = \"date\">";
				html_string += date;
				html_string += "</span> — <a href =\"";
				html_string += path.join(routing,filename);
				html_string += "\">";
				html_string += title;
				html_string += "</a></li>\n";
			}
			else{
				throw new Error("Trying to generate an archive page for the directory:" 
						+ directory + "\nInvalid File Format for the file:"+ files[i]);
			}
		}
	}
	if (long){
		html_string += "</ul>";
	}
	return html_string;
	
};

month_conversionENUM = {
	1: "Jan",
	2: "Feb",
	3: "Mar",
	4: "Apr",
	5: "May",
	6: "Jun",
	7: "Jul",
	8: "Aug",
	9: "Sep",
	10: "Oct",
	11: "Nov",
	12: "Dec"
};

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}
