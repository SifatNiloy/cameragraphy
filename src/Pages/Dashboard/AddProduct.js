import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async data => {
        console.log(data);
       
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
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'price value is required',
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
                                message: 'description is required',
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