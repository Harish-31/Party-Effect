function set(){
    setTimeout((()=> {
        document.body.style.background = "linear-gradient((rgba(0,0,0,.2), rgba(0,0,0,.2)),url('https://images.pexels.com/photos/1047940/pexels-photo-1047940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
        document.getElementById("h1").innerHTML= "On the floor baby";
        
        
    }),200);
    setTimeout((()=> {
        document.body.style.background = "linear-gradient(rgba(255, 29, 29, 0.2), rgba(231, 80, 236, 0.4)),url('https://images.pexels.com/photos/1047940/pexels-photo-1047940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
        document.getElementById("h1").innerHTML= "Hit it hard baby";

    }),400);
    setTimeout((()=> {
        document.body.style.background = "linear-gradient(rgba(2, 255, 213, 0.2), rgba(255, 23, 23,.2)),url('https://images.pexels.com/photos/1047940/pexels-photo-1047940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
        document.getElementById("h1").innerHTML= "Rock the party baby";
    }),600);
    setTimeout((()=> {
        document.body.style.background = "linear-gradient(rgba(255, 0, 0, 0.2), rgb(0,0,0,.5)),url('https://images.pexels.com/photos/1047940/pexels-photo-1047940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
        document.getElementById("h1").innerHTML= "ROCK ND ROLL";
    }),800);
}
setInterval(set,800)