import binToDecimal from 'bin-to-decimal';
import decToHex from 'dec-to-hex';

const binToHex = bin => decToHex( binToDecimal(bin) );
module.exports = binToHex;
