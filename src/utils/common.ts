import moment from 'moment'

/**
 * 时期格式化
 * @param value
 * @param format
 * @param placeholder 占位符
 * @returns
 */
export function formatDate(value: Date | number | string, format: string, placeholder?: string) {
  if (value !== undefined && value != null && value !== '') {
    moment.locale('zh-cn')
    const m = moment(value)
    if (!m.isValid()) {
      return ''
    }
    return m.format(format)
  } else {
    return placeholder ? placeholder : ''
  }
}

/**
 * 金额单位转换
 * @param value
 * @param type
 * @returns
 */
export function bigNumberTransform(value: number | undefined, type: boolean = true) {
  if (value !== 0 && !value) return null
  const newValue = ['', '', '']
  let fr = 1000
  let num = 3
  let text1 = ''
  let text2 = ''
  let fm = 1
  if (value == null || isNaN(value)) {
    return !type ? newValue : ''
  }
  if (value < 0) {
    value = Math.abs(value)
    text2 = '-'
  }
  while (value / fr >= 1) {
    fr *= 10
    num += 1
    // console.log('数字', value / fr, 'num:', num)
  }
  if (num <= 4) {
    // 千
    newValue[0] = value.toString()
    newValue[1] = ''
  } else if (num <= 8) {
    // 万
    // text1 = parseInt(num - 4) / 3 > 1 ? '千万' : '万'
    text1 = '万'
    // tslint:disable-next-line:no-shadowed-variable
    fm = text1 === '万' ? 10000 : 10000000
    if (value % fm === 0) {
      newValue[0] = parseInt((value / fm).toString()) + ''
    } else {
      newValue[0] = parseFloat((value / fm).toString()).toFixed(2) + ''
    }
    newValue[1] = text1
  } else {
    // 亿 if (num <= 16)
    // text1 = (num - 8) / 3 > 1 ? '千亿' : '亿'
    text1 = '亿'
    text1 = (num - 8) / 4 > 1 ? '万亿' : text1
    text1 = (num - 8) / 7 > 1 ? '千万亿' : text1
    text1 = (num - 8) / 10 > 1 ? '亿亿' : text1
    // tslint:disable-next-line:no-shadowed-variable
    fm = 1
    if (text1 === '亿') {
      fm = 100000000
    } else if (text1 === '千亿') {
      fm = 100000000000
    } else if (text1 === '万亿') {
      fm = 1000000000000
    } else if (text1 === '千万亿') {
      fm = 1000000000000000
    } else {
      fm = 1000000000000000000
    }
    if (value % fm === 0) {
      newValue[0] = parseInt((value / fm).toString()) + ''
    } else {
      newValue[0] = parseFloat((value / fm).toString()).toFixed(2) + ''
    }
    newValue[1] = text1
  }
  if (value < 1000) {
    newValue[0] = value + ''
    newValue[1] = '元'
  }
  newValue[0] = text2 ? text2 + newValue[0] : newValue[0]
  return !type ? newValue : newValue[0] + newValue[1]
}

/**
 * 精度数据展示
 * @param number 数据
 * @param m 精度位  precision
 * @returns 标准化以后的数据
 */
export function toFixed(number: number | string, m = 2): number {
  // if (typeof number !== "number") {
  //   throw new Error("number不是数字");
  // }
  if (isNaN(number as any)) {
    console.error(number, '不是数字')
    return 0
  }
  let result: number | string = Math.round(Math.pow(10, m) * (number as number)) / Math.pow(10, m)
  result = String(result)
  if (result.indexOf('.') === -1) {
    // 根据业务情况开启此能力
    // if (m != 0) {
    //   result += ".";
    //   result += new Array(m + 1).join("0");
    // }
    return +result
  } else {
    const arr = result.split('.')
    if (arr[1].length < m) {
      arr[1] += new Array(m - arr[1].length + 1).join('0')
    }
    result = arr.join('.')
  }
  return +result
}
