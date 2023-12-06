// fetch('https://openlibrary.org/people/mekBot/books/currently-reading.json')
//   .then(res => res.json())
//   .then(data => console.log(data))

async function booksData() {
  const res = await fetch("https://openlibrary.org/people/mekBot/books/currently-reading.json");
  const data = await res.json();
  console.log(data);

  const tableBody = document.getElementById("tableBody");

  data.reading_log_entries.forEach(entry => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${entry.work.title}</td>
      <td>${entry.work.author_names}</td>
      <td>${entry.work.first_publish_year}</td>`;
    tableBody.appendChild(row);
  });
} 

window.onload = booksData();

