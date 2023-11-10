//Maja

import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function GameCard({ game }) {
  const localStorageKey = `liked_${game.id}`;
  const [isLiked, setIsLiked] = useState(
    localStorage.getItem(localStorageKey) === "true"
  );
  const navigate = useNavigate();
  const toggleLike = () => {
    const newLikedState = !isLiked;
    setIsLiked(newLikedState);
    localStorage.setItem(localStorageKey, newLikedState.toString());
  };

  useEffect(() => {
    // This effect runs when the component mounts.
    // It retrieves the liked state from localStorage and sets the initial state.
    setIsLiked(localStorage.getItem(localStorageKey) === "true");
  }, [localStorageKey]);

  const heartIconSrc = isLiked
    ? "https://firebasestorage.googleapis.com/v0/b/webapp-exam-f3829.appspot.com/o/heartcoloredFull.png?alt=media&token=a3a45415-94d9-4e5b-b463-7ff5739b3e26"
    : "https://firebasestorage.googleapis.com/v0/b/webapp-exam-f3829.appspot.com/o/heartblackEmpty.png?alt=media&token=66ef646e-88fa-41df-8824-90054e328285";
  return (
    <article className="mainCard" key={game.id}>
      <img
        onClick={() => navigate(`games/${game.id}`)}
        className="gameImage"
        src={game.imageURL}
        alt={game.name}
      />
      <div className="cardSmallDescription">
        <div className="players">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/webapp-exam-f3829.appspot.com/o/playersIcon.png?alt=media&token=2f69e22c-fcd1-4aeb-9a32-0cdd3ed5272b"
            alt=""
          />
          {game.people}
        </div>
        <div className="heartBox">
          <img
            className="heartIconMain"
            src={heartIconSrc}
            onClick={toggleLike}
            alt="Heart Icon"
          />
        </div>
      </div>
    </article>
  );
}
