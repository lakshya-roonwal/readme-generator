import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
    <h1 className='text-3xl font-bold text-center'>Hello World</h1>
    <div className='w-full flex justify-center p-4'>
    <Button asChild>
      <Link href={'/editor'}>
        Get Started
      </Link>
      </Button>
    </div>
    </div>
  )
}
