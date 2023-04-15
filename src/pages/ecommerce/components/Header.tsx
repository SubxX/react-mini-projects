import { SiRedux } from "react-icons/si";
import { BsFillCartFill } from "react-icons/bs";
import SidebarCart from "./SidebarCart";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);
  const openCartSidebarHandler = () => setOpen(true);

  return (
    <header className="custom-bg border-bottom mb-10 sticky top-0 left-0 z-10 backdrop-blur-2xl">
      <div className="container mx-auto px-4 h-[65px] flex items-center justify-between">
        <div className="flex items-center justify-between gap-2">
          <SiRedux size={30} />
          <div className="font-bold tracking-wider">REMATCH</div>
        </div>

        <div>
          <button
            className="icon-btn"
            aria-label="Cart"
            onClick={openCartSidebarHandler}
          >
            <BsFillCartFill />
          </button>
        </div>
      </div>
      {open && <SidebarCart onClose={onClose} />}
    </header>
  );
};

export default Header;
