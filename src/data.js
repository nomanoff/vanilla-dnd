const parentData = {
  parentBoxes: {
    "parent-1": {
      id: "parent-1",
      hasChild: true,
      children: ["child-1"],
    },
    "parent-2": {
      id: "parent-2",
      hasChild: true,
      children: ["child-2"],
    },
    "parent-3": {
      id: "parent-3",
      hasChild: true,
      children: ["child-3"],
    },
    "parent-4": {
      id: "parent-4",
      hasChild: false,
      children: [],
    },
    "parent-5": {
      id: "parent-5",
      hasChild: false,
      children: [],
    },
    "parent-6": {
      id: "parent-6",
      hasChild: false,
      children: [],
    },
    "parent-7": {
      id: "parent-7",
      hasChild: false,
      children: [],
    },
    "parent-8": {
      id: "parent-8",
      hasChild: false,
      children: [],
    },
    "parent-9": {
      id: "parent-9",
      hasChild: false,
      children: [],
    },
    "parent-10": {
      id: "parent-10",
      hasChild: false,
      children: [],
    },
  },

  boxIds: [
    "parent-1",
    "parent-2",
    "parent-3",
    "parent-4",
    "parent-5",
    "parent-6",
    "parent-7",
    "parent-8",
    "parent-9",
    "parent-10",
  ],
};

const childData = {
  childBoxes: {
    "child-1": {
      id: "child-1",
      content: "Child One",
    },

    "child-2": {
      id: "child-2",
      content: "Child Two",
    },
    "child-3": {
      id: "child-3",
      content: "Child Three",
    },
  },

  boxIds: ["child-1", "child-2", "child-3"],
};

export { parentData, childData };
