import {TodoItem} from "./todo-item.definition";

export const todoList: TodoItem[] = [
  {
    title: 'Walk the dog',
  },
  {
    title: 'Buy milk',
  },
  {
    title: 'Clean the kitchen',
    description: 'Put the dishwasher, clean the floor and empty the garbage'
  },
  {
    title: 'Send grandma a Bday card',
    deadline: new Date('2022/12/27')
  }
];
