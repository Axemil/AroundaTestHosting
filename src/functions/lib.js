const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]
const monthNamesShort = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Ma",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
]

const composeDate = (date, options = {}) => {
  const { short } = options
  let d = new Date(date)
  let formattedDate;
  if(short) {
    formattedDate = `${
      monthNamesShort[d.getMonth()]
    } ${d.getDate()}`
  } else {
    formattedDate = `${d.getDate()} ${
      monthNames[d.getMonth()]
    }, ${d.getFullYear()}`
  }
  return formattedDate
}

const getRandVal = (n) => Math.round(Math.random() * n)

const editMailchimpResponse = (text) => {
  if (!text) {
    return text
  }

  if (text.includes("already")) {
    text = "You've allready subscribed to our email list"
  }
  if (text.includes("0 - ")) {
    text = text.replace("0 - ", "")
  }
  return text
}
export { composeDate, editMailchimpResponse }
