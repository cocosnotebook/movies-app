import moment from "moment";

const format = (item, type) => {
  switch (type) {
    case "date":
      const date = new Date(item);
      return moment(date).format("MMM DD, YYYY");
    case "text":
    default:
      return item;
  }
};
export default format;
