import { Box } from '@mui/material';
import { FC } from 'react'
import { ITabItemCompProps } from '../../types/intefaces';
 
const TabItemComp: FC<ITabItemCompProps> = ({children, value, index, ...other}) => {
  return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
}

export default TabItemComp
