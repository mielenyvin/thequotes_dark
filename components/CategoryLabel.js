import Link from 'next/link'

export default function CategoryLabel({ children }) {
  const colorKey = {
    Politics: 'qblue',
    Business: 'qgreydark',
    Technology: 'qorange',
    Culture: 'alyminium',
    Sport: 'qte',
    Health: 'steel'
  }

  return (
    <div
      className={`px-2 py-1 bg-${colorKey[children]} text-white font-semibold rounded`}
    >
      <Link href={`/news/category?term=${children.toLowerCase()}`}>{children}</Link>
    </div>
  )
}