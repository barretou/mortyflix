const baseURL = 'https://rickandmortyapi.com/api';

async function GetCharacters() {
  const resp = await fetch(`${baseURL}/character`)
    .then((response) => response.json())
    .catch((error) => console.log(error));
  return resp;
}

export default GetCharacters;
