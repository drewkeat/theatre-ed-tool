import _ from "lodash";

import { Container, Typography } from "@mui/material";
import StandardCard from "./StandardCard";

const gradeStyles = {
  "6": {background: "#D9D9D9", color: "black"},
  "7": {background: "#FFE599", color: "black"},
  "8": {background: "#B7D7A8", color: "black"},
  "HS Fund": {background: "#A4C2F4", color: "black"},
  "HS Adv": {background: "#B4A7D6", color: "black"},
  "HS Pro": {background: "#EA9999", color: "black"},
}

export default function GradeContainer({grade, standards}) {
  const listStandards = () =>{
    return _.map(standards, (standard) => (
      <StandardCard key={standard.id} standard={standard} />
    ))};

  return (
    <Container
      sx={{
        ...gradeStyles[grade],
        display: "flex",
        flexFlow: "column",
        gap: "1rem",
        margin: "1rem"
      }}
    >
    <Typography variant="h3">Grade: {grade}</Typography>
      {listStandards()}
    </Container>
  );
}
