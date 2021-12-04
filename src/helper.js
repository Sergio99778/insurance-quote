export function getDifferenceYears(year) {
  return new Date().getFullYear() - year;
}

export function checkModel(model) {
  let increase;
  switch (model) {
    case 'european':
      increase = 1.3;
      break;
    case 'american':
      increase = 1.15;
      break;
    case 'asian':
      increase = 1.05;
      break;
    default:
      break;
  }
  return increase;
}

export function checkPlan(plan) {
  return plan === 'basic' ? 1.2 : 1.5;
}
