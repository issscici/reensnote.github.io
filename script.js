function saveNote() {
  let title = document.getElementById("noteTitle").value;
  let content = document.getElementById("noteContent").value;

  if (title && content) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push({ title, content });
    localStorage.setItem("notes", JSON.stringify(notes));
    document.getElementById("noteTitle").value = "";
    document.getElementById("noteContent").value = "";
    displayNotes();
  } else {
    alert("Please fill in both fields!");
  }
}

function displayNotes() {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  let notesList = document.getElementById("notesList");
  notesList.innerHTML = "";
  notes.forEach(note => {
    notesList.innerHTML += `
      <div class="note">
        <h3>${note.title}</h3>
        <p>${note.content}</p>
      </div>
    `;
  });
}

displayNotes();
