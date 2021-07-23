import { format, compareAsc } from "date-fns";

export default ({ app }, inject) => {
  // Inject $bn(number) in Vue, context and store.
  inject("format", (time, formatStr) => format(new Date(time), formatStr));
};
