import React from 'react';
import './App.css';
import Home from './Elements/Home';
import Projects from './Elements/Projects';
import SpringTest from './Elements/SpringTest';

import {
	BrowserRouter as Router,
	Route,
	Routes,
	useNavigate,
	useLocation
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
		<title>Gordon Mcgaffin</title>
			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
			/>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route element={<Home />} path="frontend/" />
					<Route element={<Projects />} path="frontend/projects/" />
					<Route element={<SpringTest />} path="frontend/springtest/" />
				</Routes>
			</Router>
	</div>
  );
}

export default App;
