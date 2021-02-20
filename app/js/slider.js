let page = 1;
const pageTotal = 4;

const renderArticle = ({
    image, title, description, date,
}) => {
    return `
        <div class='article'>
            <div class='article__image'>
                <img src=${image} alt='' />
            </div>
            <div class='article__title'>
                <h3>
                    ${title}
                </h3>
            </div>
            <div class='article__content'>
                <p>
                    ${description}
                </p>
            </div>
            <div class='article__date'>
                <img src='img/calendar.svg' alt='' />
                <span>${date}</span>
            </div>
            <div class='article__read-more'>
                <button>Читать далее</button>
            </div>
        </div>
    `
}

const changePageNumber = (pageNumber) => {
    page = pageNumber;
    console.log('p', page);
}

const renderItemList = ({
    page, pageTotal, list, renderItem
}) => {
    let resultHtml = '';
    list.forEach(item => {
        resultHtml += renderItem(item);
    });
    resultHtml += `
        <div class='pages'>
            <div class='pages__title'>Страница </div>
            <div class='pages__number'>
                ${page>1?"<div id='pages__prev'><img src='img/arrow.svg' alt='' class='pages__prev' /></div>":""}
                ${page<pageTotal?"<div id='pages__next'><img src='img/arrow.svg' alt='' class='pages__next' /></div>":""}
                <b><span id='pages__current'>${page}</span> / </span id='pages__total'>${pageTotal}</span></b>
            </div>
            <div class='pages__rectangle'></div>
        </div>
    `
    return resultHtml;
}

const items = [{
    image: 'img/article_1.png',
    title: 'Распространённые причины поломки хроматографа',
    description: 'Криминалистические экспертизы играют важную роль при раскрытии различных дел, возникающих в следственной и судебной практике. Современная криминалистика включает в себя более десяти родов экспертиз, хроматография используется в двух из них: экспертиза веществ и материалов и техническая экспертиза документов. ',
    date: '06.09.2020',
},{
    image: 'img/article_2.png',
    title: 'Распространённые причины поломки хроматографа',
    description: 'Криминалистические экспертизы играют важную роль при раскрытии различных дел, возникающих в следственной и судебной практике. Современная криминалистика включает в себя более десяти родов экспертиз, хроматография используется в двух из них: экспертиза веществ и материалов и техническая экспертиза документов. ',
    date: '06.09.2020',
},{
    image: 'img/article_3.png',
    title: 'Распространённые причины поломки хроматографа',
    description: 'Криминалистические экспертизы играют важную роль при раскрытии различных дел, возникающих в следственной и судебной практике. Современная криминалистика включает в себя более десяти родов экспертиз, хроматография используется в двух из них: экспертиза веществ и материалов и техническая экспертиза документов. ',
    date: '06.09.2020',
},{
    image: 'img/article_4.png',
    title: 'Распространённые причины поломки хроматографа',
    description: 'Криминалистические экспертизы играют важную роль при раскрытии различных дел, возникающих в следственной и судебной практике. Современная криминалистика включает в себя более десяти родов экспертиз, хроматография используется в двух из них: экспертиза веществ и материалов и техническая экспертиза документов. ',
    date: '06.09.2020',
},{
    image: 'img/article_1.png',
    title: 'Распространённые причины поломки хроматографа',
    description: 'Криминалистические экспертизы играют важную роль при раскрытии различных дел, возникающих в следственной и судебной практике. Современная криминалистика включает в себя более десяти родов экспертиз, хроматография используется в двух из них: экспертиза веществ и материалов и техническая экспертиза документов. ',
    date: '06.09.2020',
},{
    image: 'img/article_2.png',
    title: 'Распространённые причины поломки хроматографа',
    description: 'Криминалистические экспертизы играют важную роль при раскрытии различных дел, возникающих в следственной и судебной практике. Современная криминалистика включает в себя более десяти родов экспертиз, хроматография используется в двух из них: экспертиза веществ и материалов и техническая экспертиза документов. ',
    date: '06.09.2020',
},{
    image: 'img/article_3.png',
    title: 'Распространённые причины поломки хроматографа',
    description: 'Криминалистические экспертизы играют важную роль при раскрытии различных дел, возникающих в следственной и судебной практике. Современная криминалистика включает в себя более десяти родов экспертиз, хроматография используется в двух из них: экспертиза веществ и материалов и техническая экспертиза документов. ',
    date: '06.09.2020',
}];


const renderPage = () => {
    const slider = document.getElementById('slider');
    slider.innerHTML = renderItemList({
        page, 
        pageTotal, 
        list: items, 
        renderItem: renderArticle
    });
    const nextPageButton = document.getElementById('pages__next');
    const prevPageButton = document.getElementById('pages__prev');

    if(nextPageButton) {
        nextPageButton.addEventListener("click",function(e){
            page = page + 1;
            renderPage();
        });
    }

    if(prevPageButton) {
        prevPageButton.addEventListener("click",function(e){
            page = page - 1;
            renderPage();
        });
    } 
}

renderPage();

