// import timeUtil from './timeUtil'
// let table = {}

// table.tableRowFormat = function (row, option) {
//   if (option.type !== undefined) {
//     if (option.type === 'date') {
//       return row[option.key] ? timeUtil.timestampToDate(row[option.key]) : '-'
//     } else if (option.type === 'datemonth') {
//       return row[option.key] ? timeUtil.timestampToMonthDate(row[option.key]) : '-'
//     } else if (option.type === 'datetime') {
//       return row[option.key] ? timeUtil.timestampToDateTimeSecond(row[option.key]) : '-'
//     } else if (option.type === 'format') {
//       return option.format[row[option.key]]
//     } else if (option.type === 'func') {
//       return option.func(row, option.key)
//     } else if (option.type === 'numCommas') {
//       return this.formatNumberCommas(row[option.key])
//     } else if (option.type === 'percent') {
//       return row[option.key] + '%'
//     } else {
//       return row[option.key]
//     }
//   } else if (option.precision !== undefined) {
//     return this.formatNumberCommasPrecision(row[option.key], option.precision)
//   } else {
//     return row[option.key]
//   }
// }
// table.formatNumberCommas = function (number) {
//   if (number === undefined || number === null) return '0.00'
//   let parts = parseFloat(number).toFixed(2).toString().split('.')
//   parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
//   return parts.join('.')
// }

// table.formatNumberCommas = function (number) {
//   if (number === undefined || number === null) return '0.00'
//   let parts = parseFloat(number).toFixed(2).toString().split('.')
//   parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
//   return parts.join('.')
// }
// table.formatNumberCommasPrecision = function (number, precision) {
//   if (number === undefined || number === null) return '0.' + Array(precision).join('0')
//   let parts = parseFloat(number).toFixed(precision).toString().split('.')
//   parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
//   return parts.join('.')
// }

// export default table
