//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  let Manager = [managerName, managerAge, currentTeam, trophiesWon];
  return Manager;
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
let createFormation = (formation) => {
  let formationObject = {
    defender: formation[0],
    midfield: formation[1],
    forward: formation[2],
  };
  return formation.length == 0 ? null : formationObject;
};

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(debut) {
  let arr = players.filter(function(player) {
    return player.debut == debut;
  });
  return arr;
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position) {
  let arr = players.filter(function(player) {
    return player.position == position;
  });
  return arr;
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName) {
  let arr = players.filter((player) => player.awards.some((n) => n.name === awardName));
  return arr;
}

//Progression 6 - Filter players that won ______ award ____ times
let filterByAwardxTimes = (awardName, noOfTimes) => {
  if (typeof awardName == "undefined" || typeof noOfTimes == "undefined") {
      return [];
  } else {
      let res = [];
      players.map((player) => {
          let count = 0;
          player.awards.map((award) => {
              if (award.name == awardName) {
                  count++;
              }
          });
          if (count == noOfTimes) {
              res.push(Object.assign({}, player));
          }
      });
      return res;
  }
};

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country) {
  let arr = players.filter((player) => 
    player.awards.some((n) => n.name == awardName) && 
    player.country == country
  );
  return arr;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  let arr = players.filter((player) =>
    player.awards.length >= noOfAwards &&
    player.team == team &&
    player.age < age
  );
  return arr;
}

//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
