import React from 'react';


class Card extends React.Component{
    
    
    render(){

            const { onOpenModal, contact } = this.props;

        return(
            <li className='contact' onClick={ onOpenModal }>
                <h4>First Name: {contact.firstName}</h4>
                <h4>Last Name: {contact.lastName}</h4>
                <h4>Phone Number: {contact.phoneNumber}</h4>
            </li>
        );      
    }   
}

export default Card;