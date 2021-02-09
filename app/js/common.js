$(function() {

	// Custom JS


});
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

   _eventTabsShow = new CustomEvent('tab.show', { detail: _elemTabs });

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