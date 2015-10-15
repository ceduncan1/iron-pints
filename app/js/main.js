'use strict';

(function () {

  var url = 'https://json-data.herokuapp.com/restaurant/news/1';

  //Fetch data and do something with it
  var promise = $.getJSON(url);
  promise.then(function (response) {
    doSomething(response);
  });

  // Templates
  var newsTemplate = function newsTemplate(obj) {
    var template = '\n    <h2>Latest News</h2>\n    <hr size1>\n    <div>\n      <h3 class=\'title\'>' + obj.title + '</h3>\n      <p class=\'date\'>' + obj.date_published + '</p>\n    </div>\n    <p>' + obj.post + '</p>';
    return template;
  };

  var doSomething = function doSomething(newsItem) {
    // console.log(arr);
    $('.latestNews').append(newsTemplate(newsItem));
  };

  var specialUrl = 'https://json-data.herokuapp.com/restaurant/menu/1';

  var specialPromise = $.getJSON(specialUrl);
  specialPromise.then(function (response) {
    doSomethingElse(response);
  });

  var todaysSpecial = function todaysSpecial(obj) {
    var template = '\n    <p>Todays Special</p>\n    <img src="https://www.placecage.com/200/300">\n    <p>' + obj.item + '</p>\n    <p>' + obj.description + '</p>\n    <p>' + obj.price + '</p>';
    return template;
    console.log(template);
  };

  var doSomethingElse = function doSomethingElse(specials) {
    $('.special').append(todaysSpecial(specials.entrees[0]));
  };

  // console.log(doSomething);
})();