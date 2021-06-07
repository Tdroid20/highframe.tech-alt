<template>
<!DOCTYPE html>
<html lang="en">
    <head>
        <!--Meta Tags-->
        <meta property="og:url" content="https://highframe.tech" />
        <meta property="og:type" content="website">
<meta property="og:title" content="Highframe Dashboard" />
<meta property="og:description" content="Build your server with the new influencing bot" />
<meta property="og:image" content="https://cdn.discordapp.com/attachments/776550391440998413/847179357164142632/IMG_20210525_014529.png" />
<meta property="og:color" content="#35ff00" />
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">        
        <link rel="stylesheet" href="static\css/index.css">
				<meta http-equiv="X-UA-Compatible" content="IE=edge">
				<script src="https://kit.fontawesome.com/21c5879a52.js" crossorigin="anonymous"></script>
				<link rel="stylesheet" href="/header.css">
        <title>Highframe</title>    
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css">
        <link rel="shortcut icon" href="https://cdn.discordapp.com/attachments/808690576319840268/837420614800769114/1617382177589.png" type="image/x-icon">
				<script src="https://kit.fontawesome.com/21c5879a52.js" crossorigin="anonymous"></script>
    </head>
	
		<body>
				<style>
					body {
    background-color: #212529;
    color: white;
    height: auto; /*100%;*/
		z-index: 900;
}


/* header */

	* {
	margin: 0px;
	padding: 0px;
}
header, ul {
	margin: 0px;
	padding: 0px;
}
.nav-link {
    display: block;
    padding: 5px 1px;
		margin: -5px 5px;
    text-decoration: none;
    transition: color .15s;
		font-size: 1.0rem;
		font-weight: bold;
}
a .logo {
	color: #fff;
	font-size: 1.4rem;
	font-weight: bold;
}

a {
	color: #35ff00;
	text-decoration: none;
	font-family: sans-serif;
}
a:hover {
	color: #b8ff00;
}
#userN {
	color: aqua;
	justify-content: space-between;
}
#dashAlert {
	float: left;
}
#menu {
	display: flex;
	list-style: none;
	/*margin: 10px;*/
}
#menu a {
  display: block;
  /*padding: 0.5rem;*/
}

#btn-mobile {
  display: none;
}
/* inicio dos elementos antigos */
header {
	background: rgba(33, 37, 41);
	background: linear-gradient(270deg, #212529, #4B5054, #98A4AE, #2E3337,#212529, #4B5054);
	background-size: 600% 600%;
	-webkit-animation: Gradirent 10s ease infinite;
	-moz-animation: Gradient 10s ease infinite;
	-o-animation: Gradient 10s ease infinite;
	animation: Gradient 10s ease infinite; 
	z-index: auto;
	height: auto;
	top: 50px;
	/* inicio dos novos elementos header*/
	display: flex;
	align-items: center;
}

@-webkit-keyframes Gradient {
	0%{background-position:0% 50%}
	50%{background-position: 100% 50%}
	100%{background-position:0% 50%}
}
@-moz-keyframes Gradient {
	0%{background-position:0% 50%}
	50%{background-position: 100% 50%}
	100%{background-position:0% 50%}
}
@-o-keyframes Gradient {
	0%{background-position:0% 50%}
	50%{background-position: 100% 50%}
	100%{background-position:0% 50%}
}
@keyframes Gradient {
	0%{background-position:0% 50%}
	50%{background-position: 100% 50%}
	100%{background-position:0% 50%}
}
form.nav-link button {
	background: none;
	display: block;
	margin: -20px auto;
	height: auto;
	right: 5px;
	top: 23px;
	text-align: center;
	z-index: auto;
	border: 2px solid #2ecc71;
	padding: 5px 15px;
	outline: none;
	color: #d4dae0;
	border-radius: 25px;
	transition: 0.25s;
	cursor: pointer;
	position: absolute;
	overflow: hidden;
	/* top: 5px; */
  /* left: 880px; */
}

form.nav-link button:hover {
	background-color: #2ecc71;
}

img {
	border-radius: 20px;
}
/* main testes */

/* responsivo*/

@media (max-width: 900px) {
	#nav {
		width: 100%;
	}
  #menu {
    display: block;
    position: absolute;
    width: 100%;
    top: 52px;
    right: 0px;
    background: #212529;
    transition: 0.6s;
    z-index: 1000;
    height: 0px;
    visibility: hidden;
    overflow-y: hidden;
  }
  #nav.active #menu {
    height: calc(100vh - 42px);
    visibility: visible;
    overflow-y: hidden;/*auto*/
  }
  #menu a {
    padding: 1rem 0;
    margin: 0 1rem;
    border-bottom: 2px solid rgba(0, 0, 0, 0.05);
  }
  #btn-mobile {
    display: flex;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: none;
    background: none;
    cursor: pointer;
    gap: 0.5rem;
    color: #35ff00;
    margin-top: 0;
    float: right;
  }
  #hamburger {
    border-top: 2px solid;
    width: 20px;
  }
  #hamburger::after,
  #hamburger::before {
    content: '';
    display: block;
    width: 20px;
    height: 2px;
    background: currentColor;
    margin-top: 5px;
    transition: 0.3s;
    position: relative;
  }
  #nav.active #hamburger {
    border-top-color: transparent;
  }
  #nav.active #hamburger::before {
    transform: rotate(135deg);
  }
  #nav.active #hamburger::after {
    transform: rotate(-135deg);
    top: -7px;
  }
  form .nav-link button .active {
    margin-left: auto;
    margin-right: auto;
		margin: auto;
    top: 326px;
    right: -5px;
    left: -5px;
		float: right;
 }
}

