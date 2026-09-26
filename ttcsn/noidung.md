Mình đã đọc tài liệu trong `HIT_JAVA_PRIVATE_2025.zip` và tổng hợp phần OOP theo đúng yêu cầu như sau.

**OOP Là Gì**

OOP, hay lập trình hướng đối tượng, là mô hình lập trình tổ chức chương trình xoay quanh các **đối tượng**. Mỗi đối tượng có dữ liệu riêng và hành vi riêng. Trong Java, OOP giúp code dễ hiểu hơn, dễ bảo trì, dễ mở rộng và gần với cách ta mô tả thế giới thực.

Ví dụ: một con chó có tên, cân nặng, màu lông và có hành vi sủa, ăn, chạy.

```java
class Dog {
    String name;
    double weight;

    void bark() {
        System.out.println("Gau Gau");
    }
}
```

**Các Thành Phần Cơ Bản Của OOP**

**1. Class**

Class là bản thiết kế, khuôn mẫu để tạo ra đối tượng. Class định nghĩa đối tượng sẽ có những thuộc tính nào và hành vi nào.

```java
class Student {
    String name;
    int age;

    void study() {
        System.out.println("Student is studying");
    }
}
```

Có thể hiểu `Student` là kiểu dữ liệu do lập trình viên tự định nghĩa.

**2. Object**

Object là một thực thể cụ thể được tạo ra từ class.

```java
Student student = new Student();
```

Ở đây, `student` là một object được tạo từ class `Student`.

Object thường gồm hai phần:

- **Attribute**: dữ liệu, đặc điểm của đối tượng.
- **Method**: hành vi, chức năng của đối tượng.

**3. Attribute**

Attribute là thuộc tính của đối tượng, dùng để lưu thông tin hoặc trạng thái.

Ví dụ với `Student`:

```java
String name;
int age;
```

`name` và `age` là attribute.

Ví dụ thực tế:

- Sinh viên: tên, tuổi, mã sinh viên, GPA.
- Tài khoản ngân hàng: số tài khoản, chủ tài khoản, số dư.
- Động vật: tên, cân nặng, màu sắc.

**4. Method**

Method là phương thức, tức hành vi hoặc chức năng của đối tượng.

```java
void study() {
    System.out.println("Student is studying");
}
```

Ví dụ thực tế:

- Sinh viên có thể học, làm bài, điểm danh.
- Tài khoản ngân hàng có thể nạp tiền, rút tiền, chuyển tiền.
- Động vật có thể ăn, ngủ, phát ra âm thanh.

**4 Tính Chất Quan Trọng Của OOP**

**1. Đóng Gói**

Đóng gói là việc che giấu dữ liệu bên trong class, không cho bên ngoài truy cập hoặc thay đổi trực tiếp một cách tùy tiện. Thay vào đó, dữ liệu được thao tác thông qua các method như getter, setter hoặc các method nghiệp vụ.

Ví dụ:

```java
public class User {
    private double balance;

    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }

    public void withdraw(double amount) {
        if (amount > 0 && balance >= amount) {
            balance -= amount;
        }
    }
}
```

Ở ví dụ trên, `balance` được để `private`, nên bên ngoài không thể sửa trực tiếp. Muốn thay đổi số dư phải thông qua `deposit()` hoặc `withdraw()`. Điều này giúp bảo vệ dữ liệu và đảm bảo logic chương trình đúng.

**2. Kế Thừa**

Kế thừa cho phép class con sử dụng lại thuộc tính và phương thức của class cha. Nó giúp giảm lặp code và thể hiện quan hệ “is-a”.

Ví dụ: `Dog` là một `Animal`.

```java
class Animal {
    private double weight;

    public void makeSound() {
        System.out.println("Some sound");
    }
}

class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Gau Gau");
    }
}
```

`Dog` kế thừa từ `Animal`, nên có thể dùng các thành phần của `Animal`, đồng thời có thể ghi đè phương thức cho phù hợp với riêng nó.

Trong Java, một class chỉ được kế thừa trực tiếp từ một class cha bằng `extends`.

