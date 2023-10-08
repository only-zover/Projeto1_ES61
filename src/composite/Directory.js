import FileComponent from "./FileComponent.js";

class Directory extends FileComponent {
    constructor() {
        this.children = [];
    }

    add(component) {
        this.children.push(component);
    }

    remove(component) {
        this.children.pop(component);
    }

    output() {
        for (const child of this.children) {
            child.output();
        }
    }
}