// 5) Using the data from exercise 4. How would you represent it if the data was needed to be accessed
// easily by color? And how if it was needed to be accessed by size?

const carCategories = {
  color: {
    red: [{
      id: 2,
      size: 'small',
    },
    {
      id: 4,
      size: 'large',
    },
    {
      id: 6,
      size: 'small',
    },
    {
      id: 8,
      size: 'medium',
    }],
    blue: [{
      id: 1,
      size: 'large',
    },
    {
      id: 3,
      size: 'large',
    },
    {
      id: 5,
      size: 'medium',
    },
    {
      id: 7,
      size: 'large',
    }],
  },
  size: {
    small: [
      {
        id: 2,
        color: 'red',
      },
      {
        id: 6,
        color: 'red',
      },
    ],
    medium: [
      {
        id: 5,
        color: 'blue',
      },
      {
        id: 8,
        color: 'red',
      },
    ],
    large: [{
      id: 1,
      color: 'blue',
    },
    {
      id: 3,
      color: 'blue',
    },
    {
      id: 4,
      color: 'red',
    },
    {
      id: 7,
      color: 'blue',
    }],
  },
};
