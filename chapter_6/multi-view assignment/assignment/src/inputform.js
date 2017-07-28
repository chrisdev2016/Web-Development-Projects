import React from 'react';



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

export default InputForm