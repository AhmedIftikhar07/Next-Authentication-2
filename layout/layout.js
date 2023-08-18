import React from 'react'
import Styles from '../styles/Layout.module.css'
function Layout({ children }) {
    return (
        <div className='flex h-screen bg-purple-400 '>
            <div className='m-auto bg-slate-50 rounded-md w-3/5 h-3/4 grid lg:grid-cols-2 shadow-md'>
                <div className={Styles.imgStyle}>
                    <div>

                    </div>
                </div>
                <div className='right flex-col flex justify-evenly'>
                    <div className='text-center py-10'>
                        {children}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Layout
