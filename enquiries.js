document.getElementById('enquiryForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form inputs
    var nameInput = document.getElementById('name');
    var numberInput = document.getElementById('number');
    var emailInput = document.getElementById('email');
    var enquiryInput = document.getElementById('enquiry');
  
    // Validate inputs
    if (!nameInput.checkValidity()) {
      alert('Please enter a valid name.');
      nameInput.focus();
      return;
    }
  
    if (!numberInput.checkValidity()) {
      alert('Please enter a valid number.');
      numberInput.focus();
      return;
    }
  
    if (!emailInput.checkValidity()) {
      alert('Please enter a valid email.');
      emailInput.focus();
      return;
    }
  
    if (!enquiryInput.checkValidity()) {
      alert('Please enter your enquiry.');
      enquiryInput.focus();
      return;
    }
  
    // Form is valid, submit or perform further actions
    messages.alert('Enquiry successful!');
    document.getElementById('enquiryForm').reset();
  });
  
  
  
  
  