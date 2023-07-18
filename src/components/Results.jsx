import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import ReactPlayer from 'react-player';

import { useResultContext } from '../contexts/ResultContextProvider';

import { Loading } from './Loading';

export const Results = () => {
	const { results, isLoading, getResults, searchTerm } = useResultContext();
	const location = useLocation();

	useEffect(() => {
		if (searchTerm) {
			if (location.pathname == '/videos') {
				getResults(`/search/q=${searchTerm} videos`);
			} else {
				getResults(`${location.pathname}/q=${searchTerm}`);
			}
		}
		// getResults(`/?query=Lucas%20Levingston&limit=10&related_keywords=true`);
	}, [searchTerm, location.pathname]);

	if (isLoading) return <Loading />;

	switch (location.pathname) {
		case '/search':
			return (
				<div className="flex flex-wrap justify-between space-y-6 sm:px-56">
					{results?.results?.map(({ url, title }, index) => (
						<div key={index} className="md:w-2/5 w-full">
							<a href={url} target="_blank" rel="noreferrer">
								<p className="text-sm">{url.length > 30 ? url.substring(0, 30) : url}</p>
								<p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
									{title}
								</p>
							</a>
						</div>
					))}
				</div>
			);
		case '/images':
			return (
				<div className="flex flex-wrap justify-center items-center">
					{results?.image_results?.map(({ image, url: { href, title } }, index) => (
						<a className="sm:p-3 p-5" hrref={href} target="_blank" rel="noreferrer">
							<img src={image?.src} alt={title} loading="lazy" />
							<p className="w-36 break-words text-sm mt-2"></p>
						</a>
					))}
				</div>
			);
		case '/videos':
			return 'news';
		case '/news':
			return (
				<div className="flex flex-w justify-between space-y-0 sm:px-56 items-center">
					{results?.entries?.map(({ urls, id, source, title }) => (
						<div key={id} className="md:w-2/5 w-full">
							<a
								href={urls?.[0].href}
								target="_blank"
								rel="noreferrer"
								className="hover:underline"
							>
								<p className="textlg hover:underline dark:text-blue-300 text-blue-700">
									{title}
								</p>
								<div className="flex" gap-4>
									<a href={source?.href} target="_blank" rel="noreferrer">
										{source?.href}
									</a>
								</div>
							</a>
						</div>
					))}
				</div>
			);

		default:
			return 'ERROR';
	}
};
