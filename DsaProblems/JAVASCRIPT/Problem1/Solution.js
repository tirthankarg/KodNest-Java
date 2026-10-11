//take input
//file system node js
const fs = require("fs");

function getInput() {
  const input = fs.readFileSync(0, "utf-8").trim().split("\n");

  const n = parseInt(input[0]);

  const entries = input.slice(1, n + 1).map((line) => {
    const [name, team, score] = line.trim().split(/\s+/);

    return {
      name,
      team,
      score: Number(score),
    };
  });

  return { entries };
}

const { entries } = getInput();

console.log(entries);

function employeePerformanceAnalyzer(entries) {
  const teams = new Map();
  for (const entry of entries) {
    const { name, team, score } = entry;
    if (Number.isNaN(entry.score) || entry.score < 0 || entry.score > 100) {
      continue;
    }
    const teamKey = team.toLowerCase();

    if (!teams.has(teamKey)) {
      teams.set(teamKey, []);
    }

    const employees = teams.get(teamKey);

    const existing = employees.find(
      (employee) => employee.name.toLowerCase() === name.toLowerCase(),
    );

    if (existing) {
      if (score > existing.score) {
        existing.score = score;
      }
    } else {
      employees.push({
        name,
        score,
      });
    }
  }

  const sortedTeams = [...teams.keys()].sort();

  const output = [];

  for (const teamKey of sortedTeams) {
    const nameTeam =
      teamKey.charAt(0).toUpperCase() + teamKey.slice(1).toLowerCase();

    output.push(nameTeam);

    const employees = teams.get(teamKey);

    employees.sort((a, b) => b.score - a.score);

    for (const employee of employees) {
      output.push(`${employee.name} ${employee.score}`);
    }
  }

  console.log(output.join("\n"));
}

employeePerformanceAnalyzer(entries);
