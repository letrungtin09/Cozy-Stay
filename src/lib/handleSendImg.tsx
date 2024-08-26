import ApiFunctions from "@/lib/api";
let postData: { name: string; type: string; data: string }[] = [];

const generateUniqueFilename = (originalName: string) => {
    const timestamp = Date.now();
    const extension = originalName.split('.').pop();
    return `${timestamp}.${extension}`;
};

const handleFileChange = (fileList: File[]) => {
    fileList.forEach((file: File) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.addEventListener("load", () => {
            if (typeof reader.result === "string") {
                const data = reader.result.split(",")[1];
                postData.push({
                    name: generateUniqueFilename(file.name),
                    type: file.type,
                    data: data,
                });
            }
        });
    });
    console.log(postData)
};

const postFile = async (postData: any) => {
    const apiGdr = "https://script.google.com/macros/s/AKfycbwgpiLav-SfV7E-O-GhYq-DAGYdhWUP5XuMD-7rDLcv3wi97Nz8iUwhRW01pg0ZVidw/exec"
    try {
        const res = await ApiFunctions.postData(apiGdr, postData);
        console.log(res)
    } catch (error) {
        alert("Vui lòng thử lại");
    }
}

const HandleSendImgGenerate = { handleFileChange };

export default HandleSendImgGenerate;