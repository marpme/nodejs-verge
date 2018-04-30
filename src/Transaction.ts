export interface Transaction {
	/**
	 * The transaction id
	 */
	txid: string
	/**
	 * the output number
	 */
	vout?: string
	account: String
	address: String
	category: String
	amount: Number
	confirmations: Number
	blockhash: String
	blockindex: Number
	blocktime: Number
	time: Number
	timereceived: Number
}
