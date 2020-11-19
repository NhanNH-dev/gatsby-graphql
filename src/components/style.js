import styled, { css } from "styled-components"
import media from "../styles/media"

export const Container = styled.div`
  margin: 0 auto;
  max-width: 750px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
export const Content = styled.div`
  flex-grow: 1;
`
export const Header = styled.header`
  padding: 1rem 0 3rem;
`
export const Title = styled.span`
  color: black;
  font-size: 3rem;
`
export const UL = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
`
export const LI = styled.p`
  color: #999999;
  font-size: 0.9em;
  margin-right: 1.3rem;
  text-decoration: none;
  :hover {
    color: #666666;
  }
  &:active {
    color: green;
  }
`
export const NavItem = styled.li`
  margin: 0;
  padding-right: 20px;
  font-size: 20px;
  a {
    text-decoration: none;
    opacity: 0.9;
    color: ${props => props.theme.color.black.regular};
    p {
      display: block;
      @media (max-width: ${props => props.theme.screen.md}) {
        font-size: 14px;
        margin: 0 0.5em;
      }
    }
  }

  &.is-current {
    a > p {
      /* color: ${props => props.theme.color.primary}; */
      color: red;
    }
  }
`
export const Text = styled.p`
  margin: ${props => props.margin || 0};
  padding: ${props => props.padding || 0};
  font-size: ${props => props.fontSize || props.theme.fontSize.md};
  color: ${props => props.color || props.theme.color.gray};
  line-height: ${props => props.lineHeight || "1.3em"};
  white-space: pre-line;
  word-wrap: break-word;
  word-break: break-word;

  ${props =>
    props.upper &&
    css`
      text-transform: uppercase;
    `}

  ${props =>
    props.xs &&
    css`
      font-size: ${props.theme.fontSize.xs};
    `}
  ${props =>
    props.sm &&
    css`
      font-size: ${props.theme.fontSize.sm};
    `}
  ${props =>
    props.md &&
    css`
      font-size: ${props.theme.fontSize.md};
    `}
  ${props =>
    props.lg &&
    css`
      font-size: ${props.theme.fontSize.lg};
    `}

  ${props =>
    props.xl &&
    css`
      font-size: ${props.theme.fontSize.lg};

      ${media.laptop`
        font-size: ${props.theme.fontSize.xl};
      `}
    `}

  ${props =>
    props.xxl &&
    css`
      font-size: ${props.theme.fontSize.xl};
      ${media.tablet`
        font-size: ${props.theme.fontSize.xxl};
      `}
    `}

    ${props =>
    props.underline &&
    css`
      font-size: ${props.theme.fontSize.xl};
    `}

  ${props =>
    props.secondary &&
    css`
      color: ${props.theme.colors.secondaryText};
      margin-bottom: 10px;
    `}

  /*font-weight*/
  ${props =>
    props.w3 &&
    css`
      font-weight: ${props.theme.fontWeight.w3};
    `}

  ${props =>
    props.w4 &&
    css`
      font-weight: ${props.theme.fontWeight.w4};
    `}

  ${props =>
    props.w5 &&
    css`
      font-weight: ${props.theme.fontWeight.w5};
    `}
  ${props =>
    props.w6 &&
    css`
      font-weight: ${props.theme.fontWeight.w6};
    `}
  ${props =>
    props.w7 &&
    css`
      font-weight: ${props.theme.fontWeight.w7};
    `}
`
