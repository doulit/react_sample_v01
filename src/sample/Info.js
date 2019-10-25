import React, { Component, useState, useEffect, useReducer } from 'react';
import useInputs from './useInputs';

function reducer(state, action){
	return{
		...state,
		[action.name]:action.value
	};
}

const Info = () => {
	const [state,dispatch] = useReducer(reducer,{
		name:'',
		nickname:''
	});
	// const [name, setName] = useState('');
	// const [nickname,setNickname] = useState('');
	const {name,nickname} = state;
	// useEffect(() => {
	// 	console.log("렌더링이 완료되었습니다.");
	// 	console.log({
	// 		name,
	// 		nickname
	// 	});
	// },[name]);

	useEffect(() => {
		console.log('effect');
		console.log(name);
		return () => {
			console.log('cleanup');
			console.log(name);
		}
	});

	const onChange = e => {
		dispatch(e.target);
	};

	// const onChangeName = e => {
	// 	setName(e.target.value);
	// };

	// const onChangeNickname = e => {
	// 	setNickname(e.target.value);
	// };

	return(
		<div>
			<div>
				<input name="name" value={name} onChange={onChange}/>
				<input name="nickname" value={nickname} onChange={onChange}/>
			</div>
			<div>
				<div>
					<b>이름:</b> {name}
				</div>
				<div>
					<b>닉네임:</b> {nickname}
				</div>			
			</div>
		</div>
	)
}

export default Info;