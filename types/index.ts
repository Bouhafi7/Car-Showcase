import { MouseEventHandler, Dispatch, SetStateAction } from 'react';

export interface CustomButtonProps {
    title: string,
    type?: "button" | "submit",
    containerStyles?: string,
    textStyles?: string,
    rightIcon?: string,
    isDisabled?: boolean,
    handleClick?: MouseEventHandler<HTMLButtonElement>
}

export interface OptionsProps {
    title: string,
    value: string
}

export interface CustomFilterProps {
    title: string,
    options: OptionsProps[],
}

export interface SearchManufacturerProps {
    manufacturer: string,
    setManufacturer: Dispatch<SetStateAction<string>>,
}

export interface CarCardProps {
    city_mpg: number,
    class: string,
    combination_mpg: number,
    cylinders: number,
    displacement: number,
    drive: string,
    fuel_type: string,
    highway_mpg: number,
    make: string,
    model: string,
    transmission: string,
    year: number
}

export interface CarDetailsProps {
    isOpen: boolean,
    closeModal: () => void,
    car: CarCardProps
}

export interface FilterProps {
    manufacturer: string,
    year: number,
    fuel: string,
    limit: number,
    model: string
}

export interface SearchParamsProps {
    searchParams: { 
        manufacturer: string,
        year: number,
        fuel: string,
        limit: number,
        model: string,
        pageNumber: number
    },
}

export interface ShowMoreProps {
    pageNumber: number,
    isNext: boolean
}