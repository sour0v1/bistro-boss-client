
const MenuItem = ({ item }) => {
    console.log(item);
    const { name, recipe, price, image } = item;
    return (
        <div className="flex gap-6">
            <img style={{ borderRadius: '0 200px 200px 200px' }} className="w-32 h-28" src={image} alt="" />
            <div>
                <h2 className="text-xl font-semibold">{name}</h2>
                <p>{recipe}</p>
            </div>
            <p className="text-xl font-medium text-yellow-500">${price}</p>
        </div>
    );

};

export default MenuItem;