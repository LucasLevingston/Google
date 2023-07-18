import React from 'react';
import { BeatLoader } from 'react-spinners';

export const Loading = () => {
	return (
		<div className="flex justify-center">
			<BeatLoader color="#00BFFF" size={15} />
		</div>
	);
};
