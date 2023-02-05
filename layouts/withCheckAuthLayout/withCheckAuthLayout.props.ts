interface ICheckAuthConfig {
	checkLoggined?: boolean;
	onAccessDenited?: () => void;
}

export type checkAuthConfigKeys = keyof ICheckAuthConfig;

export default ICheckAuthConfig;
