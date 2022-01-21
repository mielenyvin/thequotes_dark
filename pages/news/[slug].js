import Link from 'next/link'
import Image from 'next/image'
import CategoryLabel from '@/components/CategoryLabel'
import { marked } from 'marked'
import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import { useRouter } from 'next/router'
import { FaCaretLeft } from 'react-icons/fa'
export default function NewsPage({nw}) {

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    const router = useRouter()

    return (
        <Layout>
            <div>

{/* MAIN CONTAINER */}
<div className='w-full flex flex-col md:flex-row bg-white rounded-lg shadow-md '> 

<div className='w-full md:w-6/12'>
{nw.image && ( <img className='rounded-t-lg md:hidden w-full' src={nw.image.url} /> ) }
{nw.image && ( <img className='rounded-l-lg hidden md:block  w-full' src={nw.image.url} /> ) }
</div>

<div className='w-full md:w-6/12 px-5 py-2 md:py-5 xl:px-5 xl:py-4 2xl:px-6 2xl:py-5'>
<div className='mb-3 xl:mb-5 2xl:mb-6'>Publication date: <br className='hidden  md:block lg:hidden' />{new Date(nw.date).toLocaleDateString('en-GB', options)} </div>

<div className='mb-3 xl:mb-5 2xl:mb-6'>Photo source: <a className='underline font-bold' href={nw.reference1}>{nw.media1_name}</a></div>

<div className='mb-5 xl:mb-6 2xl:mb-8'>Disclaimer: Below is only a comparison of news from different resources. <br className='hidden 2xl:block'/> <div className='block md:hidden lg:block'>The editorial board has nothing to do with both news articles.</div></div>

<div className='flex mb-2 md:mb-0'><CategoryLabel>{nw.category}</CategoryLabel></div>

</div>

</div>

<div className='flex flex-col lg:flex-row'>
<div className='w-full lg:w-6/12 mt-5 p-5 md:flex-row bg-white rounded-lg shadow-md '> 

<div className='flex align-baseline'>
<div className="border pt-1 px-1 mr-5 mb-5">{nw.image && (<Image alt='' src={nw.media1_logo.url} width={100} height={100} /> ) }</div>
<span className=''>Publicated on: {new Date(nw.media1_date).toLocaleDateString('en-GB', options)} </span>
</div>

<h1 className='text-2xl pb-5'>{nw.media1_name}: &#8221;{nw.title1}&#8221;</h1>


<div dangerouslySetInnerHTML={{__html: marked(nw.Media1_text)}}></div>

<div className='pb-5'>Article source: <a className='underline break-words' href={nw.reference1}>{nw.reference1}</a></div>

</div>

<div className='w-full lg:w-6/12 mt-5 lg:ml-5 p-5  bg-white rounded-lg shadow-md '> 

<div className='flex align-baseline '>
<div className="border pt-1 px-1 mr-5 mb-5">{nw.image && (<Image alt='' className='' src={nw.media_2_logo.url} width={100} height={100} /> ) }</div>
<span>Publicated on: {new Date(nw.media2_date).toLocaleDateString('en-GB', options)} </span>
</div>

<h1 className='text-2xl pb-5'>{nw.media2_name}: &#8221;{nw.title2}&#8221;</h1>

<div dangerouslySetInnerHTML={{__html: marked(nw.Media2_text)}}></div>

<div className='pb-5'>Article source: <a className='underline break-words' href={nw.reference2}>{nw.reference2}</a></div>
</div>

</div>
<br />
<Link href='/'>
<div className='cursor-pointer flex flex-row items-center text-gray-500'>
        <div className='pr-1'><FaCaretLeft /></div><div className='text-qblue  hover:text-qorange'>Go Back</div></div></Link></div>

</Layout>
    )
}


export async function getServerSideProps( {query:
    {slug} } ) {
        const res = await fetch (`${API_URL}/news?slug=${slug}`)
        const news = await res.json()
    
 return {
    props: {
      nw: news[0],
    },
  }
}