todos = [
  {
    id: 1,
    title: 'title1',
    description: 'description',
    complete: false
  },
  {
    id: 2,
    title: 'title2',
    description: 'description',
    complete: false
  },
  {
    id: 3,
    title: 'title3',
    description: 'description',
    complete: false
  }
];

function getTodo(todoId) {
  for (var i = 0; i < todos.length; i++) {
    if (todos[i].id === todoId) {
      return todos[i];
    }
  }
  return undefined;
};