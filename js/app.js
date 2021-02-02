'use strict';

console.log('Hello World');


const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


let seattleList = document.getElementById('seattle');
let parisList = document.getElementById('paris');
let tokyoList = document.getElementById('tokyo');
let dubaiList = document.getElementById('dubai');
let limaList = document.getElementById('lima');

let seattle = {
  name: 'Seattle',
  minCustEachHour: 23,
  maxCustEachHour: 65,
  avgCookiesSoldPerCustomer: 6.3,
  cookiesSoldEachHour: [],
  dailyStoreTotal: 0,
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

  render: function () {
    this.calcCookiesSoldEachHour();
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]}`;
      seattleList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
    seattleList.appendChild(li);
  }
}

let paris = {
  name: 'Paris',
  minCustEachHour: 20,
  maxCustEachHour: 38,
  avgCookiesSoldPerCustomer: 2.3,
  cookiesSoldEachHour: [],
  dailyStoreTotal: 0,
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

  render: function () {
    this.calcCookiesSoldEachHour();
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]}`;
      parisList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
    parisList.appendChild(li);
  }
}

let tokyo = {
  name: 'Tokyo',
  minCustEachHour: 3,
  maxCustEachHour: 24,
  avgCookiesSoldPerCustomer: 1.2,
  cookiesSoldEachHour: [],
  dailyStoreTotal: 0,
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

  render: function () {
    this.calcCookiesSoldEachHour();
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]}`;
      tokyoList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
    tokyoList.appendChild(li);
  }
}

let dubai = {
  name: 'Dubai',
  minCustEachHour: 11,
  maxCustEachHour: 38,
  avgCookiesSoldPerCustomer: 3.7,
  cookiesSoldEachHour: [],
  dailyStoreTotal: 0,
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

  render: function () {
    this.calcCookiesSoldEachHour();
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]}`;
      dubaiList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
   dubaiList.appendChild(li);
  }
}

let lima = {
  name: 'Lima',
  minCustEachHour: 2,
  maxCustEachHour: 16,
  avgCookiesSoldPerCustomer: 4.6,
  cookiesSoldEachHour: [],
  dailyStoreTotal: 0,
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

  render: function () {
    this.calcCookiesSoldEachHour();
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]}`;
      limaList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
    limaList.appendChild(li);
  }
}
seattle.render();
paris.render();
tokyo.render();
dubai.render();
lima.render();
