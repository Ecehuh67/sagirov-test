const MIN_LENGTHS = {
  phone: 12,
  name: 3,
};

export const validateEmail = (value, elem) => {
  const symbols = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
  const email = value;

  if (symbols.test(email) === false) {
    elem.classList.add('main__form-wrapper--incorrect');
    return false;
  }

  elem.classList.remove('main__form-wrapper--incorrect');

  return true;
};

export const validatePhone = (phoneNumber) => {
  const value = phoneNumber.replace(/\s/g, '');

  if (value.length < MIN_LENGTHS.phone) {
    return false;
  }

  return true;
};

export const validateName = (name) => {
  if (name.length < MIN_LENGTHS.name) {
    return false;
  }
  return true;
};
