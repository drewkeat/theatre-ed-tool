import '../styles/globals.css'
import { ThemeProvider } from '@mui/material/styles';
import defaultTheme from "../contexts/defaultTheme"

import Layout from '../components/layout/Layout';
import { NotificationContextProvider } from "../contexts/notificationContext"


function MyApp({ Component, pageProps }) {
  return(
    <ThemeProvider theme={defaultTheme}>
      <NotificationContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </NotificationContextProvider>
    </ThemeProvider>
  )
}

export default MyApp
