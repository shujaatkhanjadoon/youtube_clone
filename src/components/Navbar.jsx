import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from '../utils/constants';
import SearchBar from "./SearchBar";

const Navbar = () =>  (
    <Stack direction="row" alignItems="center" p={2} sx={{ background:'#000', position: 'sticky', justifyContent:'space-between', top:0}}>
    <Link to="/" style={{alignItems:'center', display:'flex'}}>
    <img src={logo} alt="logo" height={45}/>
    </Link>
    <SearchBar />
    </Stack>
  )


export default Navbar
