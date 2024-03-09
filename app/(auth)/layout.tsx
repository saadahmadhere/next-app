import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<div className='border-b text-center py-2'>signin to get 20%off</div>
			{children}
		</>
	);
};

export default Layout;
