export const errorElement = (textEror: string, element: HTMLElement | null) => {
    const error: HTMLElement = document.createElement('p');
    error.classList.add('text-color-red-0', 'mt-[-12px]', 'ml-[12px]', 'font-[400]', 'errorLogin');
    error.textContent = textEror;
    element?.insertAdjacentElement('afterend', error)
}