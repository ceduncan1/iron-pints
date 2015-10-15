

// THIS ONE WORKS
  let menuTemplate = function (obj) {
    let ret = '';
    _.each(obj.appetizers, function(foodObj){
      ret += `
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
    return ret;
  };

  let doMenu = function(objOfArrays) {
    $('.menu').append(menuTemplate(objOfArrays));
    // console.log(objOfArrays);
  };































  let menuTemplate = function (objOfArrays) {
    // console.log(objOfArrays);
    let ret = '';
    _.each(objOfArrays, function(arrayOfFoodTypes){
      _.each(arrayOfFoodTypes, function(foodObj){
        ret += `
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
        // console.log(mTemplate);
        // return mTemplate;
      });
      console.log(ret);
    };
  };

  let doMenu = function(objOfArrays) {
    $('.menu').append(menuTemplate(objOfArrays));
    // console.log(objOfArrays);
  };













  let menuTemplate = function (objOfArrays) {
    // console.log(objOfArrays);
    _.each(objOfArrays, function(arrayOfFoodTypes){
      _.each(arrayOfFoodTypes, function(foodObj){
        let mTemplate = `
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
        console.log(mTemplate);
        return mTemplate;
      });
    };
  };

  let doMenu = function(objOfArrays) {
    $('.menu').append(menuTemplate(objOfArrays));
    // console.log(objOfArrays);
  };







  let menuTemplate = function (objOfArrays) {
    // console.log(objOfArrays);
    _.each(objOfArrays, function(arrayOfFoodTypes){
      let menuTemplate2 = `
      <div class='wholeFoodType'>
        // <div class=foodTypeTitle>${ arrayOfFoodTypes.title????!!!!!!! }</div>
        _.each(arrayOfFoodTypes, function(foodObj){
          let mTemplate = `
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
          console.log(mTemplate);
          return mTemplate;
        });
      </div>`; // closing wholeFoodType div
    });
  };

  let doMenu = function(objOfArrays) {
    $('.menu hidden').append(menuTemplate(objOfArrays));
    // console.log(objOfArrays);
  };



  let menuTemplate = function (obj) {
    _.each(obj.appetizers, function(foodObj){
        let mTemplate = `
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
        console.log(mTemplate);
        return mTemplate;
      });
    };
  };































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

