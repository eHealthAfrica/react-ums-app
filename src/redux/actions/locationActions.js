import { LOCATIONS_REQUESTS, LOCATIONS_SUCCESS, LOCATIONS_FAILURE } from '../constants';
import config from '../../config';

export default function fetchLocations() {
  return {
    types: [LOCATIONS_REQUESTS, LOCATIONS_SUCCESS, LOCATIONS_FAILURE],
    promise: client => client.get(config.LOCATION_URL),
  };
}
