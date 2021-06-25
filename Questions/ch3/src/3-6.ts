export enum Type {
  Cat = 'cat',
  Dog = 'dog'
}

export default class AnimalQueue {

  private animals: string[];
  private types: Type[];

  constructor() {
    this.animals = [];
    this.types = [];
  }

  enqueue(animal: string, type: Type): void {
    this.animals.push(animal);
    this.types.push(type);
  }

  dequeueAny(): string {
    this.types.shift();
    return this.animals.shift();
  }

  dequeueDog(): string {
    const index: number = this.types.indexOf(Type.Dog);
    this.types.splice(index, 1);
    return this.animals.splice(index, 1).join('');
  }

  dequeueCat(): string {
    const index: number = this.types.indexOf(Type.Cat);
    this.types.splice(index, 1);
    return this.animals.splice(index, 1).join('');
  }
}