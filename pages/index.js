import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { getSession, signOut, useSession } from "next-auth/react"



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: session } = useSession()

  function handleSignOut(){
    signOut()
  }

  return (
    <>
    <Head>
      <title>Home</title>
    </Head>
    {session ? User({session,handleSignOut}) : Guest()}
    </>
  )
}

function Guest(){
  return(
    <main className='container mx-auto text-center py-20'>
      <h3 className='text-4xl font-bold'>Guest Homepage</h3>
      <div className='flex justify-center'>
      <Link href={"/login"} className='mt-3 px-10 py-1 rounded-sm bg-indigo-500 text-white'>Log In</Link>
      </div>
    </main>
  )
}

function User ({session,handleSignOut}){
  return(
    <main className='container mx-auto text-center py-20'>
      <h3 className='text-4xl font-bold'>Autherize User Homepage</h3>
      <div className='details my-10'>
        <h3 className='text-2xl font-bold my-2'>NAME</h3>
        <h5 className='mb-3'>{session.user.name}</h5>
        <h3 className='text-2xl font-bold my-2'>EMAIL</h3>
        <h5>{session.user.email}</h5>
      </div>
      <div className='flex justify-center'>
        <button onClick={handleSignOut} className='mt-3 px-10 py-1 rounded-sm bg-indigo-500 text-white'>Sign Out</button>
      </div>
      <div className='flex justify-center'>
      <Link href={"/profile"} className='mt-3 px-10 py-1 rounded-sm bg-indigo-500 text-white'>Profile Page</Link>
      </div>
    </main>
  )
}

export async function getServerSideProps({req}){
  const session = await getSession({req})
  
  if(!session){
    return{
      redirect:{
        destination:'/login',
        parmanent: false
      }
    }
  }

  return{
    props : {session}
  }
}