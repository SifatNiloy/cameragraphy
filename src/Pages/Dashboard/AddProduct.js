import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async data => {
        console.log(data);
       
    };
    return (
        <div>
            <h2 className="3xl">Add a product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                   
                    <input
                        type="text"
                        placeholder="product name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'name is required',
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
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'name is required',
                            }

                        },
                            )}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <p role="alert"><span className="label-text-alt text-red-600">{errors.name.message}</span></p>}
                        


                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    

                    <input
                        type="text"
                        placeholder="description"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'name is required',
                            }

                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <p role="alert"><span className="label-text-alt text-red-600">{errors.name.message}</span></p>}
                        


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
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}
                        </span>}
                        
                    </label>
                </div>



            

                <input className='btn w-full max-w-xs text-white' type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;