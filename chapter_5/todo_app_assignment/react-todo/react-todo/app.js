




const todo = [
	{ text: 'learn angular', done: false, id: 1 },
	{ text: 'write the content for the next module', done: false, id: 2 },
	{ text: 'buy cheese', done: true, id: 3 },
	{ text: 'buy milk', done: true, id: 4 }
]






class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ' ',
			selectValue: 'all'
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleSelectChange = this.handleSelectChange.bind(this);
		this.handleSelectSubmit = this.handleSelectSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}
	handleSubmit(event) {
	
		event.preventDefault();

	}

	handleSelectChange(event) {
		this.setState({ selectValue: event.target.selectValue });
	}
	handleSelectSubmit(event) {
		alert("the option you selected is:" + this.state.selectValue)
		event.preventDefault();
	}

	

	render() {
		return (
			<div>
			<InputForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} value={this.state.value} />
			<Select  selectValue={this.state.selectValue}  handleSelectChange={this.handleSelectChange}/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));


/*
class List extends React.Component {
	render(
	) {
		let listJSX =[]

		for (var i = 0; i < this.props.todo.length ; i++) {
		
		let liJSX	=(<li className="list-group-item">
				<input type="checkbox" checked={this.props.todo[i].done} />
				 {this.props.todo[i].text}
			</li>);

			listJSX.push(liJSX)
		}
		console.log(listJSX)
		console.log(this.props.todo)
		return (
			<ul className="list-group">
				{listJSX}
			</ul>
		
		)
	}
}
*/

class InputForm extends React.Component {
	render() {
		return (

			<div>
				<h1>my todo list</h1>
				<form onSubmit={this.props.handleSubmit(event)}>
					<input type="text" onChange={this.props.handleChange(event)} value={this.props.value} />
					<input type="submit" value="add" />
				</form>
			</div>


		);
	}
}

 class Select extends React.Component {
	render() {
		return (
			<form >
				<select value={this.props.selectValue} onChange={this.props.handleSelectChange(event)}>
					<option value="all" >all</option>
					<option value="active">active</option>
					<option value="complete">complete</option>
				</select>
			</form>
		);
	}
}





