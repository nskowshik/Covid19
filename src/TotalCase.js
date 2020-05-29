import React from 'react'
import {connect} from 'react-redux'
 
class TotalCase extends React.Component{
    render(){
        function totalcase(covid,stsname){
            var totalCases=0;
            for(var i in covid[stsname].districtData){
                totalCases += covid[stsname].districtData[i].confirmed;
            }
            return totalCases;
        }
        function totalactive(covid,stsname){
            var totalCases=0;
            for(var i in covid[stsname].districtData){
                totalCases += covid[stsname].districtData[i].active;
            }
            return totalCases;
        }function totaldeceased(covid,stsname){
            var totalCases=0;
            for(var i in covid[stsname].districtData){
                totalCases += covid[stsname].districtData[i].deceased;
            }
            return totalCases;
        }function totalrecovered(covid,stsname){
            var totalCases=0;
            for(var i in covid[stsname].districtData){
                totalCases += covid[stsname].districtData[i].recovered;
            }
            return totalCases;
        }
        return(
            <div className="total">
                <p className="text-primary">Total Cases : {totalcase(this.props.covidProps,this.props.sname)}</p>
                <p className="text-info">Active Cases : {totalactive(this.props.covidProps,this.props.sname)}</p>
                <p className="text-danger">Total Death : {totaldeceased(this.props.covidProps,this.props.sname)}</p>
                <p className="text-success">Recovered : {totalrecovered(this.props.covidProps,this.props.sname)}</p>
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