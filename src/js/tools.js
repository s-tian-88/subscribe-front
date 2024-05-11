export function timestampFormatter(ts) {

  const date = new Date(ts);
  const day = insertZero(date.getDay());
  const month = insertZero(date.getMonth());
  const year = date.getFullYear();
  const minutes = insertZero(date.getMinutes());
  const hours = insertZero(date.getHours());

  const result = `${hours}:${minutes} ${day}/${month}/${year}`

  return result;
};

function insertZero (num) {
  return num.toString().length == 1 ? '0' + num : num;
}
