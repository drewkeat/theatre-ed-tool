import _ from "lodash";

import { Box, Container, Typography } from "@mui/material";
import StandardCard from "./StandardCard";

const gradeColors = {
  "6": "sixth",
  "7": "seventh",
  "8": "eighth",
  "HS Fund": "hsfund",
  "HS Adv": "hsadv",
  "HS Pro": "hspro"
}

export default function GradeContainer({grade, standards}) {
  const listStandards = () =>{
    return _.map(standards, (standard) => (
      <StandardCard key={standard.id} standard={standard} />
    ))};

  return (
    <Box
      component={Container}
      bgcolor={`${gradeColors[grade]}.main`}
      sx={{
        display: "flex",
        flexFlow: "column",
        gap: "1rem",
        margin: "1rem",
        paddingBottom: "1rem"
      }}
    >
    <Typography variant="h3">Grade: {grade}</Typography>
      {listStandards()}
    </Box>
  );
}
