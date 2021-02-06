'use strict';

console.log('Hello World');


const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Grand Total'];
const allStores = [];

function Store(location, minCustHour, maxCustHour, avgSoldCust) {
  this.location = location;
  this.minCustHour = minCustHour;
  this.maxCustHour = maxCustHour;
  this.avgSoldCust = avgSoldCust;
  this.hourlyTotal = [];
  this.dailyLocationTotal = 0;
  this.allStores = [];
  this.calcLocTotal();
  allStores.push(this);
  this.renderStores();
}

Store.prototype.ranCustHour = function () {
  return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour) + 1) + this.minCustHour;
}

Store.prototype.calcLocTotal = function () {
  for (let i = 0; i < hours.length - 1; i++) {
    let customer = this.ranCustHour();
    let sales = Math.ceil(customer * this.avgSoldCust);
    this.hourlyTotal.push(sales);
    this.dailyLocationTotal += sales;
  }
}

Store.prototype.renderStores = function () {
  let body = document.getElementById('storeLocations');
  let tr = document.createElement('tr');
  let th = document.createElement('th');
  th.textContent = this.location;
  tr.appendChild(th);
  for (let i = 0; i < this.hourlyTotal.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.hourlyTotal[i];
    tr.appendChild(td);
  }
  th = document.createElement('th');
  th.textContent = this.dailyLocationTotal;
  tr.appendChild(th);
  body.appendChild(tr);
}

function renderHeader() {
  let head = document.getElementById('cookieHead');
  let td = document.createElement('td');
  td.textContent = '';
  head.appendChild(td);
  for (let i = 0; i < hours.length; i++) {
    td = document.createElement('td');
    td.textContent = hours[i];
    head.appendChild(td);
  };
}


renderHeader();
new Store('Seattle', 23, 65, 6.3);
new Store('Paris', 20, 38, 2.3);
new Store('Toyko', 3, 24, 1.2);
new Store('Lima', 2, 16, 4.6);
new Store('Dubai', 11, 38, 3.7);

