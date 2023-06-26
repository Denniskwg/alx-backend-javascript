import getBudgetObject from './7-getBudgetObject';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars: (value) => `$${value}`,
    getIncomeInEuros: (euros) => `${euros} euros`,
  };

  return fullBudget;
}
