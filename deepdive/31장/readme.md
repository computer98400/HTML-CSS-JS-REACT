# DOM
브라우저의 렌더링 엔진은 텍스트 파일로 만들어져 있는 웹 문서를 로드한 후, 객체를 부자 관계를 표현할 수 있는 트리 구조 구성하여 메모리에 적재하는데 이를 DOM이라 한다. 즉 모든 요소와 요소의 어트리뷰트, 텍스트를 각각의 객체로 만들고 이들 로 구성한 것이 DOM이다. 

이러한 웹 문서의 동적 변경을 위해 DOM은 프로그래밍 언어가 자신에 접근하고 수정할 수 있는 방법을 제공하는데 일반적으로 프로퍼티와 메소드를 갖는 자바스크립트 객체로 제공된다. 이를 DOM API라 부른다.

DOM은 HTML, ECMAScript에서 정의한 ㅍ준이 아닌 별개의 W3C의 공식 표준이며 플랫폼/ 프로그래밍 언어 중립적이다.

# DOM의 기능
## HTML 문서에 대한 모델 구성
브라우저는 HTML 문서를 로드한 후 해당 문서에 대한 모델을 메모리에 생성한다. 이때 모델은 객체의 트리로 구성되는데 이를 DOM tree라 한다.
## HTML 문서 내의 각 요소에 접근 / 수정
DOM은 모델 내의 각 객체에 접근하고 수정할 수 있는 프로퍼티와 메소드를 제공한다. DOM이 수정되면 브라우저를 통해 사용자가 보게 될 내용 또한 변경된다.



# DOM tree
기존 텍스트 문서를 브라우저가 이해할 수 있는 구조로 변경한 모델을 의미한다.

이는 객체의 트리로 구조화되어 있기 때문에 DOM tree라 부른다.
DOM에서 모든 요소, 어트리뷰트, 텍스트는 하나의 객체이며 Document 객체의 자식이다. 요소의 중첩관계는 객체의 트리로 구조화하여 부자관계를 표현한다.

# DOM tree의 노드
## 문서 노드
트리의 최상위에 존재하며 각각 요소, 어트리뷰트, 텍스트 노드에 접근하려면 문서 노드를 통해야 한다. 즉, DOM tree에 접근하기 위한시작점이다.

## 요소 노드
HTML 요소를 표현한다. HTML 요소는 중첩에 의해 부자 관계를 가지며 이 부자 관계를 통해 정보를 구조화한다. 따라서 요소 노드는 문서의 구조를 서술한다고 말 할 수 있다. 어트리뷰트, 텍스트 노드에 접근하려면 먼저 요소 노드를 찾아 접근해야 한다. 모든 요소 노드는 요소별 특성을 표현하기 위해 HTMLElement 객체를 상속한 객체로 구성된다.

## 어트리뷰트 노드
어트리뷰트 노드는 HTML 요소의 어트리뷰트를 표현한다. 어트리뷰트 노드는 해당 어트리뷰트가 지정된 요소의 자식이 아니라 해당 요소의 일부로 표현된다. 따라서 해당 요소 노드를 찾아 접근하면 어트리뷰트를 참조, 수정할 수 있다.


## 텍스트 노드
HTML 요소의 텍스트를 표현한다. 텍스트 노드는 요소 노드의 자식이며 자신의 자식 노드를 가질 수 없다. 즉, 텍스트 노드는 DOM tree의 최종단이다.


```
<div onclick="Testfunc()">텍스트입니다.</div>
```
- 해당 `<div></div>`의 경우 화면 상에 표시를 위해 브라우저엔진에게 해당 문서가 웹문서입니다!를 알려줄수있는 표현이 필요하다. 이를 문서 노드라고 한다. 
- 이때 div의 경우 요소 노드가 된다.
- onclick의 경우 어트리뷰트노드가 된다.
- "텍스트입니다."이 구문이 텍스트 노드가 된다.



# DOM Query/ Traversing

## 하나의 요소 노드 선택
### document.getElementById
- id 어트리뷰트 값으로 요소 노드를 한 개 선택한다. 복수개가 선택된 경우, 첫번째 요소만 반환한다.
- Return : HTMLElement를 상속받는 객체
- 모든 브라우저에서 동작

### document.querySelector
- CSS 셀렉터를 사용하여 요소 노드를 한 개 선택한다. 복수개가 선택된 경우, 첫번째 요소만 반환한다.
- Return : HTMLElement를 상속받는 객체
- IE8 이상의 브라우저에서 동작

> 둘의 차이는 getElementById의 경우 해당 요소노드에 ID값이 정해져야만 탐색이 가능하다면 querySelector의 경우는 모든 객체 내부에서 임의의 객체를 선택가능하다는 점이 있다.


