import { Grid, IconButton, Paper, Typography } from "@mui/material";

export default function NotificationBanner({title, message, type, icon, buttonAction}) {
  return (
    <Grid
      container
      component={Paper}
      bgcolor={`${type}.light`}
      justifyContent={"center"}
      alignItems={"center"}
      elevation={3}
      sx={{ zIndex: 1 }}
    >
      <Grid item xs maxWidth={"fit-content"} marginX={2} textAlign={"center"}>
        <Typography variant="h5" >{title}</Typography>
      </Grid>
      <Grid
        item
        xs={6}
        component={Typography}
        textAlign={"center"}
        variant={"h6"}
      >
        {message}
      </Grid>
      <Grid item xs maxWidth={"fit-content"} textAlign={"center"} marginX={2}>
        <IconButton size="large" onClick={buttonAction}>{icon}</IconButton>
      </Grid>
    </Grid>
  );
}
