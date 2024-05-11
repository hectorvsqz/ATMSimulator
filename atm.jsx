// this keeps a running total of deposits and withdrawals

const ATMDeposit = ({ onChange, isDeposit, onSubmit }) => {
    return (
    <form onSubmit={onSubmit}>
      <label className="label huge">
      {isDeposit ? "Deposit:" : "Withdraw:"}
        
        <input type="number" onChange={onChange}></input>
        <button type="submit">{isDeposit ? "Deposit": "Withdraw"}</button>
      </label>
    </form>
    );
  };
  
  const Account = () => {
    const [accountState, setAccountState] = React.useState(0);
    const [deposit, setDeposit] = React.useState(0);
    const [isDeposit, setIsDeposit] = React.useState(true);

    const handleChange = event => {
        console.log(`handleChange ${event.target.value}`);
        setDeposit(Number(event.target.value));
    };
    const handleSubmit = event => {
        event.preventDefault();
        if (deposit && !isDeposit > accountState) {
            alert('Transaction not possible. Your Current Balance is 0.');
            return;
        }
        const cash = isDeposit ? accountState + deposit : accountState - deposit;
        setAccountState(cash);
        alert(`Your account balance is ${cash}`);

    };

    const depositOrWithdrawal =() => {
        setIsDeposit(!isDeposit);
    }

    return (
    <div>
      
        <h2>Account Balance {accountState}</h2>
        <button onClick={depositOrWithdrawal}>Click to {isDeposit ? "Withdraw" : "Deposit"}</button>
        <ATMDeposit onChange={handleChange} isDeposit={isDeposit} onSubmit={handleSubmit}> Deposit</ATMDeposit>
      
    </div>
    );
  };
  // ========================================
  ReactDOM.render(<Account />, document.getElementById("root"));