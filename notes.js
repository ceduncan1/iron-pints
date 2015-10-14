

let url = 'https://json-data.herokuapp.com/restaurant/news/1';

//Fetch data and do something with it
let promise = $.getJSON(url);
promise.then( function (response) {
  doSomething(response);
});

// Templates
let newsTemplate = function (obj) {
  let template `
  <div class="news">
    <h3>Latest News</h3>
    <div>
      <div class="title">${ obj.title }</div>
      <div class="date">${ obj.date_published }</div>
    </div>
    <p>${ obj.post }</p>
  </div>
  return template;
}

let doSomething = function(arr) {
  console.log(arr);
}