import Link from 'next/link';
import logo from '../../../public/logo-sailngstanos-white.svg'
import Image from 'next/image';

export default function Navbar() {
    return (
        <div className="h-32 min-w-screen pb-20 pt-6 font-[family-name:var(--font-geist-sans)] text-blue-200">
        <ul className='left-16 absolute'>
          <Image src={logo} alt='logo' width={240} className='inline inset-y-10 left-10 p-5'></Image>
          <div className=''>
            <Link className='p-2 rounded-xl bg-rose-800 hover:bg-slate-700' href={'/'}>Home</Link>
            <Link className='p-2 rounded-xl bg-rose-800 hover:bg-slate-700' href={'/docs'}>Docs</Link>
            <Link className='p-2 rounded-xl bg-rose-800 hover:bg-slate-700' href={'/about'}>About</Link>
            <Link className='p-2 rounded-xl bg-rose-800 hover:bg-slate-700' href={'/contact'}>Contact</Link>
          </div>
          <br className='h-16'/>
        </ul>
      </div>
    )
}