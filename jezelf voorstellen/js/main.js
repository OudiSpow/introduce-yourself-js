document.getElementById('inputForm').addEventListener('submit', function(event){
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const hobby = document.getElementById('hobby').value;

    const text = `Hallo, ik ben ${name}, ${age} jaar en mijn favoriete hobby is ${hobby}`;

    document.getElementById('alert').textContent = text;
});
