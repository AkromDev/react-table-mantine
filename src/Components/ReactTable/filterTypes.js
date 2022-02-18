const stringFilterFn = (rows, id, filter) => {
  let result = [];
  const { operator = "cont", value } = filter;
  switch (operator) {
    case "start":
      result = rows.filter((row) => {
        const rowValue = row.values[id];
        return !!rowValue
          ? String(rowValue)
              .toLowerCase()
              .startsWith(String(value).toLowerCase())
          : false;
      });
      break;
    case "end":
      result = rows.filter((row) => {
        const rowValue = row.values[id];
        return !!rowValue
          ? String(rowValue).toLowerCase().endsWith(String(value).toLowerCase())
          : false;
      });
      break;
    case "eq":
      result = rows.filter((row) => {
        const rowValue = row.values[id];
        return !!rowValue
          ? String(rowValue).toLowerCase() === String(value).toLowerCase()
          : false;
      });
      break;
    case "not_eq":
      result = rows.filter((row) => {
        const rowValue = row.values[id];
        return !!rowValue
          ? String(rowValue).toLowerCase() !== String(value).toLowerCase()
          : true;
      });
      break;
    case "cont":
      result = rows.filter((row) => {
        const rowValue = row.values[id];
        return !!rowValue
          ? String(rowValue).toLowerCase().includes(String(value).toLowerCase())
          : false;
      });
      break;
    case "not_cont":
      result = rows.filter((row) => {
        const rowValue = row.values[id];
        return !!rowValue
          ? !String(rowValue)
              .toLowerCase()
              .includes(String(value).toLowerCase())
          : true;
      });
      break;
    default:
      result = rows;
      break;
  }
  return result;
};
stringFilterFn.autoRemove = (val) => !val;

const numberFilterFn = (rows, id, filter) => {
  let result = [];
  const { operator = "eq", value } = filter;
  switch (operator) {
    case "eq":
      result = rows.filter((row) => {
        const rowValue = row.values[id];
        return !!rowValue ? Number(rowValue) === Number(value) : false;
      });
      break;
    case "not_eq":
      result = rows.filter((row) => {
        const rowValue = row.values[id];
        return !!rowValue ? Number(rowValue) !== Number(value) : true;
      });
      break;
    case "gt":
      result = rows.filter((row) => {
        const rowValue = row.values[id];
        return !!rowValue ? Number(rowValue) > Number(value) : false;
      });
      break;
    case "gteq":
      result = rows.filter((row) => {
        const rowValue = row.values[id];
        return !!rowValue ? Number(rowValue) >= Number(value) : false;
      });
      break;
    case "lt":
      result = rows.filter((row) => {
        const rowValue = row.values[id];
        return !!rowValue ? Number(rowValue) < Number(value) : false;
      });
      break;
    case "lteq":
      result = rows.filter((row) => {
        const rowValue = row.values[id];
        return !!rowValue ? Number(rowValue) <= Number(value) : false;
      });
      break;
    default:
      result = rows;
      break;
  }
  return result;
};
numberFilterFn.autoRemove = (val) => !val;

const dateFilterFn = (rows, id, filter) => {
  let result = [];
  const { operator = "eq", value } = filter;
  switch (operator) {
    case "eq":
      result = rows.filter((row) => {
        const rowValue = row.values[id];
        return !!rowValue ? Date(rowValue) === Date(value) : false;
      });
      break;
    case "not_eq":
      result = rows.filter((row) => {
        const rowValue = row.values[id];
        return !!rowValue ? Date(rowValue) !== Date(value) : true;
      });
      break;
    case "gt":
      result = rows.filter((row) => {
        const rowValue = row.values[id];
        return !!rowValue ? Date(rowValue) > Date(value) : false;
      });
      break;
    case "gteq":
      result = rows.filter((row) => {
        const rowValue = row.values[id];
        return !!rowValue ? Date(rowValue) >= Date(value) : false;
      });
      break;
    case "lt":
      result = rows.filter((row) => {
        const rowValue = row.values[id];
        return !!rowValue ? Date(rowValue) < Date(value) : false;
      });
      break;
    case "lteq":
      result = rows.filter((row) => {
        const rowValue = row.values[id];
        return !!rowValue ? Date(rowValue) <= Date(value) : false;
      });
      break;
    default:
      result = rows;
      break;
  }
  return result;
};
dateFilterFn.autoRemove = (val) => !val;

export default {
  stringFilter: stringFilterFn,
  numberFilter: numberFilterFn,
  dateFilter: dateFilterFn
};
