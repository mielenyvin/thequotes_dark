import {useState} from 'react'
import {useRouter} from 'next/router'
import { FaSearch } from 'react-icons/fa'

export default function Search() {
const [term, setTerm] = useState('')

const router = useRouter()

const handleSubmit = (e) => {
e.preventDefault()
router.push(`/news/search?term=${term}`)
setTerm('')
}
    return (

<div className='relative bg-gray p-4'>
<div className='container mx-auto flex items-center justify-center md:justify-end'>
  <div className='relative text-black w-72'>
    <form onSubmit={handleSubmit}>
        <input type='text' value={term} onChange={(e) => setTerm(e.target.value)} placeholder = 'Search Posts...' 
        className='bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none w-72'/>
        <FaSearch className='absolute top-0 right-0 text-black mt-3 mr-4' />
    </form>
</div>
</div>
</div>




    )
}
