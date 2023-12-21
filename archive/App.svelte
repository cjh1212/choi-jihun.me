<script>
    import { add_classes, loop_guard, query_selector_all } from "svelte/internal";

	function createHex() {
		var hexCode1 = "";
		var hexValues1 = "0123456789abcdef";
		
		for ( var i = 0; i < 6; i++ ) {
			hexCode1 += hexValues1.charAt(Math.floor(Math.random() * hexValues1.length));
		}
		return hexCode1;
	}

	function generate() {
		
		var deg = Math.floor(Math.random() *360);
		
		var gradient = "linear-gradient(" + deg + "deg, " + "#" + createHex() + ", " + "#" + createHex() +")";
		
		return gradient;
	
	}

	// scroll toggle for navbar
	let sticky = false;
	let y;
	function get_class(y) {
		if (y > 0) return 'sticky';
		return 'header';
	}

	$: getClass = get_class(y);
		
	// get an image
	function get_img(text) {
  		return new URL('lib/images/'.concat(text), import.meta.url).href;
	}

	// section emoji
	const emoji = {
		Education: " 🎓 ",
		Experience: " 🧑‍💻 "
	}

	let desc = "Hello! My name is Jihun Choi. I am currently a Software Engineering graduate student at Carnegie Mellon University. I obtained my B.S. in Computer Science at Penn State. My interest is software engineering, DevOps, and MLOps."

	const cards = {
		Education: [{title: 'Carnegie Mellon University', description: 'Master of Software Engineering in Scalable Systems', date: 'Aug 2023 - Dec 2024', img: get_img('school/cmu.jpeg')},
					{title: 'Pennsylvania State University', description: 'Bachelor of Science in Computer Science / Minor in Statistics', date: 'Aug 2017 - May 2019, Aug 2021 - May 2023', img: get_img('school/psu.jpeg'), link: "https://drive.google.com/file/d/1TUUeaba_UvdivDa8fGFTqyxJfndqHx1u/view?usp=drive_link"}],
		Experience: [{title: 'MLOps Engineer Intern', description: 'LG Uplus', date: 'Jul 2022 - Aug 2022', img: get_img('experience/lg_uplus.png')},
					{title: 'ATCIS Specialist', description: 'Republic of Korea Army', date: 'Jun 2019 - Dec 2020', img: get_img('experience/8corps.png'), style: "linear-gradient(112deg, rgb(46, 99, 118), rgb(181, 72, 169))"},
					{title: 'Backend Developer', description: 'Telepossible Corp.', date: 'Oct 2021 - Jul 2022', img: get_img('experience/telepossible.png'), style: "linear-gradient(23deg, rgb(220, 199, 136), rgb(123, 197, 115))"},
					{title: 'Undergraduate Research Assitant', description: 'SysFake', date: 'Dec 2021 - Jun 2022', img: get_img('experience/sysfake.png')},
					{title: 'Object Detection', description: 'PSU Advanced Vehicle Team', date: 'Aug 2022 - Dec 2022', img: get_img('experience/avt1.png'), style: "linear-gradient(265deg, #546a38, #07d3fd)"}],
		Project: [{title: 'Rate My Professors Penn State', description: 'Course scheduling helper using data from RMP', date: 'Chrome Extension', img: get_img('project/rmp.png')},
					{title: 'VPN App', description: 'VPN for mobile devices', date: 'iOS Application', img: get_img('project/vpn.png') }],
		Certification: [{title: 'Professional Machine Learning Engineer', description: 'Google Cloud', date: 'Issue Date: 7 Jan 2022', link: 'https://drive.google.com/file/d/1pdMWdTZ_BBTCNeeBWhAZ-aguyMs0cPgz/view?usp=sharing', img: get_img('certification/gcp.png'), style: "linear-gradient(90deg, grey, black)"}]

	};
</script>

<header class={getClass}>
	<h1>Jihun Choi</h1>
	<ul>
		<li><a class="headerlink" href="https://drive.google.com/file/d/1RVbcz7kpXjuFMgTB1YXKiCUuiT_5mAJl/view?usp=drive_link" target="_blank"><img src="{get_img('navbar/resume.png')}" alt="resume"/></a></li>
		<li><a class="headerlink" href="https://github.com/cjh1212" target="_blank"><img src="{get_img('navbar/github.png')}" alt="github"/></a></li>
		<li><a class="headerlink" href="https://www.linkedin.com/in/cjh980803" target="_blank"><img src="{get_img('navbar/linkedin.png')}" alt="_blank"/></a></li>
	</ul>
