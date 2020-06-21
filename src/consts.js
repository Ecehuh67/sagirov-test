const MIN_LENGTHS = {
  phone: 12,
  name: 3,
  password: 5,
};

const GRADES_OF_STRENGTH_PASSWORD = {
  0: {
    text: '',
    color: 'white',
  },
  1: {
    text: 'weak',
    color: 'red',
  },
  2: {
    text: 'easy',
    color: 'orange',
  },
  3: {
    text: 'normal',
    color: 'lightgreen',
  },
  4: {
    text: 'strong',
    color: 'green',
  },
};

const DELAY = 1000;

const DEBOUNCE = function (f) {
  let lastTimeout = false;

  return function () {
    if (lastTimeout) {
      clearTimeout(lastTimeout);
    }

    lastTimeout = setTimeout(() => {
      f.apply(this, arguments);
    }, DELAY);
  };
};

const checkEmail = (value, elem) => {
  const symbols = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
  const email = value;

  if (symbols.test(email) === false) {
    elem.classList.add('main__form-wrapper--incorrect');
    return false;
  }

  elem.classList.remove('main__form-wrapper--incorrect');

  return true;
};

const checkPhone = (phoneNumber) => {
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

export const validatePassword = (password, callback) => {
  const lowerCaseLetters = /[a-z]/g;
  const upperCaseLetters = /[A-Z]/g;
  const numbers = /[0-9]/g;
  const symbols = /[^a-zA-Z0-9]/g;

  let counter = 0;

  const isLowerLetters = password.match(lowerCaseLetters);
  const isUpperLetters = password.match(upperCaseLetters);
  const isNumbers = password.match(numbers);
  const isSymbols = password.match(symbols);

  const chain = [isLowerLetters, isUpperLetters, isNumbers, isSymbols];

  chain.forEach((el) => {
    if (el) {
      counter++;
    }
  });

  callback(GRADES_OF_STRENGTH_PASSWORD[counter]);

  if (password.length < MIN_LENGTHS.password) {
    return false;
  }
  return true;
};

const shiftState = (field, bool, value, cb) => {
  if (bool) {
    cb((prev) => {
      return {
        ...prev,
        [field]: {
          isFilled: true,
          value,
        },
      };
    });
  } else {
    cb((prev) => {
      return {
        ...prev,
        [field]: false,
      };
    });
  }
};

export const validateEmail = DEBOUNCE(checkEmail);
export const validatePhone = DEBOUNCE(checkPhone);
export const changeState = DEBOUNCE(shiftState);
