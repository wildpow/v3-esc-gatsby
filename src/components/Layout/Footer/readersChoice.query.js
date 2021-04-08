import { useStaticQuery, graphql } from "gatsby";

const useReaders = () => {
  const { datoCmsFrontPage } = useStaticQuery(
    graphql`
      query readerChoice {
        datoCmsFrontPage {
          sticker {
            url
            alt
          }
        }
      }
    `
  );
  return datoCmsFrontPage;
};

export default useReaders;
