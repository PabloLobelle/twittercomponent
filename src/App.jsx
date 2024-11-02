import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx';

export function App() {
	const formatUser = (userName) => `@${userName}`;
	return (
		<section className='App'>
			<TwitterFollowCard formatUserName={formatUser} userName='mafle'>
				Pablo Lobelle Losada
			</TwitterFollowCard>
			;
			<TwitterFollowCard formatUserName={formatUser} userName='charlete'>
				Carlos Buenaventura Pedre
			</TwitterFollowCard>
			;
			<TwitterFollowCard formatUserName={formatUser} userName='Adea'>
				Alguien de alguien
			</TwitterFollowCard>
			;
		</section>
	);
}
