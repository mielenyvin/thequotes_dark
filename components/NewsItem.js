import Link from 'next/link'
import CategoryLabel from './CategoryLabel'

export default function NewsItem( {nw} ) {
    return (

<Link href={`/news/${nw.slug}`}>

<div id="newsarticle" className='cursor-pointer h-full w-full bg-white rounded-lg shadow-md hover:shadow-lg' >
          
                <img src={nw.image ? nw.image.url : '/images/event-default.png'} 
                className='mb-4 rounded-t-lg'
                width={600}
                height={400}
                />
          

    <div className = 'mx-5 my-2 flex justify-between items-top'>

    <span className='font-light text-alyminium'>
    {new Date(nw.date).toLocaleDateString('en-GB')} 
    {/* at {nw.time} */}
    </span>   

    <CategoryLabel>{nw.category}</CategoryLabel>
    </div>

    <div className='mx-5 my-2' >
    <div className='flex items-center'>
    {nw.image && (<img className='border p-1' src={nw.media1_logo.url} width={60} height={60} /> ) } 
   
    <span className='ml-4 text-qblue
     text-sm font-bold'>{nw.title1}
     </span>
    </div> 
    </div>     

    <divider className='border-qblue'><div className='px-2 pt-0 leading-5 pb-1  text-black rounded-xl'>Vs</div></divider>

    <div className='mx-5 mt-2 mb-6' >
    <div className='flex items-center'>
        {nw.image && (<img className='border p-1' src={nw.media_2_logo.url} width={60} height={60} /> ) }  
        <span className='ml-4 text-qblue text-sm font-bold'>
    {nw.title2}</span>
    </div>  
    </div>              
   
</div>

    
        </Link>
    )
}




