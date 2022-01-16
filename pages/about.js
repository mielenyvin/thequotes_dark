import Layout from '@/components/Layout'

export default function AboutPage() {
    return (
<Layout title='About the Quotes' >
  
   {/* <h1 className=' text-4xl pb-5 font-bold'>About the Quotes</h1> */}
 
<div className='bg-white shadow-md p-5 rounded-lg py-6 '>
    <h3 className='text-4xl mb-5'>
        the Quotes media (Version 1.0.0)
    </h3>
    <p>
This project comes as a response to the ever present and sometimes blatant media bias. </p>
<p>
We aim through it to provide our community with a <b>bigger picture</b> to approach the truth and have an objective standpoint.<br />This is a platform that accumulates the most current news from <b>two different point of views</b> and radically different sources. <br /> So that each individual can form his or her own opinion.
</p>
                <h1 className='text-2xl'>Project team:</h1>
                <p><span className='font-bold'>Dmitry Kotikov</span> (Russia)</p>

                <div className='flex flex-col sm:flex-row sm:items-center'>
                <img className='rounded-xl '  src='/images/dmitrii.jpg' width={150} height={150} alt='logo'/>
                <ul className="list-disc pt-3 sm:pt-0 pl-5 sm:pl-10">
                <li>Project conceptualization</li>
                <li>Static site generated front-end development</li>
                <li>Headless CMS back-end development</li></ul>
                </div>

                <p><span className='font-bold'>Houda Jaouhari</span> (Morocco)</p>
                <div className='flex flex-col sm:flex-row sm:items-center'>
                <img className='rounded-xl border border-qgrey' src='/images/houda.jpg' width={150} height={150} alt='logo'/>
                <ul className="list-disc pt-3 sm:pt-0 pl-5 sm:pl-10">
                <li>Preliminary research</li>
                <li>Content creation</li>
                <li>Manual testing</li>
                <li>Documentation</li>
                <li>Legalities</li>
                </ul>
                </div>

                <p><span className='font-bold'>Prabhmeet Singh Bhatti</span> (India)</p>

                <div className='flex flex-col sm:flex-row sm:items-center'>
                <img className='rounded-xl' src='/images/prabhmeet.jpg' width={150} height={150} alt='logo'/>
                <ul className="list-disc pt-3 sm:pt-0 pl-5 sm:pl-10"><li>Development and maintenance of the Android/iOS Applications</li></ul>
                </div>

                
                <p><span className='font-bold'>Prof. Dr. Dipl.-Ing. (FH) Roland Riempp</span> (Germany)</p>
                <div className='flex flex-col sm:flex-row sm:items-center'>
                <img className='rounded-xl' src='/images/roland-riempp.jpg' width={150} height={150} alt='logo'/>
                <ul className="list-disc pt-3 sm:pt-0 pl-5 sm:pl-10"><li>Project Supervisor</li></ul>
                </div>


               
            </div>

          
        </Layout>
    )
}
