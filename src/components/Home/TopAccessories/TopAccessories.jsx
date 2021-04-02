// TODO Build top accessory component for home page

// gatsby-node.js

// query:

// front: datoCmsFrontPage {
//   topAccessoryHeader
//   topAccessoryFooter
//   topAccessoryFooterUrl
//   topAccessories {
//     accessory
//   }
// }

// Math:
// const accessories = [
//   ...data.pillow.nodes,
//   ...data.sheets.nodes,
//   ...data.protector.nodes,
// ];
// const stuff = [];
// data.front.topAccessories.map((acc) => {
//   accessories.forEach((element) => {
//     if (element.shopifyId === acc.accessory) {
//       stuff.push(element);
//     }
//   });
//   return null;
// });
// actions.createPage({
//   path: `/`,
//   component: path.resolve(`./src/pages/index.js`),
//   context: {
//     acc: stuff,
//   },
// });
