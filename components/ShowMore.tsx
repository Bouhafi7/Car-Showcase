import { CustomButton } from ".";
import { ShowMoreProps } from "@/types";



const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {
    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10;
        setLimit(newLimit);
    };

    return (
        !isNext && <CustomButton title="Show More" type="button" containerStyles="bg-primary-blue text-white border border-primary-blue 
        hover:bg-white hover:text-primary-blue mt-5 mx-auto rounded-full" handleClick={handleNavigation} />
    );
};

export default ShowMore;