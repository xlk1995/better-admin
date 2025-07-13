import React from 'react'
import { Result, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
export default function NotFound() {
  const nav = useNavigate()

  const handleBackHome = () => {
    nav('/')
  }
  return (
    <Result
      status='404'
      title='404'
      subTitle='抱歉，您访问的页面不存在。'
      extra={
        <Button type='primary' onClick={handleBackHome}>
          返回首页
        </Button>
      }
    />
  )
}
