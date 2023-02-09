import React from 'react';
import { iconVariants } from './AddImage.props';

import CameraIcon from '@assets/IcCamera.svg';
import ScanIcon from '@assets/IcScan.svg';

function getIcon(variant: iconVariants): React.FC {
	switch(variant) {
		case 'photo':
			return CameraIcon;
		case 'scan':
			return ScanIcon;
	} 
}

export default getIcon;
