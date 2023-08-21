'use client';
import React, { Suspense } from 'react'
import Loading from './loading';

const New = () => {
    const a = [1, 3, 5, 7, 11, 13]
    return (<>

        <Suspense fallback={<Loading />}>

            {a.map((key) => {
                setInterval(() => { }, 5000)
                return <div className='bg-green-500 m-2 cursor-pointer' onClick={() => confirm('Is ' + key * key + " prime?")} key={key}>{key}</div>
            })}
        </Suspense>
    </>
    )
}

export default New