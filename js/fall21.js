var calendarEl = document.getElementById('calendar');
var calendar = new FullCalendar.Calendar(calendarEl, {
  initialView: 'dayGridMonth',
  initialDate: '2021-12-01',
  height: 650,
  contentHeight: 600,
  aspectRatio: 1,
  themeSystem: 'bootstrap',
  headerToolbar: {
    start: 'title',
    center: '',
    end: 'prev,next'
  },
  events: [{
      title: 'Class #1', // a property!
      start: '2021-12-04' // a property!
  }, {
    title: 'Class #2', // a property!
    start: '2021-12-11' // a property!
  }, {
    title: 'Break', // a property!
    start: '2021-12-18' // a property!
  }, {
    title: 'Break', // a property!
    start: '2021-12-25' // a property!
  }, {
    title: 'Break', // a property!
    start: '2022-01-01' // a property!
  }, {
    title: 'Class #3', // a property!
    start: '2022-01-08' // a property!
  }, {
    title: 'Class #4', // a property!
    start: '2022-01-15' // a property!
  }, {
    title: 'Class #5', // a property!
    start: '2022-01-22' // a property!
  }, {
    title: 'Class #6', // a property!
    start: '2022-01-29' // a property!
  }, {
    title: 'Class #7', // a property!
    start: '2022-02-05' // a property!
  }, {
    title: 'Class #8', // a property!
    start: '2022-02-12' // a property!
  }, {
    title: 'Class #9', // a property!
    start: '2022-02-19' // a property!
  }]
});
calendar.render();
