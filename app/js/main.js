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
    $('.latestNews').append(newsTemplate(newsItem));
  };

  //Function for the Specials Tile -----------------------------------------------------

  var menuUrl = 'https://json-data.herokuapp.com/restaurant/menu/1';

  var specialPromise = $.getJSON(menuUrl);
  specialPromise.then(function (response) {
    doSpecial(response);
<<<<<<< HEAD
  });
  menuPromise.then(function (response) {
    doMenu(response);
=======
>>>>>>> master
  });

  // not able to console.log(sTemplate) or (todaysSpecial()) ?
  var todaysSpecial = function todaysSpecial(obj) {
    var sTemplate = '\n    <p>Todays Special</p>\n    <img src="">\n    <p>' + obj.item + '</p>\n    <p>' + obj.description + '</p>\n    <p>' + obj.price + '</p>';
    return sTemplate;
  };

  var doSpecial = function doSpecial(specials) {
    $('.special').append(todaysSpecial(specials.entrees[0]));
  };

<<<<<<< HEAD
  var menuTemplateApps = function menuTemplateApps(obj) {
    var retA = '';
    _.each(obj.appetizers, function (foodObj) {
      retA += '\n        <div class=\'wholeItem\'>\n          <div class=\'mItemTop\'>\n            <span class=\'itemTitle\'>' + foodObj.item + '</span>\n            <span class=\'itemPrice\'>' + foodObj.price + '</span>\n          </div>\n          <div class=\'mItemBottom\'>\n            <span class=\'itemDesc\'>' + foodObj.description + '</span>\n            <span class=\'icons\'>\n              <div class=\'allergy\'></div>\n              <div class=\'fav\'></div>\n              <div class=\'spicy\'></div>\n              <div class=\'veg\'></div>\n            </span>\n          </div>\n        </div>';
    });
    // console.log(appTemplate);
    // return appTemplate;
    return retA;
  };

  var menuTemplateEntr = function menuTemplateEntr(obj) {
    var retE = '';
    _.each(obj.entrees, function (foodObj) {
      retE += '\n        <div class=\'wholeItem\'>\n          <div class=\'mItemTop\'>\n            <span class=\'itemTitle\'>' + foodObj.item + '</span>\n            <span class=\'itemPrice\'>' + foodObj.price + '</span>\n          </div>\n          <div class=\'mItemBottom\'>\n            <span class=\'itemDesc\'>' + foodObj.description + '</span>\n            <span class=\'icons\'>\n              <div class=\'allergy\'></div>\n              <div class=\'fav\'></div>\n              <div class=\'spicy\'></div>\n              <div class=\'veg\'></div>\n            </span>\n          </div>\n        </div>';
    });
    // console.log(appTemplate);
    // return appTemplate;
    return retE;
  };

  var menuTemplateSide = function menuTemplateSide(obj) {
    var retS = '';
    _.each(obj.sides, function (foodObj) {
      retS += '\n        <div class=\'wholeItem\'>\n          <div class=\'mItemTop\'>\n            <span class=\'itemTitle\'>' + foodObj.item + '</span>\n            <span class=\'itemPrice\'>' + foodObj.price + '</span>\n          </div>\n          <div class=\'mItemBottom\'>\n            <span class=\'itemDesc\'>' + foodObj.description + '</span>\n            <span class=\'icons\'>\n              <div class=\'allergy\'></div>\n              <div class=\'fav\'></div>\n              <div class=\'spicy\'></div>\n              <div class=\'veg\'></div>\n            </span>\n          </div>\n        </div>';
    });
    // console.log(appTemplate);
    // return appTemplate;
    return retS;
  };

  var doMenu = function doMenu(objOfArrays) {
    $('.appContent').append(menuTemplateApps(objOfArrays));
    $('.entrContent').append(menuTemplateEntr(objOfArrays));
    $('.sideContent').append(menuTemplateSide(objOfArrays));

    // console.log(objOfArrays);
=======
  //---------------------------------------------------------------/

  var menuPromise = $.getJSON(menuUrl);
  menuPromise.then(function (response) {
    doMenu(response);
  });

  var theMenu = function theMenu(obj) {
    _.each(obj, function (moreObjs) {
      _.each(moreObjs, function (x) {
        console.log(x.items);
      });
    });
    var mTemplate = '\n    <p>' + obj.item + '</p>';
    return mTemplate;
  };

  var doMenu = function doMenu(menuItems) {
    $('.menu').append(theMenu(menuItems.entrees));
>>>>>>> master
  };
})();

// console.log(buuhhh);
// return buuhhh;
// console.log(foodObjs);
// return foodObjs;

// let mTemplate = `
//   <div class='wholeItem'>
//     <h3>${ foodTypes }</h3>
//     <div class='mItemTop'>
//       <span class='itemTitle'>${ foodTypes.item }</span>
//       <span class='itemPrice'>${ foodTypes.price }</span>
//     </div>
//     <div class='mItemBottom'>
//       <span class='itemDesc'>${ foodTypes.description }</span>
//       <span class='icons'>
//         <div class='allergy'></div>
//         <div class='fav'></div>
//         <div class='spicy'></div>
//         <div class='veg'></div>
//       </span>
//     </div>
//   </div>`;
// return mTemplate;
// console.log(mTemplate);