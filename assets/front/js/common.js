// 페이지 로더
function loader() {
    html = `
        <div class="spinner">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
        </div>
    `
    $("body").append(html);

    loaderHide();
}

function loaderHide() {
    setTimeout(function() {
        $(".spinner").fadeOut();
    }, 1000);
}

// 좌측 메뉴
function asideHandle() {
    // 변수
    var phone_mq = 768, // media querie
        $body = $('body'),
        menuBtn = '[data-toggle="aside"]', // 버튼 : 메뉴
        dimmBtn = $("#aside .dimmed") // 버튼 : dimmed

    // GNB 토글
    $(document).on('click', menuBtn, function(e) {
        e.preventDefault();
        bodyToggle();
    });

    $(dimmBtn).on("click", function() {
        bodyToggle();
    });

    function bodyToggle() {
        var toggledClass = 'aside-toggled';

        if(!$body.hasClass(toggledClass)) {
            $body.addClass(toggledClass);
        } else {
            $body.removeClass(toggledClass);
        }
    }
}

// 오디오 재생 서브 메인
var myAudio = new Audio(); // Aduio 객체 생성
// 페이지 소개
var audioSubFile = {
    'ko' : [
        _CDN + "/assets/front/sounds/menu_1_ko.mp3",     // 홍보관
        _CDN + "/assets/front/sounds/menu_2_ko.mp3",     // YouPlay
        _CDN + "/assets/front/sounds/menu_3_ko.mp3",     // 스마트전시관
        _CDN + "/assets/front/sounds/menu_4_ko.mp3",     // 웹방
        _CDN + "/assets/front/sounds/menu_5_ko.mp3"      // 이미지룸
    ],
    'en' : [
        _CDN + "/assets/front/sounds/menu_1_en.mp3",     // 홍보관
        _CDN + "/assets/front/sounds/menu_2_en.mp3",     // YouPlay
        _CDN + "/assets/front/sounds/menu_3_en.mp3",     // 스마트전시관
        _CDN + "/assets/front/sounds/menu_4_en.mp3",     // 웹방
        _CDN + "/assets/front/sounds/menu_5_en.mp3"      // 이미지룸
    ]
};

// 작가소개
var audioDirectorFile = {
    'ko' : [
        _CDN +"/assets/front/sounds/artist_1_ko.mp3",      // 강내균
        _CDN +"/assets/front/sounds/artist_2_ko.mp3",      // 김미경
        _CDN +"/assets/front/sounds/artist_3_ko.mp3",      // 김재호
        _CDN +"/assets/front/sounds/artist_4_ko.mp3",      // 박환
        _CDN +"/assets/front/sounds/artist_5_ko.mp3",      // 석창우
        _CDN +"/assets/front/sounds/artist_6_ko.mp3",      // 이정희
        _CDN +"/assets/front/sounds/artist_7_ko.mp3",      // 임경식
        _CDN +"/assets/front/sounds/artist_8_ko.mp3",      // 최지현
        _CDN +"/assets/front/sounds/artist_9_ko.mp3",      // 탁용준
        _CDN +"/assets/front/sounds/artist_10_ko.mp3"      // 한부열
    ],
    'en' : [
        _CDN +"/assets/front/sounds/artist_1_en.mp3",      // 강내균
        _CDN +"/assets/front/sounds/artist_2_en.mp3",      // 김미경
        _CDN +"/assets/front/sounds/artist_3_en.mp3",      // 김재호
        _CDN +"/assets/front/sounds/artist_4_en.mp3",      // 박환
        _CDN +"/assets/front/sounds/artist_5_en.mp3",      // 석창우
        _CDN +"/assets/front/sounds/artist_6_en.mp3",      // 이정희
        _CDN +"/assets/front/sounds/artist_7_en.mp3",      // 임경식
        _CDN +"/assets/front/sounds/artist_8_en.mp3",      // 최지현
        _CDN +"/assets/front/sounds/artist_9_en.mp3",      // 탁용준
        _CDN +"/assets/front/sounds/artist_10_en.mp3"      // 한부열
    ]
};

