import React from 'react';
import Card from './Card';
import axios from 'axios'


class List extends React.Component{
    state ={
        data:[],
    }

    componentDidMount(){
        this.fetchContact();
        console.log('didmount');
        
    }

    componentDidUpdate(){
        this.fetchContact();
    }

    componentWillUnmount(){
        console.log('демонтирование');
        
    }

    fetchContact = async () => {
        
        const { data } = await axios.get('http://localhost:8000/todos')
        if(JSON.stringify(this.state) === JSON.stringify({ data })) return;
        this.setState({ data })
    }

    
    

  

    render(){
        return(
            <>
                <ul>
                    {this.state.data.map((contact) => (
                        <Card 
                            key = {contact.id}
                            contact = {contact}
                            onOpenModal = {() => this.props.onOpenModal(contact)}
                        />
                    ))}
                </ul>
            </>
        )
    }
}

export default List;