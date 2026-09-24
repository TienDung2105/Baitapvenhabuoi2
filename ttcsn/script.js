/* ============================================================
   NỘI DUNG: mỗi lesson là 1 flashcard
   front: tiêu đề + câu hỏi gợi mở (mặt trước thẻ)
   theory: lý thuyết (mặt sau thẻ)
   example: code minh hoạ thực tế (mặt sau thẻ)
   lab: bài tập thực hành chạy được
   ============================================================ */
const lessons = [
{ id:"class-object", group:"Nền tảng", title:"Class & Object",
  front:"Một class và một object khác nhau ở chỗ nào?",
  theory:[
    "<strong>Class</strong> là bản thiết kế mô tả một loại đối tượng sẽ có thuộc tính (dữ liệu) và phương thức (hành vi) nào. <strong>Object</strong> là một thực thể cụ thể được tạo ra từ class đó, tồn tại thật trong bộ nhớ.",
    "Ví dụ: class <code>Dog</code> mô tả mọi con chó đều có tên và biết sủa. Khi tạo <code>new Dog(\"Lu\")</code>, ta có một object cụ thể — độc lập với các object Dog khác."
  ],
  example:
`<span class="kw">class</span> Dog {
  <span class="kw">constructor</span>(name) { <span class="kw">this</span>.name = name; }
  bark() { <span class="fn">console</span>.log(<span class="str">\`\${this.name} sủa: Gâu gâu!\`</span>); }
}
<span class="kw">const</span> d1 = <span class="kw">new</span> Dog(<span class="str">"Lu"</span>);
<span class="kw">const</span> d2 = <span class="kw">new</span> Dog(<span class="str">"Mun"</span>);
d1.bark(); d2.bark();`,
  lab:{ task:"Tạo class Cat có name và phương thức meow() in ra '{name} kêu: Meo!'.",
    starter:`class Cat {
  constructor(name) {
    // TODO
  }
  meow() {
    // TODO
  }
}
const c = new Cat("Mèo Mun");
c.meow();`,
    expected:"Mèo Mun kêu: Meo!" }
},
{ id:"encapsulation", group:"4 tính chất OOP", title:"Encapsulation",
  front:"Làm sao để không ai chỉnh sửa dữ liệu nội bộ một cách tùy tiện?",
  theory:[
    "Đóng gói nghĩa là <strong>giấu dữ liệu nội bộ</strong> của object, chỉ cho truy cập qua các phương thức public (getter/setter) — có kiểm soát, có thể validate trước khi gán.",
    "Lợi ích: thay đổi cách lưu trữ bên trong mà không ảnh hưởng code bên ngoài đang dùng class."
  ],
  example:
`<span class="kw">class</span> BankAccount {
  <span class="cm">#balance;</span> <span class="cm">// private field</span>
  <span class="kw">constructor</span>(initial) { <span class="kw">this</span>.#balance = initial; }
  deposit(amount) {
    <span class="kw">if</span> (amount <= 0) <span class="kw">return</span>;
    <span class="kw">this</span>.#balance += amount;
  }
  getBalance() { <span class="kw">return</span> <span class="kw">this</span>.#balance; }
}
<span class="kw">const</span> acc = <span class="kw">new</span> BankAccount(100000);
acc.deposit(50000);
<span class="fn">console</span>.log(acc.getBalance()); <span class="cm">// 150000</span>`,
  lab:{ task:"Thêm withdraw(amount): chỉ trừ nếu amount <= số dư hiện tại. In số dư cuối.",
    starter:`class BankAccount {
  #balance;
  constructor(initial) { this.#balance = initial; }
  deposit(amount) { this.#balance += amount; }
  getBalance() { return this.#balance; }
  withdraw(amount) {
    // TODO
  }
}
const acc = new BankAccount(100000);
acc.withdraw(30000);
console.log(acc.getBalance());`,
    expected:"70000" }
},
{ id:"inheritance", group:"4 tính chất OOP", title:"Inheritance",
  front:"Làm sao để một class dùng lại code của class khác mà không copy-paste?",
  theory:[
    "Kế thừa cho phép class con <strong>tái sử dụng</strong> thuộc tính/phương thức của class cha bằng <code>extends</code>, và có thể mở rộng hoặc ghi đè hành vi.",
    "<code>super(...)</code> gọi constructor của class cha khi khởi tạo class con."
  ],
  example:
`<span class="kw">class</span> Animal {
  <span class="kw">constructor</span>(name) { <span class="kw">this</span>.name = name; }
  speak() { <span class="fn">console</span>.log(<span class="str">\`\${this.name} phát ra âm thanh.\`</span>); }
}
<span class="kw">class</span> Dog <span class="kw">extends</span> Animal {
  <span class="kw">constructor</span>(name) { <span class="kw">super</span>(name); }
  fetch() { <span class="fn">console</span>.log(<span class="str">\`\${this.name} tha bóng về.\`</span>); }
}
<span class="kw">const</span> d = <span class="kw">new</span> Dog(<span class="str">"Lu"</span>);
d.speak(); d.fetch();`,
  lab:{ task:"Tạo class Cat extends Animal, thêm climb() in '{name} trèo cây.'. Gọi speak() và climb().",
    starter:`class Animal {
  constructor(name) { this.name = name; }
  speak() { console.log(\`\${this.name} phát ra âm thanh.\`); }
}
class Cat extends Animal {
  // TODO
}
const c = new Cat("Mun");
c.speak();
c.climb();`,
    expected:"Mun phát ra âm thanh.\nMun trèo cây." }
},
{ id:"polymorphism", group:"4 tính chất OOP", title:"Polymorphism",
  front:"Vì sao gọi cùng một phương thức lại cho ra kết quả khác nhau?",
  theory:[
    "Đa hình: <strong>cùng một phương thức</strong> nhưng mỗi class con thực thi theo cách riêng, qua việc <strong>ghi đè (override)</strong>.",
    "Gọi <code>animal.speak()</code>, chương trình tự chạy đúng phiên bản của class thật sự đứng sau — Dog hay Cat — mà không cần biết trước loại nào."
  ],
  example:
`<span class="kw">class</span> Animal { speak() { <span class="fn">console</span>.log(<span class="str">"..."</span>); } }
<span class="kw">class</span> Dog <span class="kw">extends</span> Animal { speak() { <span class="fn">console</span>.log(<span class="str">"Gâu gâu!"</span>); } }
<span class="kw">class</span> Cat <span class="kw">extends</span> Animal { speak() { <span class="fn">console</span>.log(<span class="str">"Meo!"</span>); } }
<span class="kw">const</span> animals = [<span class="kw">new</span> Dog(), <span class="kw">new</span> Cat()];
<span class="kw">for</span> (<span class="kw">const</span> a <span class="kw">of</span> animals) a.speak();`,
  lab:{ task:"Thêm class Duck extends Animal override speak() -> 'Cạc cạc!'. Lặp qua [Dog, Cat, Duck] gọi speak().",
    starter:`class Animal { speak() { console.log("..."); } }
class Dog extends Animal { speak() { console.log("Gâu gâu!"); } }
class Cat extends Animal { speak() { console.log("Meo!"); } }
// TODO: class Duck extends Animal

const animals = [new Dog(), new Cat(), new Duck()];
for (const a of animals) a.speak();`,
    expected:"Gâu gâu!\nMeo!\nCạc cạc!" }
},
{ id:"abstraction", group:"4 tính chất OOP", title:"Abstraction",
  front:"Người dùng class cần biết bao nhiêu chi tiết bên trong?",
  theory:[
    "Trừu tượng hóa: chỉ phơi ra <strong>những gì cần thiết</strong>, giấu chi tiết cài đặt phức tạp. Người gọi <code>pay()</code> không cần biết bên trong xử lý ra sao.",
    "Trong Java thể hiện qua <code>abstract class</code>/<code>interface</code> — định nghĩa 'phải có gì' mà không quan tâm 'cài ra sao'."
  ],
  example:
`<span class="kw">class</span> PaymentMethod {
  pay(amount) { <span class="kw">throw</span> <span class="kw">new</span> Error(<span class="str">"Lớp con phải cài đặt pay()"</span>); }
}
<span class="kw">class</span> CreditCard <span class="kw">extends</span> PaymentMethod {
  pay(amount) { <span class="fn">console</span>.log(<span class="str">\`Đã trừ \${amount}đ qua thẻ tín dụng.\`</span>); }
}
<span class="kw">function</span> checkout(method, amount) { method.pay(amount); }
checkout(<span class="kw">new</span> CreditCard(), 200000);`,
  lab:{ task:"Tạo MoMoWallet extends PaymentMethod, pay(amount) in 'Đã trừ {amount}đ qua ví MoMo.'. Gọi checkout().",
    starter:`class PaymentMethod {
  pay(amount) { throw new Error("Lớp con phải cài đặt pay()"); }
}
// TODO: class MoMoWallet extends PaymentMethod

function checkout(method, amount) { method.pay(amount); }
checkout(new MoMoWallet(), 200000);`,
    expected:"Đã trừ 200000đ qua ví MoMo." }
},
{ id:"interface-abstract", group:"Chi tiết kỹ thuật", title:"Interface vs Abstract Class",
  front:"Khi nào dùng interface, khi nào dùng abstract class?",
  theory:[
    "<strong>Abstract class</strong> có thể chứa field, constructor, và method đã có thân — hỗ trợ đơn kế thừa (1 class chỉ extends 1 abstract class).",
    "<strong>Interface</strong> chỉ định nghĩa 'hợp đồng' (phải có phương thức gì), không quan tâm cài đặt — một class có thể implement nhiều interface cùng lúc (đa kế thừa hành vi)."
  ],
  example:
`<span class="cm">// Abstract class: có state dùng chung + bắt buộc override</span>
<span class="kw">class</span> Shape {
  <span class="kw">constructor</span>(name) { <span class="kw">this</span>.name = name; }
  area() { <span class="kw">throw</span> <span class="kw">new</span> Error(<span class="str">"phải cài đặt area()"</span>); }
}
<span class="cm">// "Interface" mô phỏng: một hợp đồng nhiều class không liên quan có thể dùng chung</span>
<span class="kw">const</span> Drawable = {
  draw() { <span class="fn">console</span>.log(<span class="str">\`Vẽ \${this.name}, diện tích \${this.area()}\`</span>); }
};
<span class="kw">class</span> Circle <span class="kw">extends</span> Shape {
  <span class="kw">constructor</span>(r) { <span class="kw">super</span>(<span class="str">"Circle"</span>); <span class="kw">this</span>.r = r; }
  area() { <span class="kw">return</span> +(Math.PI * <span class="kw">this</span>.r ** 2).toFixed(2); }
}
Object.assign(Circle.prototype, Drawable);
<span class="kw">new</span> Circle(2).draw();`,
  lab:{ task:"Tạo class Square extends Shape (constructor nhận side), cài area() = side*side. Gán thêm Drawable rồi gọi draw().",
    starter:`class Shape {
  constructor(name) { this.name = name; }
  area() { throw new Error("phải cài đặt area()"); }
}
const Drawable = {
  draw() { console.log(\`Vẽ \${this.name}, diện tích \${this.area()}\`); }
};
// TODO: class Square extends Shape, area() = side * side
// TODO: Object.assign(Square.prototype, Drawable)

new Square(4).draw();`,
    expected:"Vẽ Square, diện tích 16" }
},
{ id:"overload-override", group:"Chi tiết kỹ thuật", title:"Overloading vs Overriding",
  front:"Nạp chồng và ghi đè phương thức khác nhau ở đâu?",
  theory:[
    "<strong>Overloading</strong>: nhiều phương thức cùng tên khác số/kiểu tham số trong cùng class (compile-time). JS không hỗ trợ overloading thật, thường mô phỏng bằng cách kiểm tra <code>arguments.length</code> hoặc tham số mặc định.",
    "<strong>Overriding</strong>: class con định nghĩa lại method có cùng chữ ký với class cha (runtime) — đã thấy ở Inheritance/Polymorphism."
  ],
  example:
`<span class="cm">// Mô phỏng overloading bằng tham số mặc định</span>
<span class="kw">function</span> add(a, b, c = 0) { <span class="kw">return</span> a + b + c; }
<span class="fn">console</span>.log(add(1, 2));    <span class="cm">// 3  — như add(int,int)</span>
<span class="fn">console</span>.log(add(1, 2, 3)); <span class="cm">// 6  — như add(int,int,int)</span>

<span class="cm">// Overriding: ghi đè toString() có sẵn</span>
<span class="kw">class</span> Point {
  <span class="kw">constructor</span>(x, y) { <span class="kw">this</span>.x = x; <span class="kw">this</span>.y = y; }
  toString() { <span class="kw">return</span> <span class="str">\`(\${this.x}, \${this.y})\`</span>; }
}
<span class="fn">console</span>.log(<span class="str">\`Điểm: \${new Point(1,2)}\`</span>);`,
  lab:{ task:"Viết hàm multiply(a,b,c) hoạt động với 2 hoặc 3 tham số (mặc định c=1). In multiply(3,4) và multiply(2,3,4).",
    starter:`function multiply(a, b, c) {
  // TODO
}
console.log(multiply(3, 4));
console.log(multiply(2, 3, 4));`,
    expected:"12\n24" }
},
{ id:"this-super", group:"Chi tiết kỹ thuật", title:"this & super",
  front:"'this' và 'super' trỏ tới đâu?",
  theory:[
    "<code>this</code> tham chiếu tới <strong>object hiện tại</strong> — dùng để phân biệt field với tham số cùng tên.",
    "<code>super</code> tham chiếu tới <strong>class cha</strong> — gọi constructor cha (<code>super(...)</code>) hoặc gọi lại method gốc của cha khi đã override (<code>super.method()</code>)."
  ],
  example:
`<span class="kw">class</span> Employee {
  <span class="kw">constructor</span>(name) { <span class="kw">this</span>.name = name; }
  describe() { <span class="kw">return</span> <span class="str">\`Nhân viên: \${this.name}\`</span>; }
}
<span class="kw">class</span> Manager <span class="kw">extends</span> Employee {
  <span class="kw">constructor</span>(name, teamSize) {
    <span class="kw">super</span>(name); <span class="cm">// gọi constructor cha</span>
    <span class="kw">this</span>.teamSize = teamSize;
  }
  describe() {
    <span class="kw">return</span> <span class="kw">super</span>.describe() + <span class="str">\`, quản lý \${this.teamSize} người\`</span>; <span class="cm">// mở rộng method cha</span>
  }
}
<span class="fn">console</span>.log(<span class="kw">new</span> Manager(<span class="str">"An"</span>, 5).describe());`,
  lab:{ task:"Tạo class Director extends Manager, override describe() gọi super.describe() rồi thêm ', là Giám đốc'.",
    starter:`class Employee {
  constructor(name) { this.name = name; }
  describe() { return \`Nhân viên: \${this.name}\`; }
}
class Manager extends Employee {
  constructor(name, teamSize) { super(name); this.teamSize = teamSize; }
  describe() { return super.describe() + \`, quản lý \${this.teamSize} người\`; }
}
// TODO: class Director extends Manager

console.log(new Director("Bình", 10).describe());`,
    expected:"Nhân viên: Bình, quản lý 10 người, là Giám đốc" }
},
{ id:"static", group:"Chi tiết kỹ thuật", title:"Static vs Instance",
  front:"Dữ liệu nào nên dùng chung cho mọi object, dữ liệu nào nên riêng?",
  theory:[
    "Thành viên <strong>instance</strong> thuộc riêng từng object — mỗi object có bản riêng.",
    "Thành viên <strong>static</strong> thuộc về class, chỉ một bản dùng chung — hay dùng để đếm số object, hoặc chứa hằng số/hàm tiện ích."
  ],
  example:
`<span class="kw">class</span> User {
  <span class="kw">static</span> count = 0;
  <span class="kw">constructor</span>(name) { <span class="kw">this</span>.name = name; User.count++; }
}
<span class="kw">new</span> User(<span class="str">"An"</span>); <span class="kw">new</span> User(<span class="str">"Bình"</span>);
<span class="fn">console</span>.log(User.count); <span class="cm">// 2</span>`,
  lab:{ task:"Thêm static reset() đưa count về 0. Tạo 3 user, gọi reset(), in count.",
    starter:`class User {
  static count = 0;
  constructor(name) { this.name = name; User.count++; }
  // TODO: static reset()
}
new User("An"); new User("Bình"); new User("Chi");
User.reset();
console.log(User.count);`,
    expected:"0" }
},
{ id:"composition", group:"Chi tiết kỹ thuật", title:"Composition vs Inheritance",
  front:"'is-a' hay 'has-a' — khi nào chọn cái nào?",
  theory:[
    "Kế thừa mô tả quan hệ <strong>is-a</strong> (Dog là một Animal). Composition mô tả quan hệ <strong>has-a</strong> (Car có một Engine) — chứa object của class khác làm field thay vì kế thừa.",
    "Composition linh hoạt hơn: đổi 'linh kiện' bên trong lúc runtime mà không cần sửa cấu trúc kế thừa."
  ],
  example:
`<span class="kw">class</span> Engine { start() { <span class="fn">console</span>.log(<span class="str">"Động cơ nổ máy..."</span>); } }
<span class="kw">class</span> Car {
  <span class="kw">constructor</span>(engine) { <span class="kw">this</span>.engine = engine; }
  drive() { <span class="kw">this</span>.engine.start(); <span class="fn">console</span>.log(<span class="str">"Xe bắt đầu chạy."</span>); }
}
<span class="kw">const</span> car = <span class="kw">new</span> Car(<span class="kw">new</span> Engine());
car.drive();`,
  lab:{ task:"Tạo ElectricEngine với start() in 'Động cơ điện khởi động êm ái.'. Tạo Car dùng nó, gọi drive().",
    starter:`class Engine { start() { console.log("Động cơ nổ máy..."); } }
class Car {
  constructor(engine) { this.engine = engine; }
  drive() { this.engine.start(); console.log("Xe bắt đầu chạy."); }
}
// TODO: class ElectricEngine

const car = new Car(new ElectricEngine());
car.drive();`,
    expected:"Động cơ điện khởi động êm ái.\nXe bắt đầu chạy." }
},
{ id:"srp", group:"Thiết kế nâng cao", title:"SOLID — Single Responsibility",
  front:"Một class đang làm quá nhiều việc thì sao?",
  theory:[
    "Nguyên lý S trong SOLID: <strong>một class chỉ nên có một lý do duy nhất để thay đổi</strong> — tức chỉ đảm nhiệm một trách nhiệm.",
    "Nếu một class vừa tính toán vừa lưu dữ liệu, khi một trong hai thay đổi thì class đó cũng phải sửa — nên tách thành hai class riêng, mỗi class 'làm một việc' thật tốt (high cohesion)."
  ],
  example:
`<span class="cm">// Vi phạm SRP: UserManager vừa validate vừa lưu dữ liệu</span>
<span class="cm">// Tách thành 2 class riêng, mỗi class một trách nhiệm:</span>
<span class="kw">class</span> UserValidator {
  isValid(user) { <span class="kw">return</span> !!user.name && user.name.length > 0; }
}
<span class="kw">class</span> UserRepository {
  <span class="kw">constructor</span>() { <span class="kw">this</span>.users = []; }
  save(user) { <span class="kw">this</span>.users.push(user); }
}
<span class="kw">const</span> validator = <span class="kw">new</span> UserValidator();
<span class="kw">const</span> repo = <span class="kw">new</span> UserRepository();
<span class="kw">const</span> user = { name: <span class="str">"An"</span> };
<span class="kw">if</span> (validator.isValid(user)) repo.save(user);
<span class="fn">console</span>.log(repo.users.length);`,
  lab:{ task:"Thêm UserRepository.remove(name) xóa user theo tên. Lưu 2 user, remove 1, in số lượng còn lại.",
    starter:`class UserValidator {
  isValid(user) { return !!user.name && user.name.length > 0; }
}
class UserRepository {
  constructor() { this.users = []; }
  save(user) { this.users.push(user); }
  remove(name) {
    // TODO: loại bỏ user có name trùng khỏi this.users
  }
}
const repo = new UserRepository();
repo.save({ name: "An" });
repo.save({ name: "Bình" });
repo.remove("An");
console.log(repo.users.length);`,
    expected:"1" }
},
{ id:"singleton", group:"Thiết kế nâng cao", title:"Design Pattern: Singleton",
  front:"Làm sao đảm bảo một class chỉ có đúng 1 instance?",
  theory:[
    "Singleton đảm bảo một class <strong>chỉ có duy nhất một instance</strong> trong toàn ứng dụng — thường dùng cho config, kết nối database, logger.",
    "Cách làm: class tự lưu instance của mình, phương thức <code>getInstance()</code> trả về instance đã tạo nếu có, hoặc tạo mới nếu chưa."
  ],
  example:
`<span class="kw">class</span> AppConfig {
  <span class="kw">static</span> #instance;
  <span class="kw">constructor</span>() {
    <span class="kw">if</span> (AppConfig.#instance) <span class="kw">return</span> AppConfig.#instance;
    <span class="kw">this</span>.settings = {};
    AppConfig.#instance = <span class="kw">this</span>;
  }
  <span class="kw">static</span> getInstance() { <span class="kw">return</span> AppConfig.#instance ?? <span class="kw">new</span> AppConfig(); }
}
<span class="kw">const</span> c1 = AppConfig.getInstance();
c1.settings.theme = <span class="str">"dark"</span>;
<span class="kw">const</span> c2 = AppConfig.getInstance();
<span class="fn">console</span>.log(c2.settings.theme); <span class="cm">// "dark" — cùng 1 instance</span>`,
  lab:{ task:"Thêm phương thức set(key,val)/get(key) cho AppConfig. Set 'lang'='vi' qua c1, get lại qua c2.",
    starter:`class AppConfig {
  static #instance;
  constructor() {
    if (AppConfig.#instance) return AppConfig.#instance;
    this.settings = {};
    AppConfig.#instance = this;
  }
  static getInstance() { return AppConfig.#instance ?? new AppConfig(); }
  // TODO: set(key, val) và get(key)
}
const c1 = AppConfig.getInstance();
c1.set("lang", "vi");
const c2 = AppConfig.getInstance();
console.log(c2.get("lang"));`,
    expected:"vi" }
},
{ id:"factory", group:"Thiết kế nâng cao", title:"Design Pattern: Factory",
  front:"Làm sao tạo object mà không gọi 'new' rải rác khắp nơi?",
  theory:[
    "Factory cung cấp <strong>một phương thức tạo object tập trung</strong>, ẩn logic khởi tạo phức tạp khỏi nơi sử dụng — thay vì gọi <code>new</code> trực tiếp ở nhiều chỗ.",
    "Lợi ích: dễ thêm loại object mới, hoặc đổi cách khởi tạo, mà không phải sửa code ở nơi gọi."
  ],
  example:
`<span class="kw">class</span> Circle { area() { <span class="kw">return</span> <span class="str">"hình tròn"</span>; } }
<span class="kw">class</span> Square { area() { <span class="kw">return</span> <span class="str">"hình vuông"</span>; } }

<span class="kw">class</span> ShapeFactory {
  <span class="kw">static</span> create(type) {
    <span class="kw">if</span> (type === <span class="str">"circle"</span>) <span class="kw">return</span> <span class="kw">new</span> Circle();
    <span class="kw">if</span> (type === <span class="str">"square"</span>) <span class="kw">return</span> <span class="kw">new</span> Square();
    <span class="kw">throw</span> <span class="kw">new</span> Error(<span class="str">"Không rõ loại shape"</span>);
  }
}
<span class="fn">console</span>.log(ShapeFactory.create(<span class="str">"circle"</span>).area());`,
  lab:{ task:"Thêm class Triangle (area() trả về 'hình tam giác') và case 'triangle' trong ShapeFactory.",
    starter:`class Circle { area() { return "hình tròn"; } }
class Square { area() { return "hình vuông"; } }
// TODO: class Triangle

class ShapeFactory {
  static create(type) {
    if (type === "circle") return new Circle();
    if (type === "square") return new Square();
    // TODO: thêm case "triangle"
    throw new Error("Không rõ loại shape");
  }
}
console.log(ShapeFactory.create("triangle").area());`,
    expected:"hình tam giác" }
}
];

