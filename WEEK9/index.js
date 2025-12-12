let name = prompt("Nhập tên của bạn:");
alert("Xin chào, " + name + "!");let todoList = [];

while (true) {
    let choice = prompt("Bạn muốn làm gì? (add / show / edit / remove / exit)");

    switch (choice) {
        case "add":
            let newTask = prompt("Nhập tên công việc:");
            todoList.push(newTask);
            alert("Đã thêm công việc!");
            break;

        case "show":
            if (todoList.length === 0) {
                alert("Danh sách công việc trống.");
            } else {
                let result = "Danh sách công việc:\n";
                let index = 1;
                for (let task of todoList) {
                    result += `${index}. ${task}\n`;
                    index++;
                }
                alert(result);
            }
            break;

        case "edit":
            let oldTask = prompt("Nhập tên công việc cần sửa:");
            let editIndex = -1;
            for (let i = 0; i < todoList.length; i++) {
                if (todoList[i] === oldTask) {
                    editIndex = i;
                    break;
                }
            }
            if (editIndex === -1) {
                alert("Công việc không tồn tại.");
            } else {
                let newContent = prompt("Nhập nội dung mới:");
                todoList[editIndex] = newContent;
                alert("Đã cập nhật công việc!");
            }
            break;

        case "remove":
            let removeTask = prompt("Nhập tên công việc muốn xóa:");
            let removeIndex = -1;
            for (let i = 0; i < todoList.length; i++) {
                if (todoList[i] === removeTask) {
                    removeIndex = i;
                    break;
                }
            }

            if (removeIndex === -1) {
                alert("Công việc không tồn tại.");
            } else {
                for (let i = removeIndex; i < todoList.length - 1; i++) {
                    todoList[i] = todoList[i + 1];
                }
                todoList.length--;
                alert("Đã xóa công việc!");
            }
            break;

        case "exit":
            alert("Cảm ơn đã sử dụng chương trình. Tạm biệt!");
            break;

        default:
            alert("Lệnh không hợp lệ. Vui lòng nhập: add, show, edit, remove, exit");
    }
}
