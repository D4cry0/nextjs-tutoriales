
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    // Provider
      <Component {...pageProps} />
    
  )
}

export default App;