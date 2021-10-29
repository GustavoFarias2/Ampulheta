const moveSand = require("./src/moveSand");
const renderHourglass = require("./src/renderHourglass");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const runTimer = async (lines) => {
  const lineState = Array.from(
    { length: lines + 2 },
    (_, index) => index < lines / 2
  );

  console.clear();

  setInterval(() => {
    console.clear();

    moveSand(lineState);

    renderHourglass(lines, lineState);
  }, 1000);
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
