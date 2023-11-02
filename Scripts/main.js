// добавление прокручивания текста PASHABEZK при прокрутке страницы
pashabezk_text = document.getElementById("pashabezk_text");
pashabezk_text.style.marginRight = '-250px';
pashabezk_text.style.transition = 'all linear';
window.addEventListener('scroll', function (e) {
	pashabezk_text.style.marginRight = this.scrollY - 250 + "px";
	this.oldScroll = this.scrollY;
}, false);

// список проектов, которые надо разместить в сетке проектов
projects = [
	{
		"title": "Checkers",
		"desc": "React+Redux",
		"link": "https://github.com/pashabezk/CheckersOnlineFrontend",
		"imgLink": "Img\\Projects\\Checkers.png"
	},
	{
		"title": "DBComplexity",
		"desc": "Kotlin",
		"link": "https://github.com/pashabezk/DBComplexity",
		"imgLink": "Img\\Projects\\DBComplexity.png"
	},
	{
		"title": "ExamController",
		"desc": "Java",
		"link": "https://github.com/pashabezk/ExamController",
		"imgLink": "Img\\Projects\\ExamController.png"
	},
	{
		"title": "HappyNewYear",
		"desc": "JavaScript",
		"link": "https://github.com/pashabezk/HappyNewYearAnn", //https://happy-new-year-ann.herokuapp.com/Game/index.html
		"imgLink": "Img\\Projects\\HappyNewYearAnn.png"
	},
	{
		"title": "VKEmojiKeyboard",
		"desc": "JavaScript",
		"link": "https://github.com/pashabezk/VKEmojiKeyboard", //https://vkemojikeyboard.herokuapp.com/index.html
		"imgLink": "Img\\Projects\\VkKb.png"
	},
	{
		"title": "Maze Escape",
		"desc": "C++",
		"link": "https://github.com/pashabezk/MazeEscape",
		"imgLink": "Img\\Projects\\MazeEscape.png"
	},
	{
		"title": "AlienPlatformer",
		"desc": "Unity",
		"link": "https://github.com/pashabezk/AlienPlatformer",
		"imgLink": "Img\\Projects\\AlienPlatformer.png"
	},
	{
		"title": "TicTacToeTgBot",
		"desc": "Python",
		"link": "https://github.com/pashabezk/TicTacToeTgBot",
		"imgLink": "Img\\Projects\\TicTacToeTgBot.png"
	},
	{
		"title": "TgBotWithAI",
		"desc": "Python",
		"link": "https://github.com/pashabezk/MyFirstPythonTelegramBot",
		"imgLink": "Img\\Projects\\TgBotWithAI.png"
	},
	{
		"title": "DogBreeds",
		"desc": "React",
		"link": "https://github.com/pashabezk/DogBreeds",
		"imgLink": "Img\\Projects\\DogBreeds.png"
	},
	{
		"title": "Dialer",
		"desc": "Android",
		"link": "https://github.com/pashabezk/Dialer",
		"imgLink": "Img\\Projects\\Dialer.png"
	},
	{
		"title": "CarGame",
		"desc": "Win Forms (C#)",
		"link": "https://github.com/pashabezk/CarGame",
		"imgLink": "Img\\Projects\\CarGame.png"
	},
	{
		"title": "TankAndGear",
		"desc": "Win Forms (C#)",
		"link": "https://github.com/pashabezk/TankAndGear",
		"imgLink": "Img\\Projects\\TankAndGear.png"
	},
	{
		"title": "This site",
		"desc": "HTML+CSS+JS",
		"link": "https://github.com/pashabezk/MainPage",
		"imgLink": "Img\\Projects\\Site.png"
	}
]


let projectsGrid = document.getElementById("projectsList");

projects.forEach(elem => {
	let li = document.createElement("li");
	li.classList.add('hex');
	li.classList.add('jumping-block');

	let div = document.createElement("div");
	div.classList.add('hexIn');

	let a = document.createElement("a");
	a.classList.add('hexLink');
	a.setAttribute("href", elem.link);
	a.setAttribute("target", "_blank");

	let img = document.createElement("img");
	img.setAttribute("src", elem.imgLink);
	img.setAttribute("alt", "фото проекта " + elem.title);


	let h2 = document.createElement("h2");
	h2.innerText = elem.title;

	let p = document.createElement("p");
	p.innerText = elem.desc;

	a.appendChild(img);
	a.appendChild(h2);
	a.appendChild(p);
	div.appendChild(a);
	li.appendChild(div);
	projectsGrid.appendChild(li);
})

// формат:
// <li class="hex">
//   <div class="hexIn">
//     <a class="hexLink" href="javascript:void(0)">
//       <img src="Img\Projects\2.jpg" alt=""/>
//       <h2>Заголовок</h2>
//       <p>Краткий текст</p>
//     </a>
//   </div>
// </li>


/* Создание возможности появления анимации при прокрутке страницы */

function animateOnEntry(entry) {
	entry.forEach(elem => {
		if (elem.isIntersecting) {
			elem.target.classList.remove('hide-animation');
			elem.target.classList.add('show-animation');
		} else {
			elem.target.classList.remove('show-animation');
			elem.target.classList.add('hide-animation');
		}
	});
}

function jumpingTextOnEntry(entry) {
	entry.forEach(elem => {
		if (elem.isIntersecting) {
			elem.target.classList.remove('disable-animation-top');
			elem.target.classList.remove('disable-animation-bottom');
			elem.target.classList.add('show-animation');
		} else {
			elem.target.classList.remove('show-animation');
			elem.target.classList.add(elem.boundingClientRect.y <= 100 ? 'disable-animation-top' : 'disable-animation-bottom');
		}
	});
}

let observer = new IntersectionObserver(animateOnEntry, {threshold: [0.5]}); // создаем объект отслеживания, threshold - процент пересечения
for (let elem of document.querySelectorAll('.animate-it')) {
	observer.observe(elem); // применяем функцию отслеживания пересечения для всех объектов, у которых есть класс animate-it
}

let observerForJumpingText = new IntersectionObserver(jumpingTextOnEntry, {threshold: [0.3]}); // создаем объект отслеживания
for (let elem of document.querySelectorAll('.jumping-block')) {
	observerForJumpingText.observe(elem); // применяем функцию отслеживания пересечения для всех объектов, у которых есть класс jumping-block
}
