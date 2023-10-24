import AbstractFormater from "./AbstractFormater";

export default class CompositeFormater extends AbstractFormater {
    constructor() {
      super();
      this.formatters = [];
    }
  
    addFormatter(formatter) {
      this.formatters.push(formatter);
    }
  
    output(cities) {
      let outputResult = '';
      for (const formatter of this.formatters) {
        outputResult += formatter.output(cities);
      }
      return outputResult;
    }
}  