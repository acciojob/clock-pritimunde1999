//your JS code here. If required.

function timer(){
	const timerEle = document.getElementById("timer");
	const now = new Date();

	//date format in MM/DD/YYYY
	const month = (now.getMonth()+1).toString().padStart(2,"0");
	// above we use +1 bcoz in js month count start from 0 ie jan=0
	//convert to string bcoz pad start wont work on numeric values
	// use padstart bcz want to get 2 digit values in case of months 
	//ie if 2/3/2023 ===> 02/03/2023

	const day = now.getDate().toString().padStart(2,"0");
	const year = now.getFullYear();

	//timer formate HH:MM:SS AM/PM
	const hour = now.getHours().toString().padStart(2,"0");
	const minutes = now.getMinutes().toString().padStart(2,"0");
	const seconds = now.getSeconds().toString().padStart(2,"0");
	const ampm = hour>=12 ? "PM" : "AM";

	const date = `${month}/${day}/${year}`;
	const time = `${hour}:${minutes}:${seconds} ${ampm}`;

	timerEle.textContent = `${date}, ${time}`;  
}

timer();

setInterval(timer,1000);
