import Logger from "../log/logger";

export default class ItemController {
  constructor(item) {
    this.item = item;
  }

  async fetchData() {
    try {
      const response = await fetch("http://localhost:8080/items", {
        method: "POST",
        body: JSON.stringify(this.item.toObject),
        headers: {
          "content-type": "application/json"
        }
      });

      if (!response.ok) throw "Erro ao realizar Upload dos dados";

      return await response.text();

    } catch (e) {
      throw new Error(e);
    }
  }

  async fetchFile() {
    try {
      const dataResponse = await this.fetchData();
      const id = dataResponse.split("/").pop();
      this.formData.append("id", id);

      const response = await fetch("http://localhost:8080/items/upload", {
        method: "PUT",
        body: this.formData
      });

      if (!response.ok) throw "Erro ao realizar Upload do arquivo";

      Logger.log("Upload realizado com sucesso");

    } catch (e) {
      throw new Error(e);
    }

  }

  fetchItem(formData) {
    try {
      if (formData != undefined) {
        this.formData = formData;
        this.fetchFile();
      }

      Logger.log("Form não prenchido corretamente");
    } catch (e) {
      Logger.log(e);
    }
  }
}