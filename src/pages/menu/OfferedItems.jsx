import Button from "../../components/Button";
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
            <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-6 p-6 lg:p-0'>
                {
                    offeredItems.map(item => <MenuItem item={item} key={item._id}></MenuItem>)
                }
            </div>
            <div className="w-full text-center">
                <Button name={'ORDER YOUR FAVORITE FOOD'}></Button>
            </div>
        </div>
    );
};

export default OfferedItems;