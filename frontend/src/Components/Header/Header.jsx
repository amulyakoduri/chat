import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";
import {Home,HomeOutlined,Add,AddOutlined,Search,SearchOutlined,AccountCircle,AccountCircleOutlined} from "@mui/icons-material";

const Header = () => {
    return <div>
        <Link to="/">
          <Home/>
        </Link>

        <Link to="/newPOst">
          <Add/>
        </Link>

        <Link to="/Search">
          <Search/>
        </Link>

        <Link to="/account">
          <AccountCircle/>
        </Link>
    </div>
}; 

export default Header;