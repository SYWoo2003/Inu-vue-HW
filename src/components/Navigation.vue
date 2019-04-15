<template>
   <header>

       <ul class='navi'>
           <li class='nav-item'><router-link to='/'><img src='../assets/inu.png' width=40; ></router-link></li>
           <li class='nav-item'><router-link to='/introduction'>Introduction</router-link></li>
           <li class='nav-item'><router-link to='/member'>Member</router-link></li>
           <li class='nav-item'><router-link to='/achievement'>Achievement</router-link></li>
           <li class='nav-item'><router-link to='/project'>Project</router-link></li>
       </ul>
     </header>
   
</template>

<script>
export default {
    
}
</script>

<style scoped>

    div{
        text-align: center;
    }

    body{
        margin: 0;
    }


    header {
        
        font-family: 'Nanum Gothic', sans-serif;
    }


   .navi {
       display: flex;
       flex-direction: row;
       width: 100%;
       margin: 0;
       padding: 0;
       list-style-type: none;
       background-color: black;
       position: fixed;
       top: 0;
   }


   .nav-item {
       padding: 15px;
       cursor: pointer;
   }


   .nav-item a {
       text-align: center;
       text-decoration: none;
       color: white;
       font-size: 20px;
   }

   .nav-item a:hover {
       color: rgb(223, 223, 223);
   }


    
</style>