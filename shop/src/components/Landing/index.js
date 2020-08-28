import React from "react";

function Landing() {
	return (
		<div>
			<div
				className="w3-overlay w3-hide-large"
				onclick="w3_close()"
				style={{ cursor: "pointer" }}
				title="close side menu"
				id="myOverlay"
			/>
			{/* !PAGE CONTENT! */}
			<div className="w3-main" style={{ marginLeft: 250 }}>
				{/* Push down content on small screens */}
				<div className="w3-hide-large" style={{ marginTop: 83 }} />
				{/* Top header */}

				{/* Image header */}
				
				{/* Product grid */}
				
				{/* Subscribe section */}
			
				{/* Footer */}
				
				<div className="w3-black w3-center w3-padding-24">
					Powered by{" "}
					<a
						href="https://www.w3schools.com/w3css/default.asp"
						title="W3.CSS"
						target="_blank"
						className="w3-hover-opacity"
					>
						w3.css
					</a>
				</div>
				{/* End page content */}
			</div>
			{/* Newsletter Modal */}
			<div id="newsletter" className="w3-modal">
				<div
					className="w3-modal-content w3-animate-zoom"
					style={{ padding: 32 }}
				>
					<div className="w3-container w3-white w3-center">
						<i
							onclick="document.getElementById('newsletter').style.display='none'"
							className="fa fa-remove w3-right w3-button w3-transparent w3-xxlarge"
						/>
						<h2 className="w3-wide">NEWSLETTER</h2>
						<p>
							Join our mailing list to receive updates on new arrivals and
							special offers.
						</p>
						<p>
							<input
								className="w3-input w3-border"
								type="text"
								placeholder="Enter e-mail"
							/>
						</p>
						<button
							type="button"
							className="w3-button w3-padding-large w3-red w3-margin-bottom"
							onclick="document.getElementById('newsletter').style.display='none'"
						>
							Subscribe
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Landing;
