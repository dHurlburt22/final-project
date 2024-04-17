import './App.css';
import { useEffect, useState} from "react";
import ReactDOM from 'react-dom/client';
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://evzeezotdchftmtljick.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2emVlem90ZGNoZnRtdGxqaWNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0MjUxODMsImV4cCI6MjAyNjAwMTE4M30.MlrevzO0M9WUQ95609l0u37pwbegaSczpGW9uEOEY2E");


function MyForm() {
  const [name, setName] = useState("");

  let nameResponses = ["That's an awesome choice.", "Thanks for letting me know, that's sick."];
  let selectedNameResponse = nameResponses[Math.floor(Math.random() * nameResponses.length)];

  const handleSubmit = (event) => {
    
    event.preventDefault();
    alert("Enter your favorite game here: " + name + ". " + selectedNameResponse);
  }

  return (
    <form class="mt-5" onSubmit={handleSubmit}>
      <h1 class="fs-3"><u>Before you go, while I talked about all of my games, what is your favorite game of all time.</u></h1>
      <label class="mb-5 mt-4 fs-4">Enter your favorite game here:
        <input class="inputDetail py-2"
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input class="pt-3 px-4 bg-dark text-white submitPadding" type="submit" />
    </form>
  )
}

function App() {

  const [GameRecommendations, setGameRecommendations] = useState([]);

  useEffect(() => {
    getGameRecommendations();
  }, []);

  async function getGameRecommendations() {
    const { data } = await supabase.from("GameRecommendations").select();
    setGameRecommendations(data);
  }

  return (
    
    <div className="App bg-dark text-white">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" integrity="sha256-2TnSHycBDAm2wpZmgdi0z81kykGPJAkiUY+Wf97RbvY=" crossorigin="anonymous"></link>

    <header className="App-header">
      <h1 class="border-5 headerSizing w-75 btn-gradient-2">
        My Top 10 Game's of all time:
      </h1>

      <h2 class="w-50 btn-gradient-3 p-4 mt-3 fs-2">
        This site exists as a sort of game recommendation system. This works as a catalouge to games that have been a strong
        foundation towards me and were important throughout my entire life.
      </h2>
    </header>

      {GameRecommendations.map((Game) => (
        <p>{Game.company}</p>
      ))}

      <h1>{GameRecommendations[0].company}</h1>

<div class="container">
  <div class="row justify-content-start">
    <div class="col-4 h1 gradeGreen">
      <h1 class="rounded display-1">{GameRecommendations[9].ranking}</h1>
      <h2>{GameRecommendations[9].title}</h2>
      <h3>{GameRecommendations[9].recommendation}</h3>
      <button class="btn-gradient-2">Button Two</button>
    </div>
  </div>

  <div class="row justify-content-end">
    <div class="col-4 h2 gradeOrange">
      <h1>{GameRecommendations[8].ranking}</h1>
      <h2>{GameRecommendations[8].title}</h2>
      <h3>{GameRecommendations[8].recommendation}</h3>
    </div>
  </div>
  
  <div class="row justify-content-start">
    <div class="col-4 h1 gradeRed">
      <h1>{GameRecommendations[7].ranking}</h1>
      <h2>{GameRecommendations[7].title}</h2>
      <h3>{GameRecommendations[7].recommendation}</h3>
    </div>
  </div>

  <div class="row justify-content-end">
    <div class="col-4 h2 gradeWhite">
      <h1>{GameRecommendations[6].ranking}</h1>
      <h2>{GameRecommendations[6].title}</h2>
      <h3>{GameRecommendations[6].recommendation}</h3>
    </div>
  </div>

  <div class="row justify-content-start">
    <div class="col-4 h1 gradeBlue">
      <h1>{GameRecommendations[5].ranking}</h1>
      <h2>{GameRecommendations[5].title}</h2>
      <h3>{GameRecommendations[5].recommendation}</h3>
    </div>
  </div>

  <div class="row justify-content-end">
    <div class="col-4 h2 gradeYellow">
      <h1>{GameRecommendations[4].ranking}</h1>
      <h2>{GameRecommendations[4].title}</h2>
      <h3>{GameRecommendations[4].recommendation}</h3>
    </div>
  </div>

  <div class="row justify-content-start">
    <div class="col-4 h1 gradePink">
      <h1>{GameRecommendations[3].ranking}</h1>
      <h2>{GameRecommendations[3].title}</h2>
      <h3>{GameRecommendations[3].recommendation}</h3>
    </div>
  </div>

  <div class="row justify-content-end">
    <div class="col-4 h2 gradeLightBlue">
      <h1>{GameRecommendations[2].ranking}</h1>
      <h2>{GameRecommendations[2].title}</h2>
      <h3>{GameRecommendations[2].recommendation}</h3>
    </div>
  </div>

  <div class="row justify-content-start">
    <div class="col-4 h1 gradeBigGreen permanent-marker">
      <h1>{GameRecommendations[1].ranking}</h1>
      <h2>{GameRecommendations[1].title}</h2>
      <h3>{GameRecommendations[1].recommendation}</h3>
    </div>
  </div>
  

  <div class="row justify-content-end">
    <div class="col-4 h2 gradeBlack pressStart">
      <h1>{GameRecommendations[0].ranking}</h1>
      <h2>{GameRecommendations[0].title}</h2>
      <h3>{GameRecommendations[0].recommendation}</h3>
    </div>
  </div>

  <MyForm/>
</div>

</div>

    
  );
}

export default App;
