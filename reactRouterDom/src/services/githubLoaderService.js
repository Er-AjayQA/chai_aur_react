export default async function githubInfoLoader() {
  const response = await fetch("https://api.github.com/users/Er-AjayQA");

  return response.json();
}
