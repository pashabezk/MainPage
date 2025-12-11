//#region добавление прокручивания текста PASHABEZK при прокрутке страницы

const pashabezkText = document.getElementById("pashabezk-text");
pashabezkText.style.marginRight = "-250px";
pashabezkText.style.transition = "all linear";
window.addEventListener("scroll", () => {
	pashabezkText.style.marginRight = window.scrollY - 250 + "px";
}, false);

//#endregion


//#region работа с сеткой проектов

/**
 * @typedef Project
 * @property {string} title - Заголовок проекта
 * @property {string} desc - Описание проекта
 * @property {string} link - Ссылка на проект
 * @property {string} imgLink - Путь к изображению
 */

/** Список проектов, которые надо разместить в сетке проектов */
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

class ProjectHex extends HTMLElement {
	/**
	 * @param project {Project} - объект проекта
	 */
	constructor(project) {
		super();
		this.appendChild(this.#createTemplate(project));
	}

	/**
	 * Создаёт разметку элемента
	 *
	 * @param project {Project} - объект проекта
	 *
	 * @example template result
	 * <li class="hex">
	 * 	<div class="hexIn">
	 * 		<a class="hexLink" href="javascript:void(0)">
	 * 			<img src="Img\Projects\2.jpg" alt=""/>
	 * 			<h2>Заголовок</h2>
	 * 			<p>Краткий текст</p>
	 * 		</a>
	 * 	</div>
	 * </li>
	 */
	#createTemplate(project) {
		this.classList.add('my-class')
		this.classList.add("hex");
		this.classList.add("jumping-block");

		const div = document.createElement("div");
		div.classList.add("hexIn");

		const a = document.createElement("a");
		a.classList.add("hexLink");
		a.setAttribute("href", project.link);
		a.setAttribute("target", "_blank");

		const img = document.createElement("img");
		img.setAttribute("src", project.imgLink);
		img.setAttribute("alt", "фото проекта " + project.title);


		const h2 = document.createElement("h2");
		h2.innerText = project.title;

		const p = document.createElement("p");
		p.innerText = project.desc;

		a.appendChild(img);
		a.appendChild(h2);
		a.appendChild(p);
		div.appendChild(a);

		return div;
	}
}

customElements.define("project-hex", ProjectHex);

const projectsGrid = document.getElementById("projectsList");
projects.forEach(elem => {
	const projectElement = new ProjectHex(elem);
	console.log(projectElement);
	projectsGrid.appendChild(projectElement);
});

//#endregion


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
