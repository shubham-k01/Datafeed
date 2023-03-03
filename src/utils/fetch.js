export const query = async(data)=>{
	const response = await fetch(
		"https://api-inference.huggingface.co/models/sk01/DataFeed",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}

