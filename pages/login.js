import React, { useState } from 'react'
import Head from 'next/head'
import Layout from '@/layout/layout'
import Link from 'next/link'
import Styles from '../styles/form.module.css'
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import { HiAtSymbol,HiFingerPrint } from 'react-icons/hi';
import { signIn, signOut } from "next-auth/react"
import { useFormik } from 'formik';
import login_validate from '@/lib/validate'


function Login() {
    const[show, setShow] = useState(false);

    // formik hook
    const formik = useFormik({
        initialValues: {
            email:'',
            password:''
        },
        validate: login_validate,
        onSubmit
    })

    

    async function onSubmit (values){
        console.log(values);
    }
    // google handler func

    async function handleGoogleSignin(){
        signIn('google',{callbackUrl:"http://localhost:3000"})
    }

    // Github Handlet Func

    async function handleGithubSignin(){
        signIn('github',{callbackUrl:"http://localhost:3000"})
    }

  return (
    <Layout>

        <Head>
            <title>Login</title>
        </Head>
        
        <section className='w-3/4 mx-auto flex flex-col gap-10'>
            <div className="title">
                <h1 className='text-gray-800 text-4xl font-bold py-4'>Explore</h1>
                <p className='w-3/4 mx-auto text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing </p>
            </div>

            {/* {form} */}

            <form action="" className='flex flex-col gap-5' onSubmit={formik.handleSubmit}>
                <div className={Styles.inputGroup}>
                    <input
                        className={Styles.inputText}
                        type="email"
                        name='email'
                        placeholder='Email'
                        {...formik.getFieldProps('email')}
                        />
                        <span className='icon flex items-center px-4'><HiAtSymbol></HiAtSymbol></span>
                        
                </div>
                {formik.errors.email && formik.touched.email ?<span className='text-rose-500 text-xs'>{formik.errors.email}</span>:<></>}
                <div className={Styles.inputGroup}>
                    <input
                        className={Styles.inputText}
                        type={`${show ? "text": "password"}`}
                        name='password'
                        placeholder='Password'
                        {...formik.getFieldProps('password')}
                        />
                         <span onClick={()=>{setShow(!show)}} className='icon flex items-center px-4'><HiFingerPrint></HiFingerPrint></span>
                </div>
                         {formik.errors.password && formik.touched.password ? <span className='text-rose-500 text-xs'>{formik.errors.password}</span>:<></>}

                {/* {login buttons} */}

                <div className="input-button">
                    <button className={Styles.button} type='submit'>Login</button>    
                </div>
                <div className="input-button">
                <button onClick={handleGoogleSignin} className={Styles.buttonCustom} type='button'>Sign In with Google <FcGoogle></FcGoogle></button>    
                </div>
                <div className="input-button">
                <button onClick={handleGithubSignin} className={Styles.buttonCustom} type='button'>Sign In with GitHub <AiFillGithub></AiFillGithub></button>   
                </div>
            </form>

            {/* {bottom} */}

            <p className='text-center text-gray-500'>
                Don't have an account yet? <Link className='text-purple-700' href={"/registor"}>Sign Up</Link>
            </p>
        </section>
    </Layout>
  )
}

export default Login
