'use strict';

console.log('Hello World');


const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


let cookieSales = document.getElementById('Cookie Sales');
// let parisList = document.getElementById('paris');
// let toykoList = document.getElementById('toyko');
// let dubaiList = document.getElementById('dubai');
// let limaList = document.getElementById('lima');
const allStores = [];
console.log(cookieSales);

function Seattle (name) {
this.name = name;
this.minCustEachHour = [];
this.maxCustEachHour = [];
this.avgCookiesSoldPerCustomer = [];
this.cookiesSoldEachHour = [];
this.dailyLocationTotal = 0;
allStores.push(this);
console.log('testing');
}

Seattle.prototype.calcLocTotal = function() {
  for (let i = 0; i < this.cookiesSoldEachHour.length; i++){ this.dailyLocationTotal += this.cookiesSoldEachHour[i];
  }
};

Seattle.prototype.render = function() {
  let tr = document.createElement('tr');
  cookieSales.appendChild(tr);

  let th = document.createElement('th');
  th.textContent = this.name;
  tr.appendChild(th);

  for (let i = 0; i < this.cookiesSoldEachHour.length; i++) {
    this.dailyLocationTotal += this.cookiesSoldEachHour[i];
    let td = document.createElement('td');
    td.textContent = this.cookiesSoldEachHour[i];
    tr.appendChild(td);
  }
  let td = document.createElement('td');
  td.textContent = this.dailyLocationTotal;
  tr.appendChild(td);
};

let seattleStore = new Seattle('Seattle', [i]);

function renderAll(){
  for (let i = 0; i < allStores.length; i++){
    allStores[i].render();
  }
}
renderAll();
//   let th = document.createElement('tr');
//   th.textContent = this.name;
//   tr.appendChild(th);
  
// for (let i = 0; i < this.)
  
// }
// let seattle = {
//   name: 'Seattle',
//   minCustEachHour: 23,
//   maxCustEachHour: 65,
//   avgCookiesSoldPerCustomer: 6.3,
//   cookiesSoldEachHour: [],
//   dailyLocationTotal: 0,
//   randoCustEachHour: function () {
//     console.log('im in randoCustEachHour');
//     return Math.floor(Math.random() * (this.maxCustEachHour - this.minCustEachHour + 1) + this.minCustEachHour);
//   },

//   calcCookiesSoldEachHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let randoCustThisHour = this.randoCustEachHour();
//       let hourlyTotal = Math.ceil(randoCustThisHour * this.avgCookiesSoldPerCustomer);
//       this.cookiesSoldEachHour.push(hourlyTotal);
//       this.dailyLocationTotal += hourlyTotal;
//     }
//   },

//   render: function () {
//     this.calcCookiesSoldEachHour();
//     for (let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]}`;
//       seattleList.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailyLocationTotal} cookies`;
//     seattleList.appendChild(li);
//   }
// }

// let paris = {
//   name: 'Paris',
//   minCustEachHour: 20,
//   maxCustEachHour: 38,
//   avgCookiesSoldPerCustomer: 2.3,
//   cookiesSoldEachHour: [],
//   dailyLocationTotal: 0,
//   renderCustEachHour: function () {
//     console.log('im in randoCustEachHour');
//     return Math.floor(Math.random() * (this.maxCustEachHour - this.minCustEachHour + 1) + this.minCustEachHour);
//   },

//   calcCookiesSoldEachHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let randoCustThisHour = this.renderCustEachHour();
//       let hourlyTotal = Math.ceil(randoCustThisHour * this.avgCookiesSoldPerCustomer);
//       this.cookiesSoldEachHour.push(hourlyTotal);
//       this.dailyLocationTotal += hourlyTotal;
//     }
//   },

//   render: function () {
//     this.calcCookiesSoldEachHour();
//     for (let i = 0; 1 < hours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]}`;
//       parisList.appendChild(li);
//       li.textContent = `Total: ${this.dailyLocationTotal} cookies`;
//       parisList.appendChild(li);
//     }
//   }
// }

// let toyko = {
//   name: 'toyko',
//   minCustEachHour: 20,
//   maxCustEachHour: 38,
//   avgCookiesSoldPerCustomer: 2.3,
//   cookiesSoldEachHour: [],
//   dailyLocationTotal: 0,
//   renderCustEachHour: function () {
//     console.log('im in randoCustEachHour');
//     return Math.floor(Math.random() * (this.maxCustEachHour - this.minCustEachHour + 1) + this.minCustEachHour);
//   },

