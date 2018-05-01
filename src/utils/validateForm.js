export default (values) => {
  const errors = {};

  if (!values.Subject) {
    errors.Subject = 'required';
  }
  if (!values.Email) {
    errors.Email = 'required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)) {
    errors.Email = 'email';
  }

  if (!values.Budget) {
    errors.Budget = 'required';
  }

  if (!values.Description) {
    errors.Description = 'required';
  }

  if (!values.Name) {
    errors.Name = 'required';
  }
  return errors;
};
