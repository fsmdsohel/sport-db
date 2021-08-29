let searchInput;

const displayPlayerData = (playerData) => {
  document.getElementById("spinner").classList.remove("active");
  document.getElementById("image").src = playerData.player[0].strThumb;

  document.getElementById("card-title").innerText =
    playerData.player[0].strPlayer;

  document.getElementById("card-text").innerText =
    playerData.player[0].strDescriptionEN;

  document.getElementById("display-div").style.display = "flex";
};

const loadPlayearsData = async (searchInput) => {
  const url = await fetch(
    `https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${searchInput}`
  );
  document.getElementById("spinner").classList.add("active");
  const playerData = await url.json();
  displayPlayerData(playerData);
};

// search button function
document.getElementById("search-btn").onclick = () => {
  searchInput = document.getElementById("input-frield").value;
  loadPlayearsData(searchInput);
};

const displayModalData = (teamData) => {
  document.getElementById("modal-body").innerText = teamData.teams[0].strLeague;
  console.log(teamData);
};
const loadTeamData = async (playerData) => {
  const url = await fetch(
    `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${playerData.player[0].strTeam2}`
  );
  const teamData = await url.json();
  displayModalData(teamData);
};

const loadPayerData = async (searchInput) => {
  const url = await fetch(
    `https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${searchInput}`
  );
  const playerData = await url.json();

  loadTeamData(playerData);
};

// team button function
document.getElementById("team-btn").onclick = () => {
  loadPayerData(searchInput);
};
