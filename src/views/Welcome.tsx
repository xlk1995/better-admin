import { Button } from 'antd'

import storage from '@/utils/storage'

const Welcome = () => {
  const handleLocal = (num: number) => {
    if (num === 1) {
      storage.setItem('test', { name: 'test' })
    } else if (num === 2) {
      const item = storage.getItem('test')
      console.log('getItem:', item)
    } else if (num === 3) {
      storage.removeItem('test')
      console.log('Item removed')
    } else if (num === 4) {
      storage.clear()
      console.log('All items cleared')
    }
  }

  return (
    <div>
      <Button onClick={() => handleLocal(1)}>1</Button>
      <Button onClick={() => handleLocal(2)}>2</Button>
      <Button onClick={() => handleLocal(3)}>3</Button>
      <Button onClick={() => handleLocal(4)}>4</Button>
    </div>
  )
}

export default Welcome
