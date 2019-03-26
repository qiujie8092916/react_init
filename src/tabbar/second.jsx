import React from 'react';
import styled from 'styled-components';

class Second extends React.Component {
  state = {
    data: 'Second Page!'
  };
  render() {
    return <div className="second-page">{this.state.data}</div>;
  }
}
export default styled(Second)`
  background-color: blue;
`;
