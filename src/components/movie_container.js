import React, { Component } from "react";
import Movie from "./movie";
import axios from "axios";

class MovieContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: []
		};
	}
	componentWillMount() {
		const url = "http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json";
		axios.get(url).then(response => {
			this.setState({
				movies: response.data.feed.entry
			});
		});
	}
	render() {
		const movieList = this.state.movies.map((movieInfo, index) => {
			return <Movie info={movieInfo} key={index} />;
		});
		return (
			<div>
				<h2>Movie Container</h2>
				{movieList}
			</div>
		);
	}
}

export default MovieContainer;
