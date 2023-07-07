import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import { Box, Card, Container, Table, TableRow, TableColumn, Typography, List, ListItem } from "@mui/material";

const gradeColors = {
  "6": "sixth",
  "7": "seventh",
  "8": "eighth",
  "HS Fund": "hsfund",
  "HS Adv": "hsadv",
  "HS Pro": "hspro"
}

export default function StandardPage({standard}){
  const {grade, domain, reference, gle, eo, iqs, tasks, vocab, ces, id, drs_know, drs_understand, drs_do, assessableTasks } = standard
  return(
    <Box component={Container} bgcolor={`${gradeColors[grade]}.main`}>
      <Typography variant="h2">{id}</Typography>
      <List>
        <ListItem component={Typography} variant="h5">{eo}</ListItem>
        <ListItem component={Typography} variant="h5">{domain} - {gle}</ListItem>
      </List>
      <Card elevated={5} gap="1">
          <Container sx={{display: "flex", flexFlow: "column", gap: "1rem"}}>
            <Typography variant="h6">Colorado Essential Skills:</Typography><Typography> {ces}</Typography>
            <Typography variant="h6">Evidence Outcome:</Typography><Typography> {eo}</Typography>
            <Typography variant="h6">Inquiry Questions:</Typography><Typography> {iqs}</Typography>
            <Typography variant="h6">Sample Tasks:</Typography><Typography> {tasks}</Typography>
            <Typography variant="h5">Students will: (Know/Understand/Do)</Typography>
              <Typography variant="h6">Know:</Typography><Typography> {drs_know}</Typography>
              <Typography variant="h6">Understand:</Typography><Typography> {drs_understand}</Typography>
              <Typography variant="h6">Do:</Typography><Typography> {drs_do}</Typography>
            <Typography variant="h6">Assessable Tasks:</Typography>
            <List>{assessableTasks.split("\n").map(task => <ListItem key={task}>{task}</ListItem>)}</List>

          </Container>
      </Card>
    </Box>
  )
}

export function getServerSideProps(context){
  const standardId = decodeURI(context.params.standardId)
  const standardsPath = path.join(process.cwd(), "standards.json");
  const standards = JSON.parse(fs.readFileSync(standardsPath));
  const standard = standards[standardId];
  return ({props: {standard}})
}