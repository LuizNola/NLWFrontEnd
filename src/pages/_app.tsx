import '../styles/global.css'
import React from 'react'
import { ChallengensProvider } from '../contexts/challengensContexts'


function MyApp({ Component, pageProps }) {
  return(
    <ChallengensProvider>
    
        <Component {...pageProps} />
    
    </ChallengensProvider>
 )
}

export default MyApp
