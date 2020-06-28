const searchBTN = document.getElementById("button-container");
function hideBTN(){
    searchBTN.style.display='none'
}

hideBTN()

const searchbar = document.getElementById("searchInterests");

function showSearchBar(){
    searchbar.style.display='block';
}

showSearchBar();

// https://www.youtube.com/watch?v=3NG8zy0ywIk&list=PL4cUxeGkcC9gfoKa5la9dsdCNpuey2s-V&index=17&t=107s
const list = document.querySelectorAll('.user .interests');
console.log(list);

const search = document.forms['searchInterests'].querySelector('input');

search.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    console.log(term)
    
    const div = document.getElementsByClassName('user');
    const interests = document.getElementsByClassName('interests');

    Array.from(div).forEach(function(interest){
        // https://www.w3schools.com/jsref/prop_element_children.asp
        const title = interest.children[3].textContent;
        console.log(title)
        if(title.toLowerCase().indexOf(term)!= -1){
            interest.style.display="block";
            
        }else{
            interest.style.display="none";
        }
        console.log(interest)
    })
})