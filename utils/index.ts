import { CarCardProps, FilterProps } from "@/types";


export async function fetchCars(filters: FilterProps) {
    const { manufacturer, year, fuel, limit, model } = filters;

    const headers = {
        'X-RapidAPI-Key': '0a4ed29f27mshd8c6ac4eef4dd00p16bed8jsn8134bc14b437',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    };
    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}
    &model=${model}&limit=${limit}&fuel_type=${fuel}`, { headers });
    const result = await response.json();

    return result;
}


export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const milAgeFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    const milAgeRate = city_mpg * milAgeFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // calculate total rental per day
    const rentalRatePerDay = basePricePerDay + milAgeRate + ageRate;

    return rentalRatePerDay;
}

export const generateCarImageUrl = (car: CarCardProps, angle?: string) => {
    const url = new URL('https://cdn.imagin.studio/getimage')

    const { make, year, model } = car;
    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(' ')[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelyear', `${year}`);
    url.searchParams.append('angle', `${angle}`);

    return `${url}`;
}


export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(type, value);
    const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

    return newPathName;
}