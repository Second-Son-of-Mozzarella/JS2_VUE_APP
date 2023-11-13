

function Book(title,author,length,language,timePeriod,type,pagesRead,favorite){

    this.id = Math.floor(Math.random() * 9999999);

    this.title = title ?? '';
    this.author = author ?? '';
    this.length = length ?? 0;
    this.language =language ?? '';
    this.timePeriod = timePeriod ?? '';
    this.type = type ?? '';
    this.pagesRead = pagesRead ?? 0;
    this.favorite = favorite ?? false;

}

function ReadBookShelf(){
    this.books = [];

    this.addReadBooks = function(book){
        if(book instanceof Book) {
            this.books.push(book);

        }
    }

    this.totalPagesRead = function(){
        let QAM1 = 0;

        this.books.forEach(book => {
            QAM1 += book.length;
        })
    }

    this.clearShelf = function(){
        this.books = [];
    }
}

