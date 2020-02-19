// Code your solution in this file!

const returnFirstTwoDrivers = function(list){
    return list.slice(0, 2);
}

const returnLastTwoDrivers = function(list){
    return list.slice(-2);
}

let selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

function createFareMultiplier(num){
    return function(fare){
        return num * fare
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(list, func){
    if (func === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(list)
    }else {
        return returnLastTwoDrivers(list)
    }
}