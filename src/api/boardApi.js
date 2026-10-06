const API_BASE_URL = "http://localhost:8080/api";


export async function getBoards(){
    const response = await fetch(`${API_BASE_URL}/board`);

    if(!response.ok){
        throw new Error("게시글을 불러오지 못했습니다.");
    }

    return response.json();
}