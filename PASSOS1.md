# criação da ampulheta

### Explicação deste arquivo

este arquivo foi criado apenas com intuito de abstrair a lógica durante o desenvolvimento da aplicação, ele contém de forma cronológica os pensamentos durante o desenvolvimento do desafio e também anotações que eu utilizei durante o processo de criação.

### metas

- (x) renderizar a ampulheta
- atualizar ela a cada certo tempo e receber valor do usuario
- a cada atualização mudar o posicionamento da areia

### renderizar a ampulheta

- criar um função para renderizar a ampulheta

      (renderTable)

- a função deve criar individualmente cada linha

      (renderLine)

- tanto o topo quanto o fundo são cheios, renderizados de forma diferente
  line === 1 || line === maxLines ?
  (#################) :
  (| # # |)

      apliquei o char "|" pela estetica

- fazer uma função para renderizar celula da ampulheta

      (renderCell)

- a função precisa ser dividida, pois o espaço entre os caracteres altera após o meio da ampulheta.

      "if (line > maxLines /2 )"

- renderizar parte superiora da ampulheta usando alguma logica para definir os espaços entre os caracteres

      |  'espaço'  #  'espaço'  #  'espaço'  |

      - o primeiro e ultimo espaço é o numero da linha (removendo o valor de caracteres) ###formula de espaço inicial

      - o espaço do meio precisa remover do total (maxLines) os espaço ja utilizados (line2 * 2)

- renderizar a parte inferiora, talvez inverter a lógica da parte superiora possa ajudar

      - para a partes laterais pode se aproveitar a loja da parte interior da parte superiora da ampulheta (maxLines - line)

      - para alinhar a ampulheta tive que modificar a formula (maxLines - line - 1) pois as linhas do meio da ampulheta são o ponto de encontro

      - espaço do meio
      > preciso retirar da metade da ampulheta (pois o tamanho é igual a largura) o meu index de linha, assim terei o reverso da formula de espaço inicial

      - o numero de espaço precisa ser multiplicado por algum numero negativo para modularizar seu valor, (valor 2 escolhido para definir a quantidade de caracteres)

      - (middleSpace >= 0 ? middleSpace : 0) logica adicionada pois o meio da ampulheta tem valor negativo na formula usada

- Problema encontrado > para numeros impares a tabela se desalinha, pois nao consegue criar um ponto unico de caracter

      possiveis soluções:
      fazer com que sempre tenha um ponto unico (X estetica ruim)
      adaptar a quantidade de espaços...
      remover caracteres quando a ampulheta tiver um tamanho impar (V)

- Remover caracteres quando a ampulheta tiver um tamanho impar

      maxLines % 2, para saber se e impar

      caso for impar, remover um caracter:
       - (isImpar ? 1 : 0);

      caso for impar, precisa se retirar um caracter do encontro dos pontos centrais (caso impar repetir 0 vezes)
      "#".repeat(middleSpace < 0 ? 0 : 1)

- Adicionar margin na ampulheta para melhorar a estetica
