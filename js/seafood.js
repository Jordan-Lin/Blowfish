﻿var eatingOrder = new Array(4);    //stored images here for 4 food items
var eatingOrderElem = new Array(4);   //stored the order of eating elements for 4 food items


var eatingOrder2 = new Array(5);   //stored images here for 5 food items
var eatingOrderElem2 = new Array(5);  //stored the order of eating elements for 5 food items

var eatingOrder3 = new Array(6);  //stored images here for 6 food items
var eatingOrderElem3 = new Array(6);  //stored the order of eating elements for 6 food items


/**
 * the random seafood placement for 4 fooditems
 * @param foodImgs  the array of food images
 * @param level   the level of this game
 */
function randomFoodPlacement(foodImgs, level) {
    var foodNum = generateFoodNumArr(); //get the foodNum array
    document.getElementById("js_end_flush").style.display = "none";
    generateOrderFood(foodImgs);
    document.getElementById('fatfish').style.display = "block";
    clearCounter();   // clear the counter of the of game

    document.getElementById('food-' + foodNum[0]).src = eatingOrder[0].src;
    document.getElementById('food-' + foodNum[0]).alt = "a";
    eatingOrderElem[0] = document.getElementById('food-' + foodNum[0]);

    document.getElementById('food-' + foodNum[1]).src = eatingOrder[1].src;
    document.getElementById('food-' + foodNum[1]).alt = "b";
    eatingOrderElem[1] = document.getElementById('food-' + foodNum[1]);

    document.getElementById('food-' + foodNum[2]).src = eatingOrder[2].src;
    document.getElementById('food-' + foodNum[2]).alt = "c";
    eatingOrderElem[2] = document.getElementById('food-' + foodNum[2]);

    document.getElementById('food-' + foodNum[3]).src = eatingOrder[3].src;
    document.getElementById('food-' + foodNum[3]).alt = "d";
    eatingOrderElem[3] = document.getElementById('food-' + foodNum[3]);

    /*
       call this method in wfn.js
    */
    foodDisplay(eatingOrder, level);

}

/**
 * the random seafood placement for 5 fooditems
 * @param foodImgs the array of food images
 * @param level the level of this game
 */
function randomFoodPlacement2(foodImgs, level) {
    var foodNum = generateFoodNumArr2(5);  //get the foodNum array
 
    document.getElementById("js_end_flush").style.display = "none";

    generateOrderFood2(foodImgs);
    document.getElementById('fatfish').style.display = "block";
    clearCounter();   //clear the counter to 0
    
    document.getElementById('food-' + foodNum[0]).src = eatingOrder2[0].src;
    document.getElementById('food-' + foodNum[0]).alt = "a";
    eatingOrderElem2[0] = document.getElementById('food-' + foodNum[0]);

    document.getElementById('food-' + foodNum[1]).src = eatingOrder2[1].src;
    document.getElementById('food-' + foodNum[1]).alt = "b";
    eatingOrderElem2[1] = document.getElementById('food-' + foodNum[1]);

    document.getElementById('food-' + foodNum[2]).src = eatingOrder2[2].src;
    document.getElementById('food-' + foodNum[2]).alt = "c";
    eatingOrderElem2[2] = document.getElementById('food-' + foodNum[2]);

    document.getElementById('food-' + foodNum[3]).src = eatingOrder2[3].src;
    document.getElementById('food-' + foodNum[3]).alt = "d";
    eatingOrderElem2[3] = document.getElementById('food-' + foodNum[3]);

    document.getElementById('food-' + foodNum[4]).src = eatingOrder2[4].src;
    document.getElementById('food-' + foodNum[4]).alt = "e";
    eatingOrderElem2[4] = document.getElementById('food-' + foodNum[4]);

    /*
       call this method in wfn.js
    */
    foodDisplay2(eatingOrder2, level);

}

/**
 * the random seafood placement for 6 fooditems
 * @param foodImgs the array of food images
 * @param level the level of this game
 */
