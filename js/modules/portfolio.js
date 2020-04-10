import initScrollSuaveLinkInterno from "./scrollSuaveLinkInterno.js";
import initHighlight from "./hightlight.js";

export default function initPortfolio() {
  const main = document.querySelector('[data-item="main"]');

  loadingAnimation();
  fetch('./canecas-json.json')
    .then(r => r.json())
    .then(json => {
      organizeJson(json);
      console.log(data);
      main.innerHTML = createElement().innerHTML;
      createSumario();
      initScrollSuaveLinkInterno();
      addEventToButtons();
    })

  function addEventToButtons() {
    const buttons = document.querySelectorAll('[data-item="button"');
    buttons.forEach(button => {
      button.addEventListener('click', handleButton);
    })
  }

  function handleButton(event) {
    event.preventDefault();
    const highlight = document.querySelector('[data-highlight="main"]');
    if (!highlight.classList.contains('active')) highlight.classList.add('active');
    const ref = event.target.dataset.button.split(',');
    initHighlight(data, ref);
  }

  function organizeJson(json) {
    json.forEach(item => {
      data[item.Grupo][item.Subgrupo][item.Especificidade][item['Referência'].trim()] = item;
    })
  }

  function createSumario() {
    const sumarioDiv = document.querySelectorAll('[data-sumario="menu"]');
    const sum = document.createElement('div');
    sum.appendChild(createSumario_nivelOne());
    sumarioDiv.forEach(item => {
      item.innerHTML = sum.innerHTML;
    })
    return sumarioDiv;
  }

  function createSumario_nivelOne() {
    const ul = document.createElement('ul');
    sumario.elemens.forEach((item, pos) => {
      const li = document.createElement('li');
      li.appendChild(item[0]);
      li.appendChild(createSumario_nivelTwo(pos));
      ul.appendChild(li);
    })
    return ul;
  }

  function createSumario_nivelTwo(pos) {
    const ul = document.createElement('ul');
    sumario.elemens[pos].forEach((item, pos_two) => {
      if (pos_two != 0) {
        const li = document.createElement('li');
        li.appendChild(item[0]);
        li.appendChild(createSumario_nivelThree(pos, pos_two));
        ul.appendChild(li);
      }
    })
    return ul;
  }

  function createSumario_nivelThree(pos, pos_two) {
    const ul = document.createElement('ul');
    sumario.elemens[pos][pos_two].forEach((item, pos_three) => {
      if (pos_three != 0) {
        const li = document.createElement('li');
        li.appendChild(item);
        ul.appendChild(li);
      }
    })
    return ul;
  }

  const data = {
    'Canecas comuns': {
      'Cilíndricas': {
        'Cor sólida': {},
        'Tarja branca': {},
        'Tarja fluorescente': {},
        'Interior colorido': {},
        'Interior e alça colorida': {},
        'Interior temático': {},
        'Glitter': {},
        'Cromada': {},
        'Metalizada': {},
        'Alça coração': {},
        'Alça coração com interior e alça colorida': {},
        'Dupla com alça borboleta': {},
        'Dupla com alça coração': {}
      },
      'Cônicas': {
        'Cor sólida': {},
        'Interior e alça colorida': {}
      }
    },
    'Canecas especiais': {
      'Mágicas': {
        'Cor sólida': {},
        'Interior e alça colorida': {},
        'Alça coração': {}
      },
      'Com colher': {
        'Interior colorido': {},
        'Interior e alça colorida': {}
      },
      'Objeto na alça': {
        '': {}
      },
      'Emoji': {
        '': {}
      },
      'Tampa e base de silicone': {
        '': {}
      },
      'Lousa com giz': {
        '': {}
      },
      'Xícaras de café': {
        '': {}
      }
    },
    'Canecas de materiais diferentes': {
      'Aço inox': {
        '': {}
      },
      'Alumínio': {
        '': {}
      },
      'Vidro': {
        '': {}
      }
    }
  }

  const sumario = {
    nivel_one: -1,
    nivel_two: 0,
    elemens: []
  }

  function createElement() {
    const div = document.createElement('div');
    for (const group in data) {
      sumario.nivel_one += 1;
      sumario.nivel_two = 0;
      div.appendChild(createTitle(group));
      for (const subgroup in data[group]) {
        sumario.nivel_two += 1;
        div.appendChild(createSubtitle(subgroup));
        for (const esp in data[group][subgroup]) {
          if (esp != '') div.appendChild(createEsptitle(esp));
          const listObj = data[group][subgroup][esp];
          Object.keys(listObj).forEach(item => {
            div.appendChild(createItem(listObj[item]))
          })
        }
      }
    }
    return div;
  }

  function createTitle(title) {
    const sum = document.createRange().createContextualFragment(`<a href="${'#' + title.replace(/ /g, "")}" class="sumario__nivel-1" data-sumario="item">${title}</a>`)
    sumario.elemens.push([sum]);
    const itemTitle = document.createRange().createContextualFragment(`
      <header class="main__portfolio__header">
        <h1 id="${title.replace(/ /g, "")}"class="main__portfolio__header__title"> ${title}</h1>
      </header>
    `)
    return itemTitle;
  }

  function createSubtitle(subtitle) {
    const sum = document.createRange().createContextualFragment(`<a href="${'#' + subtitle.replace(/ /g, "") + sumario.nivel_one}" class="sumario__nivel-2" data-sumario="item">${subtitle}</a>`)
    sumario.elemens[sumario.nivel_one].push([sum]);
    const itemSubtitle = document.createRange().createContextualFragment(`
      <header class="main__portfolio__header">
        <h2 id="${subtitle.replace(/ /g, "") + sumario.nivel_one}" class="main__portfolio__header__subtitle"> ${subtitle}</h2>
      </header>
    `)
    return itemSubtitle;
  }

  function createEsptitle(esptitle) {
    const sum = document.createRange().createContextualFragment(`<a href="${'#' + esptitle.replace(/ /g, "") + sumario.nivel_two}" class="sumario__nivel-3" data-sumario="item">${esptitle}</a>`)
    sumario.elemens[sumario.nivel_one][sumario.nivel_two].push(sum);
    const itemEsptitle = document.createRange().createContextualFragment(`
      <header class="main__portfolio__header">
        <h3 id="${esptitle.replace(/ /g, "") + sumario.nivel_two}" class="main__portfolio__header__esptitle"> ${esptitle}</h3>
      </header>
    `)
    return itemEsptitle;
  }

  function createItem(item) {
    const itemContainer = document.createRange().createContextualFragment(`<section class="main__portfolio__item" data-item="item">
      <img class="main__portfolio__item__img" src="images/produtos/canecas/${item['Referência'].trim()}/${item['Referência'].trim()}-1x.webp" alt="${item['Item']}">
      <div class="main__portfolio__item__content" data-item="content">
        <header class="main__portfolio__item__header">
          <h2 class="main__portfolio__item__header__title">${item["Item"]}</h2>
        </header>
        <p class="main__portfolio__item__description">Caneca Comum Branca</p>
        <div class="main__portfolio__item__last-line">
          <p class="main__portfolio__item__price">${item["Valor de Venda"]}</p>
          <a class="main__portfolio__item__button" data-item-button href="" data-item="button" data-button="${item['Referência'].trim()},${item.Grupo},${item.Subgrupo},${item.Especificidade}">Veja Mais</a>
        </div>
      </div>
    </section>`);
    return itemContainer;
  }

  function loadingAnimation() {
    const main = document.querySelector('[data-item="main"]');
    main.innerHTML = '<div class="loading"><div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>';
  }
}