'use strict';

(function () {

  //Function for the Current News Below ------------------------------------------------

  var url = 'https://json-data.herokuapp.com/restaurant/news/1';

  //Fetch data and do something with it
  var promise = $.getJSON(url);
  promise.then(function (response) {
    doSomething(response);
  });

  // Templates
  var newsTemplate = function newsTemplate(obj) {
    var template = '\n    <h2>Latest News</h2>\n    <hr size1>\n    <div>\n      <h3 class=\'title\'>' + obj.title + '</h3>\n      <p class=\'date\'>' + obj.date_published + '</p>\n    <p>' + obj.post + '</p>\n    </div>';
    return template;
  };

  var doSomething = function doSomething(newsItem) {
    // console.log(arr);
    $('.latestNews').append(newsTemplate(newsItem));
  };

  //Function for the Specials Tile -----------------------------------------------------

  var specialUrl = 'https://json-data.herokuapp.com/restaurant/menu/1';

  var specialPromise = $.getJSON(specialUrl);
  specialPromise.then(function (response) {
    doSomethingElse(response);
  });

  var todaysSpecial = function todaysSpecial(obj) {
    var template = '\n    <p>Todays Special</p>\n    <img src="">\n    <p>' + obj.item + '</p>\n    <p>' + obj.description + '</p>\n    <p>' + obj.price + '</p>';
    return template;
    console.log(template);
  };

  var doSomethingElse = function doSomethingElse(specials) {
    $('.special').append(todaysSpecial(specials.entrees[0]));
  };

  //Function for the click events to show and hide the main story, content, etc ---------------------

  $('.storyTab').on('click', function () {
    $('.ourStory').removeClass('hidden');
    $('.menu').addClass('hidden');
    $('.reservations').addClass('hidden');

    $('.storyTab').addClass('borderFix');
    $('.menuTab').removeClass('borderFix');
    $('.resTab').removeClass('borderFix');
  });

  $('.menuTab').on('click', function () {
    $('.menu').removeClass('hidden');
    $('.ourStory').addClass('hidden');
    $('.reservations').addClass('hidden');

    $('.menuTab').addClass('borderFix');
    $('.resTab').removeClass('borderFix');
    $('.storyTab').removeClass('borderFix');
  });

  $('.resTab').on('click', function () {
    $('.reservations').removeClass('hidden');
    $('.ourStory').addClass('hidden');
    $('.menu').addClass('hidden');

    $('.resTab').addClass('borderFix');
    $('.storyTab').removeClass('borderFix');
    $('.menuTab').removeClass('borderFix');
  });

  //foodphotos

  $('document').ready(function () {

    var foodUrl = 'http://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=cats&jsoncallback=?';

    $.getJSON(foodUrl, {
      tags: ' bones restaurant',
      tagmode: 'all',
      format: 'json'
    }, function (data) {
      console.log(data);
      $.each(data.items, function (i, item) {
        $('<img/>').attr("src", item.media.m).appendTo('.foodPhotos');
        if (i === 4) return false;
      });
    });
  });
})();