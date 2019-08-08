import { stripKeys, stripRowsWhereKeyHasValue } from './../utils';

export default function(rawData) {
  
  var rows = stripKeys(rawData.tables(0),
    [
      "2017",
      "Langform des Staatsnamens",
      "Fläche",
      "in km²",
      "Einw.",
      "pro km²",
      "Flag&shy;ge",
      "TLD",
      "Englischer Name",
      "ISO-3-Kürzel",
      "ISO-2-Kürzel"
    ]);

  var filteredRows = stripRowsWhereKeyHasValue(rows, "Staat",
    [
      "Erde",
      "Europäische Union",
      "Verband Südost&shy;asiatischer Nationen",
      "Organisation Amerikanischer Staaten",
      "Afrikanische Union",
      "Union Südamerikanischer Nationen",
      "Staat"
    ]);

  return filteredRows;
}
