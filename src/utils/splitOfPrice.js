export default (price) => {
  console.log('price', price);
  return (price === undefined ? '0' : String(price).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
};
