import { Card, CardContent, Button, CardActionArea, CardActions, Typography } from "@mui/material"
import { useRouter } from "next/router"
export default function StandardCard({standard}){
  const router = useRouter()
  const {eo, id} = standard


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
        <Button size="small" color="primary" onClick={() => {router.push(`/standard/${id}`)}}>
          View Details
        </Button>
      </CardActions>
    </Card>
  )
}