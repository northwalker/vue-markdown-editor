Markdown 範例與基礎教學
===

## 前言
Markdown [概述](https://markdown.tw/#overview)
與詳細語法中文介紹：[連結](https://markdown.tw/)

Markdown is intended to be as easy-to-read and easy-to-write as is feasible.

## 簡易語法



### 粗體
------------------------------
在文字前後使用兩個星號 `*` 或 底線 `_`

#### 語法範例：
```
在文章中想要特別註明的文字可以使用**粗體**，
且有兩種方式可以表示__粗體__字，通常代表著這很重要。

**如要單獨將一行粗體，可以考慮使用標題**

Life is like a box of **chocolates**.
```

#### 呈現結果：
在文章中想要特別註明的文字可以使用**粗體**，
且有兩種方式可以表示__粗體__字，通常代表著這很重要。

**如要單獨將一行粗體，可以考慮使用標題**

Life is like a box of **chocolates**.

### 斜體
------------------------------
在文字前後使用一個星號  `*` 或 底線  `_`

#### 語法範例：
```
在寫技術性領域的論文時，外文字彙、測量值或數學常數會使用*斜體*字。

*May the force be with you.* ― Luke Skywalker, Star War
```

#### 呈現結果：
在寫技術性領域的論文時，外文字彙、測量值或數學常數會使用*斜體*字。

*May the force be with you.* ― Luke Skywalker, Star War

#### 混合範例：
```
**_Live long and prosper._** ― Mr.Spock, Star Trek
```

**_Live long and prosper._** ― Mr.Spock, Star Trek



### 刪除線
------------------------------
在文字前後使用兩個 `~`
#### 語法範例：
```
~~願使歲月靜好，現世安穩。~~

To be , or not to be; that is the ~~question~~.
- William Shakespeare (Hamlet)
```

#### 呈現結果：
~~願使歲月靜好，現世安穩。~~

To be , or not to be; that is the ~~question~~.
- William Shakespeare (Hamlet)

#### 混合範例：
```
__*Winter Is ~Coming~.*__
― George R.R. Martin, A Game of Thrones
```

__*Winter Is ~Coming~.*__
― George R.R. Martin, A Game of Thrones


### 分隔線
------------------------------
在編輯器的一行使用超過三個星號或 `***` 或 `---` 即可

### 語法範例：
```
下面有分隔線
***
---
```
### 呈現結果：
下面有分隔線
***
---



### 標題
------------------------------
Markdwon 支援`html`的六種標題模式，分別對應到標籤的`<h1>` ~ `<h6>`

#### 語法範例：
```
# 第一級標題

## 第二級標題

### 第三級標題

#### 第四級標題

##### 第五級標題

###### 第六級標題

一般文字段落
```

#### 呈現結果：

# 第一級標題

## 第二級標題

### 第三級標

#### 第四級標題

##### 第五級標題

###### 第六級標題

一般文字段落

### 列表



### 區塊引言
------------------------------
#### 語法範例：
```
段落
> 這是引言區塊，樣式有特別改過請小心使用。
> 同一個區塊，可以換行方便編輯使用。
> 不太適合過多的引言文字
>
單行
> Keep calm and carry on.
```

#### 呈現結果：
段落
> 這是引言區塊，樣式有特別改過請小心使用。
> 同一個區塊，可以換行方便編輯使用。
> 不太適合過多的引言文字
>
單行
> Keep calm and carry on.

### 連結
------------------------------
由中括號跟小括號組成，中括號內放要顯示的文字，小括號內放網址
#### 語法範例：

```
[MUZIK LISTEN](https://listen.muzikair.com/tw/)

自動連結：<https://read.muzikair.com/tw/>

來一首[貝多芬](https://listen.muzikair.com/tw/composers/8ba8899b-d59c-4f2c-97ef-0962bbe1bcdd)的鋼琴[奏鳴曲](https://listen.muzikair.com/tw/composers/works/8ba88c69-e555-4d56-b1eb-e1f96a8e5263)吧！
```

#### 呈現結果：
[MUZIK LISTEN](https://listen.muzikair.com/tw/)

自動連結：<https://read.muzikair.com/tw/>

來一首[貝多芬](https://listen.muzikair.com/tw/composers/8ba8899b-d59c-4f2c-97ef-0962bbe1bcdd)的鋼琴[奏鳴曲](https://listen.muzikair.com/tw/composers/works/8ba88c69-e555-4d56-b1eb-e1f96a8e5263)吧！

### 圖片
------------------------------
格式基本上跟跟連結一樣，不過前方需要加個驚嘆號 `!`，中括號內的文字僅為圖判提示、圖片預設置中顯示。

#### 語法範例：
```
![](https://picsum.photos/955/500\?image=1068)
![綠色植物](https://picsum.photos/955/550\?image=530)

```
#### 呈現結果：

![](https://picsum.photos/955/500?image=1068)

![綠色植物](https://picsum.photos/955/550?image=530)

#### 混合範例：
```
[![](https://northwalker.github.io/dist/img/icons/favicon-32x32.png)](https://github.com/northwalker/vue-markdown-editor)
```

[![](https://northwalker.github.io/dist/img/icons/favicon-32x32.png)](https://github.com/northwalker/vue-markdown-editor)

備註：僅慎使用，不支援另開分頁的跳轉



### 表格
------------------------------
空格會被忽略不影響佈局。

#### 語法範例：
```

| 標題一  | 標題二  | 標題三     | 標題四          | 標題五 |
| ------ | ------ | --------- | -------------- | ----- |
| 第一格  | 第二格  | 第三格     | 第四格          | 第五格 |
| 第六格  | 第七格  | 第八格     | 第九格          | 第十格 |
| 第十一格 | 第十二格 | 第十三格 | 第十四格 | 第十五格 |


|Name (置左對齊)| Died (置中對齊) | No (置右對齊) |
| :------ | :------: | ------: |
| Michelangelo | 1564-02-18 | 000001 |
| Leonardo da Vinci | 1519-05-02 | 000002 |
| Raffaello Sanzio | 1520-04-06 | 000003 |

```
#### 呈現結果：

| 標題一  | 標題二  | 標題三     | 標題四          | 標題五 |
| ------ | ------ | --------- | -------------- | ----- |
| 第一格  | 第二格  | 第三格     | 第四格          | 第五格 |
| 第六格  | 第七格  | 第八格     | 第九格          | 第十格 |
| 第十一格 | 第十二格 | 第十三格 | 第十四格 | 第十五格 |


|Name (置左對齊)| Died (置中對齊) | No (置右對齊) |
| :------ | :------: | ------: |
| Michelangelo | 1564-02-18 | 000001 |
| Leonardo da Vinci | 1519-05-02 | 000002 |
| Raffaello Sanzio | 1520-04-06 | 000003 |



### 程式碼
------------------------------
需要使用程式碼或包裝變數，使用反引號  ``` ` ``` 將文字包起來，多行則三個 ``` ` ```表示程式碼區塊
#### 語法範例：
```
單行內使用：`i++` 表示 i = i + 1

多行區塊(移除括弧)：
(```)
const text = "Hello World!";
console.log(text);
(```)

```
#### 呈現結果：
單行內使用：`i++` 表示 `i` = `i` + 1

多行區塊：
```
const text = "Hello World!";
console.log(text);
```



## 參考文獻及回報
------------------------------

1. https://www.jianshu.com/p/335db5716248
2. https://gist.github.com/christech1117/6dc5221c177104990767d6490ad8c7ba
