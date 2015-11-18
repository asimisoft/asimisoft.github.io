$(document).on("click", "#contact-us-button", function(e) {
  e.preventDefault();

  var from = $("#email-from").val();
  var text  = $("#email-content").val();
  var name = $("#email-name").val();

  console.log(from);
  console.log(text);
  console.log(name);

  // For more options in mandrill data check:
  // https://mandrillapp.com/api/docs/messages.JSON.html
  $.ajax({
    type: "POST",
    url: "https://mandrillapp.com/api/1.0/messages/send.json",
    data: {
      'key': 'PfYcvhvR9EbZXzqYVPHiRw',
      'message': {
        'from_email': from,
        'from_name': name,
        'to': [
          {
            'email': 'amazingrails@gmail',
            'name': 'Asimi soft Pvt. Ltd.',
            'type': 'to'
          }
        ],
        'subject': 'New submission from www.asimisoft.com',
        'text': text,
        'important': true,
        "metadata": {
          "website": "www.asimisoft.com"
        }
      }
    },
    success: function(data){
      alert("Thank you for contacting us. We will get back to you soon.");
    },
    error: function(xhr, status, err) {
      alert("Sorry! we are unable to process your email.")
    }
  });
});
