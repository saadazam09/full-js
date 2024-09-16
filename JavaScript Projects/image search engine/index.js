const accesskey =  "QcHQ0R0h6Pqz_D-Hi7L9dq47bk3bRgSUPfNpt_25UPA";
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResults = document.getElementById("searchResult"); // or another appropriate selector
const showMore = document.getElementById("show-more-btn");

let keyword = "";
let page = 1; 

async function searchImage() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=15& _black`;
 
    const response = await fetch(url);
    
    const data = await response.json();

  
    

    if(page === 1){
        searchResults.innerHTML = "";
    }

    const results = data.results;

    results.map(result => {
        const image = document.createElement("img");
        image.src = result.urls.small; 
        const imagelink = document.createElement("a");
        imagelink.href = result.links.html;
    
        imagelink.target = "_blank";
    
        imagelink.appendChild(image);
    
        searchResults.appendChild(imagelink);
    });
        showMore.style.display = "block" 
}


searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImage();
});

showMore.addEventListener("click", ()=>{
    page++;
    searchImage();
})