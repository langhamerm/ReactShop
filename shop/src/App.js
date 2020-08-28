import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import TopHeader from "./components/TopHeader";
import ImageHeader from "./components/ImageHeader";
import Landing from "./components/Landing";
import ProductGrid from "./components/ProductGrid";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

function App() {
	return (
		<div>
			<Navbar />
			<Header />
			<TopHeader />
			<ImageHeader />
			<ProductGrid />
      <Subscribe />
			<Footer />
		</div>
	);
}

export default App;
