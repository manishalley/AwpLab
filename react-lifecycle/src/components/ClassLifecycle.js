import React, { Component } from 'react';

class ClassLifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('🟡 Constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('🟠 getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log('🟢 componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('🔵 shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('🟣 getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('🟤 componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('🔴 componentWillUnmount');
  }

  render() {
    console.log('🧱 Render');
    return (
      <div>
        <h3>Class Component</h3>
        <p class='man'>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Update Count
        </button>
      </div>
    );
  }
}

export default ClassLifecycle;
