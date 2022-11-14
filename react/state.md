# State

useState() (또는 훅) 라이브러리를 import해 특별한 종류의 변수를 생성할 수 있음. 초기값은 useState(props.title).
주의사항! 컴포넌트 함수 안에 직접적으로 선언이 돼야하고, 중첨 함수 안에 들어가도 안됨.
섹션4.51강에서 useState()를 다루면서 클릭하면 title이 업데이트 되는 예제를 다룸. 하지만 setTitlet 선언 후 콘솔 출력하면 업데이트 전 내용이 출력 되는데 useState가 상태를 업데이트 시켜주기 때문이다.

- 여러 컴포넌트의 상태 변화

```jsx
// 상태변화 코드를 각각 다룸.
const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value) // 입력된 값
  }
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value) // 입력된 값
  }
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value) // 입력된 값
  }

// useState에서 한번에 관리할 수 있음.
const [userInput, setUserInput ] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  });

  const titleChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value
    });
  }
  const dateChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredDate: event.target.value
    });
  }
```