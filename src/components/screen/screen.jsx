const Screen = ({ cb, type }) => {
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      cb(true);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <main className="main main-congratulation html-wrapper">
      <svg width="164" height="164">
        <use xlinkHref="#icon" />
      </svg>
      <p className="main-congratulation__passage">
        {type === 'sign-up' ? 'You have checked-in' : 'You have authorized'}
      </p>
    </main>
  );
};

export default Screen;
