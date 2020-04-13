export default function dataHandler(pagina, element) {

  const paginas = {
    "minhaconta": () => {
      return document.createRange().createContextualFragment(`
      
      `);;
    },
    "adicionarItem": () => {
      return document.createRange().createContextualFragment(`
      
      `);;
    },
    "visualizarItem": (element) => {
      return document.createRange().createContextualFragment(`
        <section class="list__item">
          <input type="checkbox" class="list__item__trigger-input" id="${element.id}">
          <div class="list__item__trigger-wrapper">
            <label for="${element.id}" class="list__item__trigger-label">
              <p class="list__item__trigger-text">${element.nome}</p>
              <p class="list__item__trigger-text">${element.tipo}</p>
              <p class="list__item__trigger-text">${element.src}</p>
            </label>
            <form action="deleteitem" method="POST" class="list__item__form-trigger">
              <input value="${element.id}" name="txt_id_item" class="display-none">
              <input value="${element.src}" name="txt_src" class="display-none">
              <input value="${element.tipo}" name="txt_tipo" class="display-none">
              <button class="list__item__form-trigger__button" type="submit">Excluir</button>
            </form>
          </div>
        </section>
      `);;
    },
    "adicionarGrupo": () => {
      return document.createRange().createContextualFragment(`
      
      `);;
    },
    "visualizarGrupos": (element) => {
      return document.createRange().createContextualFragment(`
        <section class="list__item">
          <input type="checkbox" class="list__item__trigger-input" id="${element.id}">
          <div class="list__item__trigger-wrapper">
            <label for="${element.id}" class="list__item__trigger-label">
              <p class="list__item__trigger-text">${element.nome}</p>
              <p class="list__item__trigger-text">${element.nivel}</p>
              <p class="list__item__trigger-text">${element.descricao}</p>
            </label>
            <form action="deleteitem" method="POST" class="list__item__form-trigger">
              <input value="${element.id}" name="txt_id_item" class="display-none">
              <button class="list__item__form-trigger__button" type="submit">Editar</button>
              <button class="list__item__form-trigger__button" type="submit">Visualizar membros do grupo</button>
              <button class="list__item__form-trigger__button" type="submit">Excluir</button>
            </form>
          </div>
        </section>
      `);
    },
    "validarUsuario": (element) => {
      return document.createRange().createContextualFragment(`
        <section class="list__item">
          <input type="checkbox" class="list__item__trigger-input" id="${element.id}">
          <div class="list__item__trigger-wrapper">
            <label for="${element.id}" class="list__item__trigger-label">
              <p class="list__item__trigger-text">${element.nome}</p>
              <p class="list__item__trigger-text">não habilitado</p>
              <p class="list__item__trigger-text">${element.email}</p>
            </label>
            <form action="deleteitem" method="POST" class="list__item__form-trigger"> 
              <input value="${element.id}" name="txt_id_item" class="display-none">
              <input class="list__item__form-trigger__input" type="number" min="${element['nivel_de_acesso']}" placeholder="Nivel de acesso" name="txt_nivel_de_acesso">
              <button class="list__item__form-trigger__button" type="submit">Habilitar</button>
            </form>
          </div>
        </section>
      `)
    },
    "visualizarUsuarios": (element) => {
      return document.createRange().createContextualFragment(`
        <section class="list__item">
          <input type="checkbox" class="list__item__trigger-input" id="${element.id}">
          <div class="list__item__trigger-wrapper">
            <label for="${element.id}" class="list__item__trigger-label">
              <p class="list__item__trigger-text">${element.nome}</p>
              <p class="list__item__trigger-text">${element['nivel_de_acesso']}</p>
              <p class="list__item__trigger-text">${element.email}</p>
            </label>
            <form action="deleteitem" method="POST" class="list__item__form-trigger">
              <input value="${element.id}" name="txt_id_item" class="display-none">
              <button class="list__item__form-trigger__button" type="submit">Editar</button>
            </form>
          </div>
        </section>
      `)
    }
  }
  return paginas[pagina](element);
}