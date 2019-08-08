import { stripKeys } from './../utils';

export default function(rawData) {

  return stripKeys(rawData.tables(0),
    [
      "Herkunft/Verbreitung",
      "Bild",
      "olympisch",
      "Typ",
      "Teamgröße",
      "Ort der Ausübung"
    ]);
}
