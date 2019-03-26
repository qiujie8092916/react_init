import React from 'react';
import styled from 'styled-components';

class Fourth extends React.Component {
  state = {
    data: 'Fourth Page!'
  };
  render() {
    return <div className="fourth-page">{this.state.data}</div>;
  }
}
export default styled(Fourth)`
  background-color: yellow;
`;
