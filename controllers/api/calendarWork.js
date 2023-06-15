const router = require("express").Router();

// JS Script

const VanillaCalendar = require("@uvarov.frontend/vanilla-calendar");

// Basic styles

require("@uvarov.frontend/vanilla-calendar/build/vanilla-calendar.min.css");

// Additional styles

require("@uvarov.frontend/vanilla-calendar/build/themes/light.min.css");

require("@uvarov.frontend/vanilla-calendar/build/themes/dark.min.css");

const calendar = new VanillaCalendar(element, params);
calendar.init();
