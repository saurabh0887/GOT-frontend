import { API } from "../../backend";

export const getBattles = () => {
  return fetch(`${API}/battles`, { method: "GET" })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const searchBattle = (searchTerm) => {
  return fetch(`${API}/searchBattle`, { method: "POST",  body: JSON.stringify({search: searchTerm})})
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
}

export default getBattles