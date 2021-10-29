const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const runTimer = async (lines) => {
  console.clear();

  renderTable(lines);
  setInterval(() => {
    console.clear();

    renderTable(lines);
  }, 1000);
};

const renderTable = (maxLines) => {
  // criar um espaço da linha de comando
  console.log();

  for (let line = 1; line <= maxLines; line++) {
    renderLine(line, maxLines);
  }
};

const renderLine = (line, maxLines) => {
  if (line === 1 || line === maxLines) {
    console.log("  " + "#".repeat(maxLines));
  } else {
    renderCell(line, maxLines);
  }
};

const renderCell = (line, maxLines) => {
  if (line > maxLines / 2) {
    const isImpar = maxLines % 2;

    const outsideSpace = maxLines - line - 1;
    const middleSpace =
      (Math.floor(maxLines / 2) - line + 1) * -2 - (isImpar ? 1 : 0);

    console.log(
      "  |" +
        " ".repeat(outsideSpace) +
        "#" +
        "#".repeat(middleSpace >= 0 ? middleSpace : 0) +
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
        " ".repeat(middleSpace) +
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
