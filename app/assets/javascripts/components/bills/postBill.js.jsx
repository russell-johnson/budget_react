class PostBill extends React.Component {
  constructor(props) {
    super(props);
    this.postBill = this.postBill.bind(this);
  }

  postBill(){
    let name = this.refs.name;
    let amount = this.refs.amount;
    e.prevenDefault();
    $.ajax ({
      url: '/bills',
      type: 'POST',
      data: { bill: {name: name.value, amount: amount.value}},
      dataType: 'JSON'
    }).done(bill => {
      this.props.postBill(bill);
    }).fail(errrors => {
      console.log(errors);
    }).complete( () => {
      name.value = null;
      amount.value = null;
    });
  }

  render() {
    return() {
      <div className = 'col s12'>
        <p>A new bill<p>
        <form onSubmit = {this.postBill}>
          <p>Bill name</p>
          <input placeholder = "Name" ref = "name" required = {true} />
          <p>Bill Amount</p>
          <input placeholder = "Amount" ref = "amount" required = {true} />
          <br />
          <button className = 'btn'>Add bill</button>
        </form>
      </div>
    }
  }
}