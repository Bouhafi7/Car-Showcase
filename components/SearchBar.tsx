"use client";
import Image from "next/image";
import { SearchManufacturer } from ".";
import { useState } from 'react';
import { useRouter } from "next/navigation";


const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
    return (
        <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
            <Image src="/magnifying-glass.svg" alt="Magnifying Glass" width={40} height={40} className="object-contain" />
        </button>
    );
};

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('');
    const [model, setModel] = useState('');

    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (manufacturer === '' && model === '') {
            return alert('Please fill in the search bar.');
        }
        handleUpdateParams();
    };

    const handleUpdateParams = () => {
        const searchParams = new URLSearchParams(window.location.pathname);
        if (manufacturer) {
            searchParams.set('manufacturer', manufacturer.toLowerCase());
        } else {
            searchParams.delete('manufacturer');
        }
        
        if (model) {
            searchParams.set('model', model.toLowerCase());
        } else {
            searchParams.delete('model');
        }

        const newPathName = `${window.location.pathname}?${searchParams}`;
        router.push(newPathName, { scroll: false });
    };

    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
                <SearchButton otherClasses='sm:hidden' />
            </div>
            <div className="searchbar__item">
                <Image src="/model-icon.png" alt="Car Model" width={25} height={25} className="absolute w-[20px] h-[20px] ml-4" />
                <input type="text" name="model" value={model} onChange={e => setModel(e.target.value)} placeholder="Tiguan" className="searchbar__input" />
                <SearchButton otherClasses='sm:hidden' />
            </div>
            <SearchButton otherClasses='max-sm:hidden' />
        </form>
    );
};

export default SearchBar;