import A from "../A";
import Img from "./Img";
import Logo from "./Logo.svg";
import NavBar from "./NavBar";
import SearchField from "./SearchField";


function Header() {
  return (
    <NavBar>
      <A href="https://www.reactboilerplate.com/">
        <Img src={Logo} alt="Github Issues React Logo" />
      </A>
      <SearchField placeholder="Search" />
    </NavBar>
  );
}

export default Header;
