import '../../less/style.less';

const App = () => {
  return (
    <main>
      <section>
        <h1>Registration</h1>
        <span>Fill in your data</span>
        <form>
          <div>
            <input type="text"></input>
          </div>
          <div>
            <input type="text"></input>
          </div>
          <div>
            <input type="email"></input>
          </div>
          <div>
            {' '}
            <input type=""></input>
          </div>
          <div>
            <input type="tel"></input>
          </div>
          <div>
            <input id="agreement" type="checkbox"></input>
            <label htmlFor="agreement">
              {' '}
              I agree to share my personal data for checking
            </label>
          </div>
          <button type="button">Registration</button>
        </form>
        <ul>
          <li>
            <button>Already has account?</button>
          </li>
          <li>
            <button>Sign in</button>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default App;
