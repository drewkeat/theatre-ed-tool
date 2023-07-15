import '../styles/globals.css'
import { ThemeProvider } from '@mui/material/styles';
import defaultTheme from "../contexts/defaultTheme"
import Copyright from '../components/layout/Copyright';
import { Box, Grid } from '@mui/material';

function MyApp({ Component, pageProps }) {
  return(
    <ThemeProvider theme={defaultTheme}>
      <Grid >
        <Component {...pageProps} />
        <Box component={Copyright} alignSelf={'end'}/>
      </Grid>
    </ThemeProvider>
  )
}

export default MyApp
