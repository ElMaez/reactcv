const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li className="menuLi">
            <a className="menuBtn" href="#">
              Home
            </a>
          </li>
          <li className="menuLi">
            <a className="menuBtn" href="#qualifications">
              Qualifications
            </a>
            <div className="test"></div>
          </li>
          <li className="menuLi">
            <a className="menuBtn" href="#about">
              About Me
            </a>
          </li>
          <li className="menuLi">
            <a className="menuBtn" href="#education">
              Education
            </a>
          </li>
          <li className="menuLi">
            <a className="menuBtn" href="#experience">
              Experience
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
