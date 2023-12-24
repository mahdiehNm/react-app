const Header = () => {
  const isLogin = false;

  return (
    <header>
      {isLogin ? (
        <>
          <button>dashboard</button>
          <button>basket</button>
        </>
      ) : (
        <>
        <button>login</button>
        <button>basket</button>
      </>      )}
    </header>
  );
};

export default Header;
