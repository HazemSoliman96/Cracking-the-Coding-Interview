import AnimalQueue from './3-6';

let animalqueue: AnimalQueue = new AnimalQueue();

animalqueue.enqueue('dog1', 'dog');
animalqueue.enqueue('cat1', 'cat');
//console.log(animalqueue);
animalqueue.enqueue('cat2', 'cat');
animalqueue.enqueue('dog2', 'dog');
animalqueue.enqueue('dog3', 'dog');
animalqueue.enqueue('cat3', 'cat');
animalqueue.enqueue('dog4', 'dog');
animalqueue.enqueue('cat4', 'cat');
//console.log(animalqueue);

console.log(animalqueue.dequeueAny());
//console.log(animalqueue);

console.log(animalqueue.dequeueDog());
//console.log(animalqueue);

console.log(animalqueue.dequeueCat());
//console.log(animalqueue);