// Code your solution in this file!
 const returnFirstTwoDrivers = function (drivers) {
    const firstTwo = [drivers[0], drivers[1]]
    return firstTwo
}

const returnLastTwoDrivers = function(drivers) {
    const lastTwo = [drivers[(drivers.length - 2)], drivers[(drivers.length - 1)]]
    return lastTwo
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers] // Passing a reference to the functions

const createFareMultiplier = function(num1) {
    return function(num2) {
        return num1 * num2
    }
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(drivers, cb) {
    return cb(drivers)
}