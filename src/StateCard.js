import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './style.css'
import TotalCase from './TotalCase'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
class StateCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            State:[],
            covidData : props.covidProps
        }   
    }
    getData(){
        setTimeout(() => {
            this.setState({State : Object.keys(this.state.covidData)})
        },500)
    }
    componentWillMount(){
        this.getData()
    }
    render(){
        return(
        <div>
            <div className="title">
                <h1>Covid' 19</h1>
                <p>Noval Corona Virus 2020</p>
            </div>
            <div className="cards col-md-12">
                <div className="row padding">
                    {Object.keys(this.props.covidProps).map(  statename =>  ( 
                        <div className="col-md-4 padding">
                            <Card>
                                <Card.Body>
                                <Card.Title>{statename}</Card.Title>
                                    <Card.Text>
                                        <TotalCase sname={statename}/>
                                    </Card.Text>
                                    <Link to={{pathname:`/${statename}` , statevalue : {statename}}}>
                                        <Button variant="primary">More Info</Button>
                                    </Link>
                                </Card.Body>
                            </Card>   
                        </div>     
                        ) 
                        )
                    }   
                </div>
            </div>
        </div>
        )
    } 
}
const mapStateToProps = state => {
    return {
        covidProps : state.covid
    } ;
}
export default connect(mapStateToProps)(StateCard);