/* ============================================================
   STATE + RENDER
   ============================================================ */
let currentIndex = 0;
const completed = new Set();
const flipped = new Set(); // ids của card đã lật ít nhất 1 lần

function renderProgress(){
  const pct = Math.round((completed.size / lessons.length) * 100);
  document.getElementById("progressFill").style.width = pct + "%";
  document.getElementById("progressLabel").textContent = `${completed.size}/${lessons.length} bài đã hoàn thành lab`;
}

function renderSidebar(){
  const nav = document.getElementById("nav");
  nav.innerHTML = "";
  let lastGroup = null;
  lessons.forEach((lesson, i) => {
    if (lesson.group !== lastGroup){
      const label = document.createElement("div");
      label.className = "nav-group-label";
      label.textContent = lesson.group;
      nav.appendChild(label);
      lastGroup = lesson.group;
    }
    const item = document.createElement("div");
    item.className = "nav-item" + (i === currentIndex ? " active" : "") + (completed.has(lesson.id) ? " done" : "");
    item.innerHTML = `<span class="dot"></span><span>${lesson.title}</span>`;
    item.addEventListener("click", () => { currentIndex = i; renderAll(); });
    nav.appendChild(item);
  });
  renderProgress();
}

function renderMain(){
  const lesson = lessons[currentIndex];
  const main = document.getElementById("main");
  const alreadyFlipped = flipped.has(lesson.id);

  main.innerHTML = `
    <div class="crumb">${lesson.group} <span class="accent">/</span> ${lesson.title}</div>

    <div class="flashcard ${alreadyFlipped ? "flipped" : ""}" id="flashcard">
      <div class="flip-inner">
        <div class="face front">
          <div class="eyebrow">Flashcard ${currentIndex + 1}/${lessons.length}</div>
          <h2>${lesson.front}</h2>
          <p class="teaser">${lesson.title}</p>
          <div class="flip-hint">↻ Nhấn vào thẻ để xem lý thuyết + ví dụ</div>
        </div>
        <div class="face back ${alreadyFlipped ? "expanded" : ""}" id="backFace">
          <div class="flip-hint">↻ Nhấn để lật lại mặt trước</div>
          <h3>${lesson.title}</h3>
          <div class="theory">${lesson.theory.map(p => `<p>${p}</p>`).join("")}</div>
          <div class="section-label">Ví dụ thực tế</div>
          <pre class="example"><code>${lesson.example}</code></pre>
        </div>
      </div>
    </div>

    <div class="section-label">Lab thực hành</div>
    <div class="lab">
      <div class="lab-head">
        <div class="task">${lesson.lab.task}</div>
        <button class="run-btn" id="runBtn">▶ Chạy code</button>
      </div>
      <textarea class="editor" id="editor" spellcheck="false">${lesson.lab.starter}</textarea>
      <div class="console" id="console"><span class="placeholder">Nhấn "Chạy code" để xem kết quả ở đây.</span></div>
      <div class="console-verdict" id="verdict"></div>
    </div>

    <div class="footer-nav">
      <button id="prevBtn" ${currentIndex === 0 ? "disabled" : ""}>← Bài trước</button>
      <button id="nextBtn" ${currentIndex === lessons.length - 1 ? "disabled" : ""}>Bài tiếp →</button>
    </div>
  `;

  const card = document.getElementById("flashcard");
  card.addEventListener("click", (e) => {
    if (e.target.closest(".run-btn") || e.target.closest(".editor")) return;
    toggleFlip(lesson.id);
  });

  document.getElementById("runBtn").addEventListener("click", (e) => { e.stopPropagation(); runLab(lesson); });
  document.getElementById("prevBtn").addEventListener("click", () => { if (currentIndex > 0){ currentIndex--; renderAll(); } });
  document.getElementById("nextBtn").addEventListener("click", () => { if (currentIndex < lessons.length - 1){ currentIndex++; renderAll(); } });
}

