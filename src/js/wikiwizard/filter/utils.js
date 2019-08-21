exports.stripKeys = function(table, remove) {

  var rows = table.keyValue();
  var keys = Object.keys(rows[0]);
  var res = [];

  for (var r = 0; r < rows.length; r++) {
    var obj = {};
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if(!remove.includes(key) && table.data[r][key] !== undefined) {
        obj[key] = table.data[r][key].data.text
      }
    }

    res.push(obj);
  }

  return res;
}

exports.patchKeys = function(rows, keysToPatch) {

  var keys = Object.keys(rows[0]);
  var res = [];

  for (var r = 0; r < rows.length; r++) {
    var obj = {};
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if(key in keysToPatch) {
        obj[keysToPatch[key]] = rows[r][key];
      }
    }
    res.push(obj);
  }
  return res;
}


exports.stripRowsWhereKeyHasValue = function(rows, key, remove) {

  var rowsFiltered = rows.filter(function(value, index, arr) {

    return !remove.includes(value[key]);
  });

  return rowsFiltered;
}
