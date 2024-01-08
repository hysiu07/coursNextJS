import React from 'react';
import { useParams } from 'next/navigation';

export default function () {
	const params = useParams();
	console.log(params);
	return (
		<div>
			<h2>Dynamic Route : {params?.id}</h2>
		</div>
	);
}
