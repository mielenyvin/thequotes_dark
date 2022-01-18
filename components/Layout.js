import Head from 'next/head'
import {useRouter} from 'next/router'
import Header from './Header'
import Footer from './Footer'
//import Showcase from './Showcase'
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
            
<div className='mb-auto mx-0 md:mx-5  lg:mx-16 xl:mx-16  2xl:mx-52 mt-0 pt-0 pb-20 md:rounded-2xl bg-qveryverylitegray'>
<main className='mb-auto container mx-auto px-5'>
<div className='my-10'>
<CategoryList categories={categories} />
</div>
<div className=''>
{children}
</div>
</main>

</div>

<div className='py-5'>
<Footer />
</div>
</div>
    )
}

Layout.defaultProps = {
    title: 'the Quotes News | Find the truth',
    description: 'Find the latest news',
    keywords: 'news, politics, technology'
}