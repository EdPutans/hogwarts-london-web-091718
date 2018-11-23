import React from 'react'
import Hog from './Hog'
import { Grid } from 'semantic-ui-react'

export default class Hoglist extends React.Component {
    render(){
        return(
            <div>
                <Grid padded="vertically">
                {this.props.hogs.map(hog => <Hog key={hog.name} hog={hog} />)}
                </Grid>
            </div>
        )
    }
}