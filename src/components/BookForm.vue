<template>
    <form action="#" method="post" v-on:submit.prevent="bookSubmit(bookTitle, bookAuthor)">
        <input v-model="bookTitle" type="text" name="title" value="" placeholder="Book Title">
        
        <input v-model="bookAuthor" type="text" name="author" value="" placeholder="Book Author">
        
        <button type="submit" name="button">Add Book</button>
    </form>
</template>

<script>
export default {
    name: 'BookForm',
    props: [
        'books',
    ],
    data() {
        
        return {
            bookTitle: '', 
            bookAuthor: '',
        }
    } ,
    methods: {
        bookSubmit(bookTitle, bookAuthor) {
            console.log(bookTitle, bookAuthor);
            
            sessionStorage.setItem('title', bookTitle);
            sessionStorage.setItem('author', bookAuthor);

            this.$emit('addBook', bookTitle, bookAuthor);
            this.$router.push({name: 'landingPage'})
        },
    },
     
}
</script>

<style>
    form {
        text-align: center;
    }
</style>