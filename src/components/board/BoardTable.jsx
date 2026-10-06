import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

function BoardTable({ boards }) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>번호</TableHead>
                    <TableHead>제목</TableHead>
                    <TableHead>작성자</TableHead>
                    <TableHead>조회수</TableHead>
                    <TableHead>작성일</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {boards.map((board) => (
                    <TableRow key={board.id}>
                        <TableCell>{board.id}</TableCell>
                        <TableCell>{board.title}</TableCell>
                        <TableCell>{board.user?.nickname}</TableCell>
                        <TableCell>{board.hits}</TableCell>
                        <TableCell>{board.createdDatetime}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default BoardTable;