const batteryBatches = [4, 5, 3, 4, 4, 6, 5];


const reducer = (batteries, batch) => {
  return (batteries += batch);
};

let totalBatteries = batteryBatches.reduce(reducer, 0);
console.log( totalBatteries );




// Code your solution here
// const totalBatteries = batteryBatches.reduce((accum, batch) => {
//   return (accum += batch);
// }, 0);

// const totalBatteries = batteryBatches.reduce(function (accumulator, element) {
//   return element + accumulator;
// }, 0);

//function batteries() {
  //return totalBatteries(batteryBatches.sum(31));
  // let totalBatteries = 0;
//}



