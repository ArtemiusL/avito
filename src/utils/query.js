import queryString from 'query-string';

export const objectToQueryString = obj => `?${queryString.stringify(obj)}`;

export const queryStringToObject = string => queryString.parse(string);
