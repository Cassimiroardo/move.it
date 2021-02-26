
import { ChallengeContextProvider } from '../contexts/challenge.context'
import { CountdownContextProvider } from '../contexts/countdown.context'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
      <ChallengeContextProvider>
          <Component {...pageProps} />
      </ChallengeContextProvider>
      )
}

export default MyApp
