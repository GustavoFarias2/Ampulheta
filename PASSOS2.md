# criação da ampulheta

### Explicação deste arquivo

este arquivo foi criado apenas com intuito de abstrair a lógica durante o desenvolvimento da aplicação, ele contém de forma cronológica os pensamentos durante o desenvolvimento do desafio e também anotações que eu utilizei durante o processo de criação.

### metas

- renderizar a ampulheta
- (x) atualizar ela a cada certo tempo e receber valor do usuario
- a cada atualização mudar o posicionamento da areia

### Atualizar ela a cada certo tempo

- receber valor do usuario

      const readline = require("readline");

      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

- gerar atualização a cada periodo

      ao contrário de renderizar diretamente, preciso renderizar a cada certo tempo (1 segundo),

      a função precisa, limpar o console e depois renderizar novamente a ampulheta

- Nesta parte também quis adicionar as validações para o input do usuario.
