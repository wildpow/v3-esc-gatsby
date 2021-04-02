import styled, { keyframes } from "styled-components";
// Site Wide default values and styles

// export const Blue = "#1565c0";
// export const Red = "#eb1c24";
// export const Border = "1px solid #eee";
// export const RedBorderBottom = "4px solid #eb1c24";
// export const TextShadow = "2px 2px 4px rgba(0, 0, 0, 0.2)";
// export const BoxShadow = "0 10px 6px -6px rgba(119, 119, 119, .6)";
// export const MainFont1 = `'Roboto', sans-serif`;
// export const MainFont2 = `'Open Sans', sans-serif`;
// export const Animation = `animation-duration: .5s; animation-fill-mode: both;`;

export const theme = {
  // mainColor1: "#1565c0", // BLUE
  // mainColor2: "#eb1c24", // RED !
  mainColor1: "#2c5282", // BLUE
  mainColor2: "#9b2c2c", // RED !
  // newColor1: "#fffafa", // snow white
  // newColor1: "#fcfcfc", // Try
  newColor1: "#fcfcff", // New
  // newColor1: "F8F8FF",
  newColor2: "#343434", // Jet
  newColor3: "#f8f8ff", // ghost white
  newColor4: "#fbfbff", // New
  newBoxShadow: "0px 6px 6px -6px rgba(52,52,52,0.41)",
  Border: "1px solid #eee",
  RedBorderBottom: "4px solid green",
  TextShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
  newTextShadow: "2px 2px 4px rgba(52, 52, 52, 0.4)",
  BoxShadow: "0 10px 6px -6px rgba(119, 119, 119, .6)",
  MainFont1: "'Roboto', sans-serif",
  // MainFont2: "'Open Sans', sans-serif",
  MainFont3: "'Roboto Slab', serif",
  Animation: `animation-duration: .5s; animation-fill-mode: both;`,
  hoverTransition: `box-shadow 350ms cubic-bezier(0.4, 0, 0.2, 1) 0s, transform 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s`,
  hoverBoxBefore:
    "rgba(46, 41, 51, 0.08) 0px 1px 2px, rgba(71, 63, 79, 0.08) 0px 2px 4px",
  hoverBoxAfter: `0px 4px 8px rgba(46, 41, 51, 0.08), 0px 8px 16px rgba(71, 63, 79, 0.16)`,
  hoverTransform: `translateY(-4px)`,

  foreground: "#050505",
  background: "white",
  faded: "#888",
};

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: Row;
`;

export const FadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const H2 = styled.h2`
  font-family: ${(props) => props.theme.MainFont1};
  text-shadow: ${(props) => props.theme.newTextShadow};
  background-color: ${(props) =>
    props.red ? props.theme.mainColor2 : props.theme.mainColor1};
  font-weight: 400;
  text-align: center;
  color: ${(props) => props.theme.newColor1};
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.1rem;
  letter-spacing: 0.08rem;
  padding: 12px 5px 12px 5px;
  @media (min-width: 768px) {
    font-size: 1.7rem;
    padding-bottom: 16px;
    padding-top: 16px;
    line-height: 1.5rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.9rem;
    padding-bottom: 15px;
    padding-top: 15px;
    /* font-weight: 500; */
    line-height: 1.4em;
  }
  @media (min-width: 1300px) {
    font-size: 2rem;
    letter-spacing: 0.1rem;
    padding-right: 1px;
    padding-left: 1px;
    padding-top: 12px;
    padding-bottom: 12px;
    line-height: 2.4rem;
  }
  @media print {
    font-size: 1rem;
  }
`;
