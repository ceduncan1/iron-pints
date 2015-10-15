(function () {


//Function for the Current News Below ------------------------------------------------


  let url = 'https://json-data.herokuapp.com/restaurant/news/1';

  //Fetch data and do something with it
  let newsPromise = $.getJSON(url);
  newsPromise.then( function (response) {
    doNews(response);
  });

  // Templates
  let newsTemplate = function (obj) {
    let template = `
    <h2>Latest News</h2>
    <hr size1>
    <div>
      <h3 class='title'>${ obj.title }</h3>
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
    doMenu(response);
  });


  let todaysSpecial = function (obj) {
    let sTemplate = `
    <p>Todays Special</p>
    <img src="">
    <p>${ obj.item }</p>
    <p>${ obj.description }</p>
    <p>${ obj.price }</p>`;
    return sTemplate;
    console.log(sTemplate);
  }

  let doSpecial = function(specials) {
    $('.special').append(todaysSpecial(specials.entrees[0]));
  };
  
  let menuTemplate = function (arr) {
    // console.log(arr);
    _.each(arr, function(item){
      let mTemplate = `
        <div class='wholeItem'
          <h3>${ item }</h3>
          <div class='mItemTop'>
            <span class='itemTitle'>${ item.item }</span>
            <span class='itemPrice'>${ item.price }</span>
          </div>
          <div class='mItemBottom'>
            <span class='itemDesc'>${ item.description }</span>
            <span class='icons'>
              <div class='allergy'></div>
              <div class='fav'></div>
              <div class='spicy'></div>
              <div class='veg'></div>
            </span>
          </div>
        </div>`
      return mTemplate;
    });
  };

  let doMenu = function(obj) {
    $('.menu').append(menuTemplate(obj));
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












>>>>>>> master

}());



