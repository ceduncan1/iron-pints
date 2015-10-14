(function () {

  let url = 'https://json-data.herokuapp.com/restaurant/news/1';

  //Fetch data and do something with it
  let promise = $.getJSON(url);
  promise.then( function (response) {
    doSomething(response);
  });

  // Templates
  let newsTemplate = function (obj) {
    let template = `
    <h3>Latest News</h3>
    <div>
      <div class='title'>${ obj.title }</div>
      <div class='date'>${ obj.date_published }</div>
    </div>
    <p>${ obj.post }</p>`;
    return template;
  
  };

  let doSomething = function(newsItem) {
    // console.log(arr);
    $('.latestNews').append(newsTemplate(newsItem));
  };



let specialUrl = 'https://json-data.herokuapp.com/restaurant/menu/1';

let specialPromise = $.getJSON(specialUrl);
  specialPromise.then( function (response) {
    doSomethingElse(response);
  });


  let todaysSpecial = function (obj) {
    let template = `
    <p>Todays Special</p>
    <img src="https://www.placecage.com/200/300">
    <p>${ obj.item }</p>
    <p>${ obj.description }</p>
    <p>${ obj.price }</p>`;
    return template;
    console.log(template);
  }

  let doSomethingElse = function(specials) {
    $('.special').append(todaysSpecial(specials.entrees[0]));

  };
  


// console.log(doSomething);
}());
