<template>
    <div id="list">
        <h1>
            {{title}}
        </h1>
        <ul>
            <book-item v-for="book in books"  :key='book.id' :book='book'>
                 
            </book-item>
            <li>{{newTitle}}: {{newAuthor}}</li>
        </ul>

        <!-- <book-form @addBook='appendBook'></book-form> -->
    </div>
</template>


<script>
import BookItem from './BookItem';
import BookForm from './BookForm';


export default {
    name: 'BookList',

    data() {
        return {
            title: 'All Books',
            books: [
                {title: 'Self-Reliance', author: 'Ralph Waldo Emerson'},
                {title: 'American Gods', author: 'Neil Gaiman'},
                {title: 'Amusing Ourselves to Death', author: 'Neil Postman'},
            ],
            newTitle: sessionStorage.getItem('title'),
            newAuthor: sessionStorage.getItem('author')
        };
    },
    components: {
        BookItem,
        BookForm
    },
    methods: {
        appendBook(bookTitle, bookAuthor) {
            this.books.push({
                title: bookTitle,
                author: bookAuthor
            })
        }
    }
};
</script>



<style>
    h1, 
    h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }

    #list {
        text-align: center;
    }
    
</style>