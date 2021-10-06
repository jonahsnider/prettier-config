import {Options} from 'prettier';
import xoConfig from 'prettier-config-xo';

const config: Options = {
	...xoConfig,
	printWidth: 160,
};

export = config;
