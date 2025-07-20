/**
 * 封装localStorage的操作
 * 提供setItem、getItem、removeItem和clear方法
 * @module storage
 */
export default {
  setItem: (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
  },
  getItem: (key: string) => {
    if (!key) return ''
    const item = localStorage.getItem(key)
    try {
      return item ? JSON.parse(item) : ''
    } catch (error) {
      console.error(
        `Error parsing item from localStorage: ${error}`
      )
      return item
    }
  },
  removeItem: (key: string) => {
    localStorage.removeItem(key)
  },
  clear: () => {
    localStorage.clear()
  }
}
