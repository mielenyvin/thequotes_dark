import Link from 'next/link'
import { FaRegStar } from 'react-icons/fa'
import CategoryLabel from './CategoryLabel'


export default function NewsItemFeatured( {nw} ) {

    const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
    
    return (

<Link href={`/news/${nw.slug}`}>
 
{/* from-qgreydark via-qgreydark to-qgreydark */}

<div id="newsarticlefeatured" className='p-0 container mx-auto flex flex-wrap flex-col sm:flex-col md:flex-row items-stretch bg-gradient-to-l cursor-pointer 
rounded-xl mb-5' >

<div id="newsarticlefeatured" className='container mx-auto flex flex-wrap flex-col sm:flex-col md:flex-row items-stretch
 bg-white  cursor-pointer rounded-l-2xl rounded-r-xl  shadow-md hover:shadow-lg' >
          
<div className=' w-4/12 title-font font-medium items-center md:justify-start mt-0 sm:mt-0 mb-0 md:mb-0'>
    <img src={nw.image ? nw.image.url : '/images/event-default.png'} className='rounded-l-xl h-full w-full' 
 />
</div>
    
<div className='w-6/12 flex flex-col items-stretch justify-around'>
    <div className='mx-8 mt-5 xl:mt-6 2xl:mt-8' >
        <div className='flex items-center '>{nw.image && (<img className='border p-1 border-qblue' src={nw.media1_logo.url} width={80} height={80} /> ) } 
        <span className='ml-4 text-qblue sm:text-sm 2xl:text-xl text-md font-bold'>{nw.title1}</span>
        </div> 
    </div>     

            <divider className='border-metal'>
                <div className='px-4 leading-5 pb-2 pt-1   text-black font-normal text-lg rounded-3xl'>Versus</div></divider>

    <div className='mx-8 mb-5 xl:mb-6 2xl:mb-8' ><div className='flex items-center '>{nw.image && (<img className='border p-1 border-qblue' src={nw.media_2_logo.url} width={80} height={80} /> ) }  
        <span className='ml-4 text-qblue sm:text-sm 2xl:text-xl text-md font-bold'>{nw.title2}</span>
                                </div>
    </div>              
</div>


<div className='bg-white border-l border-qblue rounded-r-xl w-2/12 flex flex-col justify-center items-center'>
    <div className = 'my-4 flex flex-row items-center '>
            <div className='pr-1 mb-1'><FaRegStar /></div>
            <div className='pb-1  font-bold'>Featured article</div>
    </div>

    <div className = 'mx-5 my-4 flex justify-between items-top'>


    <CategoryLabel>{nw.category}</CategoryLabel>
    </div>
    
    <div className='mx-5 my-4'><span className='font-normal text-alyminium'>{new Date(nw.date).toLocaleDateString('en-GB', options)} </span></div>

</div>
</div>
</div>

</Link>
    )
}




