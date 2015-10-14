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
    var template = '\n    <h3>Latest News</h3>\n    <div>\n      <div class=\'title\'>' + obj.title + '</div>\n      <div class=\'date\'>' + obj.date_published + '</div>\n    </div>\n    <p>' + obj.post + '</p>';
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