## 여러 개의 요소 노드 선택
### document.getElementsByClassName()
- class 어트리뷰트 값으로 요소 노드를 모두 선택한다. 공백으로 구분하여 여러 개의 class를 지정할 수 있다.
- Return : HTMLCollection(live)
- IE9 이상의 브라우저에서 동작

```
const elems  = document.getElementsByClassName('red');
for (let i = 0; i < elems.length; i++) {
  // 클래스 어트리뷰트의 값을 변경한다.
  elems[i].className = 'blue';
}
```
HTMLCollection의 경우 <b>실시간으로 Node의 상태 변경을 반영하게 된다.</b>

따라서 해당 요소 노드만을 가져온 뒤에 변경하여 다시 반영하는 형태로 작성되어야한다.

### document.getElementsByTagName()
- 태그명으로 요소 노드를 모두 선택하낟.
- Return : HTMLCollection
- 모든 브라우저에서 동작

### document.querySelectorAll()
- 지정된 CSS 선택자를 사용하여 요소 노드를 모두 선택한다.
- Return: NodeList
- IE8 이상의 브라우저에서 동작

## DOM Traversing
위의 선택자와는 다른 탐색이다. 차이점에 유의하자.

### parentNode
- 부모 노드를 탐색한다.
- Return : HTMLElement를 상속받은 객체
- 모든 브라우저에서 동작

### firstChild, lastChild
- 자식 노드를 탐색한다.
- Return : HTMLElement를 상속받는 객체
- IE9 이상의 브라우저에서 동작

### hasChildNodes()
- 자식 노드가 있는지 확인하고 Boolean 값을 반환한다.
- Return : Boolean 값
- 모든 브라우저에서 동작

### childNodes
- 자식 노드의 컬렉션을 반환한다. 텍스트 요소를 포함한 모든 자식 요소를 반환한다. 
- Return : NodeList
- 모든 브라우저에서 동작

### children
- 자식 노드의 컬렉션을 반환한다. 자식 요소 중에서 Element type 요소만을 반환한다.
- Return : HTMLCollection
- IE9 이상의 브라우저에서 동작

### previousSibling, nextSibling
- 형제 노드를 탐색한다. text node를 포함한 모든 형제 노드를 탐색한다.
- Return : HTMLElement를 상속받는 객체
- 모든 브라우저에서 동작

### previouseElementSibling, nextElementSibling
- 형제 노드를 탐색한다. 형제 노드 중에서 Element type 요소만을 탐색한다.
- Return: HTMLElement를 상속받는 객체
- IE9 이상의 브라우저에서 동작

# DOM Manipulation
## 텍스트 노드에의 접근/수정
1. 해당 텍스트 노드의 부모 노드를 선택한다. 텍스트 노드는 요소 노드의 자식이다.
2. firstChild 프로퍼티를 사용하여 텍스트 노드를 탐색한다.
3. 텍스트 노드의 유일한 프로퍼티를 이용하여 텍스트를 취득한다.
4. nodeValue를 이용하여 텍스트를 수정한다.

## 어트리뷰트 노드에의 접근/수정
- className : class 어트리뷰트의 값을 취득 또는 변경한다.
- classList : add, remove, item, toggle, contains, replace 메소드를 제공
- id : id어트리뷰트의 값을 취득 또는 변경한다. id 프로퍼티에 값을 할당하는 경우, id 어트리뷰트가 존재하지않으면 id 어트리뷰트를 생성하고 지정된 값을 설정한다.
- hasAttribute(IE8 이상의 브라우저에서 동작)
- getAttribute
- setAttribute
- removeAttribute

> React에서 className을 사용하는 이유?? ES6이후로 class가 존재하기 때문에 혼용을 방지하는 차원에서 className을 사용하게 된다.


## HTML 콘텐츠 조작
마크업이 포함된 콘텐츠를 추가하는 행위는 XSS공격에 취약하므로 주의가 필요하다.
- textContent
- innerText : 비표준이며, CSS에 순종적이다. CSS를 고려하면서 동작하기에 속도가 느리다.
- innerHTML : 요소노드의 콘텐츠까지 포함하여 문자열로 반환한다.




## DOM 조작 방식
innerHTML 프로퍼티를 사용하지 않고 새로운콘텐츠를 추가할 수 있는 방법은 DOM을 직접 조작하는 것이다. 한 개의 요소를 추가하는 경우 사용한다.
1. createElement() 메소드를 사용하여 새로운 요소 노드를 생성한다. createElement() 메소드의 인자로 태그 이름을 전달
2. 텍스트 노드 생성 createTextNode() 메소드를 사용하여 새로운 텍스트 노드를 생성한다. 생략시 콘텐츠가 비어있는 요소가 된다.
3. 생성된 요소를 DOM에 추가 appendChild() 메소드를 사용하여 생성된 노드를 DOM tree에 추가한다.


- createElement()
- createTextNode()
- appendChild()
- removeChild()


