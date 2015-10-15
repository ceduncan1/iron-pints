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
      <h3 class='title'>${ obj.title }</h3>
      <p class='date'>${ obj.date_published }</p>
    <p>${ obj.post }</p>
    </div>`;
    return nTemplate;
  };

  let doNews = function(newsItem) {
    $('.latestNews').append(newsTemplate(newsItem));
  };


//Function for the Specials Tile -----------------------------------------------------


let menuUrl = 'https://json-data.herokuapp.com/restaurant/menu/1';

let specialPromise = $.getJSON(menuUrl);  
  specialPromise.then(function (response){
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
    // console.log(appTemplate);
    // return appTemplate;
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
    // console.log(appTemplate);
    // return appTemplate;
    return retE;
  };


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
    // console.log(appTemplate);
    // return appTemplate;
    return retS;
  };



  let doMenu = function(objOfArrays) {
    $('.appContent').append(menuTemplateApps(objOfArrays));
    $('.entrContent').append(menuTemplateEntr(objOfArrays));
    $('.sideContent').append(menuTemplateSide(objOfArrays));

    // console.log(objOfArrays);

  };

  let doMenu = function(menuItems){
    $('.menu').append(theMenu(menuItems.entrees));
  }



}());



















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



