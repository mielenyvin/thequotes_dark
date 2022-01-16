
import Layout from '@/components/Layout'
import NewsItem from '@/components/NewsItem'
import { API_URL, PER_PAGE } from '@/config/index'

export default function NewsPage({news, page, total}) { 

  return (
    <Layout>

      {news.length === 0 && <h3>No News to show</h3>}

      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
       
      {news.map((nw) => (
      <NewsItem key={nw.id} nw={nw} />
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
  const newsRes = await fetch(`${API_URL}/news?_sort=date:ASC&_limit=${PER_PAGE}&_start=${start}`)
  const news = await newsRes.json()

  return {
    props: {news, page: +page, total},

  }
}