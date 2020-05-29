import React, {Component} from 'react'
import axios from 'axios'
import InputMask from 'react-input-mask'

class Modal extends Component {
    state = {
        currentContact: null,
        isEdit: false
    }

    componentDidMount(){
        const { currentContact } = this.props;
        this.setState({ currentContact });
    }

    componentDidUpdate(prevProps){
        if(JSON.stringify(prevProps) === JSON.stringify(this.props)) return;
        const { currentContact } = this.props;
        this.setState({ currentContact });
    }

    handleCloseModal = () =>{
        const { onCloseModal } = this.props;
        this.setState({ currentContact: null})
        onCloseModal();
    }

    handleDeleteContact = async () =>{
        const { currentContact } = this.state;
        const { onCloseModal } = this.props;
        await axios.delete(`http://localhost:8000/todos/${currentContact.id}`) 
        onCloseModal(); 
    }

    handleOpenEditModal = () =>{
        this.setState({ isEdit: true })
    }

    handleEditContact = (event, field) =>{
        const { currentContact } = this.state;
        const newContact = { ...currentContact };
        newContact[field] = event.target.value;
        this.setState({ currentContact: newContact})
    }

    handleSaveContact = async () =>{
        const { currentContact } =this.state;
        await axios.put(`http://localhost:8000/todos/${currentContact.id}`,currentContact);
        this.setState({isEdit : false})
       
    }

    render(){

        const { currentContact, isEdit } = this.state;

        return currentContact ? (
            <div className="modal">
                <div className="modal-window">
                    {isEdit ? (
                        <>
                            <input 
                                type="text" 
                                placeholder="First Name" 
                                value={currentContact.firstName}
                                onChange={(e) => this.handleEditContact(e,"firstName")}
                            />
                            <input 
                                type="text" 
                                placeholder="Last Name" 
                                value={currentContact.lastName}
                                onChange={(e) => this.handleEditContact(e,"lastName")}
                            />
                            <InputMask 
                                mask="+(999)-999-99-99-99"
                                type="text" 
                                placeholder="Phone Number" 
                                value={currentContact.phoneNumber}
                                onChange={(e) => this.handleEditContact(e,"phoneNumber")}>
                            </InputMask>
                            <button onClick={this.handleSaveContact}>Save</button>
                        </>
                    ) : (
                        <>
                            <h5>First Name: {currentContact.firstName}</h5>
                            <h5>Last Name: {currentContact.lastName}</h5>
                            <h5>Phone Number: {currentContact.phoneNumber}</h5>
                            <div className="btns">
                                <button onClick={this.handleOpenEditModal}>Edit</button>
                                <button onClick={this.handleDeleteContact}>Delete</button>
                                <button onClick={this.handleCloseModal}>Close</button>
                            </div>
                        </>
                    )}
                    
                </div>
            </div>
        ) : null;
    }
    
}

export default Modal;