import React from 'react'
import { Radio } from 'antd';

export const RadioGroup: React.FC = () => {

  return (
    <Radio.Group defaultValue="a" size="large">
      <Radio.Button value="d">Newcomer</Radio.Button>
      <Radio.Button value="a">Beginner</Radio.Button>
      <Radio.Button value="b">Intermediate</Radio.Button>
      <Radio.Button value="c">Pro</Radio.Button>
    </Radio.Group>
  )
}