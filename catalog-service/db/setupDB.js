const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('catalog.db', (err) => {
    if (err) {
        console.error('Error opening database ' + err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS books (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        topic TEXT NOT NULL,
        quantity INTEGER NOT NULL,
        price REAL NOT NULL
    )`, (err) => {
        if (err) {
            console.error('Error creating table ' + err.message);
        } else {
            console.log('Books table created.');
        }
    });
    const books = [
        { title: 'How to get a good grade in DOS in 40 minutes a day', topic: 'distributed systems', quantity: 5, price: 30.0 },
        { title: 'RPCs for Noobs', topic: 'distributed systems', quantity: 3, price: 50.0 },
        { title: 'Xen and the Art of Surviving Undergraduate School', topic: 'undergraduate school', quantity: 8, price: 40.0 },
        { title: 'Cooking for the Impatient Undergrad', topic: 'undergraduate school', quantity: 10, price: 20.0 }
    ];
    const stmt = db.prepare('INSERT INTO books (title, topic, quantity, price) VALUES (?, ?, ?, ?)');
    for (const book of books) {
        stmt.run(book.title, book.topic, book.quantity, book.price);
    }
    stmt.finalize();
    console.log('Initial data inserted.');
});
db.close((err) => {
    if (err) {
        console.error('Error closing database ' + err.message);
    } else {
        console.log('Database connection closed.');
    }
});
