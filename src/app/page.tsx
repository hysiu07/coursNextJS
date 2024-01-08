import Link from 'next/link';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-center p-24'>
			<Link href='/about'>About</Link>
			<Link href='/testpage1'>Test1</Link>
			<Link href='/testpage2'>Test2</Link>
			<Link href='/testpage3dynamic'>Testpage3dynamic</Link>
			<Link href='/testpagecatchall'>TestpageChatchAll</Link>
		</main>
	);
}
