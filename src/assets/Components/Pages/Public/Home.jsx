//Maja
import { useNavigate } from "react-router";
import Games from "../../Games";
import NewGames from "../../newGames";


export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="pickChoose">
        <div className="pickHeading">
          <h1>Pick & Choose</h1>
          <div className="smilyFace">
            <img src="https://firebasestorage.googleapis.com/v0/b/webapp-exam-f3829.appspot.com/o/%E2%98%BA.svg?alt=media&token=3d7a86b9-6440-4574-b0ec-736fefab5bcc" />
          </div>
        </div>
        <div className="pickContent">
          <div
            className="cardFav pickCards"
            onClick={() => navigate("/signin")}
          >
            <img src="https://firebasestorage.googleapis.com/v0/b/webapp-exam-f3829.appspot.com/o/heart.svg?alt=media&token=4f97288c-f486-429c-ad00-0bda023a954b" />
            <h3>Favorite</h3>
          </div>
          <a href="/spin">
            <div className="cardRandom pickCards">
              <img src="https://firebasestorage.googleapis.com/v0/b/webapp-exam-f3829.appspot.com/o/randomIcon.svg?alt=media&token=b90f0380-8e8d-4683-91cc-68fe3df2096a" />
              <h3>Random</h3>
            </div>
          </a>
          <div className="cardDice pickCards">
            <img src="https://firebasestorage.googleapis.com/v0/b/webapp-exam-f3829.appspot.com/o/diceIcon.svg?alt=media&token=0adbe033-881d-4135-9e99-40b2edb7a640" />
            <h3>Dices</h3>
          </div>
          <div className="cardCards pickCards">
            <img src="https://firebasestorage.googleapis.com/v0/b/webapp-exam-f3829.appspot.com/o/cardsIcon.svg?alt=media&token=5437af88-7ed2-4fd9-beb0-db74a590d12b" />
            <h3>Cards</h3>
          </div>
          <div className="cardIndoor pickCards">
            <img src="https://firebasestorage.googleapis.com/v0/b/webapp-exam-f3829.appspot.com/o/home.svg?alt=media&token=3a6b878e-49eb-4266-aa06-c9997e587b1f" />
            <h3>Indoor</h3>
          </div>
          <div className="cardOutdoor pickCards">
            <img src="https://firebasestorage.googleapis.com/v0/b/webapp-exam-f3829.appspot.com/o/treeIcon.svg?alt=media&token=d33b26e6-a85e-4f16-901a-f80aeccccb44" />
            <h3>Outdoor</h3>
          </div>
        </div>
      </div>
      <div className="newGamesSection">
        <NewGames />
      </div>
      <div className="recoGamesSection"></div>
      <div className="allGamesSection">
        <Games />
      </div>
    </>
  );
}
