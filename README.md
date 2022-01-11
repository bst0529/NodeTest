# restaurant_list 餐廳清單

展示餐廳類別、地址、評分等資訊

## 運行背景
* 語言：Javascript
* 環境：Node.js
* 框架：Express
* 模板引擎：Express-Handlebars

## 功能
* index(首頁)
  - 使用bootstrap4的Card元件展示餐廳清單
  - 可使用餐廳名稱或餐廳類別(不分大小寫)來過濾出目標清單
* show(詳細資料)
  - 藉由id，找出清單中該項詳細資料，並展現出來

## 啟動
1. 於欲放置專案位置開啟終端機並執行：
```
git clone https://github.com/bst0529/NodeTest.git
```
2. 切換資料夾：
```
cd restaurant_list
```
3. 下載所有引用到的模組
```
npm install
```
4. 如未安裝過nodemon，則安裝nodemon
```
npm install nodemon -g
```
5. 啟動伺服器
```
npm run dev
```
6. 開啟初始畫面 http://localhost:3000

## 畫面

* 首頁
![首頁](./restaurant_list/public/images/img_index.png)
* 詳細資料
![首頁](./restaurant_list/public/images/img_show.png)