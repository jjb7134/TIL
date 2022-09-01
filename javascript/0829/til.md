섹션24 - 포켓몬 게임 데모
 - node로 객체를 생성해서 appendchild, innerHTML 메서드를 사용함.

## 섹션25

- 이벤트 개요
- 클릭 등을 할때 반응 하는 것
- 인라인 이벤트 (html에 js코드 넣는단 소리)
- 클릭 이벤트 예시 
     onclick=””; 따옴표 안에 클릭 시 실행하려는 코드를 넣음.
- 온클릭 속성
- 인라인의 번거로움을 해소하기 위해 js에서 코드를 짬. onclick 말고도 onmouseenter
btn.onclick = function() 인데 btn.onmouseenter = scream 이다? 이유는 onmouse는 바로 실행되야 하고 onclick은 클릭 시 이벤트가 발생 돼야 하기 때문
- addEventListener
- 어떤 이벤트던 전달할 수 있음.
- onclick 대신 addEventListener 쓰는이유
  - onclick 내에 두개의 콜백함수를 실행 할 수 없음. 마지막 출력이 그 전거를 다 무시해버림.

  ```jsx
EventTarget.addEventListener('click', ()=>{
	alert();
});
```