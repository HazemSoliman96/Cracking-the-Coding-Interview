import AnimalQueue, { Type } from './3-6';

let animalqueue: AnimalQueue = new AnimalQueue();

animalqueue.enqueue('dog1', Type.Dog);
animalqueue.enqueue('cat1', Type.Cat);
//console.log(animalqueue);
animalqueue.enqueue('cat2', Type.Cat);
animalqueue.enqueue('dog2', Type.Dog);
animalqueue.enqueue('dog3', Type.Dog);
animalqueue.enqueue('cat3', Type.Cat);
animalqueue.enqueue('dog4', Type.Dog);
animalqueue.enqueue('cat4', Type.Cat);
//console.log(animalqueue);

console.log(animalqueue.dequeueAny());
//console.log(animalqueue);

console.log(animalqueue.dequeueDog());
//console.log(animalqueue);

console.log(animalqueue.dequeueCat());
//console.log(animalqueue);