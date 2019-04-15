<template>
   <header>

       <ul class='footer'>
           <li class='foot-item2'><a href='https://github.com/civarINU' target='blank'><img src='../assets/github.png' width=30; ></a></li>
           <li class='foot-item2'><a href='https://www.facebook.com/CIVAR18/' target='blank'><img src='../assets/facebook.png' width=30; ></a></li>
       </ul>
     </header>
   
</template>

<script>
export default {
    
}
</script>

<style scoped>


    body{
        margin: 0;
    }


    header {
        
        font-family: 'Nanum Gothic', sans-serif;
    }


   .footer {
       display: flex;
       flex-direction: row;
       width: 100%;
       margin: 0;
       padding: 0;
       list-style-type: none;
       background-color: black;
       position: fixed;
       bottom: 0;
       
   }


   .foot-item2 {
       padding: 4px;
       cursor: pointer;
   }

    
</style>