import logo from './logo.svg';
import React from 'react';
import './App.css';
import Home from './Elements/Home';

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
			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
			/>
			<Router>
				<Routes>
					<Route element={<Home />} path='/' />
				</Routes>
			</Router>
		</div>
  );
}

export default App;
