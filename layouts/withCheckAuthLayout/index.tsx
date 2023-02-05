import { useEffect, useState } from 'react';
import Router from 'next/router';

import ICheckAuthConfig, { checkAuthConfigKeys } from './withCheckAuthLayout.props';

const defaultConfig: Required<ICheckAuthConfig> = {
	checkLoggined: true,
	onAccessDenited: () => Router.push('/'),
};

const withCheckAuthLayout = (Component: React.FC, config: ICheckAuthConfig = defaultConfig): React.FC => {
	// mix config values from user and from default config
	for(const i in defaultConfig) {
		if(config[i as checkAuthConfigKeys])
			defaultConfig[i as checkAuthConfigKeys] = config[i as checkAuthConfigKeys] as any;
	}

	const CheckAuthLayout: React.FC = () => {
		const [isAccessAllowed, setIsAccessAllowed] = useState(false);

		useEffect(() => {
			const isAuthed = !!localStorage.getItem('accessToken');

			if(isAuthed && config.checkLoggined)
				setIsAccessAllowed(true);
			else if(!isAuthed && !config.checkLoggined)
				setIsAccessAllowed(true);
			else
				defaultConfig.onAccessDenited();
		}, []);

		if(isAccessAllowed)
			return <Component />;
		else
			return null;
	};

	return CheckAuthLayout;
};

export default withCheckAuthLayout;
