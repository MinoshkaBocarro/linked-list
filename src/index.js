import 'normalize.css';
import './style.css';

import { LinkedList, Node } from './app-components';

const linkedListTest = new LinkedList();
console.log(linkedListTest);
console.log(new Node());
console.log(linkedListTest.append(1));
console.log(linkedListTest.head);
console.log(linkedListTest.tail);
console.log(linkedListTest.append(2));
console.log(linkedListTest.head);
console.log(linkedListTest.list);
console.log(linkedListTest.tail);
console.log(linkedListTest.append(3));
console.log(linkedListTest.head);
console.log(linkedListTest.list);
console.log(linkedListTest.tail);
console.log(linkedListTest.append(4));
console.log(linkedListTest.head);
console.log(linkedListTest.list);
console.log(linkedListTest.tail);
