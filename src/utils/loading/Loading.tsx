import { Spin } from 'antd'

import './loading.scss'

const Loading = ({
  tips = 'Loading...'
}: {
  tips?: string
}) => {
  return (
    <Spin
      tip={tips}
      size='large'
      className='request-loading'
    />
  )
}

export default Loading
