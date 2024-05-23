import Button from "../../components/Button";
import MenuItems from "../../components/MenuItems";
import SectionTitle from "../../components/SectionTitle";
import useMenu from "../../hooks/useMenu";
import MenuItem from "../shared/MenuItem";

const OfferedItems = () => {
    const menu = useMenu();
    const offeredItems = menu.filter(item => item.category === 'offered');
    return (
        <div className="space-y-9">
            <div>
                <SectionTitle
                    heading={"Today's Offer"}
                    subHeading={"-----Don't Miss-----"}
                ></SectionTitle>
            </div>
            <MenuItems item={offeredItems}></MenuItems>
            <div className="w-full text-center">
                <Button name={'ORDER YOUR FAVORITE FOOD'}></Button>
            </div>
        </div>
    );
};

export default OfferedItems;