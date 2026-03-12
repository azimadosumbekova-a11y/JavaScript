// const input = document.querySelectorAll('#phone_input');
// const btn = document.querySelector('#phone_button');
// const result = document.querySelector('#phone_result');



// btn.addEventListener( 'click', () => {
//     if(regex.test(inputPhone.velue)){
//         result.style.color = 'green'
//         result.innerHTML = 'phon is  valid';
//     }else{
//         result.style.color = 'red'
//         result.innerHTML = 'phon is not valid'
//     }
// })





const tabs = document.querySelectorAll('.tab_content_block');
const tabBtns = document.querySelectorAll('.tab_content_item');
const tabBtnParent = document.querySelector('.tab_content_items');

let secends = 0 



const hideTabs = () => {
    tabs.forEach((tab) => {
        tab.style.display = 'none'
    })
    tabBtns.forEach((btn) => {
        btn.classList.remove('tab_content_item_active')
    })
}

const showActivTab = (index = 0) => {
    tabs[index].style.display = 'block'
    tabBtns[index].classList.add('tab_content_item_active')
}
 hideTabs();
 showActivTab(2);

setInterval(() => {
    secends++
    if(secends >= tabs.length){
        secends = 0 
    }
    hideTabs()
    showActivTab(secends)
} , 5000)
tabBtnParent.addEventListener('click', (event) => { 
    if(event.target.tagName.toLowerCase() === 'button'){
      tabBtns.forEach((btn , index) => {
        if(event.target == btn ){
            hideTabs();
            showActivTab(index);
        }
      })
        
    }
});






