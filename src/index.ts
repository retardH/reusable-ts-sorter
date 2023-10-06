import {NumberCollection} from "./NumberCollection";
import {CharacterCollection} from "./CharacterCollection";
import {LinkedList} from "./LinkedList";

const characterCollection = new CharacterCollection('zyx');
const numberCollection = new NumberCollection([9, 3, 55, -33, 2233]);
const linkedList = new LinkedList();

linkedList.add(500);
linkedList.add(400);
linkedList.add(-333);
linkedList.add(3);

linkedList.sort();
numberCollection.sort();
characterCollection.sort();

linkedList.print();
console.log(numberCollection);
console.log(characterCollection);