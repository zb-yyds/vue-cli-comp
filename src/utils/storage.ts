/**
 * 获取缓存
 * @param {*} key
 * @returns
 */
export const getItem = (key: string) => {
  const data = window.localStorage.getItem(key)
  if (!data) return null
  try {
    return JSON.parse(data)
  } catch (err) {
    return null
  }
}

/**
 * 设置缓存
 * @param {*} key
 * @param {*} value
 */
export const setItem = (key: string, value: any) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

/**
 * 移除缓存
 * @param {*} key
 */
export const removeItem = (key: string) => {
  window.localStorage.removeItem(key)
}
