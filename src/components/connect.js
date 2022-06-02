import React, { useState } from "react";

const Appl = () => {
	const [accountAddress, setAccountAddress] = useState("");

	async function getAccount() {
		const accounts = await window.ethereum.request({
			method: "eth_requestAccounts",
		});
		const account = accounts[0];
		return account;
	}

	const connectButtonOnClick = () => {
		console.log(window);
		if ( typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
			getAccount()
            .then((response) => {
				setAccountAddress(response);
			});
		} else {
			//connect.innerText="Metamask not installed"
			//connect.classList.remove('text-white');
			//connect.classList.add('bg-gray-500', 'text-gray-100','cursor-not-allowed')
			alert("Metamask not installed.");
		}
	};

	return (
		<div id='connect-button' class='text-right'>
			<button
				id='connect'
				class='btn btn-primary my-4 rounded-pill BaseButton_baseButton__1IkyI'
				onClick={connectButtonOnClick}
			>
				{!!accountAddress ? accountAddress : "Connect wallet"}
			</button>
		</div>
	);
};

export default Appl;
