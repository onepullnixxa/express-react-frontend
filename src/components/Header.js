import { Link } from "react-router-dom";

function Header(props) {
  //inline style for the nav tag
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    padding: "8px",
    width: "90%",
    margin: "auto",
  };

  return (
    <header>
      <nav style={navStyle}>
        <Link to="/">
          <div className="home-link-header">CB</div>
        </Link>
        <Link to="/about">
          <div className="right-side-header">ABOUT</div>
        </Link>
        <Link to="/projects">
          <div className="right-side-header">PROJECTS</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
