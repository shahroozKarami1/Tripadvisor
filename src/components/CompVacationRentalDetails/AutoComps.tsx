import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { FC } from "react";

interface IAutoCompsProps {
  dataOptions: {
    label: string;
  }[];
}

const AutoComps: FC<IAutoCompsProps> = ({ dataOptions }) => {
  return (
    <Autocomplete
      options={dataOptions}
      disablePortal
      value={dataOptions[0]}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField
          sx={{
            "& .MuiInputBase-root": {
              borderRadius: "2rem",
              padding: 0,
            },
          }}
          {...params}
        />
      )}
    />
  );
};

export default AutoComps;
