import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let signInError;
    const navigate= useNavigate();
    const location= useLocation();
    let from= location.state?.from?.pathname || "/" ;

    if ( loading || gLoading) {
        return <Loading/>
    }
    if (error || gError) {
        signInError = <p className='text-red-500'>{error?.message || gError?.message}</p>
    }

    if (user || gUser) {
        navigate(from, {replace: true});
    }
    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
    };
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-3xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

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

                        <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
                    </form>
                    <p>New to Doctors Portal? <Link className='text-blue-800' to="/register">Create New Account </Link> </p>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()}
                        className="btn btn-active btn-secondary">Sign In with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;