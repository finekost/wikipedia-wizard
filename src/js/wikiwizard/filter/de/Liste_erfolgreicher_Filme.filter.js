import { stripKeys } from './../utils';

export default function(rawData) {

  return stripKeys(rawData.tables(0),
    [
      "Produktionsland",
      "Einspiel&shy;ergebnis (nom.)",
      "Einspiel&shy;ergebnis (infl.-ber.)",
      "Produktions&shy;kosten",
      "Kapital&shy;rendite",
      "Marketing&shy;kosten",
    ]);
}
