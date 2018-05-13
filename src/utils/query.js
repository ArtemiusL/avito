import qs from 'querystrings';

export const objectToQueryString = obj => qs.stringify(obj);

export const queryStringToObject = (string) => {
  const newString = string.replace('?', '');
  const value = qs.parse(newString);
  if (value[''] === 'undefined') {
    return {};
  }
  return value;
};
