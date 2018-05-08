import qs from 'querystrings';

export const objectToQueryString = obj => qs.stringify(obj);

export const queryStringToObject = string => qs.parse(string);
