"use strict";

var cs142MakeMultiFilter = (originalArray) => {

  var currentArray = originalArray;//currentArray is having the value of originalArray
  var arrayFilterer = (filterCriteria, callback) => {
    //If filterCriteria is not a function then it will return the value of currentArray
    if (typeof filterCriteria !== "function") {
      return currentArray;
    }
    /*If filterCriteria is a function then it will check every element of the currentArray
    if it is filterCriteria or not.*/
    let elementKey = 0;
    while (elementKey < currentArray.length) {
      //IsValidfilterCriteria wll store the boolean value of filterCriteria.
      var isValidfilterCriteria = filterCriteria(currentArray[elementKey]);
      /*if filterCriteria returns 'false' then currentArray woulde be updated by removing 
      current element from the currentArray.*/
      if (isValidfilterCriteria === false) {
        currentArray.splice(elementKey, 1);
      } else {
        elementKey++;
      }
    }
    //If callback is a function then it will call the currentArray after the filrering is done.
    if (typeof callback === "function") {

      callback.call(originalArray, currentArray);
    }
    return arrayFilterer;
  };
  //Making the copy of originalArray
  currentArray = originalArray.slice();
  return arrayFilterer;
};
