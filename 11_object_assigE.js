
const sbiBank = {
    bankName: "SBI Bank",
    location: "Pandharpur",
    accountNo: 766002002,
    ifsc: "SBIN9763456",
    interestRate: "4.55%",
    showDetails: function(){
      console.log(`Bank Details: Bank name: ${this.bankName}, Location: ${this.location}, Account No: ${this.accountNo}, IFSC Code: ${this.ifsc}, Interest Rate: ${this.interestRate}`);
    }
  };
  

  const axisBank = {
    bankName: "AXIS Bank",
    location: "Manglwedh",
    accountNo: 786745005,
    ifsc: "UTIB98008764",
    interestRate: "7.90%",showDetails: function(){
      console.log(`Bank Details: Bank name: ${this.bankName}, Location: ${this.location}, Account No: ${this.accountNo}, IFSC Code: ${this.ifsc}, Interest Rate: ${this.interestRate}`);
    }
  
  };
  
  const hdfcBank = {
    bankName: "HDFC Bank",
    location: "solapur",
    accountNo: 498345662,
    ifsc: "HDFC00055777803",
    interestRate: "8.00%",
    showDetails: function(){
      console.log(`Bank Details: Bank name: ${this.bankName}, Location: ${this.location}, Account No: ${this.accountNo}, IFSC Code: ${this.ifsc}, Interest Rate: ${this.interestRate}`);
    }
  };
  
  const yesBank = {
    bankName: "YES Bank",
    location: "pune",
    accountNo: 4000455462,
    ifsc: "YESB056876500",
    interestRate: "5.60%",
    showDetails: function(){
      console.log(`Bank Details: Bank name: ${this.bankName}, Location: ${this.location}, Account No: ${this.accountNo}, IFSC Code: ${this.ifsc}, Interest Rate: ${this.interestRate}`);
    }
  };
  
  sbiBank.showDetails();
  axisBank.showDetails();
  hdfcBank.showDetails();
  yesBank.showDetails();