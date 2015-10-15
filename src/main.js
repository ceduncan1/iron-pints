(function () {

//Function for the click events to show and hide the main story, content, etc ---------------------

$('.storyTab').on('click', function() {
  $('.ourStory').removeClass('hidden');
  $('.menu').addClass('hidden');
  $('.reservations').addClass('hidden');

  $('.storyTab').addClass('borderFix');
  $('.menuTab').removeClass('borderFix');
  $('.resTab').removeClass('borderFix');
});

$('.menuTab').on('click', function() {
  $('.menu').removeClass('hidden');
  $('.ourStory').addClass('hidden');
  $('.reservations').addClass('hidden');
  
  $('.menuTab').addClass('borderFix');
  $('.resTab').removeClass('borderFix');
  $('.storyTab').removeClass('borderFix');
});

$('.resTab').on('click', function() {
  $('.reservations').removeClass('hidden');
  $('.ourStory').addClass('hidden');
  $('.menu').addClass('hidden');
  
  $('.resTab').addClass('borderFix');
  $('.storyTab').removeClass('borderFix');
  $('.menuTab').removeClass('borderFix');

});


//Function for the Current News Below ------------------------------------------------


  let url = 'https://json-data.herokuapp.com/restaurant/news/1';

  //Fetch data and do something with it
  let newsPromise = $.getJSON(url);
  newsPromise.then( function (response) {
    doNews(response);
  });

  // Templates
  let newsTemplate = function (obj) {

    let nTemplate = `
    <h2>Latest News</h2>
    <hr size1>
    <div>
      <p class='title'>${ obj.title }</p>
      <p class='date'>${ obj.date_published }</p>
    <p>${ obj.post }</p>
    </div>`;
    return nTemplate;
  
  };


  let doNews = function(newsItem) {
    // console.log(arr);
    $('.latestNews').append(newsTemplate(newsItem));
  };


//Function for the Specials Tile -----------------------------------------------------


let menuUrl = 'https://json-data.herokuapp.com/restaurant/menu/1';

let menuPromise = $.getJSON(menuUrl);
  menuPromise.then( function (response) {
    doSpecial(response);
  });
  menuPromise.then( function (response) {
    doMenu(response);
  });



// not able to console.log(sTemplate) or (todaysSpecial()) ?
  let todaysSpecial = function (obj) {
    let sTemplate = `
    <p>Todays Special</p>
    <img src="">
    <p>${ obj.item }</p>
    <p>${ obj.description }</p>
    <p>${ obj.price }</p>`;
    return sTemplate;
  };

  let doSpecial = function(specials) {
    $('.special').append(todaysSpecial(specials.entrees[0]));
  };
 

  let menuTemplateApps = function (obj) {
    let retA = '';
    _.each(obj.appetizers, function(foodObj){
      retA += `
        <div class='wholeItem'>
          <div class='mItemTop'>
            <span class='itemTitle'>${ foodObj.item }</span>
            <span class='itemPrice'>${ foodObj.price }</span>
          </div>
          <div class='mItemBottom'>
            <span class='itemDesc'>${ foodObj.description }</span>
            <span class='icons'>
              <div class='allergy'></div>
              <div class='fav'></div>
              <div class='spicy'></div>
              <div class='veg'></div>
            </span>
          </div>
        </div>`;
    });
    return retA;
  };

    let menuTemplateEntr = function (obj) {
    let retE = '';
    _.each(obj.entrees, function(foodObj){
      retE += `
        <div class='wholeItem'>
          <div class='mItemTop'>
            <span class='itemTitle'>${ foodObj.item }</span>
            <span class='itemPrice'>${ foodObj.price }</span>
          </div>
          <div class='mItemBottom'>
            <span class='itemDesc'>${ foodObj.description }</span>
            <span class='icons'>
              <div class='allergy'></div>
              <div class='fav'></div>
              <div class='spicy'></div>
              <div class='veg'></div>
            </span>
          </div>
        </div>`;
    });
    return retE;
  };


<<<<<<< HEAD
  let doMenu = function(obj) {
    $('.menu').append(menuTemplate(obj));
=======
    let menuTemplateSide = function (obj) {
    let retS = '';
    _.each(obj.sides, function(foodObj){
      retS += `
        <div class='wholeItem'>
          <div class='mItemTop'>
            <span class='itemTitle'>${ foodObj.item }</span>
            <span class='itemPrice'>${ foodObj.price }</span>
          </div>
          <div class='mItemBottom'>
            <span class='itemDesc'>${ foodObj.description }</span>
            <span class='icons'>
              <div class='allergy'></div>
              <div class='fav'></div>
              <div class='spicy'></div>
              <div class='veg'></div>
            </span>
          </div>
        </div>`;
    });
    return retS;
>>>>>>> 1c822c3326b9e9cfaade4ca60f0e59aa8ab61dee
  };



  let doMenu = function(objOfArrays) {
    $('.appContent').append(menuTemplateApps(objOfArrays));
    $('.entrContent').append(menuTemplateEntr(objOfArrays));
    $('.sideContent').append(menuTemplateSide(objOfArrays));
  };



<<<<<<< HEAD

=======
}());
>>>>>>> 1c822c3326b9e9cfaade4ca60f0e59aa8ab61dee
