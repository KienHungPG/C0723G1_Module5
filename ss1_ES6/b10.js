/* 10. Tạo một đối tượng "book" với thuộc tính "title", "author" và "pages" bằng cách sử dụng Enhanced object literals. 
Đối tượng "book" cũng có phương thức "displayInfo" để in ra thông tin về sách. */

let book = {
    title : "Tết ở làng địa ngục",
    author : "Thảo Trang",
    page: 35,
    displayInfo : function () {
        console.log("Title: " + this.title + "\n" + "Author: " + this.author + "\n" +"Page number: "+ this.page);
    }
};
book.displayInfo();