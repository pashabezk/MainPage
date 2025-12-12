/**
 * Class describes bilingual html element that represents heading.
 *
 * @example basic usage
 * <bilingual-heading data-ru-heading="Заголовок" data-en-heading="Heading"></bilingual-heading>
 */
class BilingualHeadingElement extends HTMLElement {
	#enHeading = document.createElement("div");
	#ruHeading = document.createElement("h1");

	constructor() {
		super();
	}

	connectedCallback() {
		const enHeading = this.getAttribute("data-en-heading") ?? '';
		const ruHeading = this.getAttribute("data-ru-heading") ?? '';

		this.#createTemplate();
		this.#enHeading.textContent = enHeading;
		this.#ruHeading.textContent = ruHeading;
	}

	/**
	 * Создаёт разметку элемента
	 *
	 * @example template result
	 * <bilingual-heading class="header-container">
	 * 	<div class="header-big animate-it floating-right">Heading</div>
	 * 	<h1 class="header-small animate-it floating-right-2">Заголовок</h1>
	 * </bilingual-heading>
	 */
	#createTemplate() {
		this.classList.add("header-container");
		this.#enHeading.classList.add("header-big", "animate-it", "floating-right");
		this.#ruHeading.classList.add("header-small", "animate-it", "floating-right-2");
		this.appendChild(this.#enHeading);
		this.appendChild(this.#ruHeading);
	}
}

customElements.define("bilingual-heading", BilingualHeadingElement);
