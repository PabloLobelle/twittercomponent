import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {
	const formatUser = (userName) => `@${userName}`;
	return (
		<section className="App">
			<TwitterFollowCard formatUserName={formatUser} userName="mafle">
				Pablo Lobelle Losada
			</TwitterFollowCard>
			;
			<TwitterFollowCard formatUserName={formatUser} userName="midudev">
				Miguel Angel Duran
			</TwitterFollowCard>
			;
			<TwitterFollowCard formatUserName={formatUser} userName="mafle">
				Alguien de alguien
			</TwitterFollowCard>
			;
		</section>
	);
}
