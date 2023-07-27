import Head from 'next/head'
import { Header } from '@components/Header'
import { Footer } from '@components/Footer'
import { Section01 } from '@/app/receitasfitness/Section01'
import { Section02 } from '@/app/receitasfitness/Section02'
import { Section03 } from '@/app/receitasfitness/Section03'
import { Section04 } from '@/app/receitasfitness/Section04'
import { Section05 } from '@/app/receitasfitness/Section05'
import { Section06 } from '@/app/receitasfitness/Section06'
import { Section07 } from '@/app/receitasfitness/Section07'
import { Section08 } from '@/app/receitasfitness/Section08'
import { Section09 } from '@/app/receitasfitness/Section09'


export const ReceitasFitness = () => {
  return (
    <div className="flex my-10 flex-col items-center justify-center min-h-screen">
      {/* <Header /> */}
      <main className="grid gap-4 flex-col items-center justify-center flex-1 text-center mt-16">
        <Section01 />
        <Section02 />
        <Section03 />
        <Section04 />
        <Section05 />
        <Section06 />
        <Section07 />
        <Section08 />
        <Section09 />
      </main>
      <Footer />
    </div>
  )
}
