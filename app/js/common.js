$(function () {

    class HromotoPageTabs{
        constructor() {
            this.tabButtons = document.querySelectorAll('.js-tab');
            this.tabContainers = document.querySelectorAll('.js-tab__container');
            this.init()
        }

        init(){
            if(this.tabButtons.length > 0 ) this.tabButtons.forEach(el => el.addEventListener('click', this.checkTab))
        }

        checkTab = (e) => {
            this.clearActiveButton()
            e.target.classList.add('tab_active');
            let nextTabName = e.target.dataset.to;
            this.switchActiveTabContainer(nextTabName)
        }

        clearActiveButton(){
            document.querySelector('.tab_active').classList.remove('tab_active')
        }

        clearActiveTabContainer(){
            document.querySelector('.js-tab__container.show').classList.remove('show')
        }

        switchActiveTabContainer(name){
            this.clearActiveTabContainer()
            document.querySelector(`[data-page=${name}]`).classList.add('show')
        }

    }

    new HromotoPageTabs();

    console.log('lol')
    $('.slider__container').slick();

    let $tabs = function (target) {
        let
            _elemTabs = (typeof target === 'string' ? document.querySelector(target) : target),
            _eventTabsShow,
            _showTab = function (tabsLinkTarget) {
                let tabsPaneTarget, tabsLinkActive, tabsPaneShow;
                tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'));
                tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.buttonActive');
                tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.singleService__TabSingle_show');
                // если следующая вкладка равна активной, то завершаем работу
                if (tabsLinkTarget === tabsLinkActive) {
                    return;
                }
                // удаляем классы у текущих активных элементов
                if (tabsLinkActive !== null) {
                    tabsLinkActive.classList.remove('buttonActive');
                }
                if (tabsPaneShow !== null) {
                    tabsPaneShow.classList.remove('singleService__TabSingle_show');
                }
                // добавляем классы к элементам (в завимости от выбранной вкладки)
                tabsLinkTarget.classList.add('buttonActive');
                tabsPaneTarget.classList.add('singleService__TabSingle_show');
                document.dispatchEvent(_eventTabsShow);
            },
            _switchTabTo = function (tabsLinkIndex) {
                let tabsLinks = _elemTabs.querySelectorAll('.singleService__descriptionWrapper_Button');
                if (tabsLinks.length > 0) {
                    if (tabsLinkIndex > tabsLinks.length) {
                        tabsLinkIndex = tabsLinks.length;
                    } else if (tabsLinkIndex < 1) {
                        tabsLinkIndex = 1;
                    }
                    _showTab(tabsLinks[tabsLinkIndex - 1]);
                }
            };

        _eventTabsShow = new CustomEvent('tab.show', {detail: _elemTabs});

        _elemTabs.addEventListener('click', function (e) {
            let tabsLinkTarget = e.target;
            // завершаем выполнение функции, если кликнули не по ссылке
            if (!tabsLinkTarget.classList.contains('singleService__descriptionWrapper_Button')) {
                return;
            }
            // отменяем стандартное действие
            e.preventDefault();
            _showTab(tabsLinkTarget);
        });

        return {
            showTab: function (target) {
                _showTab(target);
            },
            switchTabTo: function (index) {
                _switchTabTo(index);
            }
        }

    };

    $tabs('._tabsService');



});

// });
