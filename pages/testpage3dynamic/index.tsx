import React, { useState } from 'react';
import Link from 'next/link';
export default function () {
	const [number, setNumber] = useState<number>(0);
	return (
		<div>
			<p>testpage3Dynamic</p>
            <Link href={`/testpage3dynamic/${number}`}>
              Go to dynamic route!
            </Link>
			<form>
				<label htmlFor=''>Dynamic route</label>
				<input
					type='number'
					placeholder='write count'
					onChange={(e) => {
						 setNumber(parseInt(e.target.value, 10));
					}}
				/>
			</form>
		</div>
	);
}