//   calcCookiesSoldEachHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let randoCustThisHour = this.renderCustEachHour();
//       let hourlyTotal = Math.ceil(randoCustThisHour * this.avgCookiesSoldPerCustomer);
//       this.cookiesSoldEachHour.push(hourlyTotal);
//       this.dailyLocationTotal += hourlyTotal;
//     }
//   },

//   render: function () {
//     this.calcCookiesSoldEachHour();
//     for (let i = 0; 1 < hours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]}`;
//       toykoList.appendChild(li);
//       li.textContent = `Total: ${this.dailyLocationTotal} cookies`;
//       toykoList.appendChild(li);
//     }
//   }
// }

// let dubai = {
//   name: 'Dubai',
//   minCustEachHour: 20,
//   maxCustEachHour: 38,
//   avgCookiesSoldPerCustomer: 2.3,
//   cookiesSoldEachHour: [],
//   dailyLocationTotal: 0,
//   renderCustEachHour: function () {
//     console.log('im in randoCustEachHour');
//     return Math.floor(Math.random() * (this.maxCustEachHour - this.minCustEachHour + 1) + this.minCustEachHour);
//   },

//   calcCookiesSoldEachHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let randoCustThisHour = this.renderCustEachHour();
//       let hourlyTotal = Math.ceil(randoCustThisHour * this.avgCookiesSoldPerCustomer);
//       this.cookiesSoldEachHour.push(hourlyTotal);
//       this.dailyLocationTotal += hourlyTotal;
//     }
//   },

//   render: function () {
//     this.calcCookiesSoldEachHour();
//     for (let i = 0; 1 < hours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]}`;
//       dubaiList.appendChild(li);
//       li.textContent = `Total: ${this.dailyLocationTotal} cookies`;
//       dubaiList.appendChild(li);
//     }
//   }
// }

// let lima = {
//   name: 'Lima',
//   minCustEachHour: 20,
//   maxCustEachHour: 38,
//   avgCookiesSoldPerCustomer: 2.3,
//   cookiesSoldEachHour: [],
//   dailyLocationTotal: 0,
//   renderCustEachHour: function () {
//     console.log('im in randoCustEachHour');
//     return Math.floor(Math.random() * (this.maxCustEachHour - this.minCustEachHour + 1) + this.minCustEachHour);
//   },

//   calcCookiesSoldEachHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let randoCustThisHour = this.renderCustEachHour();
//       let hourlyTotal = Math.ceil(randoCustThisHour * this.avgCookiesSoldPerCustomer);
//       this.cookiesSoldEachHour.push(hourlyTotal);
//       this.dailyLocationTotal += hourlyTotal;
//     }
//   },

//   render: function () {
//     this.calcCookiesSoldEachHour();
//     for (let i = 0; 1 < hours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]}`;
//       limaList.appendChild(li);
//       li.textContent = `Total: ${this.dailyLocationTotal} cookies`;
//       limaList.appendChild(li);
//     }
//   }
// }






// seattle.render();
// paris.render();
// toyko.render();
// dubai.render();
// lima.render();





// /////////// CODE REVEIW / PRACTICE FROM CLASS FOLLOWS///////////////////

// function 

// function BeeHive (name, honeyYield) {
//   this.name = name;
//   this.honeyYield = honeyYield;
//   this.rendor = function (){
//   }

// // by using prototype the only thing that has changed is attaching a method to the constructor without it being inside of the constructor. 

// BeeHive.prototype.render =   function(){
//   let tr = document.createElement('tr');
//   hiveTable.appendChild(tr);

//   // create th, give content, append to DOM
//   let th = document.createElement('th');
// th.textContent = this.name;
// tr.appendChild(th);

// // create multiple tds, give content, append to DOM

//   for (let i = 0; i < this.honeyYield.length; i++){
//     this.totalYield += this.honeyYield[i];
//     var td = document.createElement('TD');
//     td.textContent = this.honeyYield[i];
//     tr.appendChild(td);
//   }
// };

// // creating an array for your rendors to do all in one.
// allstores.push // HIGHLY USEFULL
// const allHives = [];   // HIGHLY USEFULL

// funtion renderAll(){
//   for( let i = 0; i < allHives.length; i++){
//   allHives[i].render();
//   allHives[i].renderSection();
//   }
// }

// renderAll();

// // let hiveOne = new Beehive('Hive One', [10, 15, 12]);

// // hiveOne.rendor();


// // BeeHive.prototype.renderSection = function(){

// // }