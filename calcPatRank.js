averageVictoryAndDefeat(200, 5);
newLevelHero = calculateLevelHero(ranked);
function averageVictoryAndDefeat(victory, louse) {
  return (ranked = victory - louse);
}

function calculateLevelHero() {
  let levelHero;

  if (ranked < 10) {
    levelHero = "Ferro";
  } else if (ranked <= 20) {
    levelHero = "Bronze";
  } else if (ranked > 20 && ranked <= 50) {
    levelHero = "Prata";
  } else if (ranked > 50 && ranked <= 80) {
    levelHero = "Ouro";
  } else if (ranked > 80 && ranked <= 90) {
    levelHero = "Diamante";
  } else if (ranked > 90 && ranked <= 100) {
    levelHero = "Lendário";
  } else if (ranked > 100) {
    levelHero = "Imortal";
  }

  return levelHero;
}

console.log(
  `O Heroi tem o saldo de ${ranked} vitórias e seu nível é ${newLevelHero}`
);
