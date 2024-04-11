// tạo text lỗi và hiện dưới element
export const errorElement = (textEror: string, element: HTMLElement | null) => {
    const error: HTMLElement = document.createElement('p');
    error.classList.add('errorLogin', 'text-[#dd4c3b]', 'mt-[-8px]', 'ml-[8px]', 'font-[500]');
    error.textContent = textEror;
    element?.insertAdjacentElement('afterend', error)
}