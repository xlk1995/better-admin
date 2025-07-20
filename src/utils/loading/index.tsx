import { createRoot } from 'react-dom/client'

import Loading from './Loading'

let count = 0
let root: ReturnType<typeof createRoot> | null = null

export function showLoading() {
  if (count === 0) {
    const loading = document.createElement('div')
    loading.setAttribute('id', 'loading')
    document.body.appendChild(loading)
    root = createRoot(loading)
    root.render(<Loading />)
  }
  count++
}

export function hideLoading() {
  if (count > 0) count--
  if (count === 0 && root) {
    root.unmount()
    const el = document.getElementById('loading')
    if (el && document.body.contains(el)) {
      document.body.removeChild(el)
    }
    root = null
  }
}