function toggleFlip(id){
  const card = document.getElementById("flashcard");
  const back = document.getElementById("backFace");
  card.classList.toggle("flipped");
  flipped.add(id);
  // sau khi hiệu ứng lật xong, cho phép back face giãn theo nội dung thay vì cắt cứng
  setTimeout(() => {
    if (card.classList.contains("flipped")) back.classList.add("expanded");
  }, 260);
}

function runLab(lesson){
  const code = document.getElementById("editor").value;
  const consoleEl = document.getElementById("console");
  const verdictEl = document.getElementById("verdict");
  const logs = [];

  const fakeConsole = {
    log: (...args) => logs.push({ text: args.map(a => typeof a === "object" ? JSON.stringify(a) : String(a)).join(" "), error:false })
  };

  try {
    const fn = new Function("console", code);
    fn(fakeConsole);
  } catch (e){
    logs.push({ text: e.message, error:true });
  }

  consoleEl.innerHTML = logs.length === 0
    ? `<span class="placeholder">(không có output — dùng console.log để in kết quả)</span>`
    : logs.map(l => `<div class="line ${l.error ? "error" : ""}">${escapeHtml(l.text)}</div>`).join("");

  const output = logs.filter(l => !l.error).map(l => l.text).join("\n").trim();
  const expected = (lesson.lab.expected || "").trim();

  verdictEl.classList.remove("ok","err","show");
  if (logs.some(l => l.error)){
    verdictEl.textContent = "⚠ Code bị lỗi khi chạy — xem chi tiết ở trên.";
    verdictEl.classList.add("err","show");
  } else if (expected && output === expected){
    verdictEl.textContent = "✓ Chính xác — output khớp với yêu cầu.";
    verdictEl.classList.add("ok","show");
    completed.add(lesson.id);
    renderSidebar();
  } else if (expected){
    verdictEl.textContent = "✗ Chưa đúng — output chưa khớp, thử lại nhé.";
    verdictEl.classList.add("err","show");
  }
}

function escapeHtml(str){
  return str.replace(/[&<>]/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;" }[c]));
}

function renderAll(){
  renderSidebar();
  renderMain();
  window.scrollTo(0,0);
}
renderAll();
