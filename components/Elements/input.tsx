import styled from 'styled-components'
import {
  compose,
  color,
  size,
  space,
  flexbox,
  border,
  layout,
  position,
  typography
} from 'styled-system'

const Input = styled.input<any>(
  compose(color, size, space, flexbox, border, layout, position, typography)
)

export default Input
