
var imageArray = [
	'http://imgur.com/9itd49u.png',
	'http://imgur.com/n19BXfZ.png',
	'http://imgur.com/VBwQmzA.png',
	'http://imgur.com/nawDxVv.png']




class App extends React.Component {
	constructor() {
		super();
		this.state = {
			index: 0
		}
		this.functionChangeImage = this.functionChangeImage.bind(this);

	}


	functionChangeImage(direction) {
		this.setState({
			index: this.state.index + direction
		})


	}


	render() {
		return (
			<div>
				<h1>Calvin Carousel</h1>
				<ImageComponents index={this.state.index} />
				<ButtonDivision index={this.state.index}
					arrayLength={imageArray.length}
					functionChangeImage={this.functionChangeImage}
				/>
			</div>
		)
	}
}


class ImageComponents extends React.Component {


	render() {
		var hide = {
			display: 'none'
		}

		var show = {
			display: 'block'
		}

		const imageArrayJSX = imageArray.map((item, i) => {
			return <img src={item} style={i === this.props.index ? show : hide} />
		})

		return (
			<div>
				{imageArrayJSX}
			</div>
		)

	}
}





class ButtonDivision extends React.Component {
	render() {
		return (
			<div>
				<button onClick={() => { this.props.functionChangeImage(-1) }} disabled={this.props.index === 0}>Previous</button>
				<span>{this.props.index + 1} of {this.props.arrayLength}</span>
				<button onClick={() => { this.props.functionChangeImage(1) }} disabled={this.props.index === this.props.arrayLength - 1}>Next</button>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));