@media only screen and (min-width: 901px) and (max-width: 2000px) {
  #log-btn {
    margin-right: 20px; 
  }
}

@media only screen and (max-width: 900px) {
  #log-btn {
    margin-left: 50%
  }
}

@media only screen and (max-width: 550px) {
  #log-btn {
    margin-left: 56%;
  }
}



/* MAIN BODY */
#dashAlert {
	color: red;
}
.head {
    padding-top: 260px;
    color: rgb(253, 253, 253);
    line-height: 1.3;
    text-align: center;
		height: auto;
		width: auto;
		top: auto;
		left: auto;
		right: auto;
		z-index: auto;
}

but {

  border: none;

  

  background-color: #B0BEC5;

  font-size: 15px;

  font-weight: bold;

  color: #555;

  margin: 8px;

  outline: none;

  border-radius: 5px;

}

    .disc {

        background-color: #7289DA; 

    border: none;

    color: white;

        font-size: 300%;

    }

.disc:hover {

  transition: 0.5s;

  transform: scale(1.2);

}

.subtext {

    padding-bottom: 330px;
    color: rgb(255, 255, 255, .55);
    line-height: 1.3;
    text-align: center;

}

.container {
    max-width: 1300px;
}

.pt-10 {
    padding-top: 10rem!important;
}

.pt-16 {
    padding-top: 20rem!important;
}

.custom-1 img {
  height: 269px;
  width: 510px;
  float: right;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.custom-1 h3 {
    padding-top: 60px;
}

.custom-1 p {
    color: rgb(255, 255, 255, .55);
    width: 40%;
}

.custom-2 img {
    float: left;
    height: 270px;
    width: 540px;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.custom-2 h3 {
    padding-top: 60px;
    float: right;
    width: 40%;
}

.custom-2 p {
    float: right;
    width: 40%;
    color: rgb(255, 255, 255, .55);
}

/* MEDIA */

@media screen and (max-width: 967px) {


form.nav-link button {
	margin-left: auto;
	margin-right: auto;
	top: 326px;
	right: -5px;
	left: -5px;
}
    .custom-1 img {
        float: none;
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        max-width: 400px;
        height: auto;
    }

    .pt-10 {
        padding-top: 5rem!important;
    }
    .pt-16 {
        padding-top: 2rem!important;
    }

    .custom-1 p {
        text-align: center;
        width: 100%;
    }

    .custom-1 h3 {
        text-align: center;
    }

    .custom-2 p {
        text-align: center;
        float: none;
        width: 100%;
    }

    .custom-2 h3 {
        float: none;
        text-align: center;
        width: 100%;
    }

    .custom-2 img {
        float: none;
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        max-width: 400px;
        height: auto;
    }
    
}
				</style>
        <!--MAIN BODY-->
        <div class="d-flex justify-content-center head">
					  <h1>site em desenvolvimento</h1>
            <h1><b>build your server with the new influencing bot</b></h1>
        </div>
        <div class="d-flex justify-content-center subtext">
            <p>now featuring the world's first influential Bot!</p>
        </div>
				
        <div class="container custom-1">
            <img class="custom-image" src="https://cdn.discordapp.com/attachments/814569588129005570/833744481148862504/0001-19622469636_20210411_174055_0000.png">
            <h3 class="align-self-start"><b>the bot is in beta but is now available to redeem prizes such as official bot badges and events. update it every day.</b></b></h3>
        </div>

        
        </div>
       
       <!--JS-->
        <script
				src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous">
         
        </script>
    </body>
</html>
</template>