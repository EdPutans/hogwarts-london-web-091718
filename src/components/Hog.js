import React from 'react'
import hogs from './porkers_data'
import { Card, Menu, Image, Visibility } from 'semantic-ui-react'

export default class Hog extends React.Component{
    constructor() {
        super()
        this.state = {
        visibility: false
    }
}

    handleClick = () => {
        this.setState({ visibility: !this.state.visibility })
    }

    render(){
      return <div>
          <Card onClick = {this.handleClick}>
              <Image src='https://images.pexels.com/photos/110820/pexels-photo-110820.jpeg?auto=compress&cs=tinysrgb&h=350'></Image>
              <Card.Content>
                <Card.Header>{ this.props.hog.name }</Card.Header>
                {this.state.visibility ? (
                <div >
                    <Card.Meta>{this.props.hog.specialty}</Card.Meta>
                    <Card.Description></Card.Description>
                </div>
                ) : "" }
            </Card.Content>
        </Card >
      </div>
      
    }
}