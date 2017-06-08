// required packages
var express = require(‘express’);
var fs = require(‘fs’);
var mongoose = require(‘mongoose’);
var Schema = mongoose.Schema;
var multer = require('multer');

if (!process.env.MONGODB_URI) {
    mongoose.connect("mongodb://localhost/PP")
  }
  else{
    mongoose.connect(process.env.MONGODB_URI)
  }
