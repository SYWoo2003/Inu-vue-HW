<template>
    <div>
        <h1 class='intro'> Introduction</h1>
        <img src='../assets/inulogo.png' width=250; >
        <div class='in'>안녕하세요!<br>
        디미고 IT 프로젝트 자율동아리 INU 입니다.<br>
         INU는 디미고 학생들, 넓게는 이 세상에 기여할 수 있는,<br>
        <b>누군가에게 도움을 줄 수 있는</b> IT 프로젝트를 진행하는 것을 목표로 하고 있습니다.</div>

        <div class='in2'>INU의 분야는 아래와 같습니다.</div>
        <div class='po1'>
            <img src='../assets/vscode.png' width=150; >
            <img src='../assets/visualstudio.png' width=150; >
            <img src='../assets/androidstudio.png' width=150; >

            <h2 class='po'>개발자</h2>
            <div class='d1'>
            기획한 내용을 바탕으로 개발을 진행합니다.<br>
            주로 웹(프런트엔드, 백엔드), 안드로이드 앱을 개발합니다.<br></div>
            
        </div>

        <div class='po1'>
            <img src='../assets/xd.png' width=150; >
            <img src='../assets/photoshop.png' width=150; >
            <img src='../assets/zeplin.png' width=150; >

            <h2 class='po'>디자이너</h2>
            <div class='d1'>
            각종 프로젝트의 웹 디자인, 앱 디자인 등을 진행합니다.<br>
            주로 Adobe XD를 사용하여 작업합니다.<br></div>
            <div class='d2'></div>
            
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

    .in {
         font-family: 'Nanum Gothic', sans-serif;
         font-size: 30px;
         margin: 30px;
         margin-bottom: 60px;
    }

    .in2 {
        margin: 30px;
        font-family: 'Nanum Gothic', sans-serif;
        font-size: 25px;
        margin-bottom: 10px;
    }

    .po1 {
        font-family: 'Nanum Gothic', sans-serif;
        font-size: 23px;
        margin-top: 55px;
    }

    .d1 {
        font-size: 27px;
        margin: 20px;
        margin-bottom: 100px;
        
    }

    .d2 {
        margin-bottom: 100px;
    }

</style>