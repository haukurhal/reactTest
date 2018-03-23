import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import firebase from 'firebase';

const config = {
	apiKey: "AIzaSyBFFuIs0GhM7EiI2fn7_TERoZ6sL4P0xVk",
	authDomain: "todolist-135e8.firebaseapp.com",
	databaseURL: "https://todolist-135e8.firebaseio.com",
	projectId: "todolist-135e8",
	storageBucket: "todolist-135e8.appspot.com",
	messagingSenderId: "109120617681"
};

firebase.initializeApp(config);

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Not useless.',
			subtitle: '... is it?',

			menuItems: [
				{
					title: 'Val 1',
					color: 'bg-success'
				},
				{
					title: 'Val 2',
					color: 'bg-danger'
				},
				{
					title: 'Val 3',
					color: 'bg-info'
				},
			],
		}
	}

	onClick = () => {
		firebase.database().ref().child('games').push({test: 'hehe', tala: 1});
	}

	render() {
		// Used variables from state:

		return  (

				<div>
					<div className="row">
					{	
						this.state.menuItems.map(item => {


							return (
								<div key={ item.title } className={ item.color + " col-sm text-white text-center align-middle " }>
									{ item.title }
								</div>
							)

						})

					}
				</div>
				<button onClick={ () => this.onClick() }></button>
			</div>

		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);