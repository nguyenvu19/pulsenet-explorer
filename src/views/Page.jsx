import styled from 'styled-components'

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: ${({ $removePadding }) => ($removePadding ? '0' : '16px')};
  padding-bottom: 0;
  height: calc(100vh - 64px - 152px);
`

const Page = ({ children, ...props }) => {
  return <StyledPage {...props}>{children}</StyledPage>
}

export default Page
