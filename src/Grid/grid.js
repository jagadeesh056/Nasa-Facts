import React from 'react';
import GridItem from './gridItem'
import styles from './grid.module.css'
import mediaStyles from './Media.module.css';
import cx from 'classnames';

export default class App extends React.Component {
  updateClicked(id) {
    this.props.updateClicked(id)
  }
  getItems() {
    return this.props.facts.map(item => 
      <GridItem key={item.id} facts={item} updateClicked={this.updateClicked.bind(this)} />
    )
  }
  render() {
    return (
      <div>
        <section className={cx(styles.grid, mediaStyles.grid)}>{this.getItems()}</section>
      </div>
    );
  }
}
