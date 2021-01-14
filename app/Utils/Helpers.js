export const formatUnitDropdown = (data) => {
  const newData = data.map(({ abbr, singular }) => ({
    label: `${singular} - ${abbr}`,
    value: abbr,
  }));

  return newData;
};
