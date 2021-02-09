import Character from "./components/Character";

function App() {
  return (
    <div>
      <h1>Roll call!</h1>
      <Character
        name="Medusa"
        nickname="the one with snakes in her hair"
        location="Sarpedon"
        hobbies={["turning people to stone", "baking sourdough bread"]}
        origin="Greek Mythology"
      />
      <Character
        name="Hercules"
        nickname="Mr Muscle"
        location="Rome"
        hobbies={[
          "slaying evil",
          "flexing in togas",
          "unnecessary side-quests",
        ]}
        origin="Roman Mythology"
      />
      <Character
        name="Storm"
        nickname="Supercharged Halle Berry"
        location="New York"
        hobbies={[
          "floating menacingly in the air",
          "looking fleek",
          "kinda being like Zeus with thunderbolts",
        ]}
        origin="Roman Mythology"
      />
      <Character
        name="Captain America"
        nickname="the self absorbed one"
        location="USA"
        hobbies={[
          "being self-righteous", 
          "gratuitous semi-nudity"
        ]}
        origin="Marvel Comics"
      />
      <Character
        name="Superman"
        nickname="the one who thinks he's hard"
        location="Krypton"
        hobbies={[
          "having an alter-ego", 
          "having a nervous breakdown over a rock"
        ]}
        origin="DC Comics"
      />
    </div>
  );
}

export default App;
