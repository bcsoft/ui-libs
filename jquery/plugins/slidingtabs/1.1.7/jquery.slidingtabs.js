/*
 * Sliding Tabs 1.1.7 jQuery Plugin - http://codecanyon.net/item/sliding-tabs-jquery-plugin/141774
 * 
 * Copyright 2011, Christian André
 * All rights reserved.
 *
 * You need to purchase a license if you want to use this script.
 * http://codecanyon.net/wiki/buying/howto-buying/licensing/
 *
 */
(function($) {
	$.fn.slideTabs = function(b) {
		var c = {
			autoplay : false,
			autoplayClickStop : false,
			autoplayInterval : 4000,
			autoHeight : false,
			autoHeightTime : 0,
			buttonsFunction : 'slide',
			classBtnDisabled : 'st_btn_disabled',
			classBtnNext : 'st_next',
			classBtnPrev : 'st_prev',
			classExtLink : 'st_ext',
			classTab : 'st_tab',
			classTabActive : 'st_tab_active',
			classTabsContainer : 'st_tabs_container',
			classTabsList : 'st_tabs',
			classView : 'st_view',
			classViewActive : 'st_active_view',
			classViewContainer : 'st_view_container',
			contentAnim : 'slideH',
			contentAnimTime : 600,
			contentEasing : 'easeInOutExpo',
			offsetBR : 0,
			offsetTL : 0,
			orientation : 'horizontal',
			tabSaveState : false,
			tabsAnimTime : 300,
			tabsEasing : '',
			tabsScroll : true,
			tabsSlideLength : 0,
			totalHeight : '',
			totalWidth : '',
			urlLinking : true
		}, conf = $.extend(true, {}, c, b);
		return this.each(function() {
			var a = new SlideTabs($(this), conf);
			a.init()
		})
	};
	function SlideTabs(d, e) {
		var f = d.find('.' + e.classTabsContainer), $tabsInnerCont = f
				.children('div').first(), $tabs = f.find('.' + e.classTabsList), $a = $tabs
				.children('li').find('a'), $contentCont = d.find('.'
				+ e.classViewContainer), $content = $contentCont.find('.'
				+ e.classView), $prev = d.find('.' + e.classBtnPrev).click(
				function() {
					tabs[e.buttonsFunction + 'Prev'](val);
					return false
				}), $next = d.find('.' + e.classBtnNext).click(function() {
			tabs[e.buttonsFunction + 'Next'](val);
			return false
		}), $tab, $activeTab = [], $li, $lastElem, $view, $activeView, val = {}, margin = 0;
		this.init = function() {
			if (e.orientation == 'horizontal') {
				$tabsInnerCont.css('overflow', 'hidden');
				val.func = 'outerWidth';
				val.obj = 'left';
				val.attr = 'marginLeft'
			} else {
				val.func = 'outerHeight';
				val.obj = 'top';
				val.attr = 'marginTop';
				val.prevBtnH = $prev.outerHeight();
				val.nextBtnH = $next.outerHeight();
				(val.prevBtnH >= val.nextBtnH) ? val.buttonsH = val.prevBtnH
						: val.buttonsH = val.nextBtnH
			}
			if (e.totalWidth.length > 0) {
				g.width()
			}
			if (e.totalHeight.length > 0) {
				g.height()
			}
			tabs.init();
			if (e.autoplay == true) {
				autoplay.init()
			}
		};
		var g = {
			width : function() {
				if (e.totalWidth == 'auto') {
					d.css('width', '100%')
				} else {
					d.css('width', e.totalWidth + 'px')
				}
			},
			height : function() {
				var a = ($contentCont.outerHeight(true) - $contentCont.height());
				if (e.orientation == 'vertical') {
					var b = (f.outerHeight() - f.height());
					f.css('height', (e.totalHeight - b) + 'px');
					$contentCont.css('height', (e.totalHeight - a) + 'px')
				} else {
					$contentCont.css('height', (e.totalHeight - (f
							.outerHeight(true) + a))
							+ 'px')
				}
			}
		}, tabs = {
			animated : '#' + d.attr('id') + ' .' + e.classTabsList
					+ ':animated',
			init : function() {
				this.setSlideLength();
				this.posActive();
				this.bind()
			},
			setSlideLength : function() {
				if (e.tabsSlideLength == 0) {
					if (e.orientation == 'horizontal') {
						val.tabsSlideLength = $tabsInnerCont.width()
					} else {
						val.tabsSlideLength = (f.height() - val.buttonsH)
					}
				} else {
					val.tabsSlideLength = e.tabsSlideLength
				}
			},
			bind : function() {
				if (e.totalWidth == 'auto') {
					var c = null;
					$(window).resize(function() {
						if (c) {
							clearTimeout(c)
						}
						c = setTimeout(function() {
							if (e.orientation == 'horizontal') {
								tabs.setAutoWidth()
							}
							if (e.autoHeight == true) {
								content.adjustHeight()
							}
						}, 100)
					})
				}
				$tabs.delegate('li a.' + e.classTab, 'click', function() {
					tabs.click(this, true);
					return false
				});
				if ($.fn.mousewheel && e.tabsScroll == true) {
					$tabs.mousewheel(function(a, b) {
						(b > 0) ? tabs.slidePrev(val) : tabs.slideNext(val);
						return false
					})
				}
				$('a.' + e.classExtLink).each(
						function() {
							if ($(this).attr('rel') == d.attr('id')) {
								$(this).click(
										function() {
											$tab = tabs.findByRel($(this).attr(
													'href').slice(1));
											tabs.click($tab);
											return false
										})
							}
						})
			},
			setAutoWidth : function() {
				val.tabsSlideLength = $tabsInnerCont.width();
				var a = ($lastElem.outerWidth(true) + $lastElem.position().left), tabsContOW = f
						.outerWidth(true), buttonsW = ($prev.outerWidth(true) + $next
						.outerWidth(true));
				if (a > tabsContOW) {
					f.addClass('st_sliding_active');
					val.tabsSlideLength = $tabsInnerCont.width();
					tabs.initButtons();
					tabs.showButtons()
				} else {
					if (-+margin < (0 + e.offsetBR)) {
						if (a < $tabsInnerCont.width()) {
							var b = (val.tabsSlideLength - a);
							margin = (margin - b);
							if ((margin + 1) < (buttonsW + e.offsetBR)) {
								margin = (0 + e.offsetBR);
								tabs.hideButtons();
								val.tabsSlideLength = tabsContOW
							}
							tabs.initButtons()
						} else if (a <= (tabsContOW - margin)) {
							margin = (0 + e.offsetBR);
							tabs.hideButtons();
							val.tabsSlideLength = tabsContOW
						}
						$tabs.animate({
							'marginLeft' : -+margin
						}, 150)
					} else if (margin == (0 + e.offsetBR) && a <= tabsContOW) {
						tabs.hideButtons();
						val.tabsSlideLength = tabsContOW
					}
				}
			},
			posActive : function() {
				this.getActive();
				content.showActive();
				$lastElem = $tabs.children('li:last');
				$tab = $activeTab;
				$activeTab = $activeTab.parents('li');
				if (($lastElem[val.func](true) + $lastElem.position()[val.obj]) > val.tabsSlideLength) {
					f.addClass('st_sliding_active');
					this.setSlideLength();
					val.elemD = $activeTab[val.func](true);
					val.elemP = $activeTab.position()[val.obj];
					if (val.elemP > val.tabsSlideLength) {
						margin += (val.elemD + (val.elemP - val.tabsSlideLength));
						margin = (margin + e.offsetBR)
					} else if ((val.elemP + val.elemD) > val.tabsSlideLength) {
						margin += (val.elemD - (val.tabsSlideLength - val.elemP));
						margin = (margin + e.offsetBR)
					} else {
						margin = (margin - e.offsetTL)
					}
					$tabs.css(val.attr, -+margin);
					this.initButtons();
					this.showButtons()
				}
			},
			initButtons : function() {
				if (e.buttonsFunction == 'slide') {
					if ($tabs.children('li:first').position()[val.obj] == (0 + e.offsetTL)) {
						this.disableButton($prev)
					} else {
						this.enableButton($prev)
					}
					if (($lastElem.position()[val.obj] + $lastElem[val.func]
							(true)) <= (val.tabsSlideLength - e.offsetBR)) {
						this.disableButton($next)
					} else {
						this.enableButton($next)
					}
				} else {
					this.setButtonState()
				}
			},
			enableButton : function(a) {
				a.removeClass(e.classBtnDisabled)
			},
			disableButton : function(a) {
				a.addClass(e.classBtnDisabled)
			},
			showButtons : function() {
				$prev.show();
				$next.show()
			},
			hideButtons : function() {
				f.removeClass('st_sliding_active');
				$prev.hide();
				$next.hide()
			},
			click : function(a, b) {
				if ($(content.animated).length) {
					return false
				}
				$tab = $(a);
				if ($tab.hasClass(e.classTabActive)) {
					return false
				}
				$li = $tab.parents('li');
				this.setActive();
				if (e.autoplay == true) {
					if (e.autoplayClickStop == true && b == true) {
						e.autoplay = false;
						autoplay.clearInterval()
					} else {
						val.index = $tab.parents('li').index();
						autoplay.setInterval()
					}
				}
				val.elemP = $li.position();
				val.activeElemP = $activeTab.position();
				val.hash = this.getHash($tab);
				this.slideClicked(val);
				$activeView = $content.children('div.' + e.classViewActive)
						.removeClass(e.classViewActive);
				$view = $content.children('div#' + val.hash).addClass(
						e.classViewActive);
				if (e.autoHeight == true) {
					content.adjustHeight()
				}
				if (e.contentAnim.length > 0) {
					content[e.contentAnim](val)
				} else {
					$activeView.hide();
					$view.show()
				}
			},
			clickPrev : function() {
				if ($(content.animated).length) {
					return false
				}
				val.$prevTab = this.find('prev');
				if (val.$prevTab.length) {
					this.click(val.$prevTab)
				}
			},
			clickNext : function() {
				if ($(content.animated).length) {
					return false
				}
				val.$nextTab = this.find('next');
				if (val.$nextTab.length) {
					this.click(val.$nextTab)
				}
			},
			find : function(a) {
				return $tab.parents('li')[a]().find('a.' + e.classTab)
			},
			findByRel : function(a) {
				return $tabs.find('[rel=' + a + ']')
			},
			getHash : function(a) {
				val.hash = a.attr('hash');
				if (val.hash) {
					return val.hash
				} else {
					return a.prop('hash')
				}
			},
			getActive : function() {
				if (e.urlLinking == true && location.hash) {
					$activeTab = this.findByRel(location.hash.slice(1))
				}
				if (!$activeTab.length) {
					if ($.cookie) {
						var a = $.cookie(d.attr('id'))
					}
					if (a) {
						this.removeActive();
						$activeTab = $a.eq(a).addClass(e.classTabActive)
					} else {
						$activeTab = $tabs.children('li').find(
								'.' + e.classTabActive);
						if (!$activeTab.length) {
							$activeTab = $tabs.find('a:first').addClass(
									e.classTabActive)
						}
					}
				} else {
					this.removeActive();
					$activeTab.addClass(e.classTabActive)
				}
				this.saveActive($activeTab)
			},
			removeActive : function() {
				$tabs.children('li').find('.' + e.classTabActive).removeClass(
						e.classTabActive)
			},
			setActive : function() {
				$activeTab = $tabs.children('li').find('a.' + e.classTabActive)
						.removeClass(e.classTabActive);
				$tab.addClass(e.classTabActive);
				this.saveActive($tab)
			},
			saveActive : function(a) {
				if (e.tabSaveState == true) {
					$.cookie(d.attr('id'), a.parents('li').index())
				}
			},
			slideClicked : function(a) {
				a.elemP = a.elemP[a.obj];
				a.elemD = $li[a.func](true);
				a.nextElemPos = ($li.next().length == 1) ? $li.next()
						.position()[a.obj] : 0;
				if (a.elemP < (0 + e.offsetTL)) {
					a.elemHidden = (a.elemD - a.nextElemPos);
					margin = (margin - (a.elemHidden + e.offsetTL));
					this.enableButton($next)
				} else if ((a.elemD + a.elemP) > (a.tabsSlideLength - e.offsetBR)) {
					margin += (a.elemD - (a.tabsSlideLength - (a.elemP + e.offsetBR)));
					this.enableButton($prev)
				}
				this.animate();
				this.setButtonState()
			},
			slidePrev : function(a) {
				if ($(tabs.animated).length) {
					return false
				}
				$tabs.children('li').each(function() {
					$li = $(this);
					a.elemP = $li.position()[a.obj];
					if (a.elemP >= (0 + e.offsetTL)) {
						a.elemHidden = ($li.prev()[a.func](true) - a.elemP);
						margin = ((margin - a.elemHidden) - e.offsetTL);
						$li = $li.prev();
						tabs.animate();
						tabs.setButtonState($next);
						return false
					}
				})
			},
			slideNext : function(a) {
				if ($(tabs.animated).length) {
					return false
				}
				$tabs
						.children('li')
						.each(
								function() {
									$li = $(this);
									a.elemD = $li[a.func](true);
									a.elemP = $li.position()[a.obj];
									if ((a.elemD + a.elemP) > (a.tabsSlideLength - e.offsetBR)) {
										a.elemHidden = (a.tabsSlideLength - a.elemP);
										margin += ((a.elemD - a.elemHidden) + e.offsetBR);
										tabs.animate();
										tabs.setButtonState($prev);
										return false
									}
								})
			},
			animate : function() {
				if (e.orientation == 'horizontal') {
					$tabs.animate({
						'marginLeft' : -+margin
					}, e.tabsAnimTime, e.tabsEasing)
				} else {
					$tabs.animate({
						'marginTop' : -+margin
					}, e.tabsAnimTime, e.tabsEasing)
				}
			},
			setButtonState : function(a) {
				if (e.buttonsFunction == 'click') {
					$li = $tab.parents('li')
				}
				if ($li.is(':first-child')) {
					this.disableButton($prev);
					this.enableButton($next)
				} else if ($li.is(':last-child')) {
					this.disableButton($next);
					this.enableButton($prev)
				} else {
					if (a) {
						this.enableButton(a)
					} else if (e.buttonsFunction == 'click') {
						this.enableButton($prev);
						this.enableButton($next)
					}
				}
			}
		}, content = {
			animated : '#' + d.attr('id') + ' :animated',
			showActive : function() {
				$view = $content.children($activeTab.attr('href')).addClass(
						e.classViewActive);
				$content.children('div').css('position', 'absolute').show()
						.not('div.' + e.classViewActive).hide();
				if (e.autoHeight == true) {
					$content.css('height', $view.height()).parent().css(
							'height', 'auto')
				}
			},
			adjustHeight : function() {
				if (e.autoHeightTime > 0) {
					$content.animate({
						'height' : $view.height()
					}, e.autoHeightTime)
				} else {
					$content.css('height', $view.height())
				}
			},
			fade : function() {
				$activeView.fadeOut(e.contentAnimTime);
				$view.fadeIn(e.contentAnimTime)
			},
			fadeOutIn : function() {
				$activeView.fadeOut(e.contentAnimTime, function() {
					$view.fadeIn(e.contentAnimTime)
				})
			},
			slideH : function(a) {
				a.wh = d.outerWidth(true);
				this.setSlideValues(a);
				$activeView.animate({
					'left' : a.animVal
				}, e.contentAnimTime, e.contentEasing);
				$view.css({
					'display' : 'block',
					'left' : a.cssVal
				}).animate({
					'left' : '0px'
				}, e.contentAnimTime, e.contentEasing, function() {
					$activeView.css('display', 'none')
				})
			},
			slideV : function(a) {
				a.wh = d.outerHeight(true);
				this.setSlideValues(a);
				$activeView.animate({
					'top' : a.animVal
				}, e.contentAnimTime, e.contentEasing);
				$view.css({
					'display' : 'block',
					'top' : a.cssVal
				}).animate({
					'top' : '0px'
				}, e.contentAnimTime, e.contentEasing, function() {
					$activeView.css('display', 'none')
				})
			},
			setSlideValues : function(a) {
				if (a.elemP > a.activeElemP[a.obj]) {
					a.animVal = -a.wh;
					a.cssVal = a.wh
				} else {
					a.animVal = a.wh;
					a.cssVal = -a.wh
				}
			}
		}, autoplay = {
			init : function() {
				val.index = 0;
				this.setInterval()
			},
			setInterval : function() {
				this.clearInterval();
				val.intervalId = setInterval(function() {
					autoplay.play()
				}, e.autoplayInterval)
			},
			clearInterval : function() {
				clearInterval(val.intervalId)
			},
			play : function() {
				val.index++;
				if (val.index == $a.length) {
					val.index = 0
				}
				tabs.click($a[val.index])
			}
		}
	}
})(jQuery);
