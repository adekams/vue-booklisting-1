<template>
<main>
  <div id="app">
    <img src="./assets/logo.png">
    <p>
      <span>
        <router-link :to="{name: 'form'}">
          Add Book
        </router-link>
      </span>
      
      <span>
        <router-link :to="{name: 'landingPage'}">
          View Books
        </router-link>
      </span>
      
    </p>

    
    <!-- <book-list></book-list> -->
  </div>

  <router-view></router-view>
</main>
  
</template>

<script>
import BookList from './components/BookList';

export default {
  name: 'app',
  components: {
    BookList,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-bottom: 60px;
}
/* span {
  margin-right: 15px;
  padding: 10px;
} */
p {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: auto;
  max-width: 300px;
}
</style>
