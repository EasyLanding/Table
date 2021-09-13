//Редактирование таблицы Редактируется ДАБЛКЛИКОМ
//Чтобы выйти из формата редактирования, требуется нажать на окно textArea, чтобы появилась,
//"текстовая строка" для написания текст, после один раз кликнуть по ячейке

let tds = document.querySelectorAll("td");

for (let i = 0; i < tds.length; i++) {
    tds[i].addEventListener("dblclick", function func() {
        let inputDiv = document.createElement("div");
        inputDiv.id = "textDiv";
        let input = document.createElement("textArea");
        input.value = this.innerHTML;
        this.innerHTML = '';
        this.appendChild(input);

        let td = tds[i];
        input.addEventListener("blur", function () {
            td.innerHTML = this.value;
            this.addEventListener("click", func);
        });

        this.removeEventListener("click", func);
    });
}