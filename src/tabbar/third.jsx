import React from 'react';
import styled from 'styled-components';

class Third extends React.Component {
  state = {
    data: 'Third Page!'
  };
  render() {
    return <div className="third-page">{this.state.data}</div>;
  }
}
export default styled(Third)`
  background-color: green;
`;
