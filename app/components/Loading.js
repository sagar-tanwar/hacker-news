import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  content: {
    fontSize: '2rem',
    textAlign: 'center',

  }
}

export default class Loading extends React.Component {

  state = {
    text: this.props.text
  }

  static propTypes = {
    text: PropTypes.string.isRequired,
    interval: PropTypes.number.isRequired
  }

  static defaultProps = {
    text: 'Loading',
    interval: 300
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      if(this.state.text === this.props.text + '...') {
        this.setState({text: this.props.text})
      }

      this.setState(({text}) => ({text: text + '.'}))

    }, this.props.interval)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return <div style={styles.content}>{this.state.text}</div>
  }

}