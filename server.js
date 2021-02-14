const express = require('express');
const path = require('path');


const app = express();


app.get('/api/homes', (req, res) => {
    const homes = [
        { id: 1, img: "img/gallery/01.jpg", title: 'Fusce dictum finibus', content: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan', price: '$45 / $55' },
        { id: 2, img: "img/gallery/02.jpg", title: 'Aliquam sagittis', content: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan', price: '$65 / $70' },
        { id: 3, img: "img/gallery/03.jpg", title: 'Sed varius turpis', content: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan', price: '$30.50' },
        { id: 4, img: "img/gallery/04.jpg", title: 'Aliquam sagittis', content: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan', price: '$25.50' },
        { id: 5, img: "img/gallery/05.jpg", title: 'Maecenas eget justo', content: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan', price: '$80.25' },
        { id: 6, img: "img/gallery/06.jpg", title: 'Quisque et felis eros', content: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan', price: '$20 / $40 / $60' },
        { id: 7, img: "img/gallery/07.jpg", title: 'Sed ultricies dui', content: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan', price: '$94' },
        { id: 8, img: "img/gallery/08.jpg", title: 'Donec porta consequat', content: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan', price: '$15' }
    ];

    res.json(homes);
});

if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(PORT);
});