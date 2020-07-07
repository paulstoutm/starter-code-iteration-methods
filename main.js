// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
let main = document.querySelector('main')
function printKata (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    let detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    let summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    let stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}
let greenEyes1 = users.filter(user => user.eyeColor === "green")
// OR...
let greenEyes2 = users.filter(function (user) {
    return user.eyeColor === "green"

    
})
let isActive1 = users.filter(user => user.isActive)
console.log(isActive1)

let usersArray = users.map(user => user.email)

let usersArrayCheckCompany = users.some(user => user.company === "OVATION")

let firstUserOver38YearsOld = users.find(user => user.age > 38)

let firstActiveUserOver38YearsOld = users.filter(user => user.age > 38).find(user => user.isActive)

let allZencoUsersBalance = users.filter(user => user.company === "ZENCO").map(user => user.balance)

let ageOfEveryFugiatUser = users.filter(user =>user.tags .includes ("fugiat")).map(user => user.age)

console.log(ageOfEveryFugiatUser)


printKata(0, greenEyes1)  
printKata(1, isActive1)  
printKata(2, usersArray)  
printKata(3, usersArrayCheckCompany)  
printKata(4, firstUserOver38YearsOld)  
printKata(5, firstActiveUserOver38YearsOld)  
printKata(6, allZencoUsersBalance)  
printKata(7, ageOfEveryFugiatUser)  
