import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center h-screen text-center'>
        <h1 className='text-6xl font-bold text-green-500'>404</h1>
      <h2 className='text-2xl font-bold'>Pàgina não encontrada!</h2>
      <Link href="/">Voltar ao início</Link>
    </div>
  )
}