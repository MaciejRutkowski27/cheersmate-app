//Maciek

import { useState, useEffect } from "react";

export default function SpinResult({ game }) {
  const localStorageKey = `liked_${game.id}`;
  const [isLiked, setIsLiked] = useState(
    localStorage.getItem(localStorageKey) === "true"
  );

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
    : "https://firebasestorage.googleapis.com/v0/b/webapp-exam-f3829.appspot.com/o/heart.svg?alt=media&token=4f97288c-f486-429c-ad00-0bda023a954b";

  return (
    <article className="popupcontent">
      <img className="spinImage" src={game.imageURL} />
      <div className="modaltext">
        <div className="row1">
          <h2 className="gamename">{game.name}</h2>
          <span className="icons">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/webapp-exam-f3829.appspot.com/o/fi-rr-share.svg?alt=media&token=8728d2d3-2dd1-49ec-a851-129f17d01e22"
              alt="time"
            />
            <div className="heartBox">
              <img
                className="heartIconMain"
                src={heartIconSrc}
                onClick={toggleLike}
              />
            </div>
          </span>
        </div>
        <br />
        <br />
        <div className="row2">
          <span className="icons">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/webapp-exam-f3829.appspot.com/o/people.svg?alt=media&token=238731b5-7f1d-4cd5-8738-3aa42814541c"
              alt="time"
            />
            <h3 className="gamename">{game.people}</h3>
          </span>
          <span className="icons">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/webapp-exam-f3829.appspot.com/o/hourglass.svg?alt=media&token=f136906c-6d68-407d-b182-63b1bf72ecdb"
              alt="time"
            />
            <h3 className="gamename">{game.time}</h3>
          </span>
        </div>
        <br />
        <div className="row3">
          <span className="icons">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/webapp-exam-f3829.appspot.com/o/bowling.svg?alt=media&token=36d81ed9-1d70-4b31-9ca1-0bfe6413ceb6"
              alt="time"
            />
            <h3 className="gamename">{game.equipment}</h3>
          </span>
        </div>
      </div>
    </article>
  );
}
