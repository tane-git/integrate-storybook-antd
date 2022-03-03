// Override Antd variables

import { base } from './base'
import { component } from './component'
import { header } from '../components/Nav/styles'
import { button } from '../components/Button/styles/'

export const theme: object = {
  ...base,
  ...component,
  ...header,
  ...button
}