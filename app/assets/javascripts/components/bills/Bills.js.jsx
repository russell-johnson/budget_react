class bills extends React.Component  {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className='row'>
          <div className= 'col s12 green darken-5'>
            <form user money>
          </div>

          <div className = 'container'>
            forms and table for bill pay
            <div className = 'forms for bills in  rows' >
              
              <div className = 'row'>
                <div className = 'bill price and name'>
                here goes the form for a bill, and stuff (dont forget buttons for edit and delete)
                </div>
              </div>

              <div className = 'row'>
                <button onClick = 'submit' className ='btn blue'>Total</button>
                <button onClick = 'create' className = 'btn green'>New Bill</button>
              </div>
            
            </div>

            <div className = 'col s12 blue darken-5'>
              in here goes the call for the math between the user money and the bill total
            </div>
          </div>

      </div>
    );
  }

}
