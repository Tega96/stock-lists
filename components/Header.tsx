import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="container ">
        <div className="container header-wrapper">
            <Link href="/">
                <Image src="/assets/icons/logo.svg" alt="Signalist logo" width={140} height={32} className="h-8 w-auto cursor-pointer " />
            </Link>
            <nav className="hidden sm:block">
                <NavItems />
            </nav>
            <MobileNav />
        </div>
    </header>
  );
};

export default Header;