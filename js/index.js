$(function () {


	//声明swiper.
	var carouselSwiper = null;
	var navigationSwiper = null;
	var stageSwiper = null;
	/**
	 * 轮播图
	 */

	carouselSwiper = new Swiper('.carousel-swiper-container', {
		pagination: '.carousel-swiper-pagination',
		paginationClickable: true
	});


	/**
	 * ViewPager
	 */
	stageSwiper = new Swiper('.stage-swiper-container', {
		onSlideChangeStart: function (swiper) {

			activeItemTab(swiper.activeIndex, true);
		}
	});


	/**
	 * 标签页
	 */
	var items = [
		"最新",
		"个护",
		"家居",
		"美食",
		"彩妆",
		"视频",
		"厨房",
		"运动",
		"餐酒",
		"办公",
		"母婴",
		"出行",
		"数码"
	];


	navigationSwiper = new Swiper('.navigation-swiper-container', {
		slidesPerView: 5,
		spaceBetween: 30
	});


	var $itemTabs = $(".item-tab");
	$itemTabs.click(function () {
		activeItemTab($itemTabs.index($(this)));
	});


	//高亮指定index的item-tab. source是谁驱动的：用户或者stageSwiper
	function activeItemTab(index, isStageSwiper) {

		var $itemTab = $itemTabs.eq(index);
		$itemTabs.removeClass("active");
		$itemTab.addClass("active");

		//切换到当前页
		if (!isStageSwiper) {
			stageSwiper.slideTo(index, 400, false);
		}


		if (items.length > 5) {
			if (index <= 2) {
				navigationSwiper.slideTo(0, 400, false);

			} else if (index > 2 && index < items.length - 2) {
				navigationSwiper.slideTo(index - 2, 400, false);
			}
		}

	}

	/**
	 * 添加按钮
	 */
	$(".plus-btn").click(function () {
		console.log("你点击了添加按钮");
	})


	/**
	 * 将tab栏固定在顶部。
	 */
	var $navigationOuter = $('.navigation-outer');
	$navigationOuter.affix({
		offset: {
			//这里的高度应该等于轮播图的高度。
			top: 250
		}
	});

	//监听事件
	$navigationOuter.on("affix.bs.affix", function () {
		console.log("affix.bs.affix");
	});

	$navigationOuter.on("affix-top.bs.affix", function () {
		console.log("affix-top.bs.affix");
	});

	$navigationOuter.on("affix-bottom.bs.affix", function () {
		console.log("affix-bottom.bs.affix");
	});



});