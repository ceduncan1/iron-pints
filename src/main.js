(function () {

  let url = 'https://json-data.herokuapp.com/restaurant/news/1';

  //Fetch data and do something with it
  let newsPromise = $.getJSON(url);
  newsPromise.then( function (response) {
    doNews(response);
  });

  // Templates
  let newsTemplate = function (obj) {
    let nTemplate = `
    <p>Latest News</p>
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
  }

// console.log(doSomething);
}());



