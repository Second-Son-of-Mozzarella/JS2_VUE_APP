const app = Vue.createApp({
    data(){

        let bookList = [
            new Book('American Ceaser','test',100,'test','English','test',25,false),
            new Book('Rise and Fall of Rome V.1','test',490,'English','test','test',360,false),
            new Book('Gaijin Shogun','Douglas MacArthur',550,'English','test','test',51,false),
            new Book('to Hell and Back','Audi Murphy',200,'English','Second World War','Biography',200,false),
            new Book('The Republic','Plato',100,'Greek','test','test',45,false),
            new Book('Pimp','Iceberg Slim',253,'English','Inter-war Period','Biography',100,false),


        ];

        let rbs = new ReadBookShelf()

        return {
            bookList,

            rightDrawerOpen: false,

            rbs

        }



    },

    methods: {
        addIt: function(Book){
            // add item to the list
            this.bookList.push(Book);
        },


        deleteIt(Book){
            this.bookList.splice(this.bookList.indexOf(Book),1);
        },

        addReadBooks(Book) {
            this.rbs.addReadBooks(Book);
            this.bookList.splice(this.bookList.indexOf(Book),1);
        }
    }


})