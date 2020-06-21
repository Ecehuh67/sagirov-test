import Screen from '../screen/screen';
import { validateEmail, changeState } from '../../consts';

const SignIn = ({ changeHandler }) => {
  const [isSigned, setSign] = React.useState(false);
  const [formFields, setFormFields] = React.useState({
    email: {
      isFilled: null,
      value: null,
    },
    password: {
      isFilled: null,
      value: null,
    },
  });

  return (
    <>
      {isSigned && <Screen cb={changeHandler} />}
      {!isSigned && (
        <main className="main html-wrapper">
          <section className="main__wrapper">
            <h1 className="main__caption">Sign-in</h1>
            <span className="main__passage">Fill in your data</span>
            <form className="main__form">
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
                <input
                  className="main__form-input"
                  type="password"
                  placeholder="Password"
                  onChange={(evt) => {
                    let isPasswordValid = null;
                    if (evt.target.value.length > 5) {
                      isPasswordValid = true;
                      changeState(
                        'password',
                        isPasswordValid,
                        evt.target.value,
                        setFormFields
                      );
                    }
                  }}
                ></input>
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
                onClick={(evt) => {
                  evt.preventDefault();
                  setSign(true);
                }}
              >
                GET IN
              </button>
            </form>
            <div className="main__sign-in-wrapper">
              <span className="main__sign-in-span">
                Doesn't have account yet?
              </span>
              <button
                className="main__sign-in-button"
                onClick={() => {
                  changeHandler(false);
                }}
              >
                Sign up
              </button>
            </div>
          </section>
        </main>
      )}
    </>
  );
};

export default SignIn;
