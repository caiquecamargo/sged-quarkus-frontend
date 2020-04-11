import Sumario from "./sumario";

export default class dataPortfolioHandler {
  constructor() {
    this.sumario = new Sumario();

    this.data = {
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
  }

  createElement() {
    const div = document.createElement('div');
    for (const group in this.data) {
      this.sumario.data.nivel_one += 1;
      this.sumario.data.nivel_two = 0;
      div.appendChild(this.createTitle(group));
      for (const subgroup in this.data[group]) {
        this.sumario.data.nivel_two += 1;
        div.appendChild(this.createSubtitle(subgroup));
        for (const esp in this.data[group][subgroup]) {
          this.sumario.data.nivel_three += 1;
          if (esp != '') div.appendChild(this.createEsptitle(esp));
          const listObj = this.data[group][subgroup][esp];
          Object.keys(listObj).forEach(item => {
            div.appendChild(this.createItem(listObj[item]))
          })
        }
      }
    }
    return div;
  }

  createTitle(title) {
    const sum = document.createRange().createContextualFragment(`<a href="${'#' + title.replace(/ /g, "")}" class="sumario__nivel-1" data-sumario="item">${title}</a>`)
    this.sumario.data.elemens.push([sum]);
    const itemTitle = document.createRange().createContextualFragment(`
      <header class="main__portfolio__header">
        <h1 id="${title.replace(/ /g, "")}"class="main__portfolio__header__title"> ${title}</h1>
      </header>
    `)
    return itemTitle;
  }

  createSubtitle(subtitle) {
    const sum = document.createRange().createContextualFragment(`<a href="${'#' + subtitle.replace(/ /g, "") + this.sumario.data.nivel_two}" class="sumario__nivel-2" data-sumario="item">${subtitle}</a>`)
    this.sumario.data.elemens[this.sumario.data.nivel_one].push([sum]);
    const itemSubtitle = document.createRange().createContextualFragment(`
      <header class="main__portfolio__header">
        <h2 id="${subtitle.replace(/ /g, "") + this.sumario.data.nivel_two}" class="main__portfolio__header__subtitle"> ${subtitle}</h2>
      </header>
    `)
    return itemSubtitle;
  }

  createEsptitle(esptitle) {
    const sum = document.createRange().createContextualFragment(`<a href="${'#' + esptitle.replace(/ /g, "") + this.sumario.data.nivel_three}" class="sumario__nivel-3" data-sumario="item">${esptitle}</a>`)
    this.sumario.data.elemens[this.sumario.data.nivel_one][this.sumario.data.nivel_two].push(sum);
    const itemEsptitle = document.createRange().createContextualFragment(`
      <header class="main__portfolio__header">
        <h3 id="${esptitle.replace(/ /g, "") + this.sumario.data.nivel_three}" class="main__portfolio__header__esptitle"> ${esptitle}</h3>
      </header>
    `)
    return itemEsptitle;
  }

  createItem(item) {
    const itemContainer = document.createRange().createContextualFragment(`<section class="main__portfolio__item" data-item="item">
      <picture class="main__portfolio__item__img">
        <source media="(min-width: 780px)" type="image/webp" srcset="images/produtos/canecas/${item['Referência'].trim()}/${item['Referência'].trim()}-2x.webp">
        <source type="image/webp" srcset="images/produtos/canecas/${item['Referência'].trim()}/${item['Referência'].trim()}-1x.webp">
        <img src="images/produtos/canecas/${item['Referência'].trim()}/${item['Referência'].trim()}-1x.png" alt="${item["Item"]}">
      </picture>
      <div class="main__portfolio__item__content" data-item="content">
        <header class="main__portfolio__item__header">
          <h2 class="main__portfolio__item__header__title">${item["Item"]}</h2>
        </header>
        <p class="main__portfolio__item__description">${item["SDescrição"]}</p>
        <div class="main__portfolio__item__last-line">
          <p class="main__portfolio__item__price">${item["Valor de Venda"]}</p>
          <a class="main__portfolio__item__button" data-item-button href="" data-item="button" data-button="${item['Referência'].trim()},${item.Grupo},${item.Subgrupo},${item.Especificidade}">Veja Mais</a>
        </div>
      </div>
    </section>`);
    return itemContainer;
  }

  organizeJson(json) {
    json.forEach(item => {
      this.data[item.Grupo][item.Subgrupo][item.Especificidade][item['Referência'].trim()] = item;
    })
  }

  create(json) {
    this.organizeJson(json);
    this.dataElements = this.createElement();
    this.sumarioElements = this.sumario.createSumario();
    return {
      data: this.data,
      dataElements: this.dataElements,
      sumarioElements: this.sumarioElements
    }
  }
}