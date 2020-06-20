const SignUp = () => {
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
              ></input>
            </div>
            <div className="main__form-wrapper">
              <input
                className="main__form-input"
                type="text"
                id="nickName"
                placeholder="Nickname"
              ></input>
            </div>
            <div className="main__form-wrapper">
              <input
                className="main__form-input"
                type="email"
                id="email"
                placeholder="Email"
              ></input>
            </div>
            <div className="main__form-wrapper">
              {' '}
              <input
                className="main__form-input"
                type="tel"
                placeholder="Phone"
              ></input>
            </div>
            <div className="main__form-wrapper">
              <input
                className="main__form-input"
                type="password"
                placeholder="Password"
              ></input>
            </div>
            <div className="main__form-wrapper">
              <label className="main__form-label">
                <input
                  className="visually-hidden"
                  id="agreement"
                  type="checkbox"
                ></input>
                <span className="radio-indicator"></span>
              </label>
              <span className="main__form-agreement">
                I agree to share my personal data
              </span>
            </div>
            <button
              className="main__form-button"
              type="button"
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
