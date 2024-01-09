export default async function handler(req, res) {
	if (req.method === 'POST') {
		const comment = await api.createComment(req.body);

		res.status(201).json({ comment });
	}
}

export default async function handler(req, res) {
	const {
		query: { id },
	} = req;
	const comment = await api.getComment(id);
	res.status(200).json({ comment });
}