// 작가 작품소개
var audioPicFile = {
    'ko' : [
        _CDN +"/assets/front/sounds/work_1_ko.mp3",        // 강내균
        _CDN +"/assets/front/sounds/work_2_ko.mp3",        // 김미경
        _CDN +"/assets/front/sounds/work_3_ko.mp3",        // 김재호
        _CDN +"/assets/front/sounds/work_4_ko.mp3",        // 박환
        _CDN +"/assets/front/sounds/work_5_ko.mp3",        // 석창우
        _CDN +"/assets/front/sounds/work_6_ko.mp3",        // 이정희
        _CDN +"/assets/front/sounds/work_7_ko.mp3",        // 임경식
        _CDN +"/assets/front/sounds/work_8_ko.mp3",        // 최지현
        _CDN +"/assets/front/sounds/work_9_ko.mp3",        // 탁용준
        _CDN +"/assets/front/sounds/work_10_ko.mp3"        // 한부열
    ],
    'en' : [
        _CDN +"/assets/front/sounds/work_1_en.mp3",        // 강내균
        _CDN +"/assets/front/sounds/work_2_en.mp3",        // 김미경
        _CDN +"/assets/front/sounds/work_3_en.mp3",        // 김재호
        _CDN +"/assets/front/sounds/work_4_en.mp3",        // 박환
        _CDN +"/assets/front/sounds/work_5_en.mp3",        // 석창우
        _CDN +"/assets/front/sounds/work_6_en.mp3",        // 이정희
        _CDN +"/assets/front/sounds/work_7_en.mp3",        // 임경식
        _CDN +"/assets/front/sounds/work_8_en.mp3",        // 최지현
        _CDN +"/assets/front/sounds/work_9_en.mp3",        // 탁용준
        _CDN +"/assets/front/sounds/work_10_en.mp3"        // 한부열
    ]
};

// 오디오 파일 호출
// onclick="audioHandle(this, 'ko', [0~4], 'subpage')"
// onclick="audioHandle(this, 'ko', [0~9], 'director')"
// onclick="audioHandle(this, 'ko', [0~9], 'picture')"
function audioHandle(obj, language, num, state) {
    event.stopPropagation();

    var audioBtn = $(obj);
    var audioArr;
    if(state === "subpage") {
        audioArr = audioSubFile[language];
    } else if(state === "director") {
        audioArr = audioDirectorFile[language];
    } else if(state === "picture") {
        audioArr = audioPicFile[language];
    }

    if(audioBtn.hasClass("is-play")) {
        myAudio.pause();
        audioBtn.removeClass("is-play");

        if(_LOCALE === 'ko') {
            if(state === "subpage") audioBtn.text("듣기");
            else if(state === "director") audioBtn.text("작가설명");
            else if(state === "picture") audioBtn.text("작품설명");
        } else {
            if(state === "subpage") audioBtn.text("Listen");
            else if(state === "director") audioBtn.text("Author Introduction");
            else if(state === "picture") audioBtn.text("Work Explanation");
        }
    } else {
        audioBtn.addClass("is-play");

        if(_LOCALE === 'ko') {
            if(state === "subpage") audioBtn.text("듣기");
            else if(state === "director") audioBtn.text("작가설명");
            else if(state === "picture") audioBtn.text("작품설명");
        } else {
            if(state === "subpage") audioBtn.text("Listen");
            else if(state === "director") audioBtn.text("Author Introduction");
            else if(state === "picture") audioBtn.text("Work Explanation");
        }

        myAudio.src = audioArr[num]  // 음원 파일 설정
        myAudio.play(); // 음원 재생

        // 재생완료
        myAudio.addEventListener('ended', (event) => {
            if(_LOCALE === 'ko') {
                audioBtn.text("Listen").removeClass("is-play");
            } else {
                audioBtn.text("Listen").removeClass("is-play");
            }
        });
    }
}

$(function() {
    // Init
    // loader();
    asideHandle();

    setTimeout(function() {
        if($('.audiobox')) {
            $('.audiobox').fadeOut(1000);
        }
    }, 5000);
});