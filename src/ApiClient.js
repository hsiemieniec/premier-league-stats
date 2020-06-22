export const API_URL = "https://api.football-data.org/v2/";

// API CALL HEADER
export const API_HEADER = { headers: { 'X-AUTH-TOKEN' : process.env.REACT_APP_API_AUTH_TOKEN } };

// API CALLS
export const GET_TEAMS_INFO_DATA = API_URL + 'competitions/PL/teams';
export const GET_TEAM_DETAILS_DATA = API_URL + 'teams/';
export const GET_STANDINGS_DATA = API_URL + "competitions/PL/standings";
export const GET_FIXTURES_DATA = API_URL + "competitions/PL/matches";
export const GET_PREMIER_LEAGUE_INFO_DATA = API_URL + "competitions/PL";
export const GET_BEST_SCORERS_DATA = API_URL + "competitions/PL/scorers";