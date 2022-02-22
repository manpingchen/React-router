import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <nav>
      <ul>
        <li>
          {/* <Link /> prevent page refreshed, using <a /> causes page refreshed and state loosing  */}
          <Link to="/welcome">Welcome</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainHeader;
