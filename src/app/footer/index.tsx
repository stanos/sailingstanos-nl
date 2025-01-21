import moment from 'moment';

export default function Footer() {
    return (
        <div className='text-center p-5 font-bold text-blue-500 bg-slate-900'>
            <p>© {moment().year()} Stan van der Veen.</p>
        </div>
    )
}

