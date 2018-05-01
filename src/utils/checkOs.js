export default () => {
  console.log('work');
  let OSName = 'default';
  if (!__SERVER__) {
    if (navigator.userAgent.match(/Android/i)) OSName = 'Android';
    if (navigator.userAgent.match(/iPhone/i)) OSName = 'Ios';
    if (navigator.userAgent.match(/iPad/i)) OSName = 'Ios';
    if (navigator.userAgent.match(/iPod/i)) OSName = 'Ios';
    return OSName;
  }
  return 'default';
};
