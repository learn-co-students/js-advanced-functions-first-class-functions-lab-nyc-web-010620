// Code your solution in this file!
const returnFirstTwoDrivers = function(arr) {return [arr[0], arr[1]];}
const returnLastTwoDrivers = arr => [arr[arr.length -2], arr[arr.length - 1]]
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
const createFareMultiplier = function(x){
    return function(y){
        return x*y
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)
const selectDifferentDrivers = function(arr, returnLastTwoDrivers){return returnLastTwoDrivers(arr)}