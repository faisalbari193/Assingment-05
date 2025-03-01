document.getElementById('next-page').addEventListener('click', function(){
    window.location.href = 'main.html';
})
document.getElementById('status-clean').addEventListener('click',function(){
    document.getElementById('status').style.display = 'none';
});

const buttons = document.querySelectorAll('.completed-btn');
for (let button of buttons) {
    button.addEventListener('click', function() {
        button.disabled = true;
        if (button.style.backgroundColor === "lightblue") {
            button.style.backgroundColor = "";
        } else {
            button.style.backgroundColor = "lightblue"; 
        }
        const statusShow = document.querySelectorAll('.status-show');
        const status = document.getElementById('status');
        const p = document.createElement('p');
        p.innerText = 'you have completed this task.';
        status.appendChild(p);
        function updateDate() {
            const dateElement = document.getElementById("dateElement");
            const today = new Date();
            const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            const month = monthNames[today.getMonth()]; 
            const day = today.getDate(); 
            const year = today.getFullYear(); 
        
            dateElement.innerText = `${month}:${day}:${year}`;
        }
        updateDate();
        const numberOneElement = document.getElementById('number-one');
        const numberOne = numberOneElement.innerText; 
        const convertedNumberOne = parseInt(numberOne);
        const numberTwoElement = document.getElementById('number-two');
        const numberTwo = numberTwoElement.innerText; 
        const convertedNumberTwo = parseInt(numberTwo);
        const sub = convertedNumberOne - 1;
        numberOneElement.innerText = sub;
        const sum = convertedNumberTwo + 1;
        numberTwoElement.innerText = sum;
        if (sub <= 0) {
            alert('Congratulations! You have completed the current task');
        } else {
            alert('Board Update Successfully');
        }
    });
}

const button = document.getElementById('color-btn');
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
button.addEventListener('click', function() {
  document.body.style.backgroundColor = getRandomColor();
});