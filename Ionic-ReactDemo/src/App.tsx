import {
	IonApp,
	IonRouterOutlet,
	IonSplitPane,
	setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import Page from "./pages/Page";
import Todo from "./pages/todo";
import Collections from "./pages/collections";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Detail from "./pages/detail";
import Home from "./pages/home";

setupIonicReact();

const App: React.FC = () => {
	return (
		<IonApp>
			<IonReactRouter>
				<IonSplitPane contentId="main">
					<Menu />
					<IonRouterOutlet id="main">
						<Switch>
							<Route path="/" exact={true}>
								<Home></Home>
							</Route>
							<Route path="/todo" exact={true}>
								<Todo></Todo>
							</Route>
							<Route path="/collections" exact={true}>
								<Collections></Collections>
							</Route>
							<Route path="/collections/:id">
								<Detail></Detail>
							</Route>
							<Route path="/page/:name" exact={true}>
								<Page />
							</Route>
						</Switch>
					</IonRouterOutlet>
				</IonSplitPane>
			</IonReactRouter>
		</IonApp>
	);
};

export default App;
