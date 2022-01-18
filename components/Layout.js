import Head from 'next/head'
import {useRouter} from 'next/router'
import Header from './Header'
import Footer from './Footer'
// import Showcase from './Showcase'
import CategoryList from '@/components/CategoryList'

export default function Layout({title, keywords, desciprtion, children, categories}) {
    const router = useRouter()

    return (
        <div className="flex flex-col h-screen justify-start  bg-qblue">
            
            <Head>
                <title>{title}</title>
                <link rel='icon' href='/favicon.ico' />
                
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />

                <meta name='description' content={desciprtion} />
                <meta name='keywords' content={keywords} />
            </Head>

            <Header />

<div className='sm:mx-6'>
<div className='bg-qlitegray sm:rounded-2xl container mx-auto flex flex-wrap p-5 flex-col '>

<CategoryList categories={categories} />
</div>
</div>

<div className='pb-5 sm:pb-5'></div>

{/* {(router.pathname === '/' || router.pathname === '/about' || router.pathname === '/news/category' || router.pathname === '/news/search') && <Showcase />} */}
            
{/* <div className='flex-row flex gap-5 container'>
<div className='hidden sm:block text-white'>sm</div>
<div className='hidden md:block text-white'>md</div>
<div className='hidden lg:block text-white'>lg</div>
<div className='hidden xl:block text-white'>xl</div>
<div className='hidden 2xl:block text-white '>2xl</div>
</div> */}

{(router.pathname === '/about' || router.pathname === '/news/category' || router.pathname === '/news/search' ) && <div className='sm:mx-6 sm:h-screen'> 
<div className='bg-qlitegray sm:rounded-2xl container mx-auto flex flex-wrap p-5 flex-col '>
<main className='mb-auto container mx-auto sm:px-5'><div className='mt-5'></div>
<div className=''>{children}</div>
<div className='mt-5'></div>
</main>
</div>
</div>}

{(router.pathname === '/' || (router.pathname != '/about' && router.pathname != '/news/category' && router.pathname != '/news/search')  ) && 
<div className=' sm:mx-6'>
<div className='bg-qlitegray sm:rounded-2xl container mx-auto flex flex-wrap pt-5 p-5 flex-col '>
<main className='mb-auto container mx-auto sm:px-5'>
<div className='sm:mt-5'></div><div className=''>{children}</div>
<div className='mt-5'></div></main></div></div>}
       
       
<div className='py-5'>
{(router.pathname != '/about' ) && <Footer /> }
</div>
</div>
    )
}

Layout.defaultProps = {
    title: 'the Quotes News | Find the truth',
    description: 'Find the latest news',
    keywords: 'news, politics, technology'
}