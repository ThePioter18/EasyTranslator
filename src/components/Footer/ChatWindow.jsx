import { useState, useEffect, useRef } from 'react';
import s from './ChatWindow.module.scss';

export default function ChatWindow() {
	const [isChatOpen, setIsChatOpen] = useState(false);
	const [unreadCount, setUnreadCount] = useState(1);

	const [messages, setMessages] = useState([
		{
			id: 1,
			text: "Hi! I'm an Easy Translator assistant. How can I help you with your translations?",
			isSelf: false,
		},
	]);
	const [inputValue, setInputValue] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const chatLogRef = useRef(null);

	useEffect(() => {
		if (chatLogRef.current) {
			chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
		}
	}, [messages]);

	const openChatClick = () => {
		setIsChatOpen(true);
		setUnreadCount(0);
	};
	const closeChatClick = () => {
		setIsChatOpen(false);
	};

	const handleChatSubmit = async e => {
		e.preventDefault();
		if (!inputValue.trim() || isLoading) return;

		const userMessage = inputValue.trim();
		const generateId = crypto.randomUUID();

		// Add a user message
		setMessages(prev => [...prev, { id: generateId, text: userMessage, isSelf: true }]);
		setInputValue('');
		setIsLoading(true);

		// Add a loading message "AI thinking..."
		const loadingId = crypto.randomUUID();
		setMessages(prev => [...prev, { id: loadingId, text: 'AI thinking...', isSelf: false }]);

		try {
			const history = [
				...messages.map(msg => ({
					role: msg.isSelf ? 'user' : 'assistant',
					content: msg.text,
				})),
				{ role: 'user', content: userMessage },
			];

			const response = await fetch('/.netlify/functions/chat', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					message: userMessage,
					history: history,
				}),
			});

			const data = await response.json();

			if (!response.ok) {
				const errorData = await response.json().catch(() => ({}));
				throw new Error(errorData.error || `Server error (${response.status})`);
			}

			const aiReply = data.choices?.[0]?.message?.content;

			if (!aiReply) {
				console.warn("No content in Groq's response:", data);
				throw new Error('AI did not return a response');
			}

			// Remove the placeholder and add the real AI response
			setMessages(prev =>
				prev.filter(msg => msg.id !== loadingId).concat({ id: crypto.randomUUID(), text: aiReply, isSelf: false }),
			);
		} catch (error) {
			console.error('AI connection error:', error);

			setMessages(prev =>
				prev
					.filter(msg => msg.id !== loadingId)
					.concat({
						id: crypto.randomUUID(),
						text: "Sorry, I can't connect to AI at the moment. Please try again later.",
						isSelf: false,
					}),
			);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<>
			<div className={s.openChat}>
				<div
					className={s.openChat__container}
					onClick={() => {
						if (!isChatOpen) openChatClick();
					}}>
					{unreadCount > 0 && <span className={s.openChat__chatUnreadBadge}>{unreadCount}</span>}

					<p className={s.openChat__title}>Chat</p>

					<div className={s.openChat__icon}>
						<svg
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							width='32'
							height='32'
							viewBox='0 0 24 24'
							fill='#ffffff'>
							<path d='M18 3a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-4.724l-4.762 2.857a1 1 0 0 1 -1.508 -.743l-.006 -.114v-2h-1a4 4 0 0 1 -3.995 -3.8l-.005 -.2v-8a4 4 0 0 1 4 -4zm-2.8 9.286a1 1 0 0 0 -1.414 .014a2.5 2.5 0 0 1 -3.572 0a1 1 0 0 0 -1.428 1.4a4.5 4.5 0 0 0 6.428 0a1 1 0 0 0 -.014 -1.414m-5.69 -4.286h-.01a1 1 0 1 0 0 2h.01a1 1 0 0 0 0 -2m5 0h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0 -2' />
						</svg>
					</div>

					<div className={`${s.openChat__window} ${isChatOpen && s['openChat__window--visible']}`}>
						<div className={s.openChat__chatTitleBar}>
							<h4>Chat AI</h4>
							<div
								className={s.openChat__iconClose}
								onClick={e => {
									e.stopPropagation();
									closeChatClick();
								}}>
								<i className='ti ti-square-x'></i>
							</div>
						</div>
						<div className={s.openChat__chatLog} ref={chatLogRef}>
							{messages.map(msg => (
								<div
									key={msg.id}
									className={`${s.openChat__message} ${msg.isSelf ? s['openChat__message--self'] : ''}`}>
									<div className={s.openChat__messageInner}>{msg.text}</div>
								</div>
							))}
						</div>
						<form onSubmit={handleChatSubmit}>
							<input
								type='text'
								value={inputValue}
								onChange={e => setInputValue(e.target.value)}
								autoComplete='off'
								disabled={isLoading}
								placeholder='Your message here'
							/>
							<button className={s.openChat__button} type='submit' disabled={isLoading || !inputValue.trim()}>
								{isLoading ? '...' : 'Send'}
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
