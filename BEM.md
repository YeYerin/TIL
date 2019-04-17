# BEM (Block-Element-Modifier)

--------

**CSS 클래스 이름**에 대한 명명 교칙 표준이다. CSS를 읽고, 이해하고, 확장할 때 더욱 쉽다.

1. 목적이나 기능을 전달한다.
2. 구성 요소 구조를 전달한다.
3. 스타일 선택기에 일관성있는 낮은 수준의 특이성을 설정한다.

---------------

### 작동원리

최대 세 부분까지 포함된다.

1. 블록 : 구성 요소의 가장 바깥 쪽 부모 요소가 블록으로 정의된다.
2. 요소 : 구성 요소 내부는 요소라는 하나 이상의 자식이 될 수 있다.
3. 수정자(modifier) : 블록이나 요소가 수식으로 표현된 변형을 가질 수 있다.

> 세 가지 모두 사용되면 [block]__[element]--[modifier] 이런 식으로 보인다.
>
> -------------
>
> ### 예제
>

##### 1. 블록만

```
<button class=”btn”></button>
<style>
.btn {}
</style>

```

------------

##### 2. 수정만

```
<button class="btn btn--secondary"></button>

<style>
.btn {
display: inline-block;
color: blue;
}
.btn--secondary {
color: green;
}  
</style>

```

modifier 클래스를 단독으로 사용하면 안된다. modifier 클래스는 기본 클래스를 대체하지 않고 기능을 보강하기 위한 것이다.



```
<button class="btn--secondary"></button>

<style>
.btn--secondary {
display: inline-block;
color: green;
}  
</style>  
```


이렇게 하면 안된다.

--------

##### 3. 요소가 있는

```<figure class="photo">
<img class="photo__img" src="me.jpg">
  <figcaption class="photo__caption">
    <blockquote class="photo__quote">
      Look at me!
    </blockquote>
  </figcaption>
</figure>

<style>
  .photo { }
  .photo__img { }
  .photo__caption { }
  .photo__quote { }
</style>
```


> 
>
> photo 아래 photo_ _caption 아래 photo _ _quote 지만,  `photo__caption__quote`라고 쓰지않고, `photo__quote`라고 표현한다.
>
> 구성 요소의 단일 요소를 변경하려고 하는 경우가 있는데, 이 때는 요소에 수정자를 추가하는 것이 더 유용하다.
>
> 
>
> ```
> <figure class="photo">
> <img class="photo__img photo__img--framed" src="me.jpg">
> <figcaption class="photo__caption photo__caption--large">Look at me!</figcaption>
> </figure>
> 
> <style>
> .photo__img--framed {
>  /* incremental style changes */
> }
> .photo__caption--large {
>  /* incremental style changes */
> }
> </style>
> 
> ```

----------

##### 느낀점

팀 프로젝트를 할 때 사용하면 쉽게 소통할 수 있을 것 같다. 그런데 이렇게 하지 않을 때보다 클래스 이름이 길어져서 조금 불편할 것 같긴 하다.