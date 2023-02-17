import About from '@/components/About';
import Competences from '@/components/Competences';
import Contact from '@/components/Contact';
import Header from '@/components/Header';
import Profile from '@/components/Profile';
import Projets from '@/components/Projets';
import WorkExperience from '@/components/WorkExperience';
import Head from 'next/head';
import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/24/solid';


type Props = {
 
}

const Home = ( {}: Props) => {


  return (
 
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden md:overflow-swipe z-0 scrollbar-none'>
      <Head>
        <title>Portefolio - Jonathan Opigez</title>
      </Head>

   
      <Header />
  {/*Home*/}
        <section id="home" className='snap-start'>
          <Profile />
        </section>
  {/*A propos*/}
        <section id="about" className='snap-start'>
          <About />
        </section>
  {/* Experience */}
        <section id="experiences" className='snap-center'>
          <WorkExperience />
        </section>
  {/* Competences */}
        <section id="competences" className="snap-start">
          <Competences />
        </section>
  {/* Projets */}
        <section id="projets" className="snap-start">
          <Projets />
        </section>
  {/* Contact */}
        <section id="contact" className="snap-start">
          <Contact />
        </section>

     

     

  
        
          <Link href="#home">
              <footer className='sticky bottom-5 w-full cursor-pointer'>
                <div className='flex items-center justify-center'>
                    <HomeIcon className=' opacity-20 h-10 w-10 rounded-full filter hover:text-[#C282FA] transition-colors cursor-pointer hover:h-12 hover:w-12 hover:opacity-80 z-50'/>
                </div>
              </footer>

          </Link>


    </div>
  )
}


export default Home;