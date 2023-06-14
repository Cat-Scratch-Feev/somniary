const router = require("express").Router();

const calendarEl = document.querySelector('#calendar');
new VanillaCalendar(calendarEl);

const calendar = new VanillaCalendar(element, params);
calendar.init();

const calendarInput = document.querySelector('#input');
new VanillaCalendar(calendarInput, {
  input: true,
});

new VanillaCalendar('#calendar', {
    input: true,
  });
  

new VanillaCalendar('#calendar', {
    type: 'default',
  });  

new VanillaCalendar('#calendar', {
    date: {
      today: new Date('2022-01-07'),
    },
  });
  