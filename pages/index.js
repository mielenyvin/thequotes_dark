import Layout from '@/components/Layout'
import NewsItem from '@/components/NewsItem'
import NewsItemFeatured from '@/components/NewsItemFeatured'
import { API_URL, PER_PAGE } from '@/config/index'

export default function HomePage({news, page, total}) { 

  return (

    <Layout>
{news.length === 0 && <h3>No News to show</h3>}
{news.map((nw) => (

<div key={nw.id} className='2xl:first:block xl:first:block lg:first:block hidden'>
      <NewsItemFeatured key={nw.id} nw={nw} />
</div>
      ))}

      <div key={1} className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
        
      {news.map((nw) => (
        <div key={nw.id} className='2xl:first:hidden xl:first:hidden lg:first:hidden block'>
      <NewsItem key={nw.id} nw={nw} />
      </div>
      ))}


      </div>

    </Layout>
  )
}

export async function getServerSideProps({query: {page = 1}}) {
//calculate start page
const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE

// FETCH total / count

const totalRes = await fetch(`${API_URL}/news/count`)
const total = await totalRes.json()

// Fetch news

  const newsRes = await fetch(`${API_URL}/news?_sort=date:DESC&_limit=${PER_PAGE}&_start=${start}`)
  const news = await newsRes.json()

  return {
    props: {news, page: +page, total},
  }
}

// import Link from 'next/link'
// import Layout from '@/components/Layout'
// import NewsItem from '@/components/NewsItem'
// import { API_URL } from '@/config/index'

// export default function HomePage({news}) { 
//   return (
//     <Layout>
//       <h1>Latest News</h1>
      
//       {news.length === 0 && <h3>No News to show</h3>}

//       {news.map((nw) => (
//       <NewsItem key={nw.id} nw={nw} />
//       ))}

//       {/* {news.length > 0 && (
//         <Link href='/news'>
//           <a className='btn-secondary'>View All News</a>
//         </Link>
//       )
//       } */}
//     </Layout>
//   )
// }

// export async function getStaticProps() {
//   const res = await fetch(`${API_URL}/news?_sort=date:ASC&_limit=6`)
//   const news = await res.json()

//   return {
//     props: {news},
//     revalidate: 1
//   }
// }