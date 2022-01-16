import qs from 'qs'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '@/components/Layout'
import NewsItem from '@/components/NewsItem'
import { API_URL } from '@/config/index'
import { FaCaretLeft } from 'react-icons/fa'

export default function SearchPage({ news }) {
  const router = useRouter()

  return (
    <Layout title='Search Results'>
      <Link href='/'><div className='cursor-pointer flex flex-row items-center text-gray-500'>
        <div className='pr-1'><FaCaretLeft /></div><div className='text-qblue  hover:text-qorange'>Go Back</div></div></Link>

      <h1 className='text-2xl mt-5 mb-5'>News articles about {router.query.term}</h1>
      {news.length === 0 && <h3>No news to show</h3>}

      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
      {news.map((nw) => (
        <NewsItem key={nw.id} nw={nw} />
      ))}
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [
        { category_contains: term }
      ],
    },
  })

  const res = await fetch(`${API_URL}/news?${query}`)
  const news = await res.json()

  return {
    props: { news },
  }
}