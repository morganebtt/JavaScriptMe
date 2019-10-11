window.onload = function() {

    // --------------------- STEP 1 ---------------------
        // Par defaut le formulaire de connection est afficher, le formulaire d'inscription quand a lui est en 'display: none';
        // FAITE EN SORTE QUE AU CLICK SUR LES BUTTONS POSSEDANT LA CLASS 'square-button-empty'
            // DE MASQUER LE LOGIN FORM POUR AFFICHER LE REGISTER FORM, ET INVERSEMENT <->

    var buttons = document.getElementsByClassName("square-button-empty");
    var connexionForm = document.getElementById ("connexion-form");
    var registerForm = document.getElementById ("register-form");

    for (var i=0; i<buttons.length; i++){
        buttons[i].addEventListener("click", function(e){
            if(e.target.getAttribute("data-form") ==0) {
                connexionForm.style.display = "none";
                registerForm.style.display = "flex";
            }
            else{connexionForm.style.display = "flex";
            registerForm.style.display = "none";
            }
        })
    }

    // buttons.addEventListener('click', function() {
    //     connexionForm.classList.toggle('register-hide');
    //     registerForm.classList.toggle('contact-form');
    // })




    // --------------------- STEP 2 ----------------------
        // maintenant que l'on peut afficher nos 2 formulaires l'intéret serait maintenant qu'ils fonctionnent ! pour cela :
        // FAITE EN SORTE QUE AU CLICK SUR LES BUTTONS POSSEDANT LA CLASS 'square-button' DE :
            //  1. récuperer la valeur de tout les champs de formulaires
            //  2. vérifier que le 'username' fait au moins 5 caracteres alphanumérique
            //  3. vérifier que le password fait au moins 8 caracteres et contient a minima une majuscule/minuscule ainsi qu'un entier (integer)

    var signupButton = document.getElementById("signup");
    var loginButton = document.getElementById("login");

    loginButton.addEventListener("click", function (){
        for (let i=0; i<2; i++);
        var x = loginButton[i].value;
        console.log(x);
    })

    signupButton.addEventListener("click", function (){
        var username = registerForm[0].value;
        if (username.length <5){
            alert ("Your password needs at least a minimum of 5 characters");
            return false;
        }

        var email = registerForm[1].value;

        var password = registerForm[2].value;
        if (password.length <8){
            alert ("Your password needs at least a minimum of 8 characters");
            return false;
        }

        var pwd=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/;
        if (pwd.test(password) == false) {
            alert("Password Should contain atleast One Number, One UpperCase and a lowercase letter");   
            return false;
        }

        var passwordConfirm = registerForm[3].value;
        if (password != passwordConfirm){
            alert ("Passwords are not the same");
            return false;
        }

    })


    // --------------------- STEP 3 -------------------------
        // une fois nos saisies utilisateurs stocker dans des variables faite en sorte de :
        // A L'INSCRIPTION :

            // 1. le code commenter ci-dessous devras etre fonctionnelle (pour ça vous allez devoir déclarer une class 'User' -> POO Javascript)
                // cette classe devras avoir des les propriétés 'username', 'email', 'password' ainsi qu'une methode nommé 'getUsername' --->
                // --> qui devra retourner l'username de l'instance courante de 'User'

                // var user = new User('Toto (username)', 'toto@email.fr (email)', 'tamereenslip (password)');
                // console.log('Bonjour ' + user.getUsername() + ' !');


            // 2. Modifier ensuite le code ci dessus pour qu'a l'instantation d'un nouvelle 'User' ---
            // --> on utilise les données saisie du formulaire d'inscription pour setup les propriétés notre nouvelle 'User'
            // puis on stocke ce nouvelle objet utilisateurs dans le 'localStorage' sous la clé 'user'





    // --------------------- STEP 4 -------------------------
        // une fois nos saisies utilisateurs stocker dans des variables faite en sorte de :
        // A LA CONNEXION :

            // 1. Vérifier l'existance dans le 'localStorage' de la clé 'user'
                // 1.1 Si la clé 'user' n'existe pas, retourner un message d'erreur a l'utilisateurs (Account do not exist, please register.)
                // 1.2 Si la clé existe, comparer les données saisie a celle présente dans le 'localStorage'
                    // 1.2.1 si l'email ou le mot de passe ne correspondent pas, retourner un message d'erreur (les alert() sont proscrit)

            // 2. Si les données saisies correspondent a celles présentes dans le 'localStorage', rediriger l'utilisateur sur la page 'home.html'


};
