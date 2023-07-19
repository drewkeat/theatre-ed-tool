import { Grid, IconButton, Paper, Typography } from "@mui/material";

export default function NotificationBanner({actionIcon, actionHandler, notification}) {
  return (
    <Grid
      container
      component={Paper}
      bgcolor={`${notification.type}.light`}
      justifyContent={"center"}
      alignItems={"center"}
      elevation={3}
      sx={{ zIndex: 1 }}
    >
      <Grid item xs maxWidth={"fit-content"} marginX={2} textAlign={"center"}>
        <Typography variant="h5" >{notification.title}</Typography>
      </Grid>
      <Grid
        item
        xs={6}
        component={Typography}
        textAlign={"center"}
        variant={"h6"}
      >
        {notification.message}
      </Grid>
      <Grid item xs maxWidth={"fit-content"} textAlign={"center"} marginX={2}>
        <IconButton size="large" onClick={actionHandler}>{actionIcon}</IconButton>
      </Grid>
    </Grid>
  );
}
