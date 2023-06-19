export default function TodoForm({$target, onSubmit}){
    const $form = document.createElement('form');
    let isInt = false;

    $target.appendChild($form);

    this.render = () => {
        $form.innerHTML = `
            <input type = "text" name = "todo"/>
            <button type="submit">Add</button>
        `
        if(!isInt){
            $form.addEventListener('submit', e=> {
                e.preventDefault(); //태그의 기본동작을 끔

                const $todo = $form.querySelector('input[name=todo]');
                const text = $todo.value;

                if(text.length > 1){
                    $todo.value = '';
                    onSubmit(text)
                }
            })
        }
        isInt = true;
    }
    this.render();
}  