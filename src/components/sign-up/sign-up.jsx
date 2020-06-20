import Inputmask from 'react-input-mask';
import ReactPasswordStrength from 'react-password-strength';
import { validateEmail, validatePhone, validateName } from '../../consts';

const SignUp = () => {
  const [formFields, setFormFields] = React.useState({
    name: null,
    nickname: null,
    email: null,
    phone: null,
    password: null,
    agreement: null,
  });

  const changeState = (field, value) => {
    if (value) {
      setFormFields((prev) => {
        return {
          ...prev,
          [field]: true,
        };
      });
    } else {
      setFormFields((prev) => {
        return {
          ...prev,
          [field]: false,
        };
      });
    }
  };

  let password = null;

  const changePassword = (value) => {
    password = value;
  };

  console.log(formFields, password);

  return (
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
                  changeState('name', isNameValid);
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
                  changeState('nickname', isNickNameValid);
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
                  changeState('email', isEmailValid);
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
                  changeState('phone', isPhoneValid);
                }}
              />
            </div>
            <div className="main__form-wrapper">
              <input
                className="main__form-input"
                type="password"
                placeholder="Password"
              ></input>
            </div>
            <div className="main__footer">
              <label className="main__form-label">
                <input
                  className="visually-hidden"
                  id="agreement"
                  type="checkbox"
                  onChange={(evt) => {
                    const isChecked = evt.target.checked;
                    changeState('agreement', isChecked);
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
                Object.keys(formFields).every((it) => formFields[it] === true)
                  ? 'main__form-button main__form-button--active'
                  : 'main__form-button'
              }
              type="button"
              disabled={Object.keys(formFields).every(
                (it) => formFields[it] === true
              )}
              onClick={(evt) => {
                evt.preventDefault();
              }}
            >
              Registration
            </button>
          </form>
          <div className="main__sign-in-wrapper">
            <span className="main__sign-in-span">Already has account?</span>
            <button className="main__sign-in-button">Sign in</button>
          </div>
        </section>
      </main>
    </>
  );
};

export default SignUp;
