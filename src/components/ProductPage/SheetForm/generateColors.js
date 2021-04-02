// import blueDegree2 from "../../../images/sheetColors/Degree 2 Blue.png";
// import greenDegree2 from "../../../images/sheetColors/Degree 2 Green.png";
// import ivoryDegree2 from "../../../images/sheetColors/Degree 2 Ivory.png";
// import whiteDegree2 from "../../../images/sheetColors/Degree 2 White.png";
// import blueDegree3 from "../../../images/sheetColors/Degree 3 Blue.png";
// import celadonDegree3 from "../../../images/sheetColors/Degree 3 Celadon.png";
// import softLinenDegree3 from "../../../images/sheetColors/Degree 3 Soft Linen.png";
// import taupeDegree3 from "../../../images/sheetColors/Degree 3 Taupe.png";
// import whiteDegree3 from "../../../images/sheetColors/Degree 3 White.png";
// import blueDegree4 from "../../../images/sheetColors/Degree 4 Blue.png";
// import champagneDegree4 from "../../../images/sheetColors/Degree 4 Champagne.png";
// import grayDegree4 from "../../../images/sheetColors/Degree 4 Gray.png";
// import snowflakeDegree4 from "../../../images/sheetColors/Degree 4 Snowflake.png";
// import truffleDegree4 from "../../../images/sheetColors/Degree 4 Truffle.png";
// import blueDegree5 from "../../../images/sheetColors/Degree 5 Blue.png";
// import ecruDegree5 from "../../../images/sheetColors/Degree 5 Ecru.png";
// import grayDegree5 from "../../../images/sheetColors/Degree 5 Gray.png";
// import sandDegree5 from "../../../images/sheetColors/Degree 5 Sand.png";
// import whiteDegree5 from "../../../images/sheetColors/Degree 5 White.png";
// import grayDegree6 from "../../../images/sheetColors/Degree 6 Gray.png";
// import greenDegree6 from "../../../images/sheetColors/Degree 6 Green.png";
// import ivoryDegree6 from "../../../images/sheetColors/Degree 6 Ivory.png";
// import tanDegree6 from "../../../images/sheetColors/Degree 6 Tan.png";
// import whiteDegree6 from "../../../images/sheetColors/Degree 6 White.png";

// const degree2 = {
//   White: whiteDegree2,
//   Ivory: ivoryDegree2,
//   Green: greenDegree2,
//   Blue: blueDegree2,
// };
// const degree3 = {
//   White: whiteDegree3,
//   Celadon: celadonDegree3,
//   "Soft Linen": softLinenDegree3,
//   Blue: blueDegree3,
//   Taupe: taupeDegree3,
// };
// const degree4 = {
//   Snowflake: snowflakeDegree4,
//   Champagne: champagneDegree4,
//   Truffle: truffleDegree4,
//   Blue: blueDegree4,
//   Gray: grayDegree4,
// };
// const degree5 = {
//   Blue: blueDegree5,
//   White: whiteDegree5,
//   Sand: sandDegree5,
//   Ecru: ecruDegree5,
//   Grey: grayDegree5,
// };
// const degree6 = {
//   Ivory: ivoryDegree6,
//   Tan: tanDegree6,
//   White: whiteDegree6,
//   Green: greenDegree6,
//   Gray: grayDegree6,
// };
// const sheets = {
//   "DreamFit Fine Combed Cotton Sheet Set": degree2,
//   "DreamFit Pima Cotton Sheet Set": degree3,
//   "DreamFit Egyptian Cotton Sheet Set": degree4,
//   "DreamFit Bamboo Sheet Set": degree5,
//   "DreamFit MicroTencel/Supima Cotton Sheet Set": degree6,
// };
// const sheetColors = (colors, title) => {
//   const degreeOfSheets = sheets[title];
//   return colors.map((element, index) => {
//     return {
//       title: element,
//       colorImg: degreeOfSheets[element],
//       index,
//     };
//   });
// };

// const generateColors = (products, title) => {
//   const sortedProductsByColor = {};
//   let temp;
//   products.forEach((product) => {
//     temp = product.title.split(" / ");
//     if (sortedProductsByColor[temp[1]] === undefined) {
//       sortedProductsByColor[temp[1]] = [];
//       sortedProductsByColor[temp[1]].push(product);
//     } else {
//       sortedProductsByColor[temp[1]].push(product);
//     }
//   });
//   const colorPalette = sheetColors(Object.keys(sortedProductsByColor), title);
//   return { sortedProductsByColor, colorPalette };
// };

// export default generateColors;
