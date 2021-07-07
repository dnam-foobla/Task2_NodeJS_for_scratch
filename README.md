# NodeJS for scratch

### QUESTION 1: NodeJS là gì?

NodeJS KHÔNG phải một ngôn ngữ lập trình. NodeJS là một platform cho ta chạy code Javascript bên backend.Nó được viết và tích hợp bởi core là C++ và Google V8 engine. NodeJs đơn luồng và hướng sự kiện. Việc này sẽ được trình bày tại task 3 một cách rõ ràng.

### QUESTION 2: Cài đặt môi trường, ứng dụng Hello World

Bước 0: Kiểm tra xem máy đã cài platform NodeJs chưa bằng câu lệnh sau trong command line:

```shell
node -v
```

Nếu đã cài đặt sẽ hiện ra phiên bản và tiếp tục bước 2. Không thì chạy bước 1

Bước 1: Đơn giản chỉ cần truy cập trang chủ NodeJs [tại đây](https://nodejs.org/en/) và tải phiên bản LTS (Long term support) để có trải nghiệm ổn định nhất.

Bước 2: Tạo 1 file bất kì và viết code Hello World.

Example:
``index.js
```javascript
console.log("Hello World")
```
Bước 3: Bật terminal và chạy.

```shell
node index.js
```

### QUESTION 3: npm là gì?

* npm là viết tắt của node package manager để quản lý các package của Node
* Chạy npm trong project đơn giản và nhanh nhất với câu lệnh 
  ```shell
  npm init --yes
  ```
  Sau đó có thể làm việc rồi!
  Ví dụ nếu cài package trong project dùng
  ```shell
  npm instal <package>
  ```
  Hoặc viết gọn 
  ```shell
  npm i <package>
  ```
  
  Có thể thêm --save-dev để cài package vào dev-dependency để phát triển, còn khi deploy sẽ không có.
  
### QUESTION 4: Nodemon

Nodemon là package giúp ta không cần restart server mỗi khi thay đổi code. Khi nhận được sự thay đổi code nó sẽ tự động reload lại server cho ta. Có thể tưởng tượng như cơ chế Virtual DOM huyền thoại của React nhưng đây là phía server
