let buttons = document.querySelector('.buttons');
let btn = document.querySelectorAll('span');
let value = document.getElementById('value');
let toggleBtn = document.querySelector('.toggleTheme');
let body = document.querySelector('body');
let readyAns = false;

for(let i = 0; i<btn.length; i++)
{
    btn[i].addEventListener("click", function()
    {
        if(this.innerHTML == "=")
        {
            value.innerHTML = eval(value.innerHTML);
            readyAns = true;
        }
        else{
            if(this.innerHTML == "Clear")
            {
                value.innerHTML = "";
            }
            else{
                if(readyAns)
                {
                    value.innerHTML = this.innerHTML;
                    readyAns = false;
                }
                else{
                    value.innerHTML += this.innerHTML;
                }

            }
        }
    });
}

toggleBtn.onclick = function()
{
    body.classList.toggle('light');
}