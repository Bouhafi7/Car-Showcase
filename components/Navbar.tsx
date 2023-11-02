import Image from "next/image";
import Link from "next/link";
import { CustomButton } from ".";


const Navbar = () => {
    return (
        <header className="w-full absolute z-10">
            <nav className="max-w-[1440px] mx-auto flex sm:px-16 px-6 py-4">
                <Link href="/" className="w-full flex justify-between items-center">
                    <Image src="/logo.svg" alt="Car Hub Logo" width={118} height={80} className="object-contain" style={{ 'height': "auto" }} />
                    <CustomButton title="Sign In" type="button" containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]
                    hover:border-white hover:bg-transparent hover:text-white border" />
                </Link>
            </nav>
        </header>
    );
};

export default Navbar;