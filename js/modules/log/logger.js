export default class Logger {
  static log(message) {
    const logContainer = document.querySelector('[data-log="logger"]');
    logContainer.innerText = "LOG: " + message;
  }
}