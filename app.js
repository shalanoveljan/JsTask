let btn=document.querySelector('button');
btn.onclick= () => {
    let input=document.querySelector('#inp').value
    const item={
        input:input
    }
    let div=document.createElement('div')
    let h3 =document.createElement('h3')
    let remove_btn =document.createElement('button')
    div.append(h3,remove_btn);
    div.setAttribute('class','box');
    document.querySelector('.all-box').appendChild(div);
    remove_btn.innerHTML="Remove";
    h3.innerHTML=item.input;

remove_btn.setAttribute('class','newbtn')
let newbtn=document.querySelector('.newbtn');
newbtn.onclick= () => {
div.classList.add('d-none')
}

}