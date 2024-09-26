// Code your solution in this file!
// Calculate blocks from headquarters
function distanceFromHqInBlocks(someValue) {
  const headquarterLocation = 42;
  return Math.abs(someValue - headquarterLocation);
}

// Calculate distance in feet using the block distance
function distanceFromHqInFeet(someValue) {
  const blocks = distanceFromHqInBlocks(someValue);
  return blocks * 264;
}

// Calculate total distance traveled in feet
function distanceTravelledInFeet(start, destination) {
  const blocksTravelled = Math.abs(destination - start);
  return blocksTravelled * 264;
}

// Calculate fare price based on distance traveled
function calculatesFarePrice(start, destination) {
  const distanceInFeet = distanceTravelledInFeet(start, destination);
  
  if (distanceInFeet <= 400) {
    return 0;
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    return (distanceInFeet - 400) * 0.02;
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
