// tạo text lỗi và hiện dưới element
export const errorElement = (textEror: string, element: HTMLElement | null) => {
    const error: HTMLElement = document.createElement('p');
    error.classList.add('text-[#dd4c3b]', 'mt-[-12px]', 'ml-[12px]', 'font-[400]', 'errorLogin');
    error.textContent = textEror;
    element?.insertAdjacentElement('afterend', error)
}