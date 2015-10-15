'use strict';

(function () {

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

  //Function for the Current News Below ------------------------------------------------

  var url = 'https://json-data.herokuapp.com/restaurant/news/1';

  //Fetch data and do something with it
  var newsPromise = $.getJSON(url);
  newsPromise.then(function (response) {
    doNews(response);
  });

  // Templates
  var newsTemplate = function newsTemplate(obj) {
    var nTemplate = '\n    <h2>Latest News</h2>\n    <hr size1>\n    <div>\n      <h3 class=\'title\'>' + obj.title + '</h3>\n      <p class=\'date\'>' + obj.date_published + '</p>\n    <p>' + obj.post + '</p>\n    </div>';
    return nTemplate;
  };

  var doNews = function doNews(newsItem) {
    // console.log(arr);
    $('.latestNews').append(newsTemplate(newsItem));
  };

  //Function for the Specials Tile -----------------------------------------------------

  var menuUrl = 'https://json-data.herokuapp.com/restaurant/menu/1';

  var menuPromise = $.getJSON(menuUrl);
  menuPromise.then(function (response) {
    doSpecial(response);
    doMenu(response);
  });

  var todaysSpecial = function todaysSpecial(obj) {
    var sTemplate = '\n    <p>Todays Special</p>\n    <img src="">\n    <p>' + obj.item + '</p>\n    <p>' + obj.description + '</p>\n    <p>' + obj.price + '</p>';
    return sTemplate;
    console.log(sTemplate);
  };

  var doSpecial = function doSpecial(specials) {
    $('.special').append(todaysSpecial(specials.entrees[0]));
  };

  var menuTemplate = function menuTemplate(arr) {
    // console.log(arr);
    _.each(arr, function (item) {
      var mTemplate = '\n        <div class=\'wholeItem\'\n          <h3>' + item + '</h3>\n          <div class=\'mItemTop\'>\n            <span class=\'itemTitle\'>' + item.item + '</span>\n            <span class=\'itemPrice\'>' + item.price + '</span>\n          </div>\n          <div class=\'mItemBottom\'>\n            <span class=\'itemDesc\'>' + item.description + '</span>\n            <span class=\'icons\'>\n              <div class=\'allergy\'></div>\n              <div class=\'fav\'></div>\n              <div class=\'spicy\'></div>\n              <div class=\'veg\'></div>\n            </span>\n          </div>\n        </div>';
      return mTemplate;
    });
  };

  var doMenu = function doMenu(obj) {
    $('.menu').append(menuTemplate(obj));
  };
})();