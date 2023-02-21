import { countStore, countStoreInitialValue } from '../../store/count'
import { useStore } from '@nanostores/react'

const Counter = () => {
    const count: number = useStore(countStore)

    return (
        <div className='mx-auto bg-secondary-react px-2 py-4 rounded-lg mb-2 w-full'>
            <div className='flex flex-row justify-center'>
                <button onClick={() => countStore.set(count + 1)} className="py-2 px-4 m-1 text-neutral-50 bg-primary-react rounded-lg">Count++</button>
                <button onClick={() => countStore.set(count - 1)} className="py-2 px-4 m-1 text-neutral-50 bg-primary-react rounded-lg">Count--</button>
                <button onClick={() => countStore.set(countStoreInitialValue)} className="py-2 px-4 m-1 text-neutral-50 bg-primary-react rounded-lg">Reset</button>
            </div>
            <h2 className='text-center my-0'>React counter: { count }</h2>
        </div>
    )
}

export default Counter
