// The main file is the top file which will bundle everything else and push to app.js

var $ = require('jquery');
import Person from './modules/Person';  //es6 syntax

var john = new Person("John", "Brown");
john.greet();

var jane = new Person("Jane", "Blue");
jane.greet();