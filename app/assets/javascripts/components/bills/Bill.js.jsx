class Bill extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <p>{`name: ${this.props.name} amount: $${this.props.amount}`}</p>
      </div>
    )
  }
}