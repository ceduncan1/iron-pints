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
    <p>Latest News</p>
    <div>
      <p class='title'>${ obj.title }</p>
      <p class='date'>${ obj.date_published }</p>
    <p>${ obj.post }</p>
    </div>`;
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
    <img src="">
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
