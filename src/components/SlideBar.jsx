import React from 'react';
import {Box,styled} from '@mui/material';
import {FcOrgUnit} from 'react-icons/fc';
import {FaUserAlt,FaCog} from 'react-icons/fa';
import {AiFillHome} from 'react-icons/ai';
import {BiHelpCircle} from 'react-icons/bi';
import {TiExport} from 'react-icons/ti';
// FaDollarSign FaUserAlt  BiHelpCircle TiExport FaCog AiFillHome

const Container = styled(Box)`
 width:18rem;
 height:100vh;
 margin:0px;
 background:#fff;
box-shadow: 0 2px 4px 0 rgb( 0 0 0/20%);
`;

const LogoBox = styled(Box)`
 padding:2rem 2rem 1rem 2rem;
 display:flex;
`;

const MBox = styled(Box)`
  padding-top:3rem;
  padding-left:2.5rem;
  display:flex;
`;

const IconBox = styled(Box)`
  padding:0rem 2rem;
  font-family:sans-sarif;
  margin:1rem;
  display:block;
`;
const BlockBox = styled(Box)`
  margin-top:1rem;
`;

const SlideBar = () => {
  return (
    <Container>
      <LogoBox><Box style={{paddingTop:0}}><FcOrgUnit size="2.5rem"/></Box><span style={{marginLeft:'2rem',}}>Corporate Name here</span></LogoBox>
        <MBox><Box style={{borderRadius:'50%',border:'1px solid grey',width:'2.7rem',background:'grey'}}><FaUserAlt size="2rem" style={{color:'white',paddingLeft:5}}/></Box><span style={{marginLeft:'1.5rem',marginTop:5,fontWeight:'600',fontSize:20}}>username</span></MBox>
        <IconBox>
        <BlockBox><AiFillHome size="1.5rem"/><span style={{marginLeft:'2rem'}}>Home</span></BlockBox>
        <BlockBox><TiExport size="1.5rem"/><span style={{marginLeft:'2rem'}}>Exports</span></BlockBox>
        <BlockBox><FaCog size="1.5rem"/><span style={{marginLeft:'2rem'}}>Settings</span></BlockBox>
        <BlockBox><BiHelpCircle size="1.5rem"/><span style={{marginLeft:'2rem'}}>Help</span></BlockBox>
        <Box></Box>
        </IconBox>

    </Container>
  )
}

export default SlideBar;