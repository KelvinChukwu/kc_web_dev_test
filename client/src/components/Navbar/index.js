import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/psets" activeStyle>
			PSets
		</NavLink>
		<NavLink to="/pset-database" activeStyle>
			PSet Database
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;