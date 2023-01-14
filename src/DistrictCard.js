import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import DistCases from './DistCases'
import {connect} from 'react-redux'

class DistrictCard extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            StateCode: null,
            covid:this.props.covidProps,
            District :[]
        }
    }
    getData(){
        setTimeout(() => {
            this.setState({StateCode:this.props.location.pathname.slice(1)})
            this.setState({District : Object.keys(this.state.covid[this.state.StateCode].districts)})
            
        }, 500)
      }
    componentWillMount(){
        this.getData();
    }
    render(){
        return(
            <>
            <div className="title">
                <h1>{this.state.StateCode}</h1>
            </div>
            <div className="cards row padding fh">
                
                {this.state.District.map(distname =>(
                <div className='col-md-4 padding'>
                    <Card>
                        <Card.Body>
                            <Card.Title>{distname}</Card.Title>
                                <Card.Text>
                                    <DistCases stsname={this.state.StateCode} dist={distname}/>
                                </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            )

            )}
            </div>  
            </> 
        )
    }
}
const mapStateToProps = state => {
    return {
        covidProps : state.covid
    } ;
}
export default connect(mapStateToProps)(DistrictCard)