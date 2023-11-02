"use client";
import Image from "next/image";
import { CustomButton } from ".";


const Hero = () => {
    const handleScroll = () => {
        window.scrollTo(0, window.scrollY + 900);
    }

    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">Find, Book, or rent a car -- quickly and easily!</h1>
                <p className="hero__subtitle">Stremline your car rental experience with our effortless booking process.</p>
                <CustomButton title="Explore Cars" handleClick={handleScroll} containerStyles="bg-primary-blue text-white rounded-full mt-10
                    hover:border-primary-blue hover:bg-transparent hover:text-primary-blue border" />
            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                    <Image src="/hero.png" alt="hero" fill priority className="object-contain" />
                </div>
                <div className="hero__image-overlay"></div>
            </div>
        </div>
    );
};

export default Hero;