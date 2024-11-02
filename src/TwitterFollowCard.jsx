import { useState } from "react";

export function TwitterFollowCard({
	// eslint-disable-next-line react/prop-types
	formatUserName,
	// eslint-disable-next-line react/prop-types
	children,
	// eslint-disable-next-line react/prop-types
	userName,
	// eslint-disable-next-line no-unused-vars
}) {
	const [isFollowing, setIsFollowing] = useState(false);
	const text = isFollowing ? "Siguiendo" : "Seguir";
	const buttonClassName = isFollowing
		? "tw-followCard-button is-following"
		: "tw-followCard-button";

	const handleClick = () => {
		setIsFollowing(!isFollowing);
	};

	return (
		<article className="tw-followCard">
			<header className="tw-followCard-header">
				<img
					className="tw-followCard-avatar"
					src={`https://unavatar.io/${userName}`}
					alt="avatar"
				/>
				<div className="tw-followCard-info">
					<strong>{children}</strong>
					<span className="tw-followCard-infoUserName">
						{formatUserName(userName)}
					</span>
				</div>
			</header>
			<aside>
				<button className={buttonClassName} onClick={handleClick}>
					<span className="tw-followCard-text">{text}</span>
					<span className="tw-followCard-stopFollow">Dejar de seguir</span>
				</button>
			</aside>
		</article>
	);
}
