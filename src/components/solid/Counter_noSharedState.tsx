/** @jsxImportSource solid-js */
import { Accessor, createSignal } from 'solid-js'

const Counter = () => {
    const [count, setCount] = createSignal<number>(0)

    return (
        <div class='mx-auto bg-secondary-solid px-2 py-4 rounded-lg mb-2 w-full'>
            <div class='flex flex-row justify-center'>
                <button onClick={() => setCount(prev => ++prev)} class='py-2 px-4 m-1 text-neutral-50 bg-primary-solid rounded-lg'>Count++</button>
                <button onClick={() => setCount(prev => --prev)} class='py-2 px-4 m-1 text-neutral-50 bg-primary-solid rounded-lg'>Count--</button>
                <button onClick={() => setCount(0)} class='py-2 px-4 m-1 text-neutral-50 bg-primary-solid rounded-lg'>Reset</button>
            </div>
            <h2 class='text-center my-0'>Solid counter: { count }</h2>
        </div>
    )
}

export default Counter
