import { Box, Grid } from "@mui/material";
import { useContext } from "react";

import NotificationContext from "../../contexts/notificationContext";
import Copyright from "./Copyright";
import NotificationBanner from "./NotificationBanner";

export default function Layout({children}){
  const notificationCtx = useContext(NotificationContext)

  return(
    <Box>
      {!!notificationCtx.notification && <NotificationBanner {...notificationCtx.notification}/>}
      <Grid>
        {children}
        <Box component={Copyright} alignSelf={'end'}/>
      </Grid>
    </Box>
  )
}