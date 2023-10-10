import Image from 'next/image'
import Button from '@/components/Button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button/>
      <p className="text-red-700 text-4xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aut facere quos dolores, quo perspiciatis qui sint quibusdam obcaecati modi ad eius cum temporibus quam non odit in! Minima optio aperiam atque cum nam?</p>
      <Button/>
    </main>
  )
}
