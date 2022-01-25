import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getMatches = async () => {
  const query = gql`
    query MyQuery {
      footballMatchesConnection {
        edges {
          node {
            awayGoals
            awayTeam
            gameDate
            halfTimeAway
            halfTimeHome
            homeGoals
            homeTeam
            matchDayNr
            stadium
            awayEmblem {
              url
            }
            homeEmblem {
              url
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.footballMatchesConnection;
};

export const getGallery = async () => {
  const query = gql`
    query MyQuery {
      vllazniaGalleriesConnection {
        edges {
          node {
            photoImage
            photo {
              url
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.vllazniaGalleriesConnection;
};

export const getNews = async () => {
  const query = gql`
    query MyQuery {
      vllazniaNewsesConnection {
        edges {
          node {
            title
            slug
            featuredImage {
              url
            }
            content {
              html
              markdown
              raw
              text
            }
            excerpt
            featuredPost
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.vllazniaNewsesConnection;
};

export const getProducts = async () => {
  const query = gql`
    query MyQuery {
      vllazniaShopsConnection {
        edges {
          node {
            title
            slug
            prodImage {
              url
            }
            prize
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.vllazniaShopsConnection.edges;
};

export const getVideos = async () => {
  const query = gql`
    query MyQuery {
      vllazniaTvsConnection {
        edges {
          node {
            title
            videImage {
              url
            }
            featureVideo
            video {
              url
            }
            description
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.vllazniaTvsConnection.edges;
};
