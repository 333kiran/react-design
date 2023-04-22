import React from 'react';
import {Box,Button,Table,TableBody,TableCell,TableHead,TableRow,Typography,styled} from '@mui/material';

const Container = styled(Box)(({theme}) => ({
  background:'#fff',
  fontFamily:'sans-sarif',
  boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
 borderRadius:'10px',
 margin:'1rem',
 marginTop:'3rem',

 [theme.breakpoints.down('md')]: {
    width:'80vw',
    marginTop:'49rem',
    marginLeft:'2rem',

       }

}));

const ColumnText = styled(TableRow)`
  font-size:14px;
  vertical-align: baseline;

  & > td {
  font-size:14px;
 margin-top:10px;
    
  }
`

const LowerComponent = () => {
    const Image = "https://www.resolutionlawng.com/wp-content/uploads/2020/09/group-of-company-img.jpeg";
    const Url = "https://th.bing.com/th/id/OIP.nDkx23NvzSWtRzrG4YknUwFtCq?pid=ImgDet&rs=1";
    const Urlimg = "https://www.translators-usa.com/wp-content/uploads/2021/05/Translation-Companies-1024x565.jpg";
  return (
    <Container>
         <Box style={{display:'flex',paddingTop:'1rem'}}>
         <Typography style={{marginLeft:'1rem',marginRight:'3rem',fontWeight:600}}>Hot New OPA Offers(Network Wide)</Typography>
         <Button variant="contained"  >Search here</Button>
         
    </Box>
        <Table>
   
            <TableHead>
            <ColumnText>
                <TableCell>#</TableCell>
                <TableCell>profiles</TableCell>
                <TableCell>percentage</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Numbers</TableCell>
                <TableCell>Action</TableCell>
                </ColumnText>
            </TableHead>
            <TableBody>
                <ColumnText>
                    <TableCell>567</TableCell>
                    <TableCell><img src={Urlimg} alt="img" style={{width:'7rem',borderRadius:'50%'}} /><span style={{marginLeft:'1rem'}}>record one </span></TableCell>
                    <TableCell>890</TableCell>
                    <TableCell>34</TableCell>
                    <TableCell>35.21%</TableCell>
                    <TableCell><Button variant="contained">Remove</Button></TableCell>
                </ColumnText>

                <ColumnText>
                    <TableCell>567</TableCell>
                    <TableCell><img src={Url} alt="img" style={{width:'7rem',borderRadius:'50%'}}/><span style={{marginLeft:'1rem'}}>record second</span></TableCell>
                    <TableCell>678</TableCell>
                    <TableCell>54</TableCell>
                    <TableCell>34.21%</TableCell>
                    <TableCell><Button variant="contained">Remove</Button></TableCell>
                </ColumnText>

                <ColumnText>
                    <TableCell>567</TableCell>
                    <TableCell><img src={Image} alt="img" style={{width:'7rem',borderRadius:'50%'}}/><span style={{marginLeft:'1rem',marginBottom:'1rem'}}>record third</span></TableCell>
                    <TableCell>908</TableCell>
                    <TableCell>14</TableCell>
                    <TableCell>32.5%</TableCell>
                    <TableCell><Button variant="contained">Remove</Button></TableCell>
                </ColumnText>


            </TableBody>
        </Table>
    </Container>
  )
}

export default LowerComponent;