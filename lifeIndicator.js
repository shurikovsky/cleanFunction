export default function lifeIndicator (options = {}) {
  if (options.health < 15) {
      return 'critical';
  }
  if (options.health > 15 && options.health < 50 ) {
      return 'wounded';
  }
  return 'healthy';
};
