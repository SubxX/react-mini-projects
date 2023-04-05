import { SiRedux } from "react-icons/si";
import { BsFillCartPlusFill } from "react-icons/bs";

const Header = () => {
  return (
    <header className="custom-bg border-bottom mb-10 sticky top-0 left-0 z-10 backdrop-blur-2xl">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center justify-between gap-2">
          <SiRedux size={30} />
          <div className="font-bold tracking-wider">REMATCH</div>
        </div>

        <div>
          <button className="icon-btn" aria-label="Cart">
            <BsFillCartPlusFill />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