function randomFoodPlacement3(foodImgs, level) {
    var foodNum = generateFoodNumArr3(6);  //get the foodNum array

    document.getElementById("js_end_flush").style.display = "none";

    generateOrderFood3(foodImgs);
    document.getElementById('fatfish').style.display = "block";
    clearCounter();   //clear the counter to 0

    document.getElementById('food-' + foodNum[0]).src = eatingOrder3[0].src;
    document.getElementById('food-' + foodNum[0]).alt = "a";
    eatingOrderElem3[0] = document.getElementById('food-' + foodNum[0]);

    document.getElementById('food-' + foodNum[1]).src = eatingOrder3[1].src;
    document.getElementById('food-' + foodNum[1]).alt = "b";
    eatingOrderElem3[1] = document.getElementById('food-' + foodNum[1]);

    document.getElementById('food-' + foodNum[2]).src = eatingOrder3[2].src;
    document.getElementById('food-' + foodNum[2]).alt = "c";
    eatingOrderElem3[2] = document.getElementById('food-' + foodNum[2]);

    document.getElementById('food-' + foodNum[3]).src = eatingOrder3[3].src;
    document.getElementById('food-' + foodNum[3]).alt = "d";
    eatingOrderElem3[3] = document.getElementById('food-' + foodNum[3]);

    document.getElementById('food-' + foodNum[4]).src = eatingOrder3[4].src;
    document.getElementById('food-' + foodNum[4]).alt = "e";
    eatingOrderElem3[4] = document.getElementById('food-' + foodNum[4]);

    document.getElementById('food-' + foodNum[5]).src = eatingOrder3[5].src;
    document.getElementById('food-' + foodNum[5]).alt = "f";
    eatingOrderElem3[5] = document.getElementById('food-' + foodNum[5]);

    /*
       call this method in wfn.js
    */
    foodDisplay3(eatingOrder3, level);

}

/**
 * fill up the eating order array.
 * @param foodImgs the seafood images
 */
function generateOrderFood(foodImgs) {
    var arr = generateFoodNumArr();
    eatingOrder[arr[0]] = foodImgs[1];
    eatingOrder[arr[1]] = foodImgs[2];
    eatingOrder[arr[2]] = foodImgs[3];
    eatingOrder[arr[3]] = foodImgs[4];
    
}

/**
 * fill up the eating order array for 5 food itmes.
 * @param foodImgs the seafood images 
 */
function generateOrderFood2(foodImgs) {
    var arr = generateFoodNumArr2(5);
    eatingOrder2[arr[0]] = foodImgs[1];
    eatingOrder2[arr[1]] = foodImgs[2];
    eatingOrder2[arr[2]] = foodImgs[3];
    eatingOrder2[arr[3]] = foodImgs[4];
    eatingOrder2[arr[4]] = foodImgs[5];
    
}

/**
 * fill up the eating order array for 6 food itmes.
 * @param foodImgs  the seafood images
 */
function generateOrderFood3(foodImgs) {
    var arr = generateFoodNumArr3(6);
    eatingOrder3[arr[0]] = foodImgs[1];
    eatingOrder3[arr[1]] = foodImgs[2];
    eatingOrder3[arr[2]] = foodImgs[3];
    eatingOrder3[arr[3]] = foodImgs[4];
    eatingOrder3[arr[4]] = foodImgs[5];
    eatingOrder3[arr[5]] = foodImgs[6];

}

/**
 * get eating order html elements for 4 food items
 * @returns {Array}
 */
function getEatingOrderElem() {
    return eatingOrderElem;
}

/**
 * get eating order html elements for 5 food items
 * @returns {Array}
 */
function getEatingOrderElem2() {
    return eatingOrderElem2;
}

/**
 * get eating order html elements for 6 food items
 * @returns {Array}
 */
function getEatingOrderElem3() {
    return eatingOrderElem3;
}


