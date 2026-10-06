import { useEffect, useState } from "react";
import { getBoards} from "@/api/boardApi.js";
import BoardTable from "@/components/board/BoardTable.jsx";


function BoardListPage(){
    const [boards, setBoards]=useState([]);
    const [loading, setLoading]=useState(true);
    const [error, setError] = useState(null);

    useEffect(()=> {
        async function loadBoards() {
            try {
                const data = await getBoards();
                setBoards(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        loadBoards();

        },[]);

    if (loading) {
        return <div>게시글을 불러오는 중...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }


    return(
        <div>
            <h1> 게시판</h1>
            <BoardTable boards={boards}/>
        </div>

    );

}

export default BoardListPage;