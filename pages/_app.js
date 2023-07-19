import '../styles/globals.css'
import { ThemeProvider } from '@mui/material/styles';
import defaultTheme from "../contexts/defaultTheme"
import Copyright from '../components/layout/Copyright';
import { Box, Grid } from '@mui/material';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';

import NotificationBanner from '../components/layout/NotificationBanner';

const notificationProps = {
  notification: {
    title: "Test Title",
    message: "This is the test message.",
    type: "success"
  },
  actionIcon: <AudiotrackIcon />,
  actionHandler: function(){
    alert("Action Works")
  }
}

function MyApp({ Component, pageProps }) {
  return(
    <ThemeProvider theme={defaultTheme}>
      <NotificationBanner {...notificationProps} />
      <Grid >
        <Component {...pageProps} />
        <Box component={Copyright} alignSelf={'end'}/>
      </Grid>
    </ThemeProvider>
  )
}

export default MyApp
