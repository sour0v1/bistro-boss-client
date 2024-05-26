
const MenuItem2 = ({ item }) => {
    console.log(item);
    const { name, recipe, price, image } = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="">
                <img src={image} />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className="btn btn-warning">Add to Cart</button>
                </div>
            </div>
        </div>
    );

};

export default MenuItem2;