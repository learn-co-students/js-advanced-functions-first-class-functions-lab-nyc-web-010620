// Code your solution in this file!

function returnFirstTwoDrivers(drivers) {

    const firstTwo = function(arr) {
        return arr.slice(0,2)
    }
    return firstTwo(drivers)
}

function returnLastTwoDrivers(drivers) {
    const lastTwo = function(arr){
        let len = arr.length
        return arr.slice(len-2)
    }
    return lastTwo(drivers)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(x) {
    return function(fare) {
        return x*fare
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, callback) {
    return callback(arrayOfDrivers)
}