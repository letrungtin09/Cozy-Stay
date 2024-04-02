const createCategory = async () => {
    try {
        // Dữ liệu mới của danh mục
        const newCategoryData = {
            nameCategory: "123",
            description: "duy."
        };

        // Gửi yêu cầu POST đến API route của bạn
        const response = await fetch(`/api/category`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCategoryData),
        });

        // Kiểm tra xem phản hồi có thành công không
        if (!response.ok) {
            throw new Error('Lỗi khi gửi yêu cầu');
        }

        // Chuyển đổi phản hồi sang dạng JSON
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Lỗi khi tạo category mới:', error);
        throw error;
    }
};

// Gọi hàm createCategory để tạo mới một category
createCategory()
    .then(data => console.log('Dữ liệu được trả về từ API:', data))
    .catch(error => console.error('Lỗi khi tạo category mới:', error));
