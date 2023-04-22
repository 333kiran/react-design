import React,{useState} from 'react';
import {Box,Drawer, IconButton,styled} from '@mui/material';
import {MdViewHeadline} from 'react-icons/md';


//components
import SlideBar from './SlideBar';
import UpperComponent from './UpperComponent';
import LowerComponent from './LowerComponent';

const ContainerBox = styled(Box)(({theme}) => ({
background:'#f2f2ff',
 width:'100vw',
 height:'2000px',
 margin:'none',
 padding:'none',
 boxSizing:'border-box',
 display:'flex',
 [theme.breakpoints.down('md')]: {
  display:'block',
}

}));

const FirstBox = styled(Box)(({theme}) => ({
  width:'20vw',
  height:'100vh',
   [theme.breakpoints.down('md')]: {
     display:'none'
   }
}));

const MenuButton = styled(IconButton)(({theme}) => ({
  display:'none',
  [theme.breakpoints.down('md')]: {
    display:'block'
  }
}));

const SecondBox = styled(Box)(({theme}) => ({
 width:'80vw',

 [theme.breakpoints.down('md')]: {
   width:'100vw',
   padding:'1rem',
}
}));


const LeftBox = styled(Box)`
 width:20vw;
 height:100vh;
`;

const RightUpperBox = styled(Box)`
 width:80vw;
  height:40vh;
`;
 
const RightLowerBox = styled(Box)(({theme}) => ({
width:'80vw',
height:'60vh',

[theme.breakpoints.down('md')]: {
  width:'100vw',
  marginTop:'5rem',
}
}));



const Home = () => {
const [open, setOpen] = useState(false);

const handleOpen = () => {
  setOpen(true);
}

const listMenu = () => (
  <Box style={{width:'18rem'}} onClick={handleClose}>
        <SlideBar/>
  </Box>

);

const handleClose = () => {
  setOpen(false);
}


  return (
    <ContainerBox>
       <MenuButton style={{color: '#2874f0'}} onClick={handleOpen} >
        <MdViewHeadline/>
      </MenuButton >

        <Drawer open={open} onClose={handleClose}>
          {listMenu()}
        </Drawer>
      <FirstBox>
        <LeftBox  ><SlideBar/></LeftBox>
        </FirstBox>

        <SecondBox>
        <RightUpperBox  ><UpperComponent/></RightUpperBox>
        <RightLowerBox ><LowerComponent/></RightLowerBox>
        </SecondBox>
    </ContainerBox>
  )
}

export default Home;