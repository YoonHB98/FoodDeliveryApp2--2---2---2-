store ->root reducer(root, state) -> user slice, order slice
이므로 state.user.email이런식으로 접근

action - state를 바꾸는 행위
dispatch - 액션을 실제로 실행하는 함수
reducer - 액션이 실제로 실행되면 state를 바꾸는 로직

액션을 dispatch안에 넣어줘서 실제로 함수 호출해야 실제로 실행되서 reducer가 동작
dispatch는 store에서 만든거 import해주고 usedispatch
근데 타입스크립트는 useappdispatch

전반에 걸쳐 다 쓰는 전역은 리덕스에서 관리 
useSelector는 Provider 안에서 쓸 수 없

서버는 시간 걸리므로 비동기 await

try catch finally
성공 try
실패 catch
성공했든 실패했든 finally는 실행

user.ts 슬라이스 selector로 접근
redux

accessToken 유효기간 ex)은행
refreshToken 토큰 재발급

socket 키와 값
emit은 보내기 ex) login이라는 키로 hello라는 값을 보내고
on off 받기 hello라는 키로 값을 받고