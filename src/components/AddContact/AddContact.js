import React, {Component} from 'react';
import axios from 'axios'   
import InputMask from 'react-input-mask'

class AddContact extends Component{
    state ={
        firstName:'',
        lastName:'',
        phoneNumber:''
    }

    handleAdd = async () => {
        await axios.post('http://localhost:8000/todos',this.state)
        this.setState({ firstName:'', lastName:'',phoneNumber:'' })
        this.props.onUpdate();
    }

    handleChangeFirstName =(event) =>{
        this.setState({firstName: event.target.value})    
    }
    
    handleChangeLastName =(event) =>{
        this.setState({lastName: event.target.value})    
    }

    handleChangePhoneNumber =(event) =>{
        this.setState({phoneNumber: event.target.value})    
    }



    render(){
        return(
            <div className="add-task">
                <label>Имя</label>
                <input value={this.state.firstName} onChange={(e) => this.handleChangeFirstName(e)}></input>
                <label>Фамилия</label>
                <input value={this.state.lastName} onChange={(e) => this.handleChangeLastName(e)}></input>
                <label>Номер Телефона</label>
                <InputMask  mask="+(999)-999-99-99-99"  value={this.state.phoneNumber}  onChange={(e) => this.handleChangePhoneNumber(e)}></InputMask>
                <button onClick={this.handleAdd}>Add</button>
            </div>
        )
    }

}

export default AddContact;