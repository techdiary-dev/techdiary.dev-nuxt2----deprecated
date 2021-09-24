import { format, compareAsc } from "date-fns";

export default ({ app }, inject) => {
  inject("format", (time, formatStr) => format(new Date(time), formatStr));
};
