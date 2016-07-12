import React from 'react';

class App extends React.Component {
    constructor(){
        super();
        this.state = {txt: 'this is the state txt'}
    }
    updateText(e){
        console.log(e.target.value, "bonbon element")
        this.setState({txt:e.target.value})
    }
    render(){
        return (
            <div>
            <input type="text"
            onChange={this.updateText.bind(this)} />
            <h1>{this.state.txt}</h1>
            </div>
            )
        // let txt = this.props.txt
        // let cat = this.props.cat
        //
        // return <div>
        //         <h1>{txt}</h1>
        //         <h2>{cat}</h2>
        //        </div>

    }
}

// //stateless function component
// const App = () => <h1>Hello</h1>
// App.propTypes={
//     txt:React.PropTypes.string,
//     cat: React.PropTypes.number.isRequired
// }

// App.defaultProps={
//     txt:'this is the default txt'
// }

// ReactDOM.render(
//     <App cat ={5}/>,
//     document.getElementById('app')
// );

export default App