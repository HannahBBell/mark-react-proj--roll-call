import { isPropertySignature } from "typescript";

interface CharacterProps {
  name: string;
  nickname: string;
  location: string;
  hobbies: string[];
  origin: "Greek Mythology" | "Roman Mythology" | "Marvel Comics" | "DC Comics";
}

function Character({name, nickname, location, hobbies, origin}: CharacterProps) {
  return (
    <div className="character-card">
      <h2>{name.toUpperCase()}</h2>
      <h3>the legendary {nickname}</h3>
      <p>
        <i>Good to have you here, {name}!</i>
      </p>
      <p>
        <b>Location:</b> {location}
      </p>
      <p>
        <b>Hobbies:</b> {hobbies.join(", ")}
      </p>
      <p>{name} originates from {origin}</p>
    </div>
  );
}

export default Character;
