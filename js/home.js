window.onload = function() {
    readFile('data/articles.json', function(articles) {
        console.log(articles);

        // --------------------- STEP 0 (informations) ---------------------
            // Dans le dossier data ce trouve un fichier 'JSON' qui contient une liste d'article
            // CI-DESSUS la fonction 'readFile' fait une 'requette ajax' pour récuperer le contenue du fichier 'articles.json'
            // Le premier parametre de la fonction est le chemin d'acces au fichier
            // le deuxieme, est une fonction 'callback' qui nous permet d'avoir accès au données sous la forme d'une variables
            // cette variable est un 'array' contenant une plusieurs objet correspondant chacun a un article



        // --------------------- STEP 1 ---------------------
            // 1. FAITE EN SORTE DE POUVOIR INSTANCIER UN OBJET 'Article' A PARTIR DES DONNEES DE LA VARIABLE 'articles'
                // exemple : var article = new Article(articles.title, articles.author, articles.publishedDate, articles.img, articles.content, articles.resumes);

            // 1.2 DEFINIR DES GETTER/SETTER POUR CHAQUE PROPRIETES DE LA CLASS Article
                // exemple : this.SetTitle = function(newTitle) { this.title = newTitle; } <----- ceci est un SETTER

            class Article {

                constructor(id, title, author, publishedDate, img, content, resumes, tags){
                    this.id = id;
                    this.title = title;
                    this.author = author;
                    this.publishedDate = publishedDate;
                    this.img = img;
                    this.content = content;
                    this.resumes = resumes;
                    this.tags = tags;
                }

                getId(){return this.id};
                getTitle(){return this.title};
                getAuthor(){return this.author};
                getPublishedDate(){return this.publishedDate};
                getImg(){return this.img};
                getContent(){return this.content};
                getResumes(){return this.resumes};
                getTags(){return this.tags};

                setId = function(newId) {this.id = newId};
                setTitle = function(newTitle) {this.title = newTitle;};
                setAuthor = function(newAuthor) {this.author = newAuthor;};
                setPublishedDate = function(newPublishedDate) {this.publishedDate = newPublishedDate;};
                setImg = function(newImg) {this.img = newImg;};
                setContent = function(newContent) {this.content = newContent;};
                setResumes = function(newResumes) {this.resumes = newResumes;};
                setTags = function(newTags) {this.tags = newTags;};

            }

            for (var i = 0; i < articles.length; i++){
                var article = new Article(articles[i].id, articles[i].title, articles[i].author, articles[i].publishedDate, articles[i].img, articles[i].content, articles[i].resumes, articles[i].tags);
                console.log(article);        


        // ------------------- STEP 2 ---------------------
            // AFFICHER DANS LA SECTION DU MAIN DE LA PAGE 'home.html' QUI EST LINK A CE SCRIPT LES ARTICLES

                // exemple structure html pour les articles ------------------------>
                    // <article class="article-preview" data-id="1">
                    //     <h2>Un super article 1</h2>
                    //     <div class="article-preciew-body">
                    //         <div class="article-preview-img">
                    //             <img src="http://fauxsite.com/content/medias/img/article1.jpg" alt="miniature article 1">
                    //         </div>
                    //         <div class="article-preview-content">
                    //             <p>Ceci est un texte taper au pif donc ne jugé pas sur l'orthographe général des documents fournis...</p>
                    //         </div>
                    //         <div class="article-preview-tags">
                    //             <p>tag1 tag2 tagada</p>
                    //         </div>
                    //     </div>
                    // </article>

                // exemple code javascript pour la generation des elements html ----------------->
                     // var articleBloc = document.createElement('article');
                     // articleBloc.ClassList.add('article-preview');
                     // articleBloc.setAttribute('data-id', articles[i].getId()) // <---- Dans cette exemple il faut s'imaginer qu'on boucle (for) sur un tableau contenant des 'instances' de la class 'Article'
                     // var articleTitle = document.createElement('h2');
                     // articleTitle.innerText = articles[i].getTitle(); // <---- Dans cette exemple il faut s'imaginer qu'on boucle (for) sur un tableau contenant des 'instances' de la class 'Article'
                     // articleBloc.append(articleTitle);
                     // etc.....

            var section = document.getElementsByTagName('section')[0]; 

            var articleBloc = document.createElement('article');
            articleBloc.classList.add('article-preview');
            articleBloc.setAttribute('data-id', article.getId());
            section.appendChild(articleBloc);

            var articleTitle = document.createElement('h2');
            articleTitle.innerText = article.getTitle(); 
            articleBloc.appendChild(articleTitle);

            var articleBody = document.createElement('div');
            articleBody.classList.add('article-preciew-body');
            articleBloc.appendChild(articleBody);

            var articleImg = document.createElement('div');
            articleImg.classList.add('article-preview-img');
            articleBody.appendChild(articleImg);

            var img = document.createElement('img');
            img.setAttribute('src', article.getImg());
            articleImg.appendChild(img);

            var articleContent = document.createElement('div');
            articleContent.classList.add('article-preview-content');
            articleBody.appendChild(articleContent);

            var contentParagraph = document.createElement('p');
            contentParagraph.innerText = article.getResumes();
            articleContent.appendChild(contentParagraph);

            var articleTags = document.createElement('div');
            articleTags.classList.add('article-preview-tags');
            articleBody.appendChild(articleTags);

            var tagsParagraph = document.createElement('p');
            tagsParagraph.innerText = article.getTags();
            articleTags.appendChild(tagsParagraph);    
            
            console.log(section);

        // ------------------ STEP 3 -----------------------
            // AU CLICK SUR LA PREVIEW D'UN ARTICLE (l'elements html) REDIRIGER VERS LA PAGE 'article.html' --->
                // L'url devras ressembler à celle ci (le chemin d'accès vers le fichier + un parametre de type GET) :
                    // 'file:///C:/Users/brian/Desktop/JavascriptMe/article.html?id=1' <----
                        // --- La valeur du parametre id présent dans l'url doit correspondre a l'article clicker

            }

            var allArticles = document.querySelectorAll('article'); 
            allArticles[0].addEventListener("click", function(){
                    window.location = "article.html?id=1";
            })
            allArticles[1].addEventListener("click", function(){
                    window.location = "article.html?id=2";
            })
            allArticles[2].addEventListener("click", function(){
                    window.location = "article.html?id=3";
            })
            allArticles[3].addEventListener("click", function(){
                    window.location = "article.html?id=4";
            })
            allArticles[4].addEventListener("click", function(){
                    window.location = "article.html?id=5";
            })
            allArticles[5].addEventListener("click", function(){
                    window.location = "article.html?id=6";
            })
            


    });
}
