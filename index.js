// Code your solution in this file!
let hq = 42

function distanceFromHqInBlocks(blocks) {
  let distanceBlocks = Math.abs(hq - blocks)
  return distanceBlocks
}

function distanceFromHqInFeet(feet) {
  return distanceFromHqInBlocks(feet) *264;
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264;
}


function calculatesFarePrice(start,destination){
  let distance = distanceTravelledInFeet(start,destination);
  if (distance<= 400){
    return 0;
  }
  if (distance>=400 && distance<=2000){
    return (distance-400)* 0.02;
  }
  else if(distance>=2000&& distance<=2500){
    return 25;
  }
  else if (distance > 2500){
    return "cannot travel that far";
  }
}

// function calculatesFarePrice(num1, num2) {
//   let distance = distanceTravelledInFeet(num1, num2)
 
 
 
  // switch(distance) {
  //   case distance <= 400:
  //     return 0;
  //     break;
  //   case distance <= 2000:
  //     return (distance - 400)*0.02;
  //     break;
  //   default:
  //     return "cannot travel that far";
  // }
     
  
  
  
  //return distance <= 400 ? 0 : (distance - 400)*0.02;
//}

// describe('calculatesFarePrice(start, destination)', function() {
//   it('gives customers a free sample', function() {
//     expect(calculatesFarePrice(43, 44)).to.equal(0);
//   });

//   it('charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)', function() {
//     // total feet travelled is 528, minus the first 400 feet, comes to 128 -> 2.56
//     expect(calculatesFarePrice(34, 32)).to.equal(2.56);
//   });

//   it('charges 25 dollars for a distance over 2000 feet', function() {
//     expect(calculatesFarePrice(50, 58)).to.equal(25);
//   });

//   it('does not allow rides over 2500 feet', function() {
//     expect(calculatesFarePrice(34, 24)).to.equal('cannot travel that far');
//   });
// });
// });