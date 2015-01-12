var home = require("./home");
var events = require("backbone-events-standalone");
var _ = require("lodash");

var stage = require("./stage");

var pubSub = _.extend({}, events);

home(document.querySelector("body"), pubSub);

