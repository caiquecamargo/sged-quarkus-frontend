export default class Sumario {
  constructor(selector) {
    this.selector = (selector === undefined) ? '[data-sumario="menu"]' : selector;
    this.sumarioDiv = document.querySelectorAll(this.selector);

    this.data = {
      nivel_one: -1,
      nivel_two: 0,
      nivel_three: 0,
      elemens: []
    }
  }

  createSumario() {
    const sum = document.createElement('div');
    sum.appendChild(this.createSumario_nivelOne());
    this.sumarioDiv.forEach(item => {
      item.innerHTML = sum.innerHTML;
    })
    return this.sumarioDiv;
  }

  createSumario_nivelOne() {
    const ul = document.createElement('ul');
    this.data.elemens.forEach((item, pos) => {
      const li = document.createElement('li');
      li.appendChild(item[0]);
      li.appendChild(this.createSumario_nivelTwo(pos));
      ul.appendChild(li);
    })
    return ul;
  }

  createSumario_nivelTwo(pos) {
    const ul = document.createElement('ul');
    this.data.elemens[pos].forEach((item, pos_two) => {
      if (pos_two != 0) {
        const li = document.createElement('li');
        li.appendChild(item[0]);
        li.appendChild(this.createSumario_nivelThree(pos, pos_two));
        ul.appendChild(li);
      }
    })
    return ul;
  }

  createSumario_nivelThree(pos, pos_two) {
    const ul = document.createElement('ul');
    this.data.elemens[pos][pos_two].forEach((item, pos_three) => {
      if (pos_three != 0) {
        const li = document.createElement('li');
        li.appendChild(item);
        ul.appendChild(li);
      }
    })
    return ul;
  }
}