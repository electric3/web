/* @flow */
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { increment, doubleAsync } from '../../redux/modules/counter'
import classes from './DashboardView.scss'
import {Layout, Header, Content, Button, Menu, MenuItem, Card, CardTitle, CardText, IconButton, List, ListItem, ListItemAction, ListItemContent, ProgressBar} from 'react-mdl'
import {Chart} from 'react-google-charts'

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
  increment: Function,
  goToLanding: Function
};

  let options = {
          title: 'My Daily Activities',
          pieHole: 0.4
        }

  let data = [
        ['Task', 'Hours per Day'],
        ['Work',     11],
        ['Eat',      2],
        ['Commute',  2],
        ['Watch TV', 2],
        ['Sleep',    7]
      ]


// We avoid using the `@connect` decorator on the class definition so
// that we can export the undecorated component for testing.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
export class DashboardView extends React.Component<void, Props, void> {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    doubleAsync: PropTypes.func.isRequired,
    increment: PropTypes.func.isRequired,
    goToLanding: PropTypes.func.isRequired
  };

  goToLanding (e) {
    
  }

  render () {
    return (
      <div>
        <Layout fixedHeader>
          <Header title="ProjectTrack" style={{color: 'white'}} scroll>
            <div style={{position: 'relative'}}>
              <IconButton name="more_vert" id="demo-menu-lower-right"/>
              <Menu target="demo-menu-lower-right" align="right">
                <MenuItem onClick={this.props.goToLanding}>Log out</MenuItem>
              </Menu>
            </div>
          </Header>
          <Content>
          <div className={classes['pt-landing_cards-wrapper']}>
              <Card shadow={1} style={{width: '470px', height: '420px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff'}}>
                  Create
                </CardTitle>
                <CardText>
                    {/*<Content>
            <Chart chartType="PieChart" data={this.state.data} options={this.state.options}  width={"100%"} height={"300px"} graph_id="PieChart_graph"  />
          </Content>*/}
                </CardText>
              </Card>
              <Card shadow={1} style={{width: '470px', height: '420px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff'}}>
                  Configure
                </CardTitle>
                <CardText>
                  <List style={{position: 'absolute', top: 0, right: 0}}>
                    <ListItem>Update 1</ListItem>
                    <ListItem>Update 2</ListItem>
                    <ListItem>Update 3</ListItem>
                  </List>
                </CardText>
              </Card>
            </div>
          </Content>
          <Content>
            <List style={{width: '100%'}}>
              <ListItem threeLine className={classes['pt-dashboard_progress-wrapper']}>
                <ListItemContent subtitle="Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing Hal in Malcom in the Middle.">Department 1</ListItemContent>
                <ProgressBar className={classes['pt-dashboard_progress']} progress={44} />
                <ListItemAction>
                  <Button raised id="demo-menu-lower-left">Add project</Button>
                </ListItemAction>
              </ListItem>
              <ListItem threeLine className={classes['pt-dashboard_progress-wrapper']}>
                <ListItemContent subtitle="Aaron Paul played the role of Jesse in Breaking Bad. He also featured in the Need For Speed Movie.">Department 1</ListItemContent>
                <ProgressBar className={classes['pt-dashboard_progress']} progress={44} />
                <ListItemAction>
                  <Button raised id="demo-menu-lower-left">Add project</Button>
                </ListItemAction>
              </ListItem>
              <ListItem threeLine className={classes['pt-dashboard_progress-wrapper']}>
                <ListItemContent subtitle="Bob Odinkrik played the role of Saul in Breaking Bad. Due to public fondness for the character, Bob stars in his own show now, called Better Call Saul.">Department 1</ListItemContent>
                <ProgressBar className={classes['pt-dashboard_progress']} progress={44} />
                <ListItemAction>
                  <Button raised id="demo-menu-lower-left">Add project</Button>
                </ListItemAction>
              </ListItem>
            </List>
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
})(DashboardView)
