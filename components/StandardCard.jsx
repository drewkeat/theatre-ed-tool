import { Container, Card, CardContent, Button, CardActionArea, CardActions, Typography } from "@mui/material"
export default function StandardCard({grade, domain, reference, gle, eo, iqs, tasks, vocab, ces, id}){
  return (
    <Card >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {id}
          </Typography>
          <Typography variant="body2" fontStyle="bold" color="text.secondary">
            Evidence Outcome:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {eo}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View Details
        </Button>
      </CardActions>
    </Card>
  )
}