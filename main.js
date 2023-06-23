const button =document.querySelector('#button');
const value1 =document.querySelector('#text');
const box =document.querySelector('#text-block');
const discriminant =document.querySelector('#discriminant');
const root1 =document.querySelector('#root1');
const root2 =document.querySelector('#root2');
const numbers =document.querySelector('#numbers');
const container =document.querySelector('#container');

button.onclick=function()
{
    box.innerText=value1.value
    let number=value1.value.match(/(-?\d+(\.\d+)?)/g).map(n => +n)
    let a=number[0]
    let b=number[2]
    let c=number[3]
    let p=number[1]
    let q=number[2]
    const newHeader =document.createElement('h3')
    container.append(newHeader)
    if(number[0]=2 && number[1]!=2)
    {
    newHeader.innerText='Вы ввели приведённое квадратное уравнение'
    numbers.innerHTML="p= "+p+" q= "+q
    let x1=(-p/2)+(Math.sqrt(((-p/2)*(-p/2))-q))
    let x2=(-p/2)-(Math.sqrt(((-p/2)*(-p/2))-q))
    root1.innerHTML='<table><tr><td align="center">x1= </td><td align="center">'+"-p"+'<hr color="black">'+' <td>+√ </td><td align="center">'+"-p²"+'<hr color="black">'+'</td><td>-q</td><td>'+"= "+'<td align="center">'+"-p"+'<hr color="black">'+' <td>+√ </td><td align="center">'+-p+"*"+-p+'<hr color="black">'+'</td><td>'+-q+'</td><td>'+"= "+x1+'</td></tr><tr><td></td><td align="center">'+"2"+'</td><td></td><td align="center">'+"2²"+'</td><td></td><td></td><td align="center">'+"2"+'</td><td></td><td align="center">'+"2²"+'</td></tr></table>'
    root2.innerHTML='<table><tr><td align="center">x2= </td><td align="center">'+"-p"+'<hr color="black">'+' <td>-√ </td><td align="center">'+"-p²"+'<hr color="black">'+'</td><td>-q</td><td>'+"= "+'<td align="center">'+"-p"+'<hr color="black">'+' <td>-√ </td><td align="center">'+-p+"*"+-p+'<hr color="black">'+'</td><td>'+-q+'</td><td>'+"= "+x2+'</td></tr><tr><td></td><td align="center">'+"2"+'</td><td></td><td align="center">'+"2²"+'</td><td></td><td></td><td align="center">'+"2"+'</td><td></td><td align="center">'+"2²"+'</td></tr></table>'
    }
    else 
    {
    newHeader.innerText='Вы ввели полное квадратное уравнение'
    numbers.innerHTML="a= "+a+" b= "+b+" c= "+c
    let D = b*b-4*a*c
    discriminant.innerHTML="D=b*b-4*a*c= "+b+"*"+b+"-"+4+"*"+a+"*"+c+"= "+D
    if(D==0)
    {
        let x1=(-b)/(2*a)
        root1.innerHTML='<table><tr><td align="center">x1= </td><td align="center">'+"-b"+'<hr color="black">'+' <td>= </td><td align="center">'+-b+'<hr color="black">'+'</td><td>'+"= "+x1+'</td></tr><tr><td></td><td align="center">'+"2*a"+'</td><td></td><td align="center">'+2+"*"+a+'</td></tr></table>'
    }
    else if(D<0)
    {
        root1.innerHTML="Корней нет"
    }
    else
    {
    let x1=(-b+(Math.sqrt(D)))/(2*a)
    let x2=(-b-(Math.sqrt(D)))/(2*a)
    root1.innerHTML='<table><tr><td align="center">x1= </td><td align="center">'+"-b+√D"+'<hr color="black">'+' <td>= </td><td align="center">'+-b+"+ "+"√"+D+'<hr color="black">'+'</td><td>'+"= "+x1+'</td></tr><tr><td></td><td align="center">'+"2*a"+'</td><td></td><td align="center">'+2+"*"+a+'</td></tr></table>'
    root2.innerHTML='<table><tr><td align="center">x2= </td><td align="center">'+"-b-√D"+'<hr color="black">'+' <td>= </td><td align="center">'+-b+"- "+"√"+D+'<hr color="black">'+'</td><td>'+"= "+x2+'</td></tr><tr><td></td><td align="center">'+"2*a"+'</td><td></td><td align="center">'+2+"*"+a+'</td></tr></table>'
    console.log(a,b,c,D)
    console.log(number)
    console.log(x1,x2)
    }
    }
}
