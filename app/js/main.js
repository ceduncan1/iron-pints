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
    var nTemplate = '\n    <h2>Latest News</h2>\n    <hr>\n    <div>\n      <h3 class=\'title\'>' + obj.title + '</h3>\n      <h3 class=\'date\'>' + obj.date_published + '</h3>\n    <p class="text">' + obj.post + '</p>\n    </div>';
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
  });
  menuPromise.then(function (response) {
    doMenu(response);
  });

  var todaysSpecial = function todaysSpecial(obj) {
    var sTemplate = '\n    <h2>Todays Special</h2>\n    <hr>\n    <img src="">\n    <h3>' + obj.item + '</h3>\n    <p>' + obj.description + '</p>\n    <p>' + obj.price + '</p>';
    return sTemplate;
  };

  var doSpecial = function doSpecial(specials) {
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

  //foodphotos ----------------------------------------------------------------

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

  //Menu Templates -------------------------------------------------------------

  var menuTemplateApps = function menuTemplateApps(obj) {
    var retA = '';
    _.each(obj.appetizers, function (foodObj) {
      retA += '\n        <div class=\'wholeItem\'>\n          <div class=\'mItemTop\'>\n            <span class=\'itemTitle\'>' + (foodObj.item + ' ....................................................................................................') + '</span>\n            <span class=\'itemPrice\'>' + foodObj.price + '</span>\n          </div>\n          <div class=\'mItemBottom\'>\n            <span class=\'itemDesc\'>' + foodObj.description + '</span>\n            <span class=\'icons\'>\n              <div class=\'allergy\'></div>\n              <div class=\'fav\'></div>\n              <div class=\'spicy\'></div>\n              <div class=\'veg\'></div>\n            </span>\n          </div>\n          <div class="icons">\n            <i class="fa fa-exclamation-circle"></i>\n            <i class="fa fa-star"></i>\n            <i class="fa fa-fire"></i>\n            <i class="fa fa-angle-down"></i>  \n          </div>\n        </div>';
    });
    return retA;
  };

  var menuTemplateEntr = function menuTemplateEntr(obj) {
    var retE = '';
    _.each(obj.entrees, function (foodObj) {
      retE += '\n        <div class=\'wholeItem\'>\n          <div class=\'mItemTop\'>\n            <span class=\'itemTitle\'>' + (foodObj.item + ' ...........................................................................') + '</span>\n            <span class=\'itemPrice\'>' + foodObj.price + '</span>\n          </div>\n          <div class=\'mItemBottom\'>\n            <span class=\'itemDesc\'>' + foodObj.description + '</span>\n            <span class=\'icons\'>\n              <div class=\'allergy\'></div>\n              <div class=\'fav\'></div>\n              <div class=\'spicy\'></div>\n              <div class=\'veg\'></div>\n            </span>\n          </div>\n          <div class="icons">\n            <i class="fa fa-exclamation-circle"></i>\n            <i class="fa fa-star"></i>\n            <i class="fa fa-fire"></i>\n            <i class="fa fa-angle-down"></i>  \n          </div>\n        </div>';
    });
    return retE;
  };

  var menuTemplateSide = function menuTemplateSide(obj) {
    var retS = '';
    _.each(obj.sides, function (foodObj) {
      retS += '\n        <div class=\'wholeItem\'>\n          <div class=\'mItemTop\'>\n            <span class=\'itemTitle\'>' + (foodObj.item + ' .................................................................................') + '</span>\n            <span class=\'itemPrice\'>' + foodObj.price + '</span>\n          </div>\n          <div class=\'mItemBottom\'>\n            <span class=\'itemDesc\'>' + foodObj.description + '</span>\n            <span class=\'icons\'>\n              <div class=\'allergy\'></div>\n              <div class=\'fav\'></div>\n              <div class=\'spicy\'></div>\n              <div class=\'veg\'></div>\n            </span>\n          </div>\n          <div class="icons">\n            <i class="fa fa-exclamation-circle"></i>\n            <i class="fa fa-star"></i>\n            <i class="fa fa-fire"></i>\n            <i class="fa fa-angle-down"></i>  \n          </div>\n        </div>';
    });
    return retS;
  };

  var doMenu = function doMenu(objOfArrays) {
    $('.appContent').append(menuTemplateApps(objOfArrays));
    $('.entrContent').append(menuTemplateEntr(objOfArrays));
    $('.sideContent').append(menuTemplateSide(objOfArrays));
  };
})();