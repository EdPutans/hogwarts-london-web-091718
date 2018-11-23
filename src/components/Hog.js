import React from 'react'
import { Card, Image, Label } from 'semantic-ui-react'
import API from './Api';

export default class Hog extends React.Component {

    constructor() {
        super()
        this.state = {
            visibility: false
        }
    }

    handleClick(){
        this.setState({
            visibility: !this.state.visibility
        })
    }

    //  getRandomInt() {
    //     return Math.floor(Math.random() * Math.floor(19));
    //   }

    // getPic () {
    //     let num = this.getRandomInt()
    //     return API.getImages().then(resp => resp.results[num].url)
    // }

    componentDidMount() {
        API.getRandomGif()
            .then(imgUrl => this.setState({ imgUrl }))

    }

    render() {
        return(
            <div>
                <Card onClick={() =>  this.handleClick()}>
                    <Image src={this.state.imgUrl}/>
                    <Card.Content>
                        <Card.Header>{this.props.hog.name}</Card.Header>
                        {this.state.visibility
                        ? (<div>
                            <Label color="blue"><Card.Meta >{this.props.hog.weight}</Card.Meta></Label>
                            <Label color="yellow"><Card.Meta >{this.props.hog.medal}</Card.Meta></Label>
                            <Card.Description >{this.props.hog.specialty}</Card.Description>
                        </div>)
                        : ""
                        }
                    </Card.Content>
                </Card>
            </div>
        )
    }
}