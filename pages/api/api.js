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
