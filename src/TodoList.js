export default function TodoList({$target, initialState}){
    const $todoList = document.createElement('div');
    $target.appendChild($todoList);

    this.state = initialState;

    this.setState = nextState => {
        this.state = nextState;
        this.render();
    }
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