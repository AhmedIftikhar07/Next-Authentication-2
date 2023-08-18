import Layout from '@/layout/layout'
import Head from 'next/head'
import React, { useState } from 'react'
import Link from 'next/link'
import Styles from '../styles/form.module.css'
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import { HiAtSymbol,HiFingerPrint,HiOutlineUser } from 'react-icons/hi';


function Registor() {
  const [show,setShow] = useState({password:false,Cpassword:false})
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

            <form action="" className='flex flex-col gap-5'>
                <div className={Styles.inputGroup}>
                    <input
                        className={Styles.inputText}
                        type="text"
                        name='Username'
                        placeholder='Username'
                        />
                        <span className='icon flex items-center px-4'><HiOutlineUser></HiOutlineUser></span>
                </div>
                <div className={Styles.inputGroup}>
                    <input
                        className={Styles.inputText}
                        type="email"
                        name='email'
                        placeholder='Email'
                        />
                        <span className='icon flex items-center px-4'><HiAtSymbol></HiAtSymbol></span>
                </div>
                <div className={Styles.inputGroup}>
                    <input
                        className={Styles.inputText}
                        type={`${show.password ? "text": "password"}`}
                        name='password'
                        placeholder='Password'
                        />
                         <span onClick={()=>{setShow({...show, password:!show.password})}} className='icon flex items-center px-4'><HiFingerPrint></HiFingerPrint></span>
                </div>
                <div className={Styles.inputGroup}>
                    <input
                        className={Styles.inputText}
                        type={`${show.Cpassword ? "text": "password"}`}
                        name='Cpassword'
                        placeholder='Confirm Password'
                        />
                         <span onClick={()=>{setShow({...show, Cpassword:!show.Cpassword})}} className='icon flex items-center px-4'><HiFingerPrint></HiFingerPrint></span>
                </div>

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
