import '../../less/style.less';
import SignUp from '../sign-up/sign-up';
import SignIn from '../sign-in/sign-in';

const App = () => {
  const [isSighIn, setSignIn] = React.useState(false);

  return <>{!isSighIn ? <SignUp /> : <SignIn />}</>;
};

export default App;
