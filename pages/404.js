import { FaExclamationTriangle } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'

export default function NotFoundPage() {
    return (
        <Layout title='Page Not Found'>
            {/* <div className={styles.error}> */}
            <div className='flex flex-col items-center mt-20'>
                <Image src='/images/logo.png' width={70} height={70} className='' alt=''/>
                <h1 className='text-6xl my-5'>
                {/* <FaExclamationTriangle /> */}
                    404</h1>
                <h2 className='text-4xl text-qgray mb-5'>Sorry, there is nothing here</h2>
                <Link href='/'>Go Back Home</Link>
            </div>
            {/* </div> */}
        </Layout>
    )
}
