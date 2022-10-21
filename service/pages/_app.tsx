import '../styles/normalize.scss'
import '../styles/styles.scss'
import type { AppProps } from 'next/app'
import { ToastProvider } from 'react-toast-notifications';

function App({ Component, pageProps }: AppProps) {
  return (
    <ToastProvider>
      <Component {...pageProps} />
    </ToastProvider>
  )
}

export default App
