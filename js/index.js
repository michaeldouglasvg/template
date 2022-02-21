window.addEventListener("scroll", function(){

    var head = document.querySelector("header");

    head.classList.toggle("sticky", window.scrollY > 0);
});

function showItems(){
    
    const menu = document.getElementById("menu");

    if(menu.style.display == "none"){

        menu.style.display = "block";

    }else{

        menu.style.display = "none";
    }

}
// my linked in page
const links = document.querySelectorAll(".fetapi");

links.forEach(function(element){

    element.addEventListener("click", function(e){

        e.preventDefault();

        const currentFetchMode = e.currentTarget.querySelector(".btnmain").innerHTML;

        if(currentFetchMode === "Facebook"){

            alert("Hello facebook");

        }else if(currentFetchMode === "Instagram"){
            
            var xhr = new XMLHttpRequest();

            xhr.open('GET', 'https://api.github.com/users', true);

            xhr.onload = function(){

                if(this.status == 200){
                    
                    var users = JSON.parse(this.responseText);
                    console.log(users);

                var outPut = " ";

                for(var i in users){

                    outPut +=

                    '<div class="user">' +

                            '<img src="'+users[i].avatar_url+'" height="70px">' +

                            '<ul class="users-lists">' +

                                '<li> ID: '+users[i].id+' </li>' +

                                '<li> Login: '+users[i].login+' </li>' +

                                '<a href="'+users[i].html_url+'" target="_blank"><li> Github page link: '+users[i].html_url+' </li></a>' +

                            '</ul>' +

                    '</div>';
                }

                document.getElementById("activity").innerHTML = outPut;
                }

            }

            xhr.send();
        }
        else if(currentFetchMode === "Twitter"){

            alert("Twitter clicked")
        }
        else if(currentFetchMode === "Github"){

            alert("Github clicked")
        }
        else if(currentFetchMode === "Youtube"){

            alert("Youtube clicked")
        }
        else if(currentFetchMode === "Linkedin"){

            var xhr = new XMLHttpRequest();

            xhr.open("GET", "https://api.linkedin.com/v1/people/~?format=json", true);

            xhr.onload = function(){

                if(this.status == 200){
                    
                    var linkedinAccount = JSON.parse(this.responseText);

                    console.log(linkedinAccount);
                }
            }

            xhr.send();
        }
        
    })
})