const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
// 가장 먼저 해야 할 작업은션 [액션 타입]을 정의 하는것.
// 액션 타입은 대문자로 정의하고, 모듈 이름/액션 이름과 같은 형대로 작성

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
// 액션 타입을 정의한 다음에는 [액션 생성 함수]를 만들어주면 됩니다.
// export 덕에 파른파일에서 불러와 사용할수 있음.

// counter 모듈의 초기상태를 만들어주자
const initialState = {
  number: 0,
};

// 이게 [리듀서 함수] 같음.
function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}

export default counter;
