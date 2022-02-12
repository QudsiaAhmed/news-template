console.log("This is my index js file.");

//initialize the news api parameters
let source = 'bbc-news';
let apiKey = '0be5e016dcd44b77abc967d15538f12a'
let newsAccordion = document.getElementById('newsAccordion');

//create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHTML = "";
        articles.forEach(function (element , index) {
            console.log(element,index);
            let news = `<div class="accordion-item">
    <h2 class="accordion-header" id="heading${index}">
        <button class="accordion-button" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
            ${element["title"]}
        </button>
    </h2>
    <div id="collapse${index}" class="accordion-collapse collapse show" aria-labelledby="heading${index}"
        data-bs-parent="newsAccordion">
        <div class="accordion-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a> </div>
    </div>
</div>`;
            newsHTML += news;
        });
        newsAccordion.innerHTML = newsHTML;
    }
    else {
        console.log("Some error occured")
    }
}
xhr.send()


