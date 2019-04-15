/**
 * @format
 */

/**
 * External dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import { localize } from 'i18n-calypso';

function TransactionAmount( {
	translate,
	amount,
	tax,
	taxExempt = false,
	taxApplicable = false,
	taxIncluded = false,
	taxExcluded = false,
} ) {
	const taxAmount = taxIncluded
		? translate( '(includes %(taxAmount)s tax)', {
				args: { taxAmount: tax },
				comment: 'taxAmount is a localized price, like $12.34',
		  } )
		: tax;

	// let taxAmount = addingTax
	// 	? translate( '(+%(taxAmount)s tax)', {
	// 			args: { taxAmount: transaction.tax },
	// 			comment: 'taxAmount is a localized price, like $12.34',
	// 	  } )
	// 	: translate( '(includes %(taxAmount)s tax)', {
	// 			args: { taxAmount: transaction.tax },
	// 			comment: 'taxAmount is a localized price, like $12.34',
	// 	  } );

	// if ( estimated ) {
	// 	taxAmount = translate( '(+ applicable tax)', {
	// 		comment:
	// 			'Positioned next to a tax exclusive price amount to explain there is potential for an extra tax in addition to the price at sale time',
	// 	} );
	// }

	return (
		<React.Fragment>
			<div className="billing-history__transaction-amount">{ amount }</div>
			{ taxExempt || <div className="billing-history__transaction-amount-tax">{ taxAmount }</div> }
		</React.Fragment>
	);
}

TransactionAmount.propTypes = {
	translate: PropTypes.func.isRequired,
	amount: PropTypes.string.isRequired,
	tax: PropTypes.string.isRequired,
	taxExempt: PropTypes.bool,
	taxApplicable: PropTypes.bool,
	taxIncluded: PropTypes.bool,
	taxExcluded: PropTypes.bool,
};

export default localize( TransactionAmount );