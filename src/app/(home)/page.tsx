import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='container'>
      <h1 className='mb-4 text-center text-4xl'>Home</h1>
      <ul>
        <li>
          <Link href='/dashboard'>Home</Link>
        </li>
      </ul>
    </div>
  );
}
