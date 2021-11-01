function getKiller(suspectInfo, deadPeople) {

  suspectInfo["killer"] = [];
  for (let suspect in suspectInfo) {
    deadPeople.map((i) => {
      suspectInfo[suspect].map((j) => {
        if (i === j) {
          suspectInfo["killer"].push(suspect);
        }
      });
    });
  }

  let result = suspectInfo["killer"].reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});

  const max = Object.keys(result).reduce(
    (a, v) => Math.max(a, result[v]),
    -Infinity
  );
  const killer = Object.keys(result).filter((v) => result[v] === max);

  return `Убийца ${killer}`;
}

console.log(
  getKiller(
    {
      Brad: [],
      Megan: ["Ben", "Kevin"],
      Finn: [],
    },
    ["Ben"]
  )
);
