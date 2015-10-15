(function () {

let url = 'https://json-data.herokuapp.com/restaurant/menu/1';

// Fetch data and do something with it
let promise = $.getJSON(url);
promise.then( function (response) {
  doMenu(response);
});

// Templates // may need to add arr. in front of all the jQuery things (what's the word for those) in the template
let menuTemplate = function (arr) {
  console.log(arr);
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

}());

