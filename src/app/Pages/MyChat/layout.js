import Link from 'next/link';
import React from 'react';

const layout = ({children}) => {
    return (
        <div className=' flex'>
            <div className=' w-[30%]'>
                <Link href={"/Pages/Mychat/Messege"}>here</Link>
            </div>
            <div className='w-[70%]'>
                {children}
            </div>
        </div>
    );
};

export default layout;