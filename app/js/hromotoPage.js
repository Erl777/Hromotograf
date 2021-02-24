document.addEventListener("DOMContentLoaded", function(event) {

    class HromotoPageTabs{
        constructor() {
            this.tabButtons = document.querySelectorAll('.js-tab');
            this.tabContainers = document.querySelectorAll('.js-tab__container');
            this.init()
        }

        init(){
            console.log('init HromotoPageTabs')
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

});