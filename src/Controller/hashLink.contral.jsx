export const scrollSet = (posY) => {
  const yCoordinate = posY.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -110;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
};
