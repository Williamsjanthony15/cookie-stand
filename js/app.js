'use strict';

console.log('Hello World');


const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let cookies = [];
let numberCookies = (cookies + 'Cookies');
console.log(numberCookies);

var seattleList = document.getElementById('Seattle');
var parisList = document.getElementById('Paris');
var toykoList = document.getElementById('Toyko');
var dubaiList = document.getElementById('Dubai');
var limaList = document.getElementById('Lima');

let seattle = {
  name: 'Seattle',
  minCustEachHour: 23,
  maxCustEachHour: 65,
  avgCookiesSoldPerCustomer: 6.3,
  cookiesSoldEachHour: [],
  dailyStoreTotal: [],
  randoCustEachHour: function () {
    console.log('im in randoCustEachHour');
    return Math.floor(Math.random() * (this.maxCustEachHour - this.minCustEachHour + 1) + this.minCustEachHour);
  },

  calcCookiesSoldEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let randoCustThisHour = this.randoCustEachHour();
      let hourlyTotal = Math.ceil(randoCustThisHour * this.avgCookiesSoldPerCustomer);
      this.cookiesSoldEachHour.push(hourlyTotal);
      this.dailyStoreTotal += hourlyTotal;
    }
  },

  rendor: function () {
    this.calcCookiesSoldEachHour();
    for (let i = 0; 1 < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]}`;
      seattleList.appendChild(li);
      let li = document.createElement('li');
      li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
      seattleList.appendChild(li);
      // dont forget to change location this list as well.
    }
  }
}


let paris = {
  name: 'Paris',
  minCustEachHour: 20,
  maxCustEachHour: 38,
  avgCookiesSoldPerCustomer: 2.3,
  cookiesSoldEachHour: [],
  dailyStoreTotal: [],
  randoCustEachHour: function () {
    console.log('im in randoCustEachHour');
    return Math.floor(Math.random() * (this.maxCustEachHour - this.minCustEachHour + 1) + this.minCustEachHour);
  },

  calcCookiesSoldEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let randoCustThisHour = this.randoCustEachHour();
      let hourlyTotal = Math.ceil(randoCustThisHour * this.avgCookiesSoldPerCustomer);
      this.cookiesSoldEachHour.push(hourlyTotal);
      this.dailyStoreTotal += hourlyTotal;
    }
  },

  rendor: function () {
    this.calcCookiesSoldEachHour();
    for (let i = 0; 1 < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]}`;
      parisList.appendChild(li);
      let li = document.createElement('li');
      li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
      parisList.appendChild(li);
      // dont forget to change location this list as well.
    }
  }
}



seattle.render();
paris.render();
toyko.render();
dubai.render();
lima.render();
// Other locations .render