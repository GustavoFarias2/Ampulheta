const renderHourglass = (maxLines, lineState) => {
  // criar um espaço da linha de comando separando a ampulheta
  console.log();

  for (let line = 1; line <= maxLines; line++) {
    renderLine(line, maxLines, lineState);
  }
};

const renderLine = (line, maxLines, lineState) => {
  if (line === 1 || line === maxLines) {
    // Renderizar o topo e a base
    console.log("  " + "#".repeat(maxLines));
  } else {
    // Renderizar as linhas
    renderCell(line, maxLines, lineState[line]);
  }
};

const renderCell = (line, maxLines, isSand) => {
  if (line > maxLines / 2) {
    // Parte inferior da ampulheta
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
    // Parte Superior da ampulheta
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

module.exports = renderHourglass;
