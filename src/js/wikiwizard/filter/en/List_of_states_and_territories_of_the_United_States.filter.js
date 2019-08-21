import { stripKeys, patchKeys, stripRowsWhereKeyHasValue } from './../utils';

export default function(rawData) {

  var rows = stripKeys(rawData.tables(0),
    [
      "col3",
      "col7",
      "col9",
      "col12",
      "total area",
      "land area",
      "water area",
      "number of reps.",
      "established"
    ]);

  var filteredRows = stripRowsWhereKeyHasValue(rows, "name & postal abbreviation",
    [
      "Name & postal abbreviation"
    ]);

    var patchedKeys = patchKeys(filteredRows,
      {
        "name & postal abbreviation" : "name",
        "cities" : "postal abbreviation",
        "population" : "established",
      });


  return patchedKeys;
}
