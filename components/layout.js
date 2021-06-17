import React from "react";

const Layout = ({ children }) => {
	return (
		<div className="py-16 min-h-screen w-full bg-gradient-to-r from-red-400 to-blue-600">
			{children}
		</div>
	);
};

export default Layout;
