import React from 'react';
import {Box,Typography,Button,styled} from '@mui/material';

const Container = styled(Box)`
 font-family:sans-sarif;
`;

const SmallCardBox = styled(Box)(({theme}) => ({
    display:'flex',
    justifyContent:'space-evenly',
    flexWrap:'nowrap',
    padding:'none',
    marginTop:'4rem',
    marginLeft:0,

    [theme.breakpoints.down('md')]: {
       display:'block',
        margin:'1rem',
        marginLeft:'2rem',
      }

}));
//  display:flex;
//  justify-content:space-evenly;
//  flex-wrap:nowrap;
//  padding:none;
//  margin-top:4rem;
//  margin-left:0 ;
 
// `;
const CardBox = styled(Box)(({theme}) => ({
 width:'25vw',
 height:'14vh',
 background:'#fff',
 borderRadius:'10px',
 boxShadow:' 0 3px 6px 0 rgba(0, 0, 0, 0.16)',

 [theme.breakpoints.down('md')]: {
 width:'80vw',
    
     marginTop:'2rem',
   }

}));


const UpperBox = styled(Box)`
 height:8vh;
 display:flex;
`;
const LowerBox = styled(Box)`
height:6vh;

`;

const LargeCardBox = styled(Box)(({theme}) => ({ 
 display:'flex',
 marginTop:'2rem',
 justifyContent:'space-evenly',

 [theme.breakpoints.down('md')]: {
   display:'block',
      }

}))

const CardLarge = styled(Box)(({theme}) => ({
 width:'36vw',
 height:'18vh',
 boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
 borderRadius:'10px',
 background:'#fff',
 padding:'1rem',

 [theme.breakpoints.down('md')]: {
    width:'80vw',
    margin:'2rem',
    padding:'2rem',
       },
       [theme.breakpoints.down('sm')]: {
        width:'80vw',
        padding:'2rem',
           }

}));

const ButtonBox = styled(Button)(({theme}) => ({
 display:'flex',
 justifyContent:'space-evenly',
 padding:'1rem 0.5rem',

 [theme.breakpoints.down('md')]: {
    display:'block',
    paddingBottom:'3rem',
       }
}));

const UpperComponent = () => {
  return (
    <Container>

        <SmallCardBox>
            <CardBox>
               <UpperBox>
                <Box style={{background:'#2874f0',borderRadius:6,boxShadow:'0 3px 6px 0 rgba(0, 0, 0, 0.16)',padding:10,marginRight:'auto',marginBottom:'13px'}}>
                    <Box style={{background:'#fff',borderRadius:'50%',color:'#2874f0',fontWeight:600,padding:'2px'}}> $</Box>
                    </Box>
                <Box>Total<Box style={{fontWeight:600}}>$.0</Box></Box>
               </UpperBox>
               <hr/>
               <LowerBox>
                <Typography style={{color:'green',paddingLeft:' 15px',paddingBottom:"1px"}}>name</Typography>
               </LowerBox>
            </CardBox>


            <CardBox>
               <UpperBox>
                <Box style={{background:'#2874f0',borderRadius:6,boxShadow:'0 3px 6px 0 rgba(0, 0, 0, 0.16)',padding:10,marginRight:'auto',marginBottom:'13px'}}>
                    <Box style={{background:'#fff',borderRadius:'50%',color:'#2874f0',fontWeight:600,padding:'2px'}}> $</Box>
                    </Box>
                <Box>Total<Box style={{fontWeight:600}}>$.0</Box></Box>
               </UpperBox>
               <hr/>
               <LowerBox>
                <Typography style={{color:'green',paddingLeft:' 15px',paddingBottom:"1px"}}>Anything</Typography>
               </LowerBox>
            </CardBox>


            <CardBox>
               <UpperBox>
                <Box style={{background:'#2874f0',borderRadius:6,boxShadow:'0 3px 6px 0 rgba(0, 0, 0, 0.16)',padding:10,marginRight:'auto',marginBottom:'13px'}}>
                    <Box style={{background:'#fff',borderRadius:'50%',color:'#2874f0',fontWeight:600,padding:'2px'}}> $</Box>
                    </Box>
                <Box>Total<Box style={{fontWeight:600}}>$.0</Box></Box>
               </UpperBox>
               <hr/>
               <LowerBox>
                <Typography style={{color:'green',paddingLeft:' 15px',paddingBottom:"1px"}}>something</Typography>
               </LowerBox>
            </CardBox>


        </SmallCardBox>

         <LargeCardBox>
            <CardLarge>
               <Typography style={{fontWeight:600,fontSize:15}}>Pay-Per-Click</Typography>
               <Typography>Lorem, ipsum dolor nam adipisci porro sunt tempore sed cum.</Typography>
               <Box style={{display:'flex',padding:'5',marginTop:'10px'}}>
                <button style={{marginLeft:10}}>Adr</button>
               </Box>
               <ButtonBox >
               <Button variant="contained" style={{padding:'5px 70px'}} >Get Started</Button>
               <Button variant="contained"  style={{background:'grey',marginLeft:'1rem',padding:'5px 70px'}}>Overwiew</Button>
               </ButtonBox>
            </CardLarge>

            <CardLarge>
               <Typography style={{fontWeight:600,fontSize:15}}>Pay-Per-Click</Typography>
               <Typography>Lorem, ipsum dolor nostrum,  adipisci porro sunt tempore sed cum.</Typography>
               <Box style={{display:'flex',padding:'5',marginTop:'10px'}}>
                <button style={{marginLeft:10}}>Adr</button>
                <button style={{marginLeft:10}}>Bc6</button>
                <button style={{marginLeft:10}}>Cdr</button>
                <button style={{marginLeft:10}}>Deg</button>
               </Box>
               <ButtonBox >
               <Button variant="contained" style={{padding:'5px 70px'}} >Get Started</Button>
               <Button variant="contained"  style={{background:'grey',marginLeft:'1rem',padding:'5px 70px'}}>Overwiew</Button>
               </ButtonBox>
            </CardLarge>
         </LargeCardBox>

     
    </Container>
  )
}

export default UpperComponent;