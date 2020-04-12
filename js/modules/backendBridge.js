export default function backendBridge(pagina) {
  async function fetchData(url) {
    const response = await fetch(url);
    return await response.json();
  }

  const paginas = {
    "minhaconta": () => {
      return fetchData("http://localhost:8080/users")
    },
    "adicionarItem": () => {
      return fetchData("http://localhost:8080/items")
    },
    "visualizarItem": () => {
      return fetchData("http://localhost:8080/items")
    },
    "adicionarGrupo": () => {
      return fetchData("http://localhost:8080/groups")
    },
    "visualizarGrupos": () => {
      return fetchData("http://localhost:8080/groups")
    },
    "validarUsuario": () => {
      return fetchData("http://localhost:8080/users")
    },
    "visualizarUsuarios": () => {
      return fetchData("http://localhost:8080/users")
    }
  }

  return paginas[pagina]();
}