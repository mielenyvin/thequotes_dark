import Link from 'next/link'

export default function CategoryList({ categories }) {

  return (
    
    <div id="main" className="lg:grid-cols-6 grid grid-cols-3 h-18 lg:h-8 m-5 gap-1 justify-evenly text-center divide-metal  lg:divide-x"> 
     <Link href="/news/category?term=politics"><div className="h-8 py-1 cursor-pointer hover:text-qorange">Politics</div></Link>
     <Link href="/news/category?term=business"><div className="h-8 py-1 cursor-pointer hover:text-qorange">Business</div></Link>
     <Link href="/news/category?term=technology"><div className="h-8 py-1 cursor-pointer hover:text-qorange">Technology</div></Link>
     <Link href="/news/category?term=health"><div className="h-8 py-1 cursor-pointer hover:text-qorange">Health</div></Link>
     <Link href="/news/category?term=sport"><div className="h-8 py-1 cursor-pointer hover:text-qorange">Sport</div></Link>
     <Link href="/news/category?term=culture"><div className="h-8 py-1 cursor-pointer hover:text-qorange">Culture</div></Link>
    </div> 
  )

  
}