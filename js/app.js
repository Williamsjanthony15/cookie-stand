'use strict';

console.log('Hello World');


let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let cookies = [];
let numberCookies = (cookies + 'Cookies');
console.log(numberCookies);

let seattle = {
  name: 'Seattle',
  minCustEachHour: 23,
  maxCustEachHour: 65,
  avgCookiesSoldPerCustomer: 6.3,
  cookiesSoldEachHour: [],
  dailyStoreTotal: [],
}

randomCustomerEachHour: function() {
  // console.log('im in randomCustomerEachHour');
  return Math.floor(Math.random() * (this.maxCustEachHour - this.minCustEachHour + 1) + this.minCustEachHour);
}

calcCookiesSoldEachHour: function () {
  //do something
  let randomCustomerForThisHour = this.randomCustomerEachHour();
  console.log(randomCustomerForThisHour);
  console.log('i am inside of calcCookiesSoldEachHour');
  // do something using a for loop
  // inside of for loop (multiply customer number by average)
  // handle the number, Round up or down. 
  // proof of life
  // push into the array (cookiesSoldPerHourArray)
}

render: function() {
  this.calcCookiesSoldEachHour();
  console.log('I am inside of the render function');
};

seattle.render();