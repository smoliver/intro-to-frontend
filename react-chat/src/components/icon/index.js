import React from 'react';
import IconsUrl from 'assets/icons.svg';


const Icon = ({className, symbol, onClick, viewBox='0 0 100 100'}) => (
	<svg viewBox={viewBox} className={className} onClick={onClick}>
		<use xlinkHref={`${IconsUrl}#${symbol}`}></use>
	</svg>
)

Icon.SYMBOL = {
	'PENCIL': 'pencil',
	'X': 'x'
}

export default Icon;