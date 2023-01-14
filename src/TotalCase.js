import React from 'react'
import {connect} from 'react-redux'
 
class TotalCase extends React.Component{
    
    render(){
       
        const stateData = this.props.covidProps[this.props.sname || 0]?.total

        return(
            <div className="total">
                <p className="text-info">Tested Cases : {stateData?.tested || 0}</p>
                <p className="text-primary">Total Cases : {stateData.confirmed + stateData.confirmed + stateData.confirmed || 0}</p>    
                <p className="text-danger">Total Death : {stateData?.deceased || 0 }</p>
                <p className="text-success">Recovered : {stateData?.recovered || 0}</p>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        covidProps : state.covid
    } ;
}
export default connect(mapStateToProps)(TotalCase)