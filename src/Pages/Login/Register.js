import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading';

const Register = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [token] = useToken(user || gUser)
    const navigate= useNavigate();

    let signInError;

    if (loading || gLoading || updating) {
        return <Loading />
    }
    if (error || gError || updateError) {
        signInError = <p className='text-red-500'>{error?.message || gError?.message || updateError?.message}</p>
    }

    if (token) {
        navigate('/')
    }
    const onSubmit = async data => {
        // console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
         updateProfile({ displayName: data.name });
        console.log('update done')
        // navigate('/')
    };
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-3xl font-bold">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>

                            </label>
                            <input
                                type="text"
                                placeholder="your name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'name is required',
                                    }

                                },
                                    {
                                        minLength: {
                                            value: 4,
                                            message: 'Name must be 4 characters or longer'
                                        }
                                    })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <p role="alert"><span className="label-text-alt text-red-600">{errors.name.message}</span></p>}
                                {errors.name?.type === 'minLength' && <p role="alert"><span className="label-text-alt text-red-600">{errors.name.message}</span></p>}


                            </label>
                        </div>
                        

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>

                            </label>
                            <input
                                type="email"
                                placeholder="your email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required',
                                    }

                                },
                                    {
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'provide a valid email'
                                        }
                                    })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <p role="alert"><span className="label-text-alt text-red-600">{errors.email.message}</span></p>}
                                {errors.email?.type === 'pattern' && <p role="alert"><span className="label-text-alt text-red-600">{errors.email.message}</span></p>}


                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>

                            </label>
                            <input
                                type="password"
                                placeholder="your password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'password is required',
                                    }

                                },
                                    {
                                        minLength: {
                                            value: 6,
                                            message: 'password must be 6 characters or longer'
                                        }
                                    })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <p role="alert"><span className="label-text-alt text-red-600">{errors.password.message}</span></p>}
                                {errors.password?.type === 'minLength' && <p role="alert"><span className="label-text-alt text-red-600">{errors.password.message}</span></p>}


                            </label>
                        </div>



                        {signInError}

                        <input className='btn w-full max-w-xs text-white' type="submit" value="Create Account" />
                    </form>
                    <p>Already have an account? <Link className='text-blue-800' to="/login">Create New Account </Link> </p>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()}
                        className="btn btn-active btn-secondary">Sign In with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;