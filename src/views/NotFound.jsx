import styled from 'styled-components'
import Page from './Page'
import Link from 'next/link'

const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-weight: bold;
    font-size: 38px;
  }
  p {
    font-size: 16px;
    font-weight: 400;
  }
`

const NotFound = ({ statusCode = 404 }) => {
  return (
    <Page>
      <StyledNotFound>
        {/* <LogoIcon width="64px" mb="8px" /> */}
        <h2>{statusCode}</h2>
        <p>Oops, page not found.</p>
        <Link href="/" passHref>
          <button>Back Home</button>
        </Link>
      </StyledNotFound>
    </Page>
  )
}

export default NotFound
