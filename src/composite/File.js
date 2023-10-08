import FileComponent from "./FileComponent.js";

export default class File extends FileComponent{
    #data;

    constructor(data) {
        this.#data = data;
    }

    output() {
        console.log(`Data: ${this.#data}`)
    };
}