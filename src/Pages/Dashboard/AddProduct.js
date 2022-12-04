import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const imgStorageKey ='b45577590052caef69c902118f449152';
    const onSubmit = async data => {
        const image= data.image[0];
        const formData= new FormData();
        formData.append('image', image)
        const url =`https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        fetch(url,{
            method: 'POST',
            body: formData
        })
        .then(res=> res.json())
        .then(result=>{
            if(result.success){
                console.log(result);
                const img= result.data.url;
               
                const newProduct={
                    name: data.name,
                    price: data.price,
                    description: data.description,
                    img: img
                }
                console.log(newProduct)
                //sending to database
                fetch(`http://localhost:5000/newProduct`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(newProduct)
                })
                    .then(res => res.json())
                    .then(inserted => {
                        console.log(inserted)
                    })
            }
           
        })
       
    };
    return (
        <div className='ml-10'>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-3xl my-12">Add a product</h2>
                <div className="form-control w-full max-w-xs">
                   
                    <input
                        type="text"
                        placeholder="product name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'product name is required',
                            }

                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <p role="alert"><span className="label-text-alt text-red-600">{errors.name.message}</span></p>}
                        


                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    
                    <input
                        type="text"
                        placeholder="product price"
                        className="input input-bordered w-full max-w-xs"
                        {...register("price", {
                            required: {
                                value: true,
                                message: 'price value is required',
                            }

                        },
                            )}
                    />
                    <label className="label">
                        {errors.price?.type === 'required' && <p role="alert"><span className="label-text-alt text-red-600">{errors.price.message}</span></p>}
                        


                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    

                    <input
                        type="text"
                        placeholder="description"
                        className="input input-bordered w-full max-w-xs"
                        {...register("description", {
                            required: {
                                value: true,
                                message: 'description is required',
                            }

                        })}
                    />
                    <label className="label">
                        {errors.description?.type === 'required' && <p role="alert"><span className="label-text-alt text-red-600">{errors.description.message}</span></p>}
                        


                    </label>
                </div>
                
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">upload image</span>

                    </label>
                    <input
                        type="file"
                        placeholder="your password"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is required',
                            }

                        },
                            )}
                    />
                    <label className="label">
                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}
                        </span>}
                        
                    </label>
                </div>           

                <input className='btn w-full max-w-xs text-white' type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;