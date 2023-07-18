import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Results } from './Results';
import { Search } from './Search';
import { ResultContextProvider } from '../contexts/ResultContextProvider';

export const RoutesApp = () => {
	return (
		<div className="p-4">
			<Routes>
				<Route exact path="/" element={<Search />} />
				<Route path="/search" element={<Results />} />
				<Route path="/images" element={<Results />} />
				<Route path="/news" element={<Results />} />
				<Route path="/videos" element={<Results />} />
			</Routes>
		</div>
	);
};
