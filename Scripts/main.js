// добавление прокручивания текста PASHABEZK при прокрутке страницы
const pashabezkText = document.getElementById("pashabezk-text");
pashabezkText.style.marginRight = "-250px";
pashabezkText.style.transition = "all linear";
window.addEventListener("scroll", () => {
	pashabezkText.style.marginRight = window.scrollY - 250 + "px";
}, false);

// список проектов, которые надо разместить в сетке проектов
const projects = [
	{
		"title": "Checkers",
		"desc": "React+Redux",
		"link": "https://github.com/pashabezk/CheckersOnlineFrontend",
		"imgLink": "Img\\Projects\\Checkers.png"
	},
	{
		"title": "Notes",
		"desc": "React+MobX",
		"link": "https://github.com/pashabezk/Notes",
		"imgLink": "Img\\Projects\\Notes.png"
	},
	{
		"title": "SimpleDrawApp",
		"desc": "React+Apollo",
		"link": "https://github.com/pashabezk/SimpleDrawApp",
		"imgLink": "Img\\Projects\\SimpleDrawApp.png"
	},
	{
		"title": "HappyNewYear",
		"desc": "JavaScript",
		"link": "https://github.com/pashabezk/HappyNewYearAnn",
		"imgLink": "Img\\Projects\\HappyNewYearAnn.png"
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
];


const projectsGrid = document.getElementById("projectsList");

projects.forEach(elem => {
	const li = document.createElement("li");
	li.classList.add("hex");
	li.classList.add("jumping-block");

	const div = document.createElement("div");
	div.classList.add("hexIn");

	const a = document.createElement("a");
	a.classList.add("hexLink");
	a.setAttribute("href", elem.link);
	a.setAttribute("target", "_blank");

	const img = document.createElement("img");
	img.setAttribute("src", elem.imgLink);
	img.setAttribute("alt", "фото проекта " + elem.title);


	const h2 = document.createElement("h2");
	h2.innerText = elem.title;

	const p = document.createElement("p");
	p.innerText = elem.desc;

	a.appendChild(img);
	a.appendChild(h2);
	a.appendChild(p);
	div.appendChild(a);
	li.appendChild(div);
	projectsGrid.appendChild(li);
});

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


//#region Создание возможности появления анимации при прокрутке страницы

function animateOnEntry(entry) {
	entry.forEach(elem => {
		if (elem.isIntersecting) {
			elem.target.classList.remove("hide-animation");
			elem.target.classList.add("show-animation");
		} else {
			elem.target.classList.remove("show-animation");
			elem.target.classList.add("hide-animation");
		}
	});
}

function jumpingTextOnEntry(entry) {
	entry.forEach(elem => {
		if (elem.isIntersecting) {
			elem.target.classList.remove("disable-animation-top");
			elem.target.classList.remove("disable-animation-bottom");
			elem.target.classList.add("show-animation");
		} else {
			elem.target.classList.remove("show-animation");
			elem.target.classList.add(elem.boundingClientRect.y <= 100 ? "disable-animation-top" : "disable-animation-bottom");
		}
	});
}

const observer = new IntersectionObserver(animateOnEntry, {threshold: [0.5]}); // создаем объект отслеживания, threshold - процент пересечения
for (const elem of document.querySelectorAll(".animate-it")) {
	observer.observe(elem); // применяем функцию отслеживания пересечения для всех объектов, у которых есть класс animate-it
}

const observerForJumpingText = new IntersectionObserver(jumpingTextOnEntry, {threshold: [0.3]}); // создаем объект отслеживания
for (const elem of document.querySelectorAll(".jumping-block")) {
	observerForJumpingText.observe(elem); // применяем функцию отслеживания пересечения для всех объектов, у которых есть класс jumping-block
}

//#endregion
