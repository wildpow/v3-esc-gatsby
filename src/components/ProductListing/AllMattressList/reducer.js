import { navigate } from "gatsby";

const queryString = require("query-string");

function filterCurrentMattresses(mattresses, brands, comfort) {
  let newMattresses = mattresses;
  if (brands.length === 0 && comfort.length === 0) {
    return mattresses;
  }
  if (brands.length >= 1) {
    newMattresses = newMattresses.filter((matt) =>
      brands.includes(matt.brand.urlName),
    );
  }
  if (comfort.length >= 1) {
    newMattresses = newMattresses.filter((matt) =>
      comfort.includes(matt.firmness),
    );
  }
  return newMattresses;
}
export default function (state, action) {
  let newComfortNumbers;
  let newComfortCheckBoxes;
  let newBrandCheckBoxes;
  let newSelectedBrand;
  let newCurrentHeader;
  switch (action.type) {
    case "low-high":
      return {
        ...state,
        currentMattresses: [...state.currentMattresses].sort(
          (a, b) =>
            Number(a.shopifyInfo[0].priceRange.minVariantPrice.amount) -
            Number(b.shopifyInfo[0].priceRange.minVariantPrice.amount),
        ),
        beforeFilterMattresses: [...state.beforeFilterMattresses].sort(
          (a, b) =>
            Number(a.shopifyInfo[0].priceRange.minVariantPrice.amount) -
            Number(b.shopifyInfo[0].priceRange.minVariantPrice.amount),
        ),
      };
    case "high-low":
      return {
        ...state,
        currentMattresses: [...state.currentMattresses].sort(
          (a, b) =>
            Number(b.shopifyInfo[0].priceRange.minVariantPrice.amount) -
            Number(a.shopifyInfo[0].priceRange.minVariantPrice.amount),
        ),
        beforeFilterMattresses: [...state.beforeFilterMattresses].sort(
          (a, b) =>
            Number(b.shopifyInfo[0].priceRange.minVariantPrice.amount) -
            Number(a.shopifyInfo[0].priceRange.minVariantPrice.amount),
        ),
      };
    case "name a-z":
      return {
        ...state,
        currentMattresses: [...state.currentMattresses].sort((a, b) => {
          const nameA = `${a.subline.name} ${a.nameWithout}`;
          const nameB = `${b.subline.name} ${a.nameWithout}`;
          return nameA > nameB ? 1 : -1;
        }),
        beforeFilterMattresses: [...state.beforeFilterMattresses].sort(
          (a, b) => {
            const nameA = `${a.subline.name} ${a.nameWithout}`;
            const nameB = `${b.subline.name} ${a.nameWithout}`;
            return nameA > nameB ? 1 : -1;
          },
        ),
      };
    case "name z-a":
      return {
        ...state,
        currentMattresses: [...state.currentMattresses].sort((a, b) => {
          const nameA = `${a.subline.name} ${a.nameWithout}`;
          const nameB = `${b.subline.name} ${a.nameWithout}`;
          return nameB > nameA ? 1 : -1;
        }),
        beforeFilterMattresses: [...state.beforeFilterMattresses].sort(
          (a, b) => {
            const nameA = `${a.subline.name} ${a.nameWithout}`;
            const nameB = `${b.subline.name} ${a.nameWithout}`;
            return nameB > nameA ? 1 : -1;
          },
        ),
      };
    case "brand":
      newBrandCheckBoxes = [...state.brandCheckBoxes];
      newBrandCheckBoxes[action.index].checked = action.checked;
      newSelectedBrand = [...state.selectedBrandCheckBoxes];
      if (newSelectedBrand.includes(action.value)) {
        newSelectedBrand = newSelectedBrand.filter(
          (item) => item !== action.value,
        );
      } else {
        newSelectedBrand.push(action.value);
      }
      if (newSelectedBrand.length === 0 || newSelectedBrand.length >= 2) {
        newCurrentHeader = state.headers.all;
      } else {
        newCurrentHeader = state.headers[newSelectedBrand[0]];
      }
      navigate(
        `${state.locationPath}?${queryString.stringify(
          { brand: newSelectedBrand, comfort: state.selectedComfortCheckBoxes },
          { arrayFormat: "comma" },
        )}`,
      );
      return {
        ...state,
        currentMattresses: filterCurrentMattresses(
          state.beforeFilterMattresses,
          newSelectedBrand,
          state.selectedComfortCheckBoxes,
        ),
        brandCheckBoxes: newBrandCheckBoxes,
        selectedBrandCheckBoxes: newSelectedBrand,
        currentHeader: newCurrentHeader,
      };
    case "comfort":
      newComfortCheckBoxes = [...state.comfortCheckBoxes];
      newComfortCheckBoxes[action.index].checked = action.checked;

      newComfortNumbers = [...state.selectedComfortCheckBoxes];
      if (newComfortNumbers.includes(action.id)) {
        newComfortNumbers = newComfortNumbers.filter(
          (item) => item !== action.id,
        );
      } else {
        newComfortNumbers.push(action.id);
      }
      navigate(
        `${state.locationPath}?${queryString.stringify(
          { brand: state.selectedBrandCheckBoxes, comfort: newComfortNumbers },
          { arrayFormat: "comma" },
        )}`,
      );
      return {
        ...state,
        comfortCheckBoxes: newComfortCheckBoxes,
        currentMattresses: filterCurrentMattresses(
          state.beforeFilterMattresses,
          state.selectedBrandCheckBoxes,
          newComfortNumbers,
        ),
        selectedComfortCheckBoxes: newComfortNumbers,
      };
    default:
      throw new Error();
  }
}
