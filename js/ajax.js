// https://api.jquery.com/jQuery.ajax
$.ajax({
    method: 'POST',
    url: 'https://formsubmit.co/ajax/chhaviarora1401@gmail.com',
    dataType: 'json',
    accepts: 'application/json',
    data: {
        name: "FormSubmit",
        message: "I'm from Devro LABS"
    },
    success: (data) => console.log(data),
    error: (err) => console.log(err)
});