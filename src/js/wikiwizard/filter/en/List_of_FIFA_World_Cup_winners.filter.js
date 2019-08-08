import { stripKeys } from './../utils';

export default function(rawData) {

  return rawData.tables(0).keyValue();
}
