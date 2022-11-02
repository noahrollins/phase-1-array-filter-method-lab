const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(driverArray, nameString) {
   
    const newArray = driverArray.filter((driver)=>{
        return driver.toLowerCase() === nameString.toLowerCase()
    })
    return newArray
}




console.log(findMatching(drivers, 'Bobby'))


function fuzzyMatch(drivers, string) {
    return drivers.filter( function (driver) {
        return driver.toLowerCase().substring(0, string.length) === string.toLowerCase();
    })
}




function matchName(driverArray, nameString){
    const newArray = driverArray.filter((driver)=>{
        return driver.name === nameString
    })
    return newArray
}