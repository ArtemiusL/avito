import classnames from 'classnames';

const modsClasses = (mods, props, styles) => {
  const classes = mods.map((key) => {
    const value = props[key];
    return styles[`${key}-${value}`];
  });
  return classnames(props.className, ...classes);
};

export default modsClasses;
