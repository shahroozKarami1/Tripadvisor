import { Box, Button, ListItem, Typography } from '@mui/material'
import { FC } from 'react'
import { INavbarMenuProps } from '../../types/intefaces'
import { Link, useLocation } from 'react-router-dom'


const NavbarMenu: FC<INavbarMenuProps> = ({NavBarMenuArr ,  fontSize}) => {
  let activeLink  =  useLocation()

  return  (
    <>
        {
        NavBarMenuArr.map(({icon   ,  title ,  link}) =>  {
            return (
                <ListItem  > 
                  <Link  to ={link  ? link  : "/"} >
                  <Button sx={{gap : 1 ,   padding :   0  }}  style={{borderBottom : activeLink.pathname ===  link ?  "3px  solid var(--dark-color)"  : ""}} >
                     <Typography sx={{whiteSpace :"nowrap" ,  fontWeight : "bold" ,  fontSize : {fontSize}}}> {title}</Typography>  {icon}
                    </Button>
                  </Link>
                    
                     </ListItem>

            )
        })
        }
        </>
  )
}

export default NavbarMenu