import Inputmask from 'react-input-mask';
import Screen from '../screen/screen';
import {
  validateEmail,
  validatePhone,
  validateName,
  validatePassword,
  changeState,
} from '../../consts';

const SignUp = ({ changeHandler, userDataHandler }) => {
  const [isSigned, setSign] = React.useState(false);
  const [formFields, setFormFields] = React.useState({
    name: {
      isFilled: null,
      value: null,
    },
    nickname: {
      isFilled: null,
      value: null,
    },
    email: {
      isFilled: null,
      value: null,
    },
    phone: {
      isFilled: null,
      value: null,
    },
    password: {
      isFilled: null,
      value: null,
    },
    agreement: {
      isFilled: null,
      value: null,
    },
  });

  const [password, setPassword] = React.useState({
    text: '',
    color: '',
  });

  console.log(formFields);

  return (
    <>
      {isSigned && <Screen cb={changeHandler} type={'sign-up'} />}
      {!isSigned && (
        <>
          <main className="main html-wrapper">
            <section className="main__wrapper">
              <h1 className="main__caption">Registration</h1>
              <span className="main__passage">Fill in your data</span>
              <form className="main__form">
                <div className="main__form-wrapper">
                  <input
                    className="main__form-input"
                    type="text"
                    id="name"
                    placeholder="Name"
                    onChange={(evt) => {
                      const isNameValid = validateName(evt.target.value);
                      changeState(
                        'name',
                        isNameValid,
                        evt.target.value,
                        setFormFields
                      );
                    }}
                  ></input>
                </div>
                <div className="main__form-wrapper">
                  <input
                    className="main__form-input"
                    type="text"
                    id="nickName"
                    placeholder="Nickname"
                    onChange={(evt) => {
                      const isNickNameValid = validateName(evt.target.value);
                      changeState(
                        'nickname',
                        isNickNameValid,
                        evt.target.value,
                        setFormFields
                      );
                    }}
                  ></input>
                </div>
                <div className="main__form-wrapper">
                  <input
                    className="main__form-input"
                    type="email"
                    id="email"
                    placeholder="Email"
                    onChange={(evt) => {
                      const isEmailValid = validateEmail(
                        evt.target.value,
                        evt.target.parentNode
                      );
                      changeState(
                        'email',
                        isEmailValid,
                        evt.target.value,
                        setFormFields
                      );
                    }}
                  ></input>
                </div>
                <div className="main__form-wrapper">
                  <Inputmask
                    mask="+7 999 999 99 99"
                    maskChar=""
                    className="main__form-input"
                    placeholder="Phone"
                    onChange={(evt) => {
                      const isPhoneValid = validatePhone(evt.target.value);
                      changeState(
                        'phone',
                        isPhoneValid,
                        evt.target.value,
                        setFormFields
                      );
                    }}
                  />
                </div>
                <div className="main__form-wrapper">
                  <input
                    className="main__form-input"
                    type="password"
                    placeholder="Password"
                    onChange={(evt) => {
                      const isPasswordValid = validatePassword(
                        evt.target.value,
                        setPassword
                      );
                      changeState(
                        'password',
                        isPasswordValid,
                        evt.target.value,
                        setFormFields
                      );
                    }}
                  ></input>
                  <span style={{ color: `${password.color}` }}>
                    {password.text}
                  </span>
                </div>
                <div className="main__footer">
                  <label className="main__form-label">
                    <input
                      className="visually-hidden"
                      id="agreement"
                      type="checkbox"
                      onChange={(evt) => {
                        const isChecked = evt.target.checked;
                        changeState(
                          'agreement',
                          isChecked,
                          evt.target.checked,
                          setFormFields
                        );
                      }}
                    ></input>
                    <span className="radio-indicator"></span>
                  </label>
                  <span className="main__form-agreement">
                    I agree to share my personal data
                  </span>
                </div>
                <button
                  className={
                    Object.keys(formFields).every(
                      (it) => formFields[it].isFilled === true
                    )
                      ? 'main__form-button main__form-button--active'
                      : 'main__form-button'
                  }
                  type="button"
                  disabled={
                    !Object.keys(formFields).every(
                      (it) => formFields[it].isFilled === true
                    )
                  }
                  onClick={(evt) => {
                    evt.preventDefault();
                    const userData = Object.keys(formFields).reduce(
                      (acc, current) => {
                        return {
                          ...acc,
                          [current]: formFields[current].value,
                        };
                      },
                      {}
                    );
                    userDataHandler(userData);
                    setSign(true);
                  }}
                >
                  Registration
                </button>
              </form>
              <div className="main__sign-in-wrapper">
                <span className="main__sign-in-span">Already has account?</span>
                <button
                  className="main__sign-in-button"
                  onClick={() => {
                    changeHandler(true);
                  }}
                >
                  Sign in
                </button>
              </div>
            </section>
          </main>
        </>
      )}
    </>
  );
};

export default SignUp;
