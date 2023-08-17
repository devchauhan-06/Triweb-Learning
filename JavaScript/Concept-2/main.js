let add=document.getElementById('add');
let sub=document.getElementById('sub');
let mul=document.getElementById('mul');
let divide=document.getElementById('divide');

        add.addEventListener('click', function()
        {
            let a=parseInt(document.getElementById('num1').value);
            let b=parseInt(document.getElementById('num2').value);
            let sum=a+b;
            document.getElementById('ans').innerHTML=sum;
        });

        sub.addEventListener('click', function()
        {
            let a=parseInt(document.getElementById('num1').value);
            let b=parseInt(document.getElementById('num2').value);
            let sub=a-b;
            document.getElementById('ans').innerHTML=sub;
        });

        mul.addEventListener('click', function()
        {
            let a=parseInt(document.getElementById('num1').value);
            let b=parseInt(document.getElementById('num2').value);
            let mul=a*b;
            document.getElementById('ans').innerHTML=mul;
        });

        divide.addEventListener('click', function()
        {
            let a=parseInt(document.getElementById('num1').value);
            let b=parseInt(document.getElementById('num2').value);
            let div=a/b;
            document.getElementById('ans').innerHTML=div;
        });