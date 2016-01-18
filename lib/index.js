import {
  arcgisToGeoJSON
} from 'arcgis-to-geojson-utils';

export function convert (object) {
  return arcgisToGeoJSON(object);
}