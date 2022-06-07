export const columns = [
  {
    name: "id",
    label: "ID",
    type: "id",
    visible: false,
  },
  {
    name: "title",
    label: "Title",
    type: "text",
    visible: true,
    required: true,
  },
  {
    name: "director",
    label: "Director",
    type: "text",
    visible: true,
    required: false,
  },
  {
    name: "date",
    label: "Release Date",
    type: "date",
    visible: true,
    required: false,
  },
];

export const demoData = [
  {
    id: 1,
    title: "The Northman",
    director: "Robert Eggers",
    date: "2022-04-15",
  },
  {
    id: 2,
    title: "Nightmare Alley",
    director: "Guillermo del Toro",
    date: "2022-01-21",
  },
  {
    id: 5,
    title: "The French Dispatch",
    director: "Wes Anderson",
    date: "2021-10-10",
  },
];
