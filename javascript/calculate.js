function findEmptiesInObject(obj) {
  const missingFields = [];
  for (const key in obj) {
    const val = obj[key];
    if (!val) missingFields.push(key);
  }
  console.log('return missing fields', missingFields);
  return missingFields.join(', ');
}

function getStrikeTemp(batch) {
  let missingFields = findEmptiesInObject(batch);
  
  let vals = Object.values(batch);
  console.log(vals);
  let modifiedGrist = batch.weight * 0.4,
    waterWeight = batch.gallons * 8.32,
    solution = (((modifiedGrist + waterWeight) * batch.mashTemp) - (modifiedGrist * batch.grainTemp)) / waterWeight;
  const strikeTemp = Math.ceil(solution * 100) / 100;
  return missingFields.length ? missingFields : strikeTemp;
}

$(document).ready(function () {
  let calculate = $('#calculate');

  calculate.on('click', function () {
    let batch = {
      weight: Number($('#weight').val()),
      gallons: Number($('#gallons').val()),
      grainTemp: Number($('#grain_temp').val()),
      mashTemp: Number($('#mash_temp').val())
    }
    let strikeTemp = getStrikeTemp(batch)
    if (typeof strikeTemp === 'number') {
      $('#alert').removeClass('alert-danger')
      $('#alert').addClass('in alert-success').text(`Strike temp: ${strikeTemp}° F`)
    } else {
      $('#alert').removeClass('alert-success')
      $('#alert').addClass('in alert-danger').text(`Missing field(s): ${strikeTemp}`)
    }
    $(this).parent().removeClass('in');

  
  });


});