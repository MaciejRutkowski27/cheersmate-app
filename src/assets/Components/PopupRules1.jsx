//Maciek

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SpinResult from "./SpinResult";

export default function PopupRules1() {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function getGames() {
      const url =
        "https://webapp-exam-f3829-default-rtdb.europe-west1.firebasedatabase.app/games.json";
      const response = await fetch(url);
      const data = await response.json();
      const gamesArray = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      setGames(gamesArray);
    }
    getGames();
  }, []);
  const gamesRules = [...games];
  const specificGameId = "beerPong"; // Specify the ID you want to display

  const specificGame = gamesRules.find((game) => game.id === specificGameId);

  return (
    <section>
      <div className="popupcontent">
        <div className="popupcontainer">
          {specificGame && (
            <div className="randomgamepop" key={specificGame.id}>
              <SpinResult key={specificGame.id} game={specificGame} />
              <button
                className="seemoreMR"
                onClick={() => navigate(`/games/${specificGame.id}`)}
              >
                See Rules
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/webapp-exam-f3829.appspot.com/o/fi-rr-angle-small-right.svg?alt=media&token=563f6fb0-d569-43d3-bb2e-6d6740a3e914"
                  alt="arrow"
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