**3. Đa Hình**

Đa hình nghĩa là cùng một lời gọi phương thức nhưng có thể cho ra hành vi khác nhau tùy vào đối tượng thực tế.

Có hai dạng phổ biến:

**Overloading - nạp chồng**

Cùng tên method nhưng khác tham số.

```java
class Calculator {
    int sum(int a, int b) {
        return a + b;
    }

    double sum(double a, double b) {
        return a + b;
    }
}
```

Java sẽ chọn method phù hợp dựa trên kiểu và số lượng tham số khi compile.

**Overriding - ghi đè**

Class con định nghĩa lại method đã có ở class cha.

```java
class Animal {
    public void makeSound() {
        System.out.println("Some sound");
    }
}

class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Gau Gau");
    }
}

class Cat extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Meo Meo");
    }
}
```

Khi gọi `makeSound()`, nếu object là `Dog` thì in `"Gau Gau"`, nếu là `Cat` thì in `"Meo Meo"`.

**4. Trừu Tượng**

Trừu tượng là việc tập trung vào đối tượng “làm được gì” thay vì “làm như thế nào”. Ta chỉ định nghĩa hành vi cần có, còn chi tiết triển khai để class con xử lý.

Trong Java có hai cách chính để thể hiện trừu tượng:

**Abstract class**

```java
abstract class Animal {
    String name;

    abstract void makeSound();

    void sleep() {
        System.out.println("Sleeping");
    }
}
```

Abstract class có thể có cả thuộc tính, method thường và abstract method.

**Interface**

```java
interface Flyable {
    void fly();
}

interface Swimmable {
    void swim();
}

class Duck implements Flyable, Swimmable {
    public void fly() {
        System.out.println("Duck flies");
    }

    public void swim() {
        System.out.println("Duck swims");
    }
}
```

Interface thường dùng để định nghĩa một nhóm hành vi mà nhiều class khác nhau có thể cùng triển khai.

**Tóm Tắt Ngắn Gọn**

| Khái niệm | Ý nghĩa |
|---|---|
| Class | Khuôn mẫu để tạo object |
| Object | Thực thể cụ thể được tạo từ class |
| Attribute | Dữ liệu, đặc điểm của object |
| Method | Hành vi, chức năng của object |
| Đóng gói | Ẩn dữ liệu, kiểm soát truy cập qua method |
| Kế thừa | Class con tái sử dụng class cha |
| Đa hình | Cùng lời gọi, hành vi khác nhau |
| Trừu tượng | Chỉ mô tả hành vi cần có, ẩn chi tiết triển khai |

TRẮC NGHIỆM

**1. Object**

1. Object trong OOP là gì?  
A. Một kiểu dữ liệu nguyên thủy  
B. Một thực thể cụ thể được tạo ra từ class  
C. Một vòng lặp trong Java  
D. Một câu lệnh điều kiện  
**Đáp án: B**

2. Một object thường bao gồm những gì?  
A. Biến và toán tử  
B. Thuộc tính và phương thức  
C. Package và thư viện  
D. Constructor và comment  
**Đáp án: B**

3. Trong câu lệnh `Student s = new Student();`, object được nhắc đến là gì?  
A. `Student`  
B. `new`  
C. `s`  
D. `String`  
**Đáp án: C**

**2. Class**

1. Class trong Java được hiểu là gì?  
A. Bản thiết kế để tạo object  
B. Một giá trị cụ thể  
C. Một phép toán  
D. Một câu lệnh nhập dữ liệu  
**Đáp án: A**

2. Class có thể chứa những thành phần nào?  
A. Attribute và method  
B. Chỉ chứa số nguyên  
C. Chỉ chứa vòng lặp  
D. Chỉ chứa comment  
**Đáp án: A**

3. Tên class trong Java thường đặt theo quy tắc nào?  
A. camelCase  
B. PascalCase  
C. snake_case  
D. Viết thường toàn bộ  
**Đáp án: B**

**3. Attribute**

