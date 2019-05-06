# box model

각 태그들이 웹 페이지에 표현될 때 사각형의 형태(box)로 그 태그의 크기를 결정한다.

하나의 박스는 네 부분( `콘텐츠영역`, `패딩영역`, `테두리영역`, `마진영역` ) 으로 나눠져 있다.

![](C:\Users\Yerin\Desktop\boxmodel-(3).png)

*** 사진!

### 콘텐츠영역

콘텐츠 영역은 content edge가 감싼 영역으로, 글이나 이미지 등 요소의 실내 내용을 포함한다. 영역의 크기는 콘텐츠 너비와 높이다.

`box-sizing` 속성의 값이  기본값(content-box)인 경우,
`width`, `min-width`, `max-width`, `height`, `min-height`, `max-height` 속성을 사용해 콘텐츠 영역의 크기를 설정할 수 있다.

### 패딩영역

패딩영역은 padding edge가 감싼 영역으로, 요소의 안쪽 여백까지 포함한다. 영역의 크기는 안쪽 여백 박스 너비와 높이다.

`padding`, `padding-top`, `padding-right`, `padding-bottom`, `padding-left`로 안쪽 여백의 두께를 설정할 수 있다.

### 테두리영역

테두리영역은 border edge가 감싼 영역으로, 요소의 테두리까지 포함한다. 영역의 크기는 테두리 박스 너비와 높이다.

`border`와 `border-width`로 결정할 수 있다.
`box-sizing` 속성의 값이  border-box인 경우,
`width`, `min-width`, `max-width`, `height`, `min-height`, `max-height` 속성을 사용해 콘텐츠 영역의 크기를 설정할 수 있다. 박스의 배경(background-color, background-image)은 테두리의 바깥선까지 늘어난다.

### 마진영역

마진영역은 margin edge가 감싼 영역으로, 테두리 밖 바깥 여백까지 포함한다. 영역의 크기는 바깥 여백 너비와 높이다.

`margin`, `margin-top`, `margin-right`, `margin-bottom`, `margin-left`로 바깥 여백의 두께를 설정할 수 있다. 다른 요소와 마진영역이 겹칠 수도 있다!



# inline vs block

`inline`과 `block`은 `display`속성 중 하나다.



### inline

`inline`은 줄을 바꾸지 않고 다른 요소와 함께 한 행에 위치하려는 속성이다.
`inline` 속성을 가진 대표적인 태그로는 `<a>`태그가 있다.

그래서 `inline` 속성은 주로 **문장안에서 사용하는 태그**의 기본값이다.

- 상, 하단 외부 여백(`margin-top`, `margin-bottom`) 속성을 정의해도 적용되지 않는다.  `line-height` 속성으로 상하 여백 설정!
- `width`와 `height` 속성이 적용되지 않는다.



### block

`block` 속성은 한 줄에 나열되지 않고 그 자체로 한 줄을 완전히 차지하려는 속성이다.
`block` 속성을 가진 대표적인 태그로는 `<p>`태그가 있다.

- 기본적으로 `width` 가 100%! 자연스럽게 줄넘김이 된다.
- `margin`, `width`, `height` 속성이 모두 적용된다.



### inline-block

inline과 block 속성의 중간단계다.
`inline`처럼 한줄에 표현할 수 있지만, `margin`, `width`, `height` 속성이 모두 적용된다.