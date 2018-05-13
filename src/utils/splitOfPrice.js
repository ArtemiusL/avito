export default price => (price === undefined ? '0' : String(price).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