1. Attribute là gì?  
A. Hành vi của đối tượng  
B. Thuộc tính lưu trữ thông tin của đối tượng  
C. Tên package  
D. Câu lệnh kết thúc chương trình  
**Đáp án: B**

2. Trong class `Student`, thuộc tính nào phù hợp nhất?  
A. `study()`  
B. `run()`  
C. `name`  
D. `main()`  
**Đáp án: C**

3. Attribute thường dùng để biểu diễn điều gì?  
A. Trạng thái hoặc đặc điểm của object  
B. Luồng xử lý chương trình  
C. File chạy chính  
D. Lệnh biên dịch  
**Đáp án: A**

**4. Method**

1. Method là gì?  
A. Dữ liệu của object  
B. Hành vi hoặc chức năng của object  
C. Tên của project  
D. Một kiểu dữ liệu nguyên thủy  
**Đáp án: B**

2. Ví dụ nào dưới đây là method?  
A. `String name;`  
B. `int age;`  
C. `void study() {}`  
D. `double gpa;`  
**Đáp án: C**

3. Method giúp chương trình như thế nào?  
A. Tái sử dụng logic xử lý  
B. Xóa toàn bộ dữ liệu  
C. Thay thế hoàn toàn class  
D. Không cần tạo object  
**Đáp án: A**

**5. Đóng Gói**

1. Đóng gói trong OOP nhằm mục đích gì?  
A. Cho phép truy cập trực tiếp mọi dữ liệu  
B. Bảo vệ dữ liệu và kiểm soát truy cập  
C. Xóa bỏ class cha  
D. Làm chương trình chạy chậm hơn  
**Đáp án: B**

2. Từ khóa nào thường dùng để che giấu thuộc tính trong Java?  
A. `public`  
B. `private`  
C. `static`  
D. `void`  
**Đáp án: B**

3. Để truy cập thuộc tính `private`, ta thường dùng gì?  
A. Getter và setter  
B. Vòng lặp for  
C. Lệnh switch  
D. Package  
**Đáp án: A**

**6. Kế Thừa**

1. Kế thừa giúp class con làm gì?  
A. Sử dụng lại thuộc tính và phương thức của class cha  
B. Xóa class cha  
C. Không cần constructor  
D. Chỉ dùng được biến static  
**Đáp án: A**

2. Từ khóa nào dùng để kế thừa class trong Java?  
A. `implements`  
B. `extends`  
C. `import`  
D. `package`  
**Đáp án: B**

3. Quan hệ kế thừa thường biểu diễn dạng nào?  
A. has a  
B. is a  
C. use a  
D. make a  
**Đáp án: B**

**7. Đa Hình**

1. Đa hình nghĩa là gì?  
A. Một object không có method  
B. Cùng một lời gọi nhưng hành vi khác nhau tùy object  
C. Một class không có thuộc tính  
D. Một chương trình chỉ có một hàm  
**Đáp án: B**

2. Overloading là gì?  
A. Ghi đè method của class cha  
B. Nhiều method cùng tên nhưng khác tham số  
C. Che giấu dữ liệu  
D. Tạo object mới  
**Đáp án: B**

3. Overriding xảy ra khi nào?  
A. Khi class con định nghĩa lại method của class cha  
B. Khi khai báo biến  
C. Khi nhập dữ liệu từ bàn phím  
D. Khi tạo package  
**Đáp án: A**

**8. Trừu Tượng**

1. Trừu tượng trong OOP tập trung vào điều gì?  
A. Object làm được gì  
B. Object lưu ở đâu trong RAM  
C. Cách viết comment  
D. Cách đặt tên file  
**Đáp án: A**

2. Java hỗ trợ trừu tượng thông qua gì?  
A. `abstract class` và `interface`  
B. `for` và `while`  
C. `int` và `double`  
D. `Scanner` và `System.out`  
**Đáp án: A**

3. Interface thường dùng để làm gì?  
A. Định nghĩa các hành vi mà class phải triển khai  
B. Lưu dữ liệu trực tiếp  
C. Tạo vòng lặp  
D. Thay thế package  
**Đáp án: A**