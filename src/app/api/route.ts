import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
	const { source, targets } = await req.json();

	try {
		const response = await fetch(
			"https://api.apyhub.com/data/convert/currency/multiple",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"apy-token": process.env.APY_TOKEN!,
				},
				body: JSON.stringify({
					source,
					targets,
				}),
			}
		);

		if (!response.ok) {
			const errorData = await response.json();
			return new Response(JSON.stringify({ error: errorData }), {
				status: response.status,
				headers: { "Content-Type": "application/json" },
			});
		}

		const data = await response.json();
		return new Response(JSON.stringify(data), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error: any) {
		return new Response(
			JSON.stringify({ error: "Sunucu hatası", details: error.message }),
			{ status: 500, headers: { "Content-Type": "application/json" } }
		);
	}
}
