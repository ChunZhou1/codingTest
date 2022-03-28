const codeFun1 = (recipe) => {
  let fudge,
    amt,
    sugar,
    chocolate = null;

  switch (recipe) {
    case "SPANISH":
      fudge = SPANISH_FUDGE;
      amt = base * SPANISH_FUDGE;
      sugar = 2 * bottom(amt) + top(amt) * 1.17;
      break;

    case "FRENCH":
    case "ENGLISH":
      fudge = recipe == "FRENCH" ? FRENCH_FUDGE : ENGLISH_FUDGE;
      amt = base * fudge;
      sugar = 2 * bottom(amt) + top(amt) * 1.17;
      chocolate = recipe == "FRENCH" ? 7 : null;
      break;

    default:
      fudge = 1;
      amt = base;
      sugar = 2 * bottom(amt) + top(amt) * 1.17;
      break;
  }

  return [fudge, amt, sugar, chocolate];
};
