const Header = () => {
  const isLogin = true;

  if (isLogin) {
    return (
      <Header>
        <button>Dashboard</button>
      </Header>
    );
  }
  return (
    <Header>
      <button>login</button>
    </Header>
  );
};

export default Header;
