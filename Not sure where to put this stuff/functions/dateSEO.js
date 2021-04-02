const dateSEO = () => {
  const today = new Date();
  const dd = today.getDate();
  let y = today.getFullYear();
  let mm = today.getMonth() + 1;
  if (mm + 1 === 13) {
    y += 1;
    mm = 1;
  } else {
    mm += 1;
  }

  return `${y}-${mm}-${dd}`;
};

export default dateSEO;
