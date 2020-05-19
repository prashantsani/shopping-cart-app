export function comparePrice(a, b){
  const priceA = a.price.actual;
  const priceB = b.price.actual;

  let comparison = 0;
  if (priceA > priceB) {
    comparison = 1;
  } else if (priceA < priceB) {
    comparison = -1;
  }
  return comparison;
}

export function compareDiscount(a, b){
  const priceA = a.discount;
  const priceB = b.discount;

  let comparison = 0;
  if (priceA < priceB) {
    comparison = 1;
  } else if (priceA > priceB) {
    comparison = -1;
  }
  return comparison;
}