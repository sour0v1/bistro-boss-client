import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle";
import axios from "axios";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItems = () => {
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        console.log(data);
        const imageFile = { image: data.photo[0] };
        // console.log(imageFile)
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        console.log(res.data);
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                recipe: data.details,
                image: res.data.data.display_url,
                category: data.category,
                price: parseFloat(data.price),
            }
            const menuRes = await axiosSecure.post('http://localhost:5000/add-item', menuItem)
            console.log('menu res -', menuRes.data);
            if (menuRes.data.insertedId) {
                Swal.fire({
                    title: "Success!",
                    text: "Added Successfully",
                    icon: "success"
                });
            }
        }
    }

    console.log(watch("example"))
    return (

        <>
            <div className="my-9">
                <SectionTitle subHeading={`what's new`} heading={'Add Item'}></SectionTitle>
            </div>
            <form className="grid grid-cols-2 w-2/3 mx-auto bg-gray-200 p-9 gap-6 mb-16" onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <div className="flex flex-col col-span-2 gap-1">
                    <label className="">
                        <span className="font-medium text-sm">Recipe Name*</span>
                    </label>
                    <input className="py-2 px-3" placeholder="Recipe Name" {...register("name")} />
                </div>

                {/* include validation with required or other standard HTML validation rules */}
                <div className="flex flex-col gap-1">
                    <label>
                        <span className="font-medium text-sm">Category*</span>
                    </label>
                    <select defaultValue="default" className="py-2 px-3" {...register("category", { required: true })}>
                        <option value="default">Select a category</option>
                        <option value="salad">Salad</option>
                        <option value="dessert">Dessert</option>
                        <option value="pizza">Pizza</option>
                        <option value="drinks">Drinks</option>
                    </select>
                    {errors.exampleRequired && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="flex flex-col gap-1">
                    <label>
                        <span className="font-medium text-sm">Price*</span>
                    </label>
                    <input className="py-2 px-3" placeholder="Price" type="number" {...register("price", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="flex flex-col col-span-2 gap-1">
                    <label>
                        <span className="font-medium text-sm">Details*</span>
                    </label>
                    <textarea placeholder="Recipe Details" className="col-span-2 px-3" {...register("details", { required: true })}></textarea>
                </div>
                <input type="file" {...register("photo", { required: true })} />

                <input className="bg-orange-500 col-span-2 w-fit px-3 py-2 text-white rounded" type="submit" value="Add Item" />
            </form>
        </>
    );
};

export default AddItems;