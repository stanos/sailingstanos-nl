'use client'

import Typewriter from 'typewriter-effect';
import moment from 'moment';

export default function Home() {
  return (
    <div className="min-h-screen p-20 pt-5 font-[family-name:var(--font-geist-sans)]">
      <main>
        
        <ol className="sm:text-left font-[family-name:var(--font-geist-mono)]">
          <div>
            <h1 className="mb-2 font-bold text-3xl text-blue-500 w-32 h-20">
            Welcome to 
              <Typewriter options={{
                strings: ["SailingStanos.nl"],
                autoStart: true,
                loop: true
              }} />
            </h1>
          </div>
          <br />
          <h1 className='text-2xl font-bold'>This is the Homepage of my website</h1>
          <p>On this website you will find documentation and blog posts of experiments, hardware, software and much more</p>
          <br />
          <h2 className='text-xl text-violet-400'>But first a little bit about me:</h2>
          <p className=''>I&apos;m Stan van der Veen, I&apos;m {moment().diff("2007-09-07", "years") } years old and from the Netherlands. <br />My hobby&apos;s are: </p>
          <ol className='list-disc text-blue-300 font-sans h-16 pt-2'>
            <li>Sailing</li>
            <li>Coding</li>
          </ol>
          <p className='text-violet-300 font-bold'>Thing&apos;s I find really important are:</p>
          <ol className='list-disc pt-2'>
            <li>Spending time with my girlfriend.</li>
            <li>Having fun.</li>
          </ol>
        </ol>
      </main>
    </div>
  );
}
