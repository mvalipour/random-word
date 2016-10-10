#!/usr/bin/env node
'use strict';
var meow = require('meow');
var randomWord = require('./');

meow([
	'Example',
	'  $ random-word-fa',
	'  آگین'
]);

console.log(randomWord());
