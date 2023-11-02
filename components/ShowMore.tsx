'use client';
import { updateSearchParams } from "@/utils";
import { CustomButton } from ".";
import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";



const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
    const router = useRouter();

    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10;
        const newPathName = updateSearchParams('limit', `${newLimit}`);
        router.push(newPathName, { scroll: false });
    };

    return (
        !isNext && <CustomButton title="Show More" type="button" containerStyles="bg-primary-blue text-white border border-primary-blue 
        hover:bg-white hover:text-primary-blue mt-5 mx-auto rounded-full" handleClick={handleNavigation} />
    );
};

export default ShowMore;