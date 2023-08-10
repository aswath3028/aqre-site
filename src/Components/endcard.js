import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faShippingFast,faThumbsUp,faUmbrella,faLifeRing } from '@fortawesome/free-solid-svg-icons';


export default function endcard() {
  return (
    <>
    <div class="container-fluid mb-3">
	
    <div class="container">
    <div class="row mb-5">
		<div class="col-md-12">
			<div class="card">
				<div class="card-body">
					<div class="row">
						<div class="col-md-3">
							<FontAwesomeIcon icon={faShippingFast}/>
							<p class="h6">Free shipping & Return <br/><small class="text-muted">For all orders over $500</small></p>
						</div>
						<div class="col-md-3">
                            <FontAwesomeIcon icon={faThumbsUp}/>
							<p class="h6">Customer Protection <br/><small class="text-muted">From click to delivery.</small></p>
						</div>
						<div class="col-md-3">
                            <FontAwesomeIcon icon={faUmbrella}/>
							<p class="h6">Safe Payment <br/><small class="text-muted">Use world’s most secure payment methods.</small></p>
						</div>
						<div class="col-md-3">
                            <FontAwesomeIcon icon={faLifeRing}/>
							<p class="h6">Support 24/7 <br/><small class="text-muted">We answer for question all time</small></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    </div>
    </div>
    </>
  )
}
