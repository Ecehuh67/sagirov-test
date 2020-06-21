import '../../less/style.less';
import SignUp from '../sign-up/sign-up';
import SignIn from '../sign-in/sign-in';

const App = () => {
  const [isSighIn, setSignIn] = React.useState(false);

  return <>{!isSighIn ? <SignUp handler={setSignIn} /> : <SignIn />}</>;
};

export default App;
