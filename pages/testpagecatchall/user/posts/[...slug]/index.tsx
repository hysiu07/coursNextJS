import React from 'react';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/router';

// export const getStaticProps = async () => {
//     const posts = await getLatestsPosts();

//     return {
//         props: {posts}
//     }
// }

// export const getStticProps = async () => {
//     const posts = await getLatestsPosts();
//     return {
//         props: posts
//     }
// }

// export const getStaticProps = async () => {
// 	const posts = await getLatestProps();
// 	return {
// 		props: posts,
// 	};
// };


// export const getStaticProps = async () => {
//     const posts = await getLatestsPosts();

//     return {
//         props: posts
//     }
// }
export default function () {
	const params = useParams();
	const router = useRouter();
	console.log(router);
	return (
		<div>
			<h2>...Slug</h2>
			<h3>{params?.slug[0]}</h3>
			<h3>{params?.slug[1]}</h3>
			<button
				onClick={() => {
					router.push('/');
				}}
			>
				Main view
			</button>
		</div>
	);
}
