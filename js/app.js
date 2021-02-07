'use strict';

console.log('Hello World');


const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const allStores = [];
let footerTotals = [];
let grandTotal = 0;

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
};

Store.prototype.calcLocTotal = function () {
  for (let i = 0; i < hours.length; i++) {
    let customer = this.ranCustHour();
    let sales = Math.ceil(customer * this.avgSoldCust);
    this.hourlyTotal.push(sales);
    this.dailyLocationTotal += sales;
  }
};

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
};

function renderHeader() {
  let head = document.getElementById('cookieHead');
  let td = document.createElement('td');
  td.textContent = '';
  head.appendChild(td);
  for (let i = 0; i < hours.length; i++) {
    td = document.createElement('td');
    td.textContent = hours[i];
    head.appendChild(td);
  }
  td = document.createElement('td');
  td.textContent = 'Daily Location Totals';
  head.appendChild(td);
}

function renderFooter() {
  calcFooterTotals();
  let tfoot = document.getElementById('cookieFoot');
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  td.textContent = 'Total';
  tr.appendChild(td);

  for (let i = 0; i < hours.length; i++) {
    let td = document.createElement('td');
    td.textContent = footerTotals[i];
    tr.appendChild(td);
  }
  td = document.createElement('td');
  td.textContent = grandTotal;
  tr.appendChild(td);

  tfoot.appendChild(tr);
}

function calcFooterTotals() {
  footerTotals = [];
  grandTotal = 0;
  for (let i = 0; i < hours.length; i++) {
    let hourTotal = 0;
    for (let j = 0; j < allStores.length; j++) {
      hourTotal += allStores[j].hourlyTotal[i];

    }
    footerTotals.push(hourTotal);
    grandTotal += hourTotal;
    console.log(grandTotal);
  }
}

new Store('Seattle', 23, 65, 6.3);
new Store('Paris', 20, 38, 2.3);
new Store('Toyko', 3, 24, 1.2);
new Store('Lima', 2, 16, 4.6);
new Store('Dubai', 11, 38, 3.7);
renderHeader();
renderFooter();

