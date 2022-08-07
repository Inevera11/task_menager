import PropTypes from "prop-types";
import { Button } from "./Button";

// const headingStyle = { color: "red", backgroundColor: "yellow" };

const Header = ({ title, onAdd, showAdd }) => {
  // const onClick = () => {
  //   console.log("clicked");
  // };

  return (
    <div>
      <header className="header">
        <h1>
          {/* style={headingStyle} */}
          {title}
        </h1>
        <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close form" : "Add"}
          onClick={onAdd}
        />
      </header>
    </div>
  );
};

Header.defaultProps = {
  title: "TO DO",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
