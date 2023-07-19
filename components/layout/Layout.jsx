import { Box, Grid } from "@mui/material";
import AudiotrackIcon from "@mui/icons-material/Audiotrack"

import Copyright from "./Copyright";
import NotificationBanner from "./NotificationBanner";

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

export default function Layout({children}){
  return(
    <Box>
      <NotificationBanner {...notificationProps}/>
      <Grid>
        {children}
        <Box component={Copyright} alignSelf={'end'}/>
      </Grid>
    </Box>
  )
}