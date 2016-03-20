// weback build ~= gulp + browserify

var $ = require('jquery');

document.addEventListener('DOMContentLoaded', function () {
    console.log($);
});

$(function () {
    $('<div>').html('Hello World from bundle.js ... ').appendTo(document.body);
    $('<section>').html('Hello world from the section element - updates to the bundle file ..').appendTo(document.body);
});
