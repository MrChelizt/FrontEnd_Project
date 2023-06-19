import Logo from "../../assets/logo-no-background.png";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <div>
      <img src={Logo} alt="MrChelizt" height={80} />
      <NavBar />
    </div>
  );
}
