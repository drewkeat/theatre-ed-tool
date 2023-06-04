import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import { Box, Card, Container, Table, TableRow, TableColumn, Typography } from "@mui/material";

export default function StandardPage({standard}){
  const {grade, domain, reference, gle, eo, iqs, tasks, vocab, ces, id, } = standard
  return(
    <Container>
      <Typography variant="h2">{id}</Typography>
      <Card elevated="2" gap="1">
          <Container sx={{display: "flex", flexFlow: "column", gap: "1rem"}}>
            <Typography><Typography variant="h6">Domain:</Typography> {domain}</Typography>
            <Typography><Typography variant="h6">Grade Level Expectation:</Typography> {gle}</Typography>
            <Typography><Typography variant="h6">Colorado Essential Skills:</Typography> {ces}</Typography>
            <Typography><Typography variant="h6">Evidence Outcome:</Typography> {eo}</Typography>
            <Typography><Typography variant="h6">Inquiry Questions:</Typography> {iqs}</Typography>
            <Typography><Typography variant="h6">Sample Tasks:</Typography> {tasks}</Typography>
            <Typography><Typography variant="h6">Sample Vocabulary:</Typography> {vocab}</Typography>

          </Container>
      </Card>
    </Container>
  )
}

export function getServerSideProps(context){
  const standardId = context.params.standardId
  const standardsPath = path.join(process.cwd(), "standards.json");
  const standards = JSON.parse(fs.readFileSync(standardsPath));
  const standard = standards[standardId];
  console.log(standard)
  // const standard = standards.find(standardId)
  // console.log(context.params)
  return ({props: {standard}})
}