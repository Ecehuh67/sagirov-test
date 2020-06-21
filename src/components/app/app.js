import '../../less/style.less';
import SignUp from '../sign-up/sign-up';
import SignIn from '../sign-in/sign-in';

const App = () => {
  // save data from sign-up form
  const [userData, setUserData] = React.useState({});
  const [isSighIn, setSignIn] = React.useState(false);

  return (
    <>
      {!isSighIn ? (
        <SignUp changeHandler={setSignIn} userDataHandler={setUserData} />
      ) : (
        <SignIn changeHandler={setSignIn} />
      )}
    </>
  );
};

export default App;
