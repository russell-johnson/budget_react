class Bills extends React.Component  {
  constructor(props) {
    super(props);
    this.addBill = this.addBill.bind(this);
    this.state = {bills: this.props.bills};

  }

  showForm() {
    return(
      <div className = 'col s12'>
        <p>A new bill</p>
        <form onSubmit={this.addBill}>
          <p>Bill name</p>
          <input placeholder = "Name" ref = "name" required = {true} />
          <p>Bill Amount</p>
          <input placeholder = "Amount" ref = "amount" required = {true} />
          <br />
          <button className = 'btn'>Add bill</button>
        </form>
      </div>
    )
  }

  addBill(e) {
    let name = this.refs.name;
    let amount = this.refs.amount;
    e.preventDefault();
    $.ajax ({
      url: '/bills',
      type: 'POST',
      data: { bill: {name: name.value, amount: amount.value}},
      dataType: 'JSON'
    }).done(data => {
      this.setState({bills: [data, ...this.state.bills]});
    }).fail(data => {
      console.log(data);
    }).complete( () => {
      name.value = null;
      amount.value = null;
    });   
  }

  deleteBill() {
    let id = this.props.id;
    $.ajax({
      url: `/bills/${id}`,
      type: 'DELETE',
    }).done({
      this.state.bills.findFilter
    })

  }
  
  render(){
    let bills = this.state.bills.map((bill) => {
     return(<Bill name = {bill.name} amount = {bill.amount} key = {`key-${bill.id}`}/> ); 

    })

    console.log(bills);
    return(


      <div className='row'>
          <div className= 'col s12 green darken-5'>
            <form className = 'userFund'>
              <input type='text' refs = 'userFund' required= {true} placeholder = 'Amount'/>
            </form>
          </div>
          <div className = 'container'>
            <div className = 'billContainer' >
              <h6>Bills</h6>
              <div className = 'row'>
                {bills}

              </div>
              {this.showForm()}
              <div className = 'row'>
                <button className ='btn blue'>Total</button>
                <button className = 'btn green'>New Bill</button>
              </div>
            </div>

            <div className = 'col s12 blue darken-5'>
              <p>in here goes the call for the math between the user money and the bill total</p>
            </div>
          </div>

      </div>
    );
  }

}
