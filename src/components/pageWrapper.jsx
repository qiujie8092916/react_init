import React from 'react';
// import ReactDOM from 'react-dom';
import styled from 'styled-components';
import First from '../tabbar/first';
import Second from '../tabbar/second';
import Third from '../tabbar/third';
import Fourth from '../tabbar/fourth';
import { TabBar } from 'antd-mobile';

const pageWrapper = WrappedComponent => {
  // ...and returns another component...
  class PageWrapper extends React.Component {
    static defaultProps = {};

    constructor(props) {
      super(props);
      this.state = {
        selectedTab: 'redTab',
        hidden: false,
        fullScreen: false
      };
    }

    render() {
      return (
        /* ReactDOM.createPortal */ <>
          <WrappedComponent className="page-wrapper" {...this.props} />
          <TabBar
            // prefixCls="am-tab-bar __c"
            unselectedTintColor="#949494"
            prerenderingSiblingsNumber={0}
            tintColor="#33A3F4"
            barTintColor="white"
            hidden={this.state.hidden}
          >
            <TabBar.Item
              title="Life"
              key="Life"
              icon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background:
                      'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background:
                      'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                  }}
                />
              }
              selected={this.state.selectedTab === 'blueTab'}
              badge={1}
              onPress={() => {
                this.setState({
                  selectedTab: 'blueTab'
                });
              }}
              data-seed="logId"
            >
              <div style={{ height: '100%' }}>
                <First />
              </div>
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background:
                      'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background:
                      'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
                  }}
                />
              }
              title="Koubei"
              key="Koubei"
              badge={'new'}
              selected={this.state.selectedTab === 'redTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'redTab'
                });
              }}
              data-seed="logId1"
            >
              <Second />
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background:
                      'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background:
                      'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
                  }}
                />
              }
              title="Friend"
              key="Friend"
              dot
              selected={this.state.selectedTab === 'greenTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'greenTab'
                });
              }}
            >
              <Third />
            </TabBar.Item>
            <TabBar.Item
              icon={{
                uri:
                  'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg'
              }}
              selectedIcon={{
                uri:
                  'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg'
              }}
              title="My"
              key="my"
              selected={this.state.selectedTab === 'yellowTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'yellowTab'
                });
              }}
            >
              <Fourth />
            </TabBar.Item>
          </TabBar>
        </>
      );
    }
  }

  return styled(PageWrapper)`
    .am-tabs-tab-bar-wrap {
      position: fixed;
      bottom: 0;
      left: 0;
    }
  `;
};
// document.getElementsByTagName('body')[0]

export default component => {
  return pageWrapper(component);
};
