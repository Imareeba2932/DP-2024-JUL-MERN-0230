'use client';
import React,{useState} from 'react'

const EventHandling = () => {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count+1)
    }

    const handleDecrement = () => {
        setCount(count-1)
    }
    const handleReset = () => {
        setCount(0)
    }
    return (
        <div>
            <h1 className='text-center font-bold text-4xl'>Event Handling</h1>
            <button className='border bg-gray-800 text-white rounded p-2'
                onClick={() => { alert('Hurray') }} >Click Me</button>

            <section className='mt-5'>
                <h2>Count Handling</h2>
                <h4 className=''>Number of counts : {count} </h4>
                <div className="">
                    <button onClick={handleIncrement}>Increment</button>
                    <button onClick={handleDecrement}>decrement</button>
                    <button onClick={handleReset}>Reset</button>
                </div>
            </section>
        </div>
    )
}

export default EventHandling;