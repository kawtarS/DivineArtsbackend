import ProductPage from "pages/products/ProductPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Home from "pages/home/Home";

const Main = () => {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/products/:productId" exact>
					<ProductPage />
				</Route>
				<Route>
					<div className=" h-96 mb-48">
						<h1 className="text-8xl font-bold pt-64 text-center mx-auto">
							404 not found!
						</h1>
					</div>
				</Route>
			</Switch>
			<Footer />
		</BrowserRouter>
	);
};

export default Main;
