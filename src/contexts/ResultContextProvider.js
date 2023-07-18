import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search74.p.rapidapi.com';

export const ResultContextProvider = ({ children }) => {
	const [results, setResults] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [searchTerm, setSearchTerm] = useState('LucasLevingston');

	const getResults = async (type) => {
		setIsLoading(true);

		const response = await fetch(`${baseUrl}${type}`, {
			method: 'GET',
			params: {
				query: { searchTerm },
			},

			headers: {
				'X-RapidAPI-Key': '4c8b52778dmsh0bef3793b8e1590p1a711ejsna866a230ee85',
				'X-RapidAPI-Host': 'google-search74.p.rapidapi.com',
			},
		});

		const data = await response.json();

		console.log(data);
		setResults(data);
		setIsLoading(false);
	};

	return (
		<ResultContext.Provider
			value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
		>
			{children}
		</ResultContext.Provider>
	);
};

export const useResultContext = () => useContext(ResultContext);
