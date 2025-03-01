module.exports = {
	'parser': 'babel-eslint',
	'extends': ['airbnb', 'airbnb/hooks'],
	'env': {
		'browser': true,
	},
	'rules': {
		'max-len': [
			'error', 90, 2, {
				'ignoreStrings': true,
			},
		],
		'no-tabs': 0,
		'quote-props': ['error', 'always'],
		'indent': ['error', 'tab', { 'SwitchCase': 1 }],
		'import/prefer-default-export': 0,
		'react/jsx-indent-props': ['error', 'tab'],
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-one-expression-per-line': 0,
		'react/jsx-props-no-spreading': ['error', {
			'html': 'enforce',
			'custom': 'enforce',
			'exceptions': ['View', 'Wrapped'],
		}],
	},
};
