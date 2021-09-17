import styled from 'styled-components'
import {
  compose,
  color,
  size,
  space,
  flexbox,
  border,
  layout,
  position
} from 'styled-system'

const Button = styled.button<any>(
  compose(color, size, space, flexbox, border, layout, position)
)

Button.defaultProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

export default Button
