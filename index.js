const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const runTimer = async (lines) => {
  const lineState = Array.from(
    {
      length: lines + 2,
    },
    (_, index) => index < lines / 2
  );

  setInterval(() => {
    console.clear();

    moveSand(lineState);

    renderTable(lines, lineState);
  }, 1000);
};

const moveSand = (lineState) => {
  // Change first sand to false (not sand)
  const firstSandIndex = lineState.findIndex((item) => item);
  lineState[firstSandIndex] && (lineState[firstSandIndex] = false);

  // Change first sand to true (sand)
  const lastSpaceIndex = lineState.reverse().findIndex((item) => !item);
  !lineState[firstSandIndex] && (lineState[lastSpaceIndex] = true);
  lineState.reverse();
};

const renderTable = (maxLines, lineState) => {
  // criar um espaço da linha de comando
  console.log();

  for (let line = 1; line <= maxLines; line++) {
    renderLine(line, maxLines, lineState);
  }
};

const renderLine = (line, maxLines, lineState) => {
  if (line === 1 || line === maxLines) {
    console.log("  " + "#".repeat(maxLines));
  } else {
    renderCell(line, maxLines, lineState[line]);
  }
};

const renderCell = (line, maxLines, isSand) => {
  if (line > maxLines / 2) {
    const isImpar = maxLines % 2;
    const outsideSpace = maxLines - line - 1;
    const middleSpace =
      (Math.floor(maxLines / 2) - line + 1) * -2 - (isImpar ? 1 : 0);

    console.log(
      "  |" +
        " ".repeat(outsideSpace) +
        "#" +
        `${isSand ? "s" : " "}`.repeat(middleSpace >= 0 ? middleSpace : 0) +
        "#".repeat(middleSpace < 0 ? 0 : 1) +
        " ".repeat(outsideSpace) +
        "|"
    );
  } else {
    const outsideSpace = line - 2;
    const middleSpace = maxLines - line * 2;

    console.log(
      "  |" +
        " ".repeat(outsideSpace) +
        "#" +
        `${isSand ? "s" : " "}`.repeat(middleSpace) +
        "#" +
        " ".repeat(outsideSpace) +
        "|"
    );
  }
};

const run = () => {
  console.log("");
  rl.question(
    "  \033[1mBem vindo ao gerador de \033[34mAmpulheta\033[37m, qual o tamanho que você gostaria de ver? ",
    (answer) => {
      const lines = Number(answer);

      // Validação do input
      if (isNaN(lines)) {
        console.log("");
        console.log(
          "  \033[0m\033[31mINPUT ERROR: insert a valid number\033[0m"
        );

        run();
      }
      // Validar caso o input seja menor que 20
      else if (lines < 20) {
        console.clear();
        console.log("");
        console.log(
          "  Por favor insira um número maior que \033[33m20\033[0m para prosseguir"
        );

        // Pergunta novamente para o usuario
        run();
      }
      // Cria a ampulheta caso satisfaça as condições
      else {
        runTimer(lines);
      }
    }
  );
};

run();
