// //single selector

// // const form = document.getElementById('my-form')

// // console.log(document.querySelector('.container'))

// // multiple selector

// document.querySelectorAll('.item')


// const ul = document.querySelector('.items');

// ul.firstElementChild.remove()

// ul.firstElementChild.textContent = 'haris'
// ul.firstElementChild.innerText = 'haris'
// ul.lastElementChild.innerHTML = '<h1>Haris</h1>'

// ul.style.background = 'grey';

// const btn = document.querySelector('.btn')

// btn.addEventListener('click' , onclick)

// function onclick(e)
// {
//     e.preventDefault();
//     document.querySelector('.container').style.background = 'grey';
// }

const form = document.querySelector('#my-form');
const btn = document.querySelector('.btn');
const msg = document.querySelector('.msg');
const nameinput = document.querySelector('#name');
const emailinput = document.querySelector('#email');

form.addEventListener('submit', onSubmit)

function onSubmit(e)
{
    e.preventDefault();
    if(nameinput.value == '' || emailinput.value == '')
    {
        msg.innerHTML = 'error! enter all information'
        msg.style.color = 'red';
        setTimeout(() => msg.remove(), 3000)
    }
    else
    {
        msg.innerHTML = 'Success'
        msg.style.color = 'green';
        setTimeout(() => msg.remove(), 3000)

        const name = nameinput.value;
        const email = emailinput.value;

        const items = document.querySelectorAll('.item')
        items[1].textContent = 'Name = ' + name;
    }


}

