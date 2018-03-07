export var landInfo = {
  field: {
    name: 'field',
    cost: 0,
    req: {},
    yield: 1,
    cd: 5
  },
  forest: {
    name: 'forest',
    cost: 1,
    req: {
      field: 1
    },
    yield: 1,
    cd: 5
  },
  mountain: {
    name: 'mountain',
    cost: 3,
    req: {
      forest: 3,
      lake: 1
    },
    yield: 1,
    cd: 5
  },
  lake: {
    name: 'lake',
    cost: 2,
    req: {
      forest: 2,
      field: 2
    },
    yield: 1,
    cd: 5
  }
}
