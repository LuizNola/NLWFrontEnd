import '../styles/global.css'

import { ChallengensProvider } from '../contexts/challengensContexts'
import React from 'react'

function MyApp({ Component, pageProps }) {
  return(
    <ChallengensProvider>
     <Component {...pageProps} />
    </ChallengensProvider>
 )
}

export default MyApp
