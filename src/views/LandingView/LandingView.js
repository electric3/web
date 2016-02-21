/* @flow */
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { increment, doubleAsync } from '../../redux/modules/counter'
import classes from './LandingView.scss'
import {Layout, Header, Content, Button, Menu, MenuItem, Card, CardTitle, CardText} from 'react-mdl'

// We can use Flow (http://flowtype.org/) to type our component's props
// and state. For convenience we've included both regular propTypes and
// Flow types, but if you want to try just using Flow you'll want to
// disable the eslint rule `react/prop-types`.
// NOTE: You can run `npm run flow:check` to check for any errors in your
// code, or `npm i -g flow-bin` to have access to the binary globally.
// Sorry Windows users :(.
type Props = {
  counter: number,
  doubleAsync: Function,
  increment: Function
};

// We avoid using the `@connect` decorator on the class definition so
// that we can export the undecorated component for testing.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
export class LandingView extends React.Component<void, Props, void> {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    doubleAsync: PropTypes.func.isRequired,
    increment: PropTypes.func.isRequired
  };

  render () {
    return (
      <div>
        <Layout style={{background: 'url(http://imagizer.imageshack.us/a/img922/9340/GCN36q.jpg) top / cover'}}>
          <Header transparent title="ProjectTrack" style={{color: 'white'}}>
            <div style={{position: 'relative'}}>
              <Button raised colored id="demo-menu-lower-left">Log in</Button>
              <Menu target="demo-menu-lower-left" align="right">
                <MenuItem>Log in as CEO</MenuItem>
                <MenuItem>Log in as PM</MenuItem>
                <MenuItem>Log in as assignee</MenuItem>
              </Menu>
            </div>
          </Header>
          <Content>
            <div className={classes['pt-landing_cards-wrapper']}>
              <Card shadow={1} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>
                  Create
                </CardTitle>
                <CardText>
                    Create your awesome project.
                </CardText>
              </Card>
              <Card shadow={1} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>
                  Configure
                </CardTitle>
                <CardText>
                    Add team members, release dates.
                </CardText>
              </Card>
              <Card shadow={1} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>
                  Track
                </CardTitle>
                <CardText>
                  Track progress!
                </CardText>
              </Card>
            </div>
          </Content>
          <Content style={{background: '#FFF'}}>
            <div className={classes['pt-landing_button-wrapper']}>
              <Button raised accent id="demo-menu-lower-left">Start now</Button>
            </div>
          </Content>
          <Content>
            <div className={classes['pt-landing_footer']}>
              Developed by electric3
            </div>
          </Content>
        </Layout>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter
})
export default connect((mapStateToProps), {
  increment: () => increment(1),
  doubleAsync
})(LandingView)
