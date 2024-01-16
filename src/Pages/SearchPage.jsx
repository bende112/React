import { useSearchParams, Link } from "react-router-dom";

export default function SearchPage() {
  // useSearchParams returns an array, we are
  const [searchParams] = useSearchParams();

  const sortType = searchParams.get("sort");

  const footballPlayers = [
    "Kafu",
    "Calos",
    "Ronaldo",
    "Ozil",
    "Kaka",
    "Saka",
    "Beckham",
    "Zidane",
    "Zambrotta",
    "Maldini",
    "Platini",
    "Pele",
    "Zico",
    "Rhonaldinho",
    "Beckenbauer",
  ];

  if (sortType === "asc") {
    footballPlayers.sort();
  } else if (sortType === "desc") {
    footballPlayers.sort().reverse();
  }

  return (
    <div>
      <h2>FootBallers</h2>
      <div className="sort-btns">
        <Link to="/footballPlayers?sort=asc">Sort Alphabetically</Link>
        <Link to="/footballPlayers?sort=desc">Sort De-Alphabetically</Link>
        <Link to="/footballPlayers">Sort NOT</Link>
      </div>
      {footballPlayers.map((footballPlayer) => {
        return <p key={footballPlayer}>{footballPlayer}</p>;
      })}
    </div>
  );
}
