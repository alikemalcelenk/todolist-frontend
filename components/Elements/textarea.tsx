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

const Textarea = styled.textarea(
  compose(color, size, space, flexbox, border, layout, position, typography)
)

export default Textarea
