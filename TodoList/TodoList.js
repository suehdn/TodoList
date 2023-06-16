// params.$target - 해당 컴포넌트가 추가가 될 DOM 엘리먼트
// params.initialState - 해당 컴포넌트의 초기 상태
function TodoList({$target, initialState}){
    const $todoList = document.createElement('div');
    
    $target.appendChild($todoList);

    this.state = initialState;

    this.render = () => {
        // this.state = [{ text: '자바스크립트 공부하기'}, {text: '....'}]
        $todoList.innerHTML = `
            <ul>
                ${this.state.map(({text}) => `<li>${text}</li>`).join("")}
            </ul>
        `
    }

    this.render();
}