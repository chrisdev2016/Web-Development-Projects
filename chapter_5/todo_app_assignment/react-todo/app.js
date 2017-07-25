




var todos = [
	{ text: 'learn angular', done: false, id: 1 },
	{ text: 'write the content for the next module', done: false, id: 2 },
	{ text: 'buy cheese', done: true, id: 3 },
	{ text: 'buy milk', done: true, id: 4 }
]




class App extends React.Component {
	constructor(props) {
		super();
		this.state = {

			tasks: props.tasks,
			checkBoxState: false,
			selectvalue: 'all'
		}


		this.onSubmithandler = this.onSubmithandler.bind(this)
		this.onCheck = this.onCheck.bind(this)
		this.onSelect = this.onSelect.bind(this)
		this.onClear = this.onClear.bind(this)


	}



	onSubmithandler(e) {

		e.preventDefault();

		var input = e.target.querySelector('input');
		var inputValue = input.value
	
		input.value = " "
		var newObject = {};
		newObject['text'] = inputValue;
		newObject['done'] = false;
		newObject['id'] = this.state.tasks.length + 1




		var updatedtasks = this.state.tasks;
		console.log(updatedtasks)
		console.log(newObject)
		updatedtasks.push(newObject);

		this.setState({
			tasks: updatedtasks
		})

	}

// clear button function 
	onClear() {
		let todos = this.state.tasks
		var newArray = []
		for (var i = 0; i < todos.length; i++) {

			if (!todos[i].done) {
				newArray.push(todos[i])
			}
		}
		this.setState({
			tasks: newArray
		})
	}



// check button function
	onCheck(e) {
		let id = e.target.value
		console.log(id)
		var newTodos = this.state.tasks.map(function (item) {
			return {
				text: item.text,
				done: (item.id == id ? !item.done : item.done),
				id: item.id
			}
		})
		console.log(newTodos)
		this.setState({
			tasks: newTodos
		})

	}
// select option change
	onSelect(e) {


		this.setState({
			selectvalue: e.target.value
		})

	}

	render() {


		return (
			<div className="container">
				<h1 className="text-center">My TODO List</h1>
				<InputForm submit={this.onSubmithandler} />
				<TodoList tasks={this.state.tasks} onCheck={this.onCheck} status={this.state.checkBoxState} selectvalue={this.state.selectvalue} />
				<Select selectvalue={this.state.selectvalue} onSelect={this.onSelect} />
				<ClearButton onClick={this.onClear} />
			</div>
		)
	}
}

class InputForm extends React.Component {
	render() {
		return (

			<form onSubmit={this.props.submit}>
				<div className='input-group'>
					<span className='input-group-btn'>
						<button className='btn btn-primary' type="submit">  add </button>
					</span>
					<input className='form-control' name='input' type='text' />
				</div>
			</form>


		)


	}
}

class TodoList extends React.Component {

	render() {

		// if selected option is active
		var selectedOption = this.props.selectvalue
		if (selectedOption === 'active') {

			var tasks = this.props.tasks
			var filtered = tasks.filter(function (task) {
				return !task.done
			}
			)

			var items = filtered.map((item, i) => {



				return <li className={"list-group-item"} key={i} >
					<input type='checkbox' checked={item.done} value={item.id} onChange={(e) => this.props.onCheck(e)} />
					<span className={item.done ? "done" : ""}>
						{item.text}
					</span>
				</li>

			});


		}
		// if option is complete
		if (selectedOption === 'complete') {

			var tasks = this.props.tasks
			var filtered = tasks.filter(function (task) {
				return task.done
			}
			)

			var items = filtered.map((item, i) => {



				return <li className="list-group-item" key={i} >
					<input type='checkbox' checked={item.done} value={item.id} onChange={(e) => this.props.onCheck(e)} />
					<span className={item.done ? "done" : ""}>
						{item.text}
					</span>
				</li>

			});



		}

		// if option selected is 'all'


		if (selectedOption === 'all') {

			var tasks = this.props.tasks

			var items = tasks.map((item, i) => {

				return <li className="list-group-item" key={i} >
					<input type='checkbox' checked={item.done} value={item.id} onChange={(e) => this.props.onCheck(e)} />
					<span className={item.done ? "done" : ""}>
						{item.text}
					</span>
				</li>

			});



		}



		return (
			<ul className='list-group'>
				{items}
			</ul>
		);



	}
}


class Select extends React.Component {
	render() {
		return (
			<select value={this.props.selectvalue} onChange={this.props.onSelect}>
				<option value="all">all</option>
				<option value="active">active</option>
				<option value="complete">complete</option>
			</select>

		)
	}

}



class ClearButton extends React.Component {
	render() {
		return (
			<button className="pull-right btn btn-default" onClick={this.props.onClick}>ClearButton</button>
		)

	}
}
ReactDOM.render(<App tasks={todos} />, document.getElementById('app'));

