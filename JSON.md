# JSON

```Javascript Object Notion```으로,  

 JSON은 XML을 대체하기 위해 Javascript를 기반으로 만들어졌다. 또한 텍스트 기반이므로 어떠한 언어에서도 사용할 수 있다.



**왜 XML보다 JSON이 더 많이 사용될까?**

XML은 HTML을 기반으로 만들어져 데이터 값 양쪽으로 태그가 있다. 하지만 JSON의 경우 태그보다는 괄호형식으로 표현하고, 값을 ','으로 나열하기 때문에 간단하게 표현할 수 있다.

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