</header>
<div class="main">
	<div class="banner">
		<div class="content">
			<img src="{get_img('school/psu.jpeg')}"/>
			<div class="desc">
				{desc}
			</div>
		</div>
	</div>
	<div class="middle">
		{#each Object.entries(cards) as [key, value]}
				<div class="section">
					<h1>{key}</h1>
				</div>
				
				<div class="cards">
					{#each value as section}
						<a class={section.link ? "hlink" : "card"} href={section.link ? section.link : "javascript:void(0);"} target={section.link ? "_blank" : ""} style={section.link ? "" : "cursor: default;"}>
							<!-- <div class="text"><h3>{section.title}</h3> {section.first} <br> {section.second}
							</div> -->
							<!-- <a class={section.link ? "hlink" : ""} href = {section.link ? section.link : ""} style="display:block"> -->
								<section class="wrapper">
									<!-- <img src="{section.img}" style="background-image: {generate()};" alt=""> -->
									<img src="{section.img}" style={section.style ? "background-image: " + section.style : "background-image: " + generate()} alt="">
									<footer class="card_description">
										<h6>{section.date}</h6>
										<h4>{section.title}</h4>
										<p>{section.description}</p>
									</footer>
								</section>
							<!-- </a> -->
						</a>
					{/each}
				</div>
		{/each}
	</div>
	
</div>
<div class="footer">
	contact: 
	<a href="mailto: jihunc@andrew.cmu.edu" target="_blank">jihunc@andrew.cmu.edu</a>
</div>
<svelte:window bind:scrollY={y} />



<style>
	.headerlink img {
		transition: 0.3s;
	}
	.headerlink img:hover {
		transform: scale(1.1);
	}
	.footer {
		color: #e0f0ff;
	}
	.footer a {
		color: #e0f0ff;
	}
	.hlink:hover {
		/* webkit-filter: blur(1px);
    	filter: blur(1px); */
		transform: scale(1.05);
	}
	.hlink {
		z-index: 1;
		cursor: pointer;
		position: static;
		text-align: left;
		width: 89%;
		height: 400px;
		max-height: 400px;
		border-radius: 10px;
		margin: 15px 8px;
		background: white;
		box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.10),
			0px 1px 20px 0px rgba(0, 0, 0, 0.10);
		transform-origin: center;
		transition: transform, width, height, border-radius, top, left;
		transition-timing-function: ease-in-out;
		-moz-user-select: none; 
		-webkit-user-select: none; 
		-ms-user-select:none; 
		user-select:none;
		-o-user-select:none;
		transition: 0.3s;
	}
	.footer {
		display: flex;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;
		flex-direction: column;
		line-height: 1.5;
		font-weight: 700;
		padding: 6rem;
		font-size: 20px;
	}
	.content img {
		height: 25vh;
		max-height: 20rem;
		border-radius: 10px;
		margin-bottom: 1rem;
		border: solid 6px #e0f0ff;
	}
	.content .desc {
		margin: 0.5rem;
		font-size: 20px;
		color: #e0f0ff;
		background-color: rgb(0,0,0,0);
		/* text-shadow: 0 0 5px black; */
		top: 0;
	}
	.content {
		margin: auto;
		box-sizing: border-box;
		max-width: 64rem;
		width: 100%;
		height: auto;
		padding: 1rem;
		line-height: 1.5;
	}
	.banner {
		box-sizing: border-box;
		width: 100%;
		height: auto;
		border-radius: 0 0 3rem 3rem;
		padding: calc(10vh + 2rem) 0 10vh 0;
		background-size: cover;
		margin-bottom: 0.5rem;
		text-align: center;
		/* backdrop-filter: blur(100px); */
	}
	header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		transition: 0.5s;
		z-index: 100;
		color: white;
	}
	.sticky{
		background: linear-gradient(to right, rgb(0, 90, 167, 0.5), rgb(255, 253, 228, 0.5));
		color: white;
		transition: 0.5s;
		backdrop-filter: blur(5px);
		
	}
	header h1, .sticky h1 {
		position: relative;
		font-weight: 700;
		text-decoration: none;
		font-size: 2em;
		text-transform: uppercase;
		letter-spacing: 2px;
		transition: 0.5s;
		padding-left: 30px;
	}
	header ul {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	header ul li {
		position: relative;
		list-style: none;
	}
	header ul li img {
		position: relative;
		margin: 0 15px;
		text-decoration: none;
		letter-spacing: 2px;
		font-weight: 500px;
		transition: 0.5s;
		height: 40px;
		width: 40px;
		-webkit-filter: invert(1);
   		filter: invert(1);
	}


	:global(body) {
		background-image: linear-gradient(to right, #5c258d, #4389a2);
		padding: 0;
		/* background-image: url('lib/images/sg.png'); */
		background-size: cover;
		/* backdrop-filter: blur(100px); */
		

	}
	.top {
		text-align: center;
		color: white;
		font-size: 100px;
		font-weight: 800;
	}
	.middle {
		border-radius: 2rem;
		position: relative;
    	width: 100vw;
		background: white;
		/* background-image: url('lib/images/Space Gray.png') */
	}
	.cards {
		display:flex;
		justify-content:center;
		align-items:center;
		flex-wrap:wrap;
		box-sizing:border-box;
		width:100%;
		height:100%;
		padding-top: 20px;
		
	}

	.card {
		z-index: 1;
		cursor: pointer;
		position: static;
		text-align: left;
		width: 89%;
		height: 400px;
		max-height: 400px;
		border-radius: 10px;
		margin: 15px 8px;
		background: white;
		box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.10),
			0px 1px 20px 0px rgba(0, 0, 0, 0.10);
		transform-origin: center;
		transition: transform, width, height, border-radius, top, left;
		transition-timing-function: ease-in-out;
		-moz-user-select: none; 
		-webkit-user-select: none; 
		-ms-user-select:none; 
		user-select:none;
		-o-user-select:none;
		display: flex;
		
	}

	.card .wrapper,
	.hlink .wrapper {
		height: 100%;
		width: 100%;
		position: relative;
		display: table; 
		grid-template-rows: [first] 70% [second] auto;
		display:grid;
	}

	.card h6,
	.card p,
	.hlink h6,
	.hlink p {
		margin: 4px 0;
	}
	.card h6,
	.card p,
	.hlink h6,
	.hlink p {
		color: #8f8f91;
	}
	.card h6,
	.hlink h6 {
		text-transform: uppercase;
	}
	.card img,
	.hlink img {
		display: table-cell;
		position: relative;
		width: 100%;
		height: 100%;
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		object-fit: cover;
		/* overflow-clip-margin: content-box;
    	overflow: clip; */
		object-position: top;
		grid-row-start: first;
		grid-row-end: second;
		border-radius: 10px;
		
	}
	.card h4,
	.hlink h4 {
		color: #333;
	}

	.card > .wrapper > .card_description,
	.hlink > .wrapper > .card_description{
		display: table-cell;
		width: 100%;
		height: auto;
		padding: 15px 20px;
		box-sizing: border-box;
		
	}
	.card > .wrapper > .card_description,
	.hlink > .wrapper > .card_description{
		background: white;
		position: absolute;
		bottom: 0;
		left: 0;
		grid-row-start: second;
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
		background-color: rgba(255,255,255);
	}
	.card .wrapper, .hlink .wrapper{display: grid;}
	.card .wrapper img, .hlink .wrapper img{object-fit: fill;}


	.img {
		position: absolute;
		width: 100%;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.description {
		top: 20vh;
		padding: 20px;
		position: relative;
		background-color: #fff;
	}

	.holder {
		max-width: 600px;
		padding: 0;
		z-index: 1;
		height: 100%;
		background-color: transparent;
		overflow: hidden;
		position: relative;
	}

	.text {
		box-sizing: border-box;
		position: absolute;
		width:100%;
		border-bottom-right-radius:30px;
		border-bottom-left-radius:30px;
		bottom:0rem;
		left:0rem;
		width:100%;
		padding:0rem 1rem 0.5rem;
		background-color: rgba(255,255,255,0.6);
		font-family: 'Lucida Sans' sans-serif;
		text-align: center;
		font-size: 12px;
	}

	.section {
		width: 90%;
		padding: 0px 15px 0px 15px;
		margin: 0 auto;
		position: relative;
		display: block;
		overflow: auto;
		text-align: left;
		/* border-bottom-style: solid; */
		/* padding: 10px; */
		/* border-image: repeating-linear-gradient(to bottom right, #33475b, #0033CC, #FF77CC, rgb(255, 122, 89)) 20; */
	}


/* three */
/* @media screen and (min-width: 768px){.card{flex:33%;max-width:calc(33% - 2rem);height:calc(min(33rem,33vw) / 1.5)}} */

/* four */
@media screen and (min-width: 768px){.card{flex:25%;max-width:calc(25% - 2rem);height:calc(min(45rem,45vw) / 1.5)}}

@media screen and (max-width: 768px){.card{flex:100%;max-width:100%;height:83.3333333333vw;margin:.5rem 0}}

@media screen and (min-width: 768px){.hlink{flex:25%;max-width:calc(25% - 2rem);height:calc(min(45rem,45vw) / 1.5)}}

@media screen and (max-width: 768px){.hlink{flex:100%;max-width:100%;height:83.3333333333vw;margin:.5rem 0}}

@media screen and (max-width: 768px){.section{padding:1rem;margin:.5rem 0;width:100%}}
	
</style> 