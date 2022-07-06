import React,{Component} from 'react';
class Welcome extends Component{
    render(){
        return <h2>Papaya {this.props.name} a.k.a {this.props.heroname}</h2>
    }
}
export default Welcome;