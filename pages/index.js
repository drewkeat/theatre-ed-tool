import fs from "fs";
import path from "path";
import _ from "lodash";

import SelectBox from "../components/MultiSelectBox";
import StandardRow from "../components/StandardCard";

import {
  Container
} from "@mui/material";

import { useState, useEffect } from "react";
import GradeContainer from "../components/GradeContainer";

export default function Home({ standards }) {
  const [formState, setFormState] = useState({
    grade: [],
    domain: [],
    reference: [],
    gle: [],
    eo: [],
    iqs: [],
    tasks: [],
    vocab: [],
    ces: [],
    know: [],
    do: [],
    understand: [],
    id: [],
  });
  const [filteredStandards, setFilteredStandards] = useState(standards);

  useEffect(() => {
    filterStandards()
  }, [formState])
  

  const filterStandards = () => {
    setFilteredStandards(_.filter(standards, standard => {
      let valid = true
      const keysToFilter = _.filter(_.keys(formState), key => formState[key].length > 0)
      let i = 0
      while(i < keysToFilter.length && valid) {
        let key = keysToFilter[i]
        if(!formState[key].includes(standard[key])){
          valid = false
        } 
        i ++
      }
      return valid
    }))
  }

  const listStandards = () =>
    _.map(filteredStandards, (standard) => (
      <StandardRow key={standard.id} {...standard}/>
    ));

  const createGradeContainers = () => {
    const grades = _.uniq(_.map(filteredStandards, standard => standard.grade))
    return (
      grades.map(grade => {
      const gradeStandards = _.filter(filteredStandards, standard => standard.grade === grade)
      return <GradeContainer key={grade} grade={grade} standards={gradeStandards}/>
    })
    )
  }

  return (
    <Container>
        <Container sx={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", mb: "3rem"}}>
          <SelectBox
            id="domain-select"
            labelText="Select Domain"
            helpText="Domain(s)"
            options={_.uniq(
              _.map(standards, (standard) => standard.domain)
            )}
            chipValues={...formState.domain}
            setChipValues={(newValue) => {
              setFormState({...formState, domain: newValue})
              return newValue
            }}
          />
          <SelectBox
            id="grade-select"
            labelText="Select Grade"
            helpText="Grade(s)"
            options={_.uniq(
              _.map(standards, (standard) => standard.grade)
            )}
            chipValues={...formState.grade}
            setChipValues={(newValue) => {
              setFormState({...formState, grade: newValue})
              return newValue
            }}
          />
          <SelectBox
            id="gle-select"
            labelText="Select GLE"
            helpText="Grade Level Expectation(s)"
            options={_.uniq(
              _.map(standards, (standard) => standard.gle)
            )}
            chipValues={...formState.gle}
            setChipValues={(newValue) => {
              setFormState({...formState, gle: newValue})
              return newValue
            }}
          />
        </Container>
      <Container sx={{display: "flex", flexDirection: "column"}}>{createGradeContainers()}</Container>
    </Container>
  );
}

export const getStaticProps = async () => {
  const standardsPath = path.join(process.cwd(), "standards.json");
  const standards = JSON.parse(fs.readFileSync(standardsPath));
  return { props: { standards } };
};
