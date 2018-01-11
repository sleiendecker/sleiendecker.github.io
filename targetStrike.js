const sunshineBatch = {
  weight: 15, // weight of grist
  gallons: 5,  // volume of galons used in mash
  grainTemp: 65,
  mashTemp: 153
}

function getStrikeTemp(batch) {
  let modifiedGrist = batch.weight * 0.4,
    waterWeight = batch.gallons * 8.32,
    solution = (((modifiedGrist + waterWeight) * batch.mashTemp) - (modifiedGrist * batch.grainTemp))/waterWeight;
  return Math.ceil(solution * 100) / 100;
}

let sol = getStrikeTemp(sunshineBatch);
console.log('Found solution:', sol);