// moveSand
// function to move sand in the hourglass
const moveSand = (lineState) => {
  // Change first sand to false (not sand)
  const firstSandIndex = lineState.findIndex((item) => item);
  lineState[firstSandIndex] && (lineState[firstSandIndex] = false);

  // Change first sand to true (sand)
  const lastSpaceIndex = lineState.reverse().findIndex((item) => !item);
  !lineState[firstSandIndex] && (lineState[lastSpaceIndex] = true);
  lineState.reverse();
};

module.exports = moveSand;
