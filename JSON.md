# JSON

```Javascript Object Notion```으로,  

 JSON은 좀 더 쉽게 데이터를 교환하고 저장하기 위하여 만들어진 텍스트 기반의 데이터 교환 표준이다. 자바스크립트를 기반으로 만들어졌다.

JSON은 사람이 읽을 수 있는 텍스트 기반의 데이터 교환 표준이다. 이러한 JSON은 XML보다 좀 더 쉽게 데이터를 교환하고 저장하기 위하여 고안됐다.

또한, 어떠한 프로그래밍 언어에서도 JSON 데이터를 읽고 사용할 수 있다.

--------

### 특징

1. 자바스크립트를 확장하여 만들어졌다.

2. 자바스크립트 객체 표기법을 따른다.

3. 사람과 기계가 모두 읽기 편하도록 고안됐다.

4. 프로그래밍 언어와 운영체제에 독립적이다.

-----

#### XML과 공통점

1. 데이터를 저장하고 전달하기 위해 고안됐다.
2. 기계뿐만 아니라 사람도 쉽게 읽을 수 있다.
3. 계층적인 데이터 구조를 가진다.
4. 다양한 프로그래밍 언어에 의해 파싱될 수 있다.
5. XMLHttpRequest 객체(서버에 데이터를 요청하기 위한)를 이용해 서버로부터 데이터를 전송받을 수 있다.

#### XML과 차이점

1. JSON은 종료태그를 사용하지 않는다.
2. JSON 구문이 더 짧다.
3. JSON 데이터가 더 빨리 읽고 쓸 수 있다.
4. XML은 배열을 사용할 수 없다.
5. XML은 XML 파서로, JSON은 JS 표준 함수 eval() 함수로 파싱된다.

---------

### JSON 스키마

JSON은 좀 더 쉽게 데이터를 교환하고 저장하기 위해 만들어진 데이터 교환 표준이다. 이때 JSON 데이터를 전송받는 측에서 전송받은 데이터가 올바른 형식인지 확인할 방법이 필요하다.

올바른 JSON 데이터 형식을 기술한 문서를 JSON 스키마라고 한다.

```
1. 데이터의 타입이 정확한가?
2. 필수로 받아와야 하는 데이터가 포함되어 있는가?
3. 데이터가 원하는 범위 안에 있는가?
```

다음 세 가지 검증 과정을 거치는데, 모두 키워드를 이용하여 명시할 수 있다.

-----

#### 검증 키워드(validation keywords)

* type : 유효한 데이터의 타입을 명시
* properties : 유효한 데이터 이름과 값의 쌍들을 명시
* required : 명시한 배열의 모든 요소를 프로퍼티로 가지고 있어야만 유효
* minimum : 최솟값 이상의 숫자만 유효
* maximum : 최댓값 이하의 숫자만 유효
* multipleOf : 명시한 숫자의 배수만 유효
* maxLength : 명시한 최대 길이 이하의 문자열만 유효
* minLength : 명시한 최소 길이 이상의 문자열만 유효
* pattern : 명시한 정규 표현식에 해당하는 문자열만 유효

또한 스키마에 대한 정보를 나타내는 메타데이터 키워드에는 title, description, default가 있다.

예시)

```
{
    "title": "강아지 스키마",
    "description": "이 스키마는 강아지에 관한 데이터를 검증하기 위한 스키마임",
    "type": "object",
    "properties": {
        "name": {"type": "string"},
        "family": {"type": "string"},
        "age": {"type": "integer"},		
        "weight": {"type": "number"},	
        "owner": {
            "type": "object",
            "properties": {
                "ownerName": {"type": "string"},
                "phone": {"type": "string"}
            }
        }
    }
}

```



**숫자검증**

type 키워드의 값을 integer로 명시하면, 해당 데이터가 정수인지를 검사한다.

type 키워드의 값을 number로 명시하면, 해당 데이터가 숫자인지를 검사한다.

multipleOf 키워드를 사용하여 해당 숫자가 명시된 숫자의 배수인지를 검사한다.

minimum과 maximum 키워드를 사용하면 해당 숫자가 가질 수 있는 최솟값과 최댓값을 명시할 수 있고, exclusiveMinimum과 exclusiveMaximum 키워드는 불리언 값을 명시할 수 있다.

```
//정수검증
{
    "type": "integer"
}
//숫자검증
{
    "type": "number"
}
//배수검증
{
    "type": "number",
    "multipleOf": 3
}
//범위검증 : 1보다 크거나 같고 10보다는 작은 정수 또는 실수인지 검사
{
    "type": "number",
    "minimum": 1,
    "maximum": 10,
    "exclusiveMaximum": true
}
```



**문자열검증**

type 키워드의 값을 string으로 명시하면, 해당 JSON 데이터가 유니코드 문자열인지를 검사해준다.

minLength와 maxLength 키워드를 사용하여 해당 문자열의 길이가 유효한지를 검사할 수 있다.(이때 키워드 값은 0을 포함한 양수만 사용 가능)

```
//문자열검증
{
    "type": "string"
}
//문자열길이검증
{
    "type": "string",
    "minLength": 1,
    "maxLength": 4
}
```



**정규표현식(regular expression)검증**

pattern 키워드를 사용하여 해당 문자열이 명시된 정규 표현식과 일치하는지를 검사할 수 있다.

정규표현식은 문자열에서 특정한 규칙을 가지는 문자열의 집합을 찾아내기 위한 검색패턴이다.

