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
    var template = '\n    <p>Latest News</p>\n    <div>\n      <p class=\'title\'>' + obj.title + '</p>\n      <p class=\'date\'>' + obj.date_published + '</p>\n    </div>\n    <p>' + obj.post + '</p>';
    return template;
    console.log(newsTemplate);
  };

  var doSomething = function doSomething(newsItem) {
    // console.log(arr);
    console.log(newsTemplate);
    $('.latestNews').append(newsTemplate(newsItem));
  };

  // console.log(doSomething);
})();