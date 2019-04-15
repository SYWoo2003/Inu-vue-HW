<template>
    <div>
        <h1 class='intro'> Project</h1>
        <div class='pr1'>INU의 여러 프로젝트입니다.<br>
        이미지를 클릭하면 해당 사이트로 이동합니다.</div>


        <div class='pr2'>
            <a href='https://dimiwords.tk/' target='blank'><img class='primg' src='../assets/dimiword.png' width=1000; ></a>
        

            <h2 class='po'>DIMIWORDS</h2>
            <div class='d1'>
            신입생을 위한 영단어 암기장</div>
        </div>

        <div class='pr2'>
            <a><img class='primg' src='../assets/dimi09.png' width=1000;></a>
        

            <h2 class='po'>DIMI09 (이름 미정)</h2>
            <div class='d1'>
            디미고 내에서의 공동구매를 위한 웹 프로젝트</div>
        </div>

            
        </div>
   
    
</template>

<script>
export default {
    
}
</script>
<style>
    .intro {
         font-family: 'Quicksand', sans-serif; 
         font-size: 50px;
         padding-top: 60px;
    }

    .pr1 {
         font-family: 'Nanum Gothic', sans-serif;
         font-size: 30px;
         margin: 30px;
         margin-bottom: 100px;
    }
    
    .primg{
    
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .pr2 {
        font-family: 'Nanum Gothic', sans-serif;
        font-size: 23px;
        margin-top: 55px;
    }

    .d1 {
        font-size: 27px;
        margin: 20px;
        margin-bottom: 200px;
        
    }

   
</style>