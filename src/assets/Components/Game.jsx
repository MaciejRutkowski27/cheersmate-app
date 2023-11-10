//Maja

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export default function Game() {
  const [game, setGame] = useState({});
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [equipment, setEquipment] = useState("");
  const [people, setPeople] = useState("");
  const [time, setTime] = useState("");
  const [des, setDes] = useState("");
  const [intro, setIntro] = useState("");
  const [winning, setWinning] = useState("");

  const params = useParams();
  const url = `https://webapp-exam-f3829-default-rtdb.europe-west1.firebasedatabase.app/games/${params.gameId}.json`;
  const navigate = useNavigate();
  useEffect(() => {
    async function getGame() {
      const response = await fetch(url);
      const data = await response.json();
      setGame(data);

      if (data) {
        setName(data.name);
        setImage(data.imageURL);
        setEquipment(data.equipment);
        setTime(data.time);
        setPeople(data.people);

        if (data.rules) {
          setDes(data.rules.description || "");
          setIntro(data.rules.intro || "");
          setWinning(data.rules.winning || "");
        }
      }
    }
    getGame();
  }, [url]);

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
    : "https://firebasestorage.googleapis.com/v0/b/webapp-exam-f3829.appspot.com/o/WhiteHeart.png?alt=media&token=38814319-12eb-418f-af18-58a06382d83e";

  return (
    <article className="gamePage" key={game}>
      <div className="imageGameBox">
        <img src={image} alt="Game Image" />
      </div>
      <div className="underImage">
        <div className="titleUnder">
          <h1>{name}</h1>
          <div className="shareHeart">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/webapp-exam-f3829.appspot.com/o/fi-rr-share.svg?alt=media&token=8728d2d3-2dd1-49ec-a851-129f17d01e22"
              alt=""
            />
            <img
              className="heartIconMain"
              src={heartIconSrc}
              onClick={toggleLike}
            />
          </div>
        </div>
        <div className="iconsBox">
          <div className="iconBox people">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/webapp-exam-f3829.appspot.com/o/people.svg?alt=media&token=238731b5-7f1d-4cd5-8738-3aa42814541c"
              alt="time"
            />
            <p>{people}</p>
          </div>
          <div className="iconBox">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/webapp-exam-f3829.appspot.com/o/hourglass.svg?alt=media&token=f136906c-6d68-407d-b182-63b1bf72ecdb"
              alt="time"
            />
            <p>{time}</p>
          </div>
          <div className="iconBox">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/webapp-exam-f3829.appspot.com/o/bowling.svg?alt=media&token=36d81ed9-1d70-4b31-9ca1-0bfe6413ceb6"
              alt="time"
            />
            <p>{equipment}</p>
          </div>
        </div>
        <div className="rulesBox">
          <div className="ruresDropdown">
            <h2>Basic Rules</h2>
          </div>
          <div className="rulesContentBox">
            <div className="introBox">
              <h2>Intro</h2>
              <p>{intro}</p>
            </div>
            <div className="introBox">
              <h2>Rules</h2>
              <p>{des}</p>
            </div>
            <div className="introBox">
              <h2>Winning</h2>
              <p>{winning}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="editDelete">
        <button
          className="edit"
          onClick={() => navigate(`/editgame/${game.id}`)}
        >
          Edit
        </button>
      </div>
    </article>
  );
}
