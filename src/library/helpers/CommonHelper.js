/* eslint-disable no-return-assign */
import momentTimezone from 'moment-timezone'

export const currentTimestamp = () => new Date().getTime()

const isMobile = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  if (isMobile) {
    return true
  }
  return false
}

const removeEmpty = (obj) =>
  Object.entries(obj)
    .map(([k, v]) => [k, v && typeof v === 'object' ? removeEmpty(v) : v])
    // eslint-disable-next-line eqeqeq
    .reduce((a, [k, v]) => (v == null || v == undefined || v == '' ? a : ((a[k] = v), a)), {})

const listToTree = (list = []) => {
  const map = {}
  let node
  const roots = []
  let i

  for (i = 0; i < list.length; i += 1) {
    map[list[i].id] = i // initialize the map
    list[i].children = [] // initialize the children
  }
  for (i = 0; i < list.length; i += 1) {
    node = list[i]

    if (node.parent !== 0 && map[node.parent] !== undefined) {
      // if you have dangling branches check that map[node.parentId] exists

      list[map[node.parent]].children.push(node)
    } else {
      roots.push(node)
    }
  }
  return roots
}

const formatDate = (date, format = 'DD/MM/YYYY HH:mm:ss') => {
  // const country = JSON.parse(localStorage.getItem("userInfo"));
  const country = 'Asia/Ho_Chi_Minh'
  if (date) {
    const tz = momentTimezone(date)
    const time = tz.tz(country).format(format)
    return time
  }
  return ''
}
const formatDateNoTime = (date, format = 'DD/MM/YYYY') => {
  // const country = JSON.parse(localStorage.getItem("userInfo"));
  const country = 'Asia/Ho_Chi_Minh'
  if (date) {
    const tz = momentTimezone(date)
    const time = tz.tz(country).format(format)
    return time
  }
  return ''
}

const formatCode = (text, start, end, concat = '...') => {
  if (!text) return text
  const total = start + end
  const textStr = text.toString()
  const { length } = textStr
  if (total >= length) return text
  return [textStr.slice(0, start), textStr.slice(length - end)].join(concat)
}


const numberFormatter = (num, digits) => {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "m" },
    { value: 1e9, symbol: "g" },
    { value: 1e12, symbol: "t" },
    { value: 1e15, symbol: "p" },
    { value: 1e18, symbol: "e" }
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup.slice().reverse().find(function (item) {
    return num >= item.value;
  });
  return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
}
export { isMobile, removeEmpty, listToTree, formatDate, formatCode, formatDateNoTime, numberFormatter }
