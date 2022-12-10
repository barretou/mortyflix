const baseURL = 'https://rickandmortyapi.com/api';

async function GetCharacters(page) {
  const resp = await fetch(`${baseURL}/character/?page=${page}`)
    .then((response) => response.json())
    .catch((error) => console.log(error));
  return resp;
}

async function GetEpisodes(page) {
  const resp = await fetch(`${baseURL}/episode/?page=${page}`)
    .then((response) => response.json())
    .catch((error) => console.log(error));
  return resp;
}

export { GetCharacters, GetEpisodes };
