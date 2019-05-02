import React from 'react';
import axios from 'axios';
import ChatList from './ChatList'




class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: []
    }
  }


  async componentDidMount() {

    setInterval(async () => {
      const {data} = await axios.get('/api')
      this.setState({
        messages: data
    });
    }, 2000)
  }

  render() {
    return (
      <div className="App">
        <h1>Meet Swampletics,</h1>
        <ChatList messages={this.state.messages}/>
      </div>
    );
  }
}



export default App;
