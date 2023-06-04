import { useState } from 'react';
import {FormControl, FormLabel, Autocomplete, TextField} from '@mui/material'

export default function MultiSelectBox({id, labelText, helpText, chipValues, setChipValues, options}) {

  return (
    <FormControl id={id+"control"} fullWidth>
      <FormLabel>{labelText}</FormLabel>
      <Autocomplete
        multiple
        disableCloseOnSelect
        disablePortal
        id={id}
        value={chipValues}
        onChange={(e,newValue) => setChipValues(newValue)}
        options={options}
        renderInput={(params) => (
          <TextField {...params} label={helpText} />
        )}
      />
    </FormControl>
  );
}
