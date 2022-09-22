
let task = document.getElementById('task'); 
let list = document.querySelector('#list'); 
let delButons = document.getElementsByClassName('bi');
document.addEventListener('DOMContentLoaded', localStorageGetting);
function isEmpty(str){
    return  str.match(/^\s+$/) !== null; // Boşluk kontrol funksiyonu
}

function newElement(misson){ // yeni eleman oluşturma fonkiyonu
    let newMisson = document.createElement('li'); 
    newMisson.innerHTML = task.value; 
    
    if (task.value == "") { 
        $('.error').toast('show'); 
        return; 
        }
    else if(isEmpty(task.value)){ 
        $('.error').toast('show');
        return;
    }
        else{ 
            $('.success').toast('show');
        } 
        
    let delButon = document.createElement('i'); // yeni elemana "görevi sil" butonu eklenmesi
        delButon.setAttribute('class', "bi bi-x-lg");
            newMisson.appendChild(delButon);
        delButon.addEventListener('click', delEvent); // yeni oluşturulan buton için "görevi sil" fonksiyon dinlenmesi
    list.appendChild(newMisson);

    localStorageSave(task.value);
    task.value = "";
   
    
    }
    function delEvent(e){ // tamamlanan görevin silinmesi için fonksiyon
        e.target.parentNode.style.display = "none";
    }
    for(const delButon of delButons ){
        delButon.addEventListener('click', delEvent); // her 'görevi sil' butonunun çalışması için fonkiyonun döngüye girmesi
 
    }

function missionCompleted(e){ 
 e.target.classList.toggle('checked'); // görevlerin üstüne tıklandığında 'tamamlandı' stili eklenme fonksiyonu
}
list.addEventListener('click', missionCompleted); // 'tamamlandı' fonksiyonu için dinleme 
task.addEventListener("keypress", function(e){
    if (e.key ==="Enter"){ // enter duşuna basıldığında görevin eklenmesi için dinleme fonkiyonu
        e.preventDefault();
        document.getElementById("liveToastBtn").click();
    }  
});


function localStorageSave(task){
    let missons;
    if (localStorage.getItem('missons')=== null) {
        missons = [];
    }
    else{
        missons = JSON.parse(localStorage.getItem('missons'));
    }
    missons.push(task);
    localStorage.setItem('missons', JSON.stringify(missons));
}

function localStorageGetting(){
    let missons;
    if (localStorage.getItem('missons')=== null) {
        missons = [];
    }
    else{
        missons = JSON.parse(localStorage.getItem('missons'));
    }
missons.forEach(function(item){
    let misson = document.createElement('li');
    misson.innerText = item;
    list.appendChild(misson);
    let delButon = document.createElement('i'); // yeni elemana "görevi sil" butonu eklenmesi
        delButon.setAttribute('class', "bi bi-x-lg");
            misson.appendChild(delButon);
        delButon.addEventListener('click', delEvent); // yeni oluşturulan buton için "görevi sil" fonksiyon dinlenmesi
}
)}

function localStorageDelete(){
    let missons;
    if (localStorage.getItem('missons')=== null) {
        missons = [];
    }
    else{
        missons = JSON.parse(localStorage.getItem('missons'));
    }
   const localStorageDeleteIndex = missons.indexOf(misson);
}