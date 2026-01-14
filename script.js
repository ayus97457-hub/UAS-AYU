document.addEventListener('DOMContentLoaded', () => {
const timeInput = document.getElementById("time-input");
const input = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('task-list');
const totalTask = document.getElementById("totalTask");
const doneTask = document.getElementById("doneTask");
 
        // Fungsi untuk menambah tugas
         const addTask = () => {
         const time = timeInput.value;
         const taskValue = input.value.trim();
        
        function updateCounter() {
         const allTasks = document.querySelectorAll('#task-list li');
         const completedTasks = document.querySelectorAll('#task-list li.completed');

         totalTask.textContent = allTasks.length;
         doneTask.textContent = completedTasks.length;
        }
        if (taskValue === ""|| time === "") {
            alert("Isi tugas terlebih dahulu!");
            return;
            alert("Tugas dan deadline jam harus diisi!");
            return;
        }
        // Membuat elemen LI
        const li = document.createElement('li');
        
        li.innerHTML = `
            <span class="time">${time}</span>
            <span class="task-text">${taskValue}</span>
            <button class="delete-btn">hapus</button>
        `;

        // Fitur klik untuk menandai selesai
        li.querySelector('.task-text').addEventListener('click', function() {
        li.classList.toggle('completed');
        updateCounter();
        });

        // Fitur hapus tugas
        li.querySelector('.delete-btn').addEventListener('click', () => {
            li.remove();
            updateCounter();
        });

        todoList.appendChild(li);
        input.value = ""; // Kosongkan input setelah menambah
        };
         // Event listener tombol
        addBtn.addEventListener('click', addTask);

         // Event listener tombol Enter
        input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
        addTask();
        todoList.appendChild(li);
        updateCounter();
        }
    });
});