import React from 'react';
import styled from 'styled-components';

class First extends React.Component {
  state = {
    data: 'First Page!'
  };
  render() {
    return <div className="first-page">{this.state.data}</div>;
  }
}
export default styled(First)`
  background-color: red;
`;
