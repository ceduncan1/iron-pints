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
    <hr>
    <div>
      <h3 class='title'>${ obj.title }</h3>
      <h3 class='date'>${ obj.date_published }</h3>
    <p class="text">${ obj.post }</p>
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

  let todaysSpecial = function (obj) {
    let sTemplate = `

    <h2>Todays Special</h2>
    <hr>
    <p>Todays Special</p>
    <div id="photo"></div>
    <h3>${ obj.item }</h3>

    <p>${ obj.description }</p>
    <p>${ obj.price }</p>`;
    return sTemplate;
  };

  let doSpecial = function(specials) {
    $('.special').append(todaysSpecial(specials.entrees[0]));
  };
  

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

//foodphotos ----------------------------------------------------------------

    $('document').ready(function(){
      
      let foodUrl = 'http://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=cats&jsoncallback=?';

    
      $.getJSON(foodUrl,
      {
        tags: ' bones restaurant',
        tagmode: 'all',
        format: 'json'
      }, function(data){
        console.log(data);
        $.each(data.items, function(i, item){
          $('<img/>').attr("src", item.media.m).appendTo('.foodPhotos');
          if(i === 4) return false;
        });
    });
  });
 


//Todays special
 $('document').ready(function(){
      
      let foodUrl = 'http://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=cats&jsoncallback=?';
    
      $.getJSON(foodUrl,
      {
        tags: ' pork steak',
        tagmode: 'all',
        format: 'json'
      }, function(data){
        console.log(data);
        $.each(data.items, function(i, item){
          $('<img/>').attr("src", item.media.m).appendTo('#photo');
          if(i === 0) return false;
        });
    });
  });

//Menu Templates -------------------------------------------------------------

  let menuTemplateApps = function (obj) {
    let retA = '';
    _.each(obj.appetizers, function(foodObj){
      retA += `
        <div class='wholeItem'>
          <div class='mItemTop'>
            <span class='itemTitle'>${ foodObj.item }....................................................................................................</span>
            <span class='itemPrice'>${ foodObj.price }</span>
          </div>
          <div class='mItemBottom'>
            <span class='itemDesc'>${ foodObj.description }</span>
            <span class='icons'>`;
      if ( '${ foodObj.allergies }' === 1) {
        retA += `<i class="fa fa-exclamation-circle"></i>`;
      };
      if ( '${ foodObj.favorites }' === 1) {
        retA += `<i class="fa fa-star"></i>`;
      };
      if ( '${ foodObj.spicy }' === 1) {
        retA += `<i class="fa fa-fire"></i>`;
      };
      if ( '${ foodObj.vegan }' === 1) {
        retA += `<i class="fa fa-angle-down"></i>`;
      };
      retA += `
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
            <span class='itemTitle'>${ foodObj.item + ' ...........................................................................'}</span>
            <span class='itemPrice'>${ foodObj.price }</span>
          </div>
          <div class='mItemBottom'>
            <span class='itemDesc'>${ foodObj.description }</span>
            <span class='icons'>
              <i class="fa fa-exclamation-circle"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-fire"></i>
              <i class="fa fa-angle-down"></i>
            </span>
          </div>
        </div>`;
    });
    return retE;
  };

    let menuTemplateSide = function (obj) {
    let retS = '';
    _.each(obj.sides, function(foodObj){
      retS += `
        <div class='wholeItem'>
          <div class='mItemTop'>
            <span class='itemTitle'>${ foodObj.item + ' .................................................................................'}</span>
            <span class='itemPrice'>${ foodObj.price }</span>
          </div>
          <div class='mItemBottom'>
            <span class='itemDesc'>${ foodObj.description }</span>
            <span class='icons'>
              <i class="fa fa-exclamation-circle"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-fire"></i>
              <i class="fa fa-angle-down"></i>
            </span>
          </div>
        </div>`;
    });
    return retS;
  };

  let doMenu = function(objOfArrays) {
    $('.appContent').append(menuTemplateApps(objOfArrays));
    $('.entrContent').append(menuTemplateEntr(objOfArrays));
    $('.sideContent').append(menuTemplateSide(objOfArrays));
  };



}());
