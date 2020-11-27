import styled from "styled-components"

export const Button = styled.button`
  border-radius: 3px;
  color: white;
  background: ${props => props.theme.color.primary2};
  font-size: ${props => props.fontSize || props.theme.fontSize.md};
`
export const H1 = styled.h1`
  color: ${props => props.theme.color.tertiary};
  span {
    @media (max-width: ${props => props.theme.screen.md}) {
      color: green;
    }
  }

  ${props =>
    props.hide &&
    `
    display: block;
    color: red;
    @media (max-width: ${props.theme.screen.sm}) {
      display: none;
    }
  `}
`
