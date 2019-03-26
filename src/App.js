import React from 'react';
import PageWrapper from './components/pageWrapper';
import './App.css';

@PageWrapper
class App extends React.Component {
  static defaultProps = {};
  constructor(props) {
    super(props);
    this.state = {
      data: 0
    };
  }

  async componentWillMount() {
    await this.initData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.data !== this.state.data) {
      this.updateData();
    }
  }

  initData() {
    return new Promise(resolve => {
      setTimeout(() => {
        this.setState((state, props) => {
          return {
            data: state.data + 1
          };
        }, resolve);
      }, 3000);
    });
  }

  updateData() {
    setTimeout(() => {
      this.setState((state, props) => {
        return {
          data: state.data + 1
        };
      });
    }, 1000);
  }

  render() {
    return null;
  }
}

export default App;