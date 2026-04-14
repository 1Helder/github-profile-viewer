const BASE_URL = "https://api.github.com";

export async function fetchProfile(username) {
  const response = await fetch(`${BASE_URL}/users/${username}`);

  if (!response.ok) {
    throw new Error("Usuário não encontrado");
  }

  return response.json();
}

export async function fetchRepos(username) {
  const response = await fetch(
    `${BASE_URL}/users/${username}/repos?sort=stars&per_page=6`,
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar repositórios");
  }

  return response.json();
}
