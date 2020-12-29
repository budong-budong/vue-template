// let timeUtil = {}

// // timestamp
// timeUtil.timestampToDateTime = function (timestamp) {
//   if (timestamp === null) {
//     return null
//   }
//   let date = new Date(timestamp)
//   let y = date.getFullYear()
//   let m = date.getMonth() + 1
//   m = m < 10 ? '0' + m : m
//   let d = date.getDate()
//   d = d < 10 ? '0' + d : d
//   let h = date.getHours()
//   h = h < 10 ? '0' + h : h
//   let minute = date.getMinutes()
//   // let second = date.getSeconds();
//   minute = minute < 10 ? '0' + minute : minute
//   // second = second < 10 ? ('0' + second) : second;
//   return y + '-' + m + '-' + d + ' ' + h + ':' + minute
// }

// timeUtil.timestampToDateTimeSecond = function (timestamp) {
//   if (timestamp === null) {
//     return null
//   }
//   let date = new Date(timestamp)
//   let y = date.getFullYear()
//   let m = date.getMonth() + 1
//   m = m < 10 ? '0' + m : m
//   let d = date.getDate()
//   d = d < 10 ? '0' + d : d
//   let h = date.getHours()
//   h = h < 10 ? '0' + h : h
//   let minute = date.getMinutes()
//   let second = date.getSeconds()
//   minute = minute < 10 ? '0' + minute : minute
//   second = second < 10 ? ('0' + second) : second
//   return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second
// }

// timeUtil.timestampToDateHour = function (timestamp) {
//   if (timestamp === null) {
//     return null
//   }
//   let date = new Date(timestamp)
//   let y = date.getFullYear()
//   let m = date.getMonth() + 1
//   m = m < 10 ? '0' + m : m
//   let d = date.getDate()
//   d = d < 10 ? '0' + d : d
//   let h = date.getHours()
//   h = h < 10 ? '0' + h : h
//   return y + '/' + m + '/' + d + ' ' + h
// }

// timeUtil.timestampToDate = function (timestamp) {
//   if (timestamp === null || timestamp === undefined) {
//     return null
//   }
//   let date = new Date(timestamp)
//   let y = date.getFullYear()
//   let m = date.getMonth() + 1
//   m = m < 10 ? '0' + m : m
//   let d = date.getDate()
//   d = d < 10 ? '0' + d : d
//   return y + '-' + m + '-' + d
// }
// timeUtil.timestampDate = function (timestamp) {
//   if (timestamp === null) {
//     return null
//   }
//   let date = new Date(timestamp)
//   let y = date.getFullYear()
//   let m = date.getMonth() + 1
//   m = m < 10 ? '0' + m : m
//   let d = date.getDate()
//   d = d < 10 ? '0' + d : d
//   return y + '' + m + '' + d
// }
// timeUtil.timestampToMonthDate = function (timestamp) {
//   if (timestamp === null) {
//     return null
//   }
//   let date = new Date(timestamp)
//   let y = date.getFullYear()
//   let m = date.getMonth() + 1
//   m = m < 10 ? '0' + m : m
//   return y + '-' + m
// }

// timeUtil.timestampToDateNoDay = function (timestamp) {
//   if (timestamp === undefined || timestamp === null) {
//     return undefined
//   }
//   let date = new Date(timestamp)
//   let y = date.getFullYear()
//   let m = date.getMonth() + 1
//   m = m < 10 ? '0' + m : m
//   return y + '-' + m
// }

// // date
// timeUtil.dateToDateTime = function (date, type) {
//   if (date === null) {
//     return null
//   }
//   let y = date.getFullYear()
//   let m = date.getMonth() + 1
//   m = m < 10 ? '0' + m : m
//   let d = date.getDate()
//   d = d < 10 ? '0' + d : d
//   let h = date.getHours()
//   h = h < 10 ? '0' + h : h
//   let minute = date.getMinutes()
//   // let second = date.getSeconds();
//   minute = minute < 10 ? '0' + minute : minute
//   // second = second < 10 ? ('0' + second) : second;
//   if (type === 'ch') {
//     return y + '年' + m + '月' + d + '日'
//   } else {
//     return y + '-' + m + '-' + d + ' ' + h + ':' + minute
//   }
// }

// timeUtil.dateToTimestamp = function (date) {
//   if (typeof date === 'object' && date instanceof Date) {
//     return date.getTime()
//   } else {
//     return date
//   }
// }

// // datepicker
// timeUtil.getTimeFromDatePicker = function (datePickerValue) {
//   if (datePickerValue === null || datePickerValue === '' || datePickerValue === undefined) {
//     return null
//   } else {
//     return datePickerValue.getTime() / 1000
//   }
// }

// timeUtil.datePickerToDate = function (date) {
//   if (date === null) {
//     return null
//   }
//   let y = date.getFullYear()
//   let m = date.getMonth() + 1
//   m = m < 10 ? '0' + m : m
//   let d = date.getDate()
//   d = d < 10 ? '0' + d : d
//   return y + '-' + m + '-' + d
// }

// // 中文时间
// let cnDate = [
//   ['0', '零'],
//   ['1', '壹'],
//   ['2', '贰'],
//   ['3', '叁'],
//   ['4', '肆'],
//   ['5', '伍'],
//   ['6', '陆'],
//   ['7', '柒'],
//   ['8', '捌'],
//   ['9', '玖'],
//   ['10', '拾'],
//   ['11', '拾壹'],
//   ['12', '拾贰']
// ]

// timeUtil.getCFullYear = function (myDate) {
//   let myFullYear = myDate
//     .getFullYear()
//     .toString()
//     .split('')
//   for (var i = 0; i < myFullYear.length; i++) {
//     let j = parseInt(myFullYear[i])
//     myFullYear[i] = cnDate[j][1]
//   }
//   myFullYear = myFullYear.join('')
//   return myFullYear
// }
// timeUtil.getCMonth = function (myDate) {
//   let myMonth = myDate
//     .getMonth()
//     .toString()
//     .split('')
//   let j = parseInt(myMonth) + 1
//   myMonth = cnDate[j][1]
//   return myMonth
// }
// timeUtil.getCDay = function (myDate) {
//   let myToday = parseInt(myDate.getDate())
//   if (myToday <= 10) {
//     myToday = '零' + cnDate[myToday][1]
//   } else if (myToday > 10 && myToday < 20) {
//     myToday = '壹拾' + cnDate[myToday % 10][1]
//   } else if (myToday === 20) {
//     myToday = '贰拾'
//   } else if (myToday > 20 && myToday < 30) {
//     myToday = '贰拾' + cnDate[myToday % 10][1]
//   } else if (myToday === 30) {
//     myToday = '叁拾'
//   } else {
//     myToday = '叁十' + cnDate[myToday % 10][1]
//   }
//   return myToday
// }

// export default timeUtil
