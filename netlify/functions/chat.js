// netlify/functions/chat.js

/* global process */
export default async function handler(request) {
	try {
		let message, history;
		try {
			const body = await request.json();
			message = body.message;
			history = body.history || [];
		} catch (e) {
			console.error('Error parsing JSON body:', e);
			return new Response(JSON.stringify({ error: 'Invalid input' }), {
				status: 400,
				headers: { 'Content-Type': 'application/json' },
			});
		}

		if (!process.env.GROQ_API_KEY) {
			console.error('MISSING GROQ_API_KEY in environment variables!');
			return new Response(JSON.stringify({ error: 'No API key found' }), {
				status: 500,
				headers: { 'Content-Type': 'application/json' },
			});
		}

		const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				model: 'llama-3.3-70b-versatile',
				messages: [
					{
						role: 'system',
						content: `You are a professional translation assistant at EasyTranslator.

							Core rule (never break it):
							Always respond in the **exact same language** as the user's most recent message.

							Examples:
							- User writes in Polish → you reply in Polish
							- User writes in English → you reply in English
							- User mixes languages → respond in the primary language of their last message

							=== COMPANY INFORMATION (always use these details) ===

							Company Name: EasyTranslator
							Email Address: easytranslator@gmail.com
							Phone: +48 606-234-098
							Website: https://easytranslator.netlify.app/

							Services:
							- Standard and specialized translations (technical, legal, business)
							- Sworn translations
							- Express translations (up to 24 hours)
							- Website and app localization
							- Proofreading and editing

							Approximate price list:
							- Standard translations: free
							Free plan
							Basic offer
							Translate short text (200 words)

							Only translate one language (English to Polish)

							Finished translation sent within 30 minutes.

							The free translation can be used only 3 times.

							- Professional translations: from $20
							Professional offer
							Translate text (1000 words)
							
							Translation of all languages (English, Polish, German, French, Italian, Spanish)

							Finished translation sent as soon as possible.

							No translation limits.
							- Medium translations: from $10
							Medium plan offer
							Translate text (700 words)

							Translation of all languages (English, Polish, German, French, Italian, Spanish)
							
							Finished translation sent within 30 minutes.

							No translation limits.

							Completion times:
							- Standard: 3 to 5 business days
							- Express: from 24 hours (additional fee)

							Always provide a valid email address: easytranslator@gmail.com
							If the client asks for contact information, please also provide your phone number and website.

							Be helpful, friendly, concise and professional.
							Assist with translations, pricing, delivery times, and company questions.

							Do not explain your language choice. Just answer naturally.`,
					},
					...history,
					{ role: 'user', content: message },
				],
				temperature: 0.7,
				max_tokens: 800,
			}),
		});

		if (!groqResponse.ok) {
			const errorText = await groqResponse.text();
			console.error('Groq API returned an error:', groqResponse.status, errorText);
			return new Response(JSON.stringify({ error: `Groq error: ${groqResponse.status}` }), {
				status: 502,
				headers: { 'Content-Type': 'application/json' },
			});
		}

		const data = await groqResponse.json();

		return Response.json(data);
	} catch (error) {
		console.error('ERROR IN CHAT FUNCTION:', error);
		return new Response(JSON.stringify({ error: 'Internal server error' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' },
		});
	}
}
