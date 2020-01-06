const ipaGrist = {
  
  // weight of grist
  weight: 19.25, 
  
  // volume of galons used in mash
  gallons: 6.82,  
  
  // temperature of the grains
  grainTemp: 70,
  
  // target mash temperature
  mashTemp: 156
}

function getStrikeTemp(batch) {
  let modifiedGrist = batch.weight * 0.4,
    waterWeight = batch.gallons * 8.32,
    solution = (((modifiedGrist + waterWeight) * batch.mashTemp) - (modifiedGrist * batch.grainTemp))/waterWeight;
  return Math.ceil(solution * 100) / 100;
}


console.log(getStrikeTemp(ipaGrist));