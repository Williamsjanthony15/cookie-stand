'use strict';

console.log('Hello World');


const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


var seattleList = document.getElementById('seattle');
var parisList = document.getElementById('paris');
var toykoList = document.getElementById('toyko');
var dubaiList = document.getElementById('dubai');
var limaList = document.getElementById('lima');

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
  renderCustEachHour: function () {
    console.log('im in randoCustEachHour');
    return Math.floor(Math.random() * (this.maxCustEachHour - this.minCustEachHour + 1) + this.minCustEachHour);
  },

  calcCookiesSoldEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let randoCustThisHour = this.renderCustEachHour();
      let hourlyTotal = Math.ceil(randoCustThisHour * this.avgCookiesSoldPerCustomer);
      this.cookiesSoldEachHour.push(hourlyTotal);
      this.dailyStoreTotal += hourlyTotal;
    }
  },

  render: function () {
    this.calcCookiesSoldEachHour();
    for (let i = 0; 1 < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]}`;
      parisList.appendChild(li);
      li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
      parisList.appendChild(li);
    }
  }
}

let toyko = {
  name: 'toyko',
  minCustEachHour: 20,
  maxCustEachHour: 38,
  avgCookiesSoldPerCustomer: 2.3,
  cookiesSoldEachHour: [],
  dailyStoreTotal: 0,
  renderCustEachHour: function () {
    console.log('im in randoCustEachHour');
    return Math.floor(Math.random() * (this.maxCustEachHour - this.minCustEachHour + 1) + this.minCustEachHour);
  },

  calcCookiesSoldEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let randoCustThisHour = this.renderCustEachHour();
      let hourlyTotal = Math.ceil(randoCustThisHour * this.avgCookiesSoldPerCustomer);
      this.cookiesSoldEachHour.push(hourlyTotal);
      this.dailyStoreTotal += hourlyTotal;
    }
  },

  render: function () {
    this.calcCookiesSoldEachHour();
    for (let i = 0; 1 < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]}`;
      toykoList.appendChild(li);
      li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
      toykoList.appendChild(li);
    }
  }
}

let dubai = {
  name: 'Dubai',
  minCustEachHour: 20,
  maxCustEachHour: 38,
  avgCookiesSoldPerCustomer: 2.3,
  cookiesSoldEachHour: [],
  dailyStoreTotal: 0,
  renderCustEachHour: function () {
    console.log('im in randoCustEachHour');
    return Math.floor(Math.random() * (this.maxCustEachHour - this.minCustEachHour + 1) + this.minCustEachHour);
  },

  calcCookiesSoldEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let randoCustThisHour = this.renderCustEachHour();
      let hourlyTotal = Math.ceil(randoCustThisHour * this.avgCookiesSoldPerCustomer);
      this.cookiesSoldEachHour.push(hourlyTotal);
      this.dailyStoreTotal += hourlyTotal;
    }
  },

  render: function () {
    this.calcCookiesSoldEachHour();
    for (let i = 0; 1 < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]}`;
      dubaiList.appendChild(li);
      li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
      dubaiList.appendChild(li);
    }
  }
}

let lima = {
  name: 'Lima',
  minCustEachHour: 20,
  maxCustEachHour: 38,
  avgCookiesSoldPerCustomer: 2.3,
  cookiesSoldEachHour: [],
  dailyStoreTotal: 0,
  renderCustEachHour: function () {
    console.log('im in randoCustEachHour');
    return Math.floor(Math.random() * (this.maxCustEachHour - this.minCustEachHour + 1) + this.minCustEachHour);
  },

  calcCookiesSoldEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let randoCustThisHour = this.renderCustEachHour();
      let hourlyTotal = Math.ceil(randoCustThisHour * this.avgCookiesSoldPerCustomer);
      this.cookiesSoldEachHour.push(hourlyTotal);
      this.dailyStoreTotal += hourlyTotal;
    }
  },

  render: function () {
    this.calcCookiesSoldEachHour();
    for (let i = 0; 1 < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]}`;
      limaList.appendChild(li);
      li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
      limaList.appendChild(li);
    }
  }
}






seattle.render();
paris.render();
toyko.render();
dubai.render();
lima.render();
