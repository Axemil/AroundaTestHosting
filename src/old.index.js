
import { render } from "react-dom";
import { Provider } from "react-redux";

import App from "./old.App";
import SubscribePopup from "@sections/SubscribePopup";

import store from "./store";



render(
	<Provider store={store}>
		<SubscribePopup />
		<App />
	</Provider>,
	document.querySelector("#app")
)
