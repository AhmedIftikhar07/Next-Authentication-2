import Layout from '@/layout/layout'
import Head from 'next/head'
import React, { useState } from 'react'
import Link from 'next/link'
import Styles from '../styles/form.module.css'
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from 'react-icons/hi';
import { useFormik } from 'formik';
import { registorValidate } from '@/lib/validate'





function Registor() {
    const [show, setShow] = useState({ password: false, cpassword: false })

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            cpassword: '',
        },
        validate: registorValidate,
        onSubmit
    })
    async function onSubmit(values) {
        console.log(values);
    }
    return (
        <Layout>
            <Head>
                <title>Registor</title>
            </Head>
            <section className='w-3/4 mx-auto flex flex-col gap-10'>
                <div className="title">
                    <h1 className='text-gray-800 text-4xl font-bold py-4'>Registor</h1>
                    <p className='w-3/4 mx-auto text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                </div>

                {/* {form} */}

                <form action="" className='flex flex-col gap-5' onSubmit={formik.handleSubmit}>
                    <div className={Styles.inputGroup}>
                        <input
                            className={Styles.inputText}
                            type="text"
                            name='username'
                            placeholder='username'
                            {...formik.getFieldProps('username')}
                        />
                        <span className='icon flex items-center px-4'><HiOutlineUser></HiOutlineUser></span>
                    </div>
                    {formik.errors.username && formik.touched.username ? <span className='text-rose-500 text-xs'>{formik.errors.username}</span> : <></>}
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
                    {formik.errors.email && formik.touched.email ? <span className='text-rose-500 text-xs'>{formik.errors.email}</span> : <></>}
                    <div className={Styles.inputGroup}>
                        <input
                            className={Styles.inputText}
                            type={`${show.password ? "text" : "password"}`}
                            name='password'
                            placeholder='Password'
                            {...formik.getFieldProps('password')}
                        />
                        <span onClick={() => { setShow({ ...show, password: !show.password }) }} className='icon flex items-center px-4'><HiFingerPrint></HiFingerPrint></span>
                    </div>
                    {formik.errors.password && formik.touched.password ? <span className='text-rose-500 text-xs'>{formik.errors.password}</span> : <></>}
                    <div className={Styles.inputGroup}>
                        <input
                            className={Styles.inputText}
                            type={`${show.cpassword ? "text" : "password"}`}
                            name='cpassword'
                            placeholder='Confirm Password'
                            {...formik.getFieldProps('cpassword')}
                        />
                        <span onClick={() => { setShow({ ...show, cpassword: !show.cpassword }) }} className='icon flex items-center px-4'><HiFingerPrint></HiFingerPrint></span>
                    </div>
                    {formik.errors.cpassword && formik.touched.cpassword ? <span className='text-rose-500 text-xs'>{formik.errors.cpassword}</span> : <></>}
                    {/* {login buttons} */}

                    <div className="input-button">
                        <button className={Styles.button} type='submit'>Registor</button>
                    </div>

                </form>

                {/* {bottom} */}

                <p className='text-center text-gray-500'>
                    Have an account yet? <Link className='text-purple-700' href={"/login"}>Log In</Link>
                </p>
            </section>
        </Layout>
    )
}

export default Registor
