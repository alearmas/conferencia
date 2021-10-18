let ticketPrice = 200;
let discount = 0;
let total = 0;

function calculateDiscount() {
  let amount = document.getElementById("amount").value;
  let attendee = document.getElementById("grid").value;
  switch (attendee) {
    case "student":
      discount = ticketPrice - ticketPrice * 0.8;
      total = discount * amount;
      document.getElementById("price").innerHTML = total;
      break;
    case "trainee":
      discount = ticketPrice - ticketPrice * 0.5;
      total = discount * amount;
      document.getElementById("price").innerHTML = total;
      break;
    case "junior":
      discount = ticketPrice - ticketPrice * 0.15;
      total = discount * amount;
      document.getElementById("price").innerHTML = total;
      break;
    default:
      break;
  }
}
