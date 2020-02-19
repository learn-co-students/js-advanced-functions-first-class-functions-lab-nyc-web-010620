// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
        return drivers.slice(0,2)
    }

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multipier){
    return function(fare) {
        return multipier * fare
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(arrayOfDrivers, method){
    return method === returnFirstTwoDrivers ? returnFirstTwoDrivers(arrayOfDrivers) : returnLastTwoDrivers(arrayOfDrivers)
}