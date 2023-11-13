app.component('BookShelf', {
    data(){
        return {
            //filteredSongs: this.songs,
            filterKeyword: '',
        }
    },

    props: {
        books: Array,
    },

    methods: {

        sort(theSortFunction){
            this.books.sort(theSortFunction);
        },

        filter(keyword){
            this.filterKeyword = keyword;
        },
    },

    computed: {


    },


    template: `
        <div class="bookShelf">
            <div class="row justify-between">
            </div>
            <q-list >
              <div class="q-pa-md row items-start q-gutter-md flex-center">
                <book-item v-for="item in books" :book="item" :key="item.id" @delete-item="deleteItem => $emit('delete-item', deleteItem)"  @add-to-rbs="book => $emit('add-to-rbs', book)"> </book-item>
              </div>
            </q-list>
        </div>
            
    `
})
