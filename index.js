function openModal(){
    let ele=document.querySelector(".modal");
    // console.log(ele);
    ele.classList.add('vis1');
    let ele2=document.querySelector('.filter');
    // ele2.style.opacity="0.4";
    // ele2.style.z="1";
    let classes=ele2.classList;
    classes.add('vis');
}
function closeModal(){
    let ele=document.querySelector(".modal");
    // console.log(ele);
    ele.classList.remove('vis1');
    let ele2=document.querySelector('.filter');
    let classes=ele2.classList;
    // console.log(classes);
   classes.remove('vis');

}

function print(){
    console.log("Bansi");
}