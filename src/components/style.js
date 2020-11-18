import styled from "styled-components"

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
