export default 'Markdown 範例與基礎教學\n\
===\n\
\n\
## 前言\n\
Markdown [概述](https://markdown.tw/#overview)\n\
與詳細語法中文介紹：[連結](https://markdown.tw/)\n\
\n\
Markdown is intended to be as easy-to-read and easy-to-write as is feasible.\n\
\n\
## 簡易語法\n\
\n\
\n\
\n\
### 粗體\n\
------------------------------\n\
在文字前後使用兩個星號 `*` 或 底線 `_`\n\
\n\
#### 語法範例：\n\
```\n\
在文章中想要特別註明的文字可以使用**粗體**，\n\
且有兩種方式可以表示__粗體__字，通常代表著這很重要。\n\
\n\
**如要單獨將一行粗體，可以考慮使用標題**\n\
\n\
Life is like a box of **chocolates**.\n\
```\n\
\n\
#### 呈現結果：\n\
在文章中想要特別註明的文字可以使用**粗體**，\n\
且有兩種方式可以表示__粗體__字，通常代表著這很重要。\n\
\n\
**如要單獨將一行粗體，可以考慮使用標題**\n\
\n\
Life is like a box of **chocolates**.\n\
\n\
### 斜體\n\
------------------------------\n\
在文字前後使用一個星號  `*` 或 底線  `_`\n\
\n\
#### 語法範例：\n\
```\n\
在寫技術性領域的論文時，外文字彙、測量值或數學常數會使用*斜體*字。\n\
\n\
*May the force be with you.* ― Luke Skywalker, Star War\n\
```\n\
\n\
#### 呈現結果：\n\
在寫技術性領域的論文時，外文字彙、測量值或數學常數會使用*斜體*字。\n\
\n\
*May the force be with you.* ― Luke Skywalker, Star War\n\
\n\
#### 混合範例：\n\
```\n\
**_Live long and prosper._** ― Mr.Spock, Star Trek\n\
```\n\
\n\
**_Live long and prosper._** ― Mr.Spock, Star Trek\n\
\n\
\n\
\n\
### 刪除線\n\
------------------------------\n\
在文字前後使用兩個 `~`\n\
#### 語法範例：\n\
```\n\
~~願使歲月靜好，現世安穩。~~\n\
\n\
To be , or not to be; that is the ~~question~~.\n\
- William Shakespeare (Hamlet)\n\
```\n\
\n\
#### 呈現結果：\n\
~~願使歲月靜好，現世安穩。~~\n\
\n\
To be , or not to be; that is the ~~question~~.\n\
- William Shakespeare (Hamlet)\n\
\n\
#### 混合範例：\n\
```\n\
__*Winter Is ~Coming~.*__\n\
― George R.R. Martin, A Game of Thrones\n\
```\n\
\n\
__*Winter Is ~Coming~.*__\n\
― George R.R. Martin, A Game of Thrones\n\
\n\
\n\
### 分隔線\n\
------------------------------\n\
在編輯器的一行使用超過三個星號或 `***` 或 `---` 即可\n\
\n\
### 語法範例：\n\
```\n\
下面有分隔線\n\
***\n\
---\n\
```\n\
### 呈現結果：\n\
下面有分隔線\n\
***\n\
---\n\
\n\
\n\
\n\
### 標題\n\
------------------------------\n\
Markdwon 支援`html`的六種標題模式，分別對應到標籤的`<h1>` ~ `<h6>`\n\
\n\
#### 語法範例：\n\
```\n\
# 第一級標題\n\
\n\
## 第二級標題\n\
\n\
### 第三級標題\n\
\n\
#### 第四級標題\n\
\n\
##### 第五級標題\n\
\n\
###### 第六級標題\n\
\n\
一般文字段落\n\
```\n\
\n\
#### 呈現結果：\n\
\n\
# 第一級標題\n\
\n\
## 第二級標題\n\
\n\
### 第三級標\n\
\n\
#### 第四級標題\n\
\n\
##### 第五級標題\n\
\n\
###### 第六級標題\n\
\n\
一般文字段落\n\
\n\
### 列表\n\
\n\
\n\
\n\
### 區塊引言\n\
------------------------------\n\
#### 語法範例：\n\
```\n\
段落\n\
> 這是引言區塊，樣式有特別改過請小心使用。\n\
> 同一個區塊，可以換行方便編輯使用。\n\
> 不太適合過多的引言文字\n\
>\n\
單行\n\
> Keep calm and carry on.\n\
```\n\
\n\
#### 呈現結果：\n\
段落\n\
> 這是引言區塊，樣式有特別改過請小心使用。\n\
> 同一個區塊，可以換行方便編輯使用。\n\
> 不太適合過多的引言文字\n\
>\n\
單行\n\
> Keep calm and carry on.\n\
\n\
### 連結\n\
------------------------------\n\
由中括號跟小括號組成，中括號內放要顯示的文字，小括號內放網址\n\
#### 語法範例：\n\
\n\
```\n\
[MUZIK LISTEN](https://listen.muzikair.com/tw/)\n\
\n\
自動連結：<https://read.muzikair.com/tw/>\n\
\n\
來一首[貝多芬](https://listen.muzikair.com/tw/composers/8ba8899b-d59c-4f2c-97ef-0962bbe1bcdd)的鋼琴[奏鳴曲](https://listen.muzikair.com/tw/composers/works/8ba88c69-e555-4d56-b1eb-e1f96a8e5263)吧！\n\
```\n\
\n\
#### 呈現結果：\n\
[MUZIK LISTEN](https://listen.muzikair.com/tw/)\n\
\n\
自動連結：<https://read.muzikair.com/tw/>\n\
\n\
來一首[貝多芬](https://listen.muzikair.com/tw/composers/8ba8899b-d59c-4f2c-97ef-0962bbe1bcdd)的鋼琴[奏鳴曲](https://listen.muzikair.com/tw/composers/works/8ba88c69-e555-4d56-b1eb-e1f96a8e5263)吧！\n\
\n\
### 圖片\n\
------------------------------\n\
格式基本上跟跟連結一樣，不過前方需要加個驚嘆號 `!`，中括號內的文字僅為圖判提示、圖片預設置中顯示。\n\
\n\
#### 語法範例：\n\
```\n\
![](https://picsum.photos/955/500\?image=1068)\n\
![綠色植物](https://picsum.photos/955/550\?image=530)\n\
\n\
```\n\
#### 呈現結果：\n\
\n\
![](https://picsum.photos/955/500?image=1068)\n\
\n\
![綠色植物](https://picsum.photos/955/550?image=530)\n\
\n\
#### 混合範例：\n\
```\n\
[![](https://northwalker.github.io/dist/img/icons/favicon-32x32.png)](https://github.com/northwalker/vue-markdown-editor)\n\
```\n\
\n\
[![](https://northwalker.github.io/dist/img/icons/favicon-32x32.png)](https://github.com/northwalker/vue-markdown-editor)\n\
\n\
備註：僅慎使用，不支援另開分頁的跳轉\n\
\n\
\n\
\n\
### 表格\n\
------------------------------\n\
空格會被忽略不影響佈局。\n\
\n\
#### 語法範例：\n\
```\n\
\n\
| 標題一  | 標題二  | 標題三     | 標題四          | 標題五 |\n\
| ------ | ------ | --------- | -------------- | ----- |\n\
| 第一格  | 第二格  | 第三格     | 第四格          | 第五格 |\n\
| 第六格  | 第七格  | 第八格     | 第九格          | 第十格 |\n\
| 第十一格 | 第十二格 | 第十三格 | 第十四格 | 第十五格 |\n\
\n\
\n\
|Name (置左對齊)| Died (置中對齊) | No (置右對齊) |\n\
| :------ | :------: | ------: |\n\
| Michelangelo | 1564-02-18 | 000001 |\n\
| Leonardo da Vinci | 1519-05-02 | 000002 |\n\
| Raffaello Sanzio | 1520-04-06 | 000003 |\n\
\n\
```\n\
#### 呈現結果：\n\
\n\
| 標題一  | 標題二  | 標題三     | 標題四          | 標題五 |\n\
| ------ | ------ | --------- | -------------- | ----- |\n\
| 第一格  | 第二格  | 第三格     | 第四格          | 第五格 |\n\
| 第六格  | 第七格  | 第八格     | 第九格          | 第十格 |\n\
| 第十一格 | 第十二格 | 第十三格 | 第十四格 | 第十五格 |\n\
\n\
\n\
|Name (置左對齊)| Died (置中對齊) | No (置右對齊) |\n\
| :------ | :------: | ------: |\n\
| Michelangelo | 1564-02-18 | 000001 |\n\
| Leonardo da Vinci | 1519-05-02 | 000002 |\n\
| Raffaello Sanzio | 1520-04-06 | 000003 |\n\
\n\
\n\
\n\
### 程式碼\n\
------------------------------\n\
需要使用程式碼或包裝變數，使用反引號  ``` ` ``` 將文字包起來，多行則三個 ``` ` ```表示程式碼區塊\n\
#### 語法範例：\n\
```\n\
單行內使用：`i++` 表示 i = i + 1\n\
\n\
多行區塊(移除括弧)：\n\
(```)\n\
const text = "Hello World!";\n\
console.log(text);\n\
(```)\n\
\n\
```\n\
#### 呈現結果：\n\
單行內使用：`i++` 表示 `i` = `i` + 1\n\
\n\
多行區塊：\n\
```\n\
const text = "Hello World!";\n\
console.log(text);\n\
```\n\
\n\
\n\
\n\
## 參考文獻及回報\n\
------------------------------\n\
\n\
1. https://www.jianshu.com/p/335db5716248\n\
2. https://gist.github.com/christech1117/6dc5221c177104990767d6490ad8c7ba\n\
'
