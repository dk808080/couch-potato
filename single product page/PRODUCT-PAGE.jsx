import React from 'react';
import './PRODUCTPAGE.css';
import swal from 'sweetalert';

function PRODUCTPAGE(props) {
	function addtocart(event) {
		event.preventDefault();
		swal(
			'Item added to the cart',
			'congratulations this item is added successfully to your cart',
			'success'
		);
	}
	return (
		<div class='paper'>
			<img
				class='poster'
				src='//cdn.grofers.com/app/images/products/full_screen/pro_392658.jpg'
			/>
			<h2>COUCH POTATO</h2>
			<h1>Cadbury Bournvita Chocolate Health Drink (Refill)</h1>
			<h3>500 g</h3>
			<h3>₹200</h3>
			<hr />
			<p>
				CADBURY BOURNVITA now with inner strength formula packed with nutrients
				that are known for maintaining strong bones, strong muscles and healthy
				brain. CADBURY BOURNVITA provides the same great tasty and delicious
				chocolate drink enriched with vitamin D, iodine, iron, protein, and
				phosphorus.
			</p>

			<a href='#' class='btn' onClick={addtocart}>
				Add to cart
			</a>
			<div class='space'></div>
		</div>
	);
}

export default PRODUCTPAGE;
