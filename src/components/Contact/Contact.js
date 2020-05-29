import React from 'react';

import List from '../List/List';
import AddContact from '../AddContact/AddContact'
import Modal from '../Modal/Modal'


class Contact extends React.Component {
  state = {
    currentContact :null
  }  

  handleUpdate = () =>{
    this.forceUpdate();
  }

  handleOpenModal = (currentContact) =>{
    this.setState({currentContact})
  }

  handleCloseModal = () =>{
    this.setState({ currentContact: null});   
  }

  checkPage = (currentPage) => this.props.page === undefined || this.props.page === currentPage

  render() {

    const { currentContact } = this.state;

    return (
      <div className="contact-book">
        <Modal 
          currentContact = {currentContact}
          onCloseModal = {this.handleCloseModal}
        />
        {this.checkPage('ADD') && <AddContact onUpdate={this.handleUpdate}/>}
        {this.checkPage('LIST') && (<List onUpdate = {this.handleUpdate} onOpenModal = {this.handleOpenModal} />
        )}
      </div>
    );
  }

}


  

export default Contact;
