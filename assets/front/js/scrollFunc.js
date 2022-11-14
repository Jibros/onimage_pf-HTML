$(function(){
    var iscroll;
    var totalWid = 0;

    function loaded(){
        widCalc() // 너비 삽입

        var isLoadMore = false;
        iscroll = new IScroll("#scrWrapper", {
            click: true,
            scrollX: true,
            scrollY: false,
            mouseWheel: true,
            hideScrollbar:true,
            mouseWheelSpeed: 20,
            resizePolling: 60,
            probeType: 3,
        });
        console.dir(iscroll.options);

        iscroll.on('scroll', function(){
            if(this.x < (this.maxScrollX - 10)){
                $('#moreMsg').text('손을 놓으면 업데이트 됩니다.')  // 테스트용
                isLoadMore = true
            }
        })
        iscroll.on('scrollEnd', function(){
            if(isLoadMore){
                $('#moreMsg').text('불러오는 중')  // 테스트용
                loadMoreData()
                isLoadMore = false
            }
        })
    }

    // iscroll load
    loaded();

    // 데이터 로드
    function loadMoreData(){
        if(true){ // 데이터가 있으면 로드
            console.log("loadmoredata")
            el = $(".scritems")

            var itemHtml;
                itemHtml = `<li class="item poster">
                                <div class="item_inner">
                                    <a href="./view.html" class="item_link">
                                        <img src="./assets/front/images/홍보존_1.png" alt="">

                                        <div class="poster_info">
                                            <span class="tit">2022년 장애예술인수첩</span>
                                            <span class="sub">&lt;장애예술인수첩&gt; 증보판 발간 예정</span>
                                        </div>

                                        <span class="ico_detail">자세히보기</span>
                                    </a>
                                </div>
                            </li>`
            el.append(itemHtml)

            widCalc() // 너비 계산

            $('#moreMsg').text("");  // 테스트용
        }
    }

    // 스크롤 전체 너비 계산
    function widCalc(){
        totalWid = 0;

        var item = $("#scrWrapper .scritems .item");
        $.each(item, function(i, val){
            totalWid += $(val).innerWidth()
        })

        $("#scroller").width(totalWid+240) // +좌측 여백 +240

        console.log(totalWid)

        setTimeout(function () {
            iscroll.refresh();
        }, 100);
    }

    $(window).on("resize", function(){
        widCalc()
    })
})