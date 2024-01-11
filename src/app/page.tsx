import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-800 dark:text-gray-100 mb-6">
        Welcome to Readme Generator
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl text-center text-gray-600 dark:text-gray-300 mb-10 px-4">
        Create professional and beautiful readme files for your projects in just
        a few clicks.
      </p>
      <Button asChild>
        <Link href={"/editor"}>Get Started</Link>
      </Button>
    </section>
  );
}
