<template>
	<div>
		<head>
<link rel="stylesheet" href="/header.css">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<script src="https://kit.fontawesome.com/21c5879a52.js" crossorigin="anonymous"></script>
 </head> 
 <body>
	 <!--class="d-inline-block align-top"-->
	 <div>
		<a id="logo" class="navbar-brand" href="/" color="#fff">
		<img class="LogoImg" src="https://media.discordapp.net/attachments/776550391440998413/846890835709526036/IMG_20210525_014209.png?width=324&height=324" width="40" height="40">
		<b class="logo">HighFrame</b>
</a>

<nav id="nav">
	<button aria-label="Abrir Menu" id="btn-mobile" aria-haspopup="true" aria-controls="menu" aria-expanded="false"><span id="hamburger"></span>
      </button>
<ul id="menu" role="menu">
<li><a class="nav-link" href="/commands"><i class="fas fa-code"></i> Commands</a></li>
<li><a class="nav-link" href="/badges"><i class="fas fa-splotch"></i> Badges</a></li>
<li><a class="nav-link" href="/404"><i class="fas fa-handshake"></i> Partners</a></li>
<li><a class="nav-link" href="/Dashboard"><i class="fas fa-cogs"></i> Dashboard</a></li>
<li><a class="nav-link" href="/Server"><i class="fab fa-discord"></i> Server</a></li>
<li><a class="nav-link" href="https://discord.com/oauth2/authorize?client_id=821548564421148692&scope=bot&permissions=2147483647" target="_blank"><i class="fas fa-plus"></i> invite-me</a></li>
<li><a id="dashAlert" class="nav-link" href="/alert"><i class="fas fa-exclamation-triangle"></i>   Alert</a></li>
</ul>
    <form class="nav-link" action="/auth">
        <button class="nav-link" type="submit" id="log-btn"><b>login</b></button>
				
    </form>
</nav>

	<Nuxt />
</div>
</header>
<script>
	const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
</script>
</body>
<style scoped>
	
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

</style>
	</div>	
</template