import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

const mapStateToProps = (state) => ({
  number: state.counter.number,
});
const mapDispatchToProps = (dispatch) => ({
  // temp function
  increase: () => {
    // console.log('increase');
    dispatch(increase());
  },
  decrease: () => {
    // console.log('decrease');
    dispatch(decrease());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
// export default CounterContainer;

//걍 함수로 component 내 보내는 거
