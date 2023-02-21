import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState<number>(0)

    return (
        <div className='mx-auto bg-secondary-react px-2 py-4 rounded-lg mb-2 w-full'>
            <div className='flex flex-row justify-center'>
                <button onClick={() => setCount(prev => ++prev)} className="py-2 px-4 m-1 text-neutral-50 bg-primary-react rounded-lg">Count++</button>
                <button onClick={() => setCount(prev => --prev)} className="py-2 px-4 m-1 text-neutral-50 bg-primary-react rounded-lg">Count--</button>
                <button onClick={() => setCount(0)} className="py-2 px-4 m-1 text-neutral-50 bg-primary-react rounded-lg">Reset</button>
            </div>
            <h2 className='text-center my-0'>React counter: { count }</h2>
        </div>
    )
}

export default Counter
