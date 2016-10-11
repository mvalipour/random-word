#!/usr/bin/env node
'use strict';
var meow = require('meow');
var randomWord = require('./');

var cli = meow([
	'Example',
	'  $ random-word-fa <input>',
	'  آگین'
]);

var length = +cli.input[0];

console.log(randomWord(length));