| 패턴문자 | 설명                                                         |
| -------- | ------------------------------------------------------------ |
| ^a       | 단어의 맨 앞에 위치한 패턴만 검색 ('a'로 시작하는 단어의 'a'만 검색) |
| a$       | 단어의 맨 뒤에 위치한 패턴만 검색 ('a'로 끝나는 단어의 'a'만 검색) |
| a(b)c    | 전체 패턴을 검색한 후에 괄호 안에 명시된 문자열을 저장 ('abc'를 검색한 후에 b를 저장) |
| [abc]    | [] 안에 명시된 문자 검색 ('abc'검색)                         |
| [a-z]    | [] 안에 명시된 범위의 문자 검색 (a부터 z까지 검색)           |
| [^abc]   | [] 안에 명시된 문자 이외의 문자를 검색 ('abc'를 제외한 문자를 검색) |
| [^a-z]   | [] 안에 명시된 범위의 문자를 제외한 문자를 검색 (a부터 z까지를 제외한 문자를 검색) |
| n+       | 앞의 문자가 1번 이상 나타날 경우 검색 = [1,]                 |
| n*       | 앞의 문자가 0번 이상 나타날 경우 검색 = [0,]                 |
| n?       | 앞의 문자가 0번 또는 1번만 나타날 경우 검색 = [0,1]          |
| {n}      | 앞의 문자가 정확히 n번 나타날 경우를 검색, n은 반드시 양의 정수 |
| {m,n}    | 앞의 문자가 최소 m번이상 최대 n번이하로 나타날 경우를 검색, m과 n은 반드시 양의 정수 |

예시)

```
{
    "type": "string",
    "pattern": "[a-z]+"
}
```

...

------------

### 스키마 결합

**allOf**

명시된 배열에 나열된 모든 JSON 스키마를 한 번에 검사할 수 있다. 이때 배열에 나열된 스키마에 대한 검증을 <u>모두 통과</u>해야 한다.

```
{
    "allOf": [
        {"minLength": 3},
        {"maxLength": 5}
    ]
}
```

위 코드는 해당 문자열 데이터의 길이가 3 이상이고 5 이하인지를 검사한다.

**anyOf**

명시된 배열에 나열된 모든 JSON 스키마를 한 번에 검사할 수 있다. 이때 배열에 나열된 <u>하나 이상</u>의 스키마에 대한 검증을 통과해야 한다.

```
{
    "anyOf": [
        {"type": "string"},
        {"type": "number"}
    ]
}
```

위 코드는 해당 데이터가 문자열이나 숫자인지 검사한다.

**oneOf**

명시된 배열에 나열된 모든 JSON 스키마를 한 번에 검사할 수 있다. 이때 배열에 나열된 <u>오직 하나</u>의 스키마에 대한 검증만을 통과해야 한다.

```
{
    "oneOf": [
        { "type": "number", "multipleOf": 3 },
        { "type": "number", "multipleOf": 4 }
    ]
}
```

위 코드는 당 데이터가 숫자이면서 3의 배수이거나, 아니면 숫자이면서 4의 배수인지를 검사한다.

**not**

명시된 JSON 스키마를 만족하지 않는 데이터만을 검사할 수 있다.

```
{
    "not": {
        "type": "string"
    }
}
```

위 코드는 해당 데이터가 문자가 아닌지를 검사한다.

-----------

### 표현 방법

1. JSON 데이터는 이름과 값의 쌍으로 이루어진다.

```
"name": "동동"
```

​	데이터 값으로는 숫자(정수, 실수, 지수), 문자열, 불리언, 객체, 배열, null을 사용할 수 있다.

2. JSON 데이터는 쉼표(,)로 나열된다.

3. 객체(object)는 중괄호({})로 둘러쌓아 표현한다.

```
{
    "name": "동동",
    "family": "말티즈",
    "age": 2,
    "weight": 3.12
}
```

3. 배열(array)은 대괄호([])로 둘러쌓아 표현한다.

```
"dog": [
    {"name": "봉봉", "family": "웰시코기", "age": 1, "weight": 2.14},
    {"name": "제임스", "family": "포메라니안", "age": 3, "weight": 2.5},
    {"name": "캉캉", "family": "푸들", "age": 7, "weight": 3.1}
]
```

4. 되도록 주석을 사용하지 않는 것이 좋다. (서로 다른 시스템 간 연동과 호환성을 위해)

-------

### 메서드

**JSON.parse()**

문자열을 분석하고, 선택적으로 분석 결과의 값과 속성을 변환해 반환한다.

```
var json = '{"result":true, "count":42}';
obj = JSON.parse(json);

console.log(obj.count);
// 42

console.log(obj.result);
// true
```



**JSON.stringify()**

주어진 값에 해당하는 문자열을 반환한다. 선택 사항으로 특정 속성만 포함하거나 사용자 정의 방식으로 속성을 대체한다.

```
console.log(JSON.stringify({ x: 5, y: 6 }));
// "{"x":5,"y":6}"

console.log(JSON.stringify([new Number(3), new String('false'), new Boolean(false)]));
// "[3,"false",false]"

console.log(JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] }));
// "{"x":[10,null,null,null]}"
```



**toJSON()**

자바스크립트의 toJSON() 메소드는 자바스크립트의 Date 객체의 데이터를 JSON 형식의 문자열로 변환하여 반환한다. Date.prototype 객체에서만 사용할 수 있다.

```
var date = new Date();   // 자바스크립트 Date 객체
var str = date.toJSON(); // Date 객체를 JSON 형식의 문자열로 변환함.
```

---------

### 느낀점

어렵고 멀게만 느껴지던 JSON을 조금 알게 되어서 이제는 겁나지 않는다. 아직 실제로 활용해보지 못해서 중요성이 그렇게 느껴지지는 않는다. 꼭 사용해보고싶다.