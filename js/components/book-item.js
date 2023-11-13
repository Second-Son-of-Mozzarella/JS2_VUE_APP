app.component('BookItem', {
    data(){
        return {

        }
    },



    props: {
        book: Book,
    },

    emits: ['delete-item','finished-book'],

    methods: {

        deleteIt: function () {

            this.$emit('delete-item', this.book);


        },

        addToFin: function () {
            this.$emit('finished-book', this.book);
        }

    },

    computed: {



    },

    mounted(){

    },


    template: `
      
      <q-card class="my-card">

        
        
        
           <q-card-section :class="{'text-white' : true,'favorite': book.favourite, 'top-card' : true, 'completed' : book.length <= book.pagesRead}" >

             <div class="row">
               <div class="col-10"> 
                 <div class="cursor-pointer text-h6 text-weight-bold ellipsis cardInfo">
                 {{book.title}}
                   <q-tooltip>
                     {{book.title}}
                   </q-tooltip>
                 <q-popup-edit v-model="label" auto-save v-slot="scope">
                   <q-input v-model="book.title" dense autofocus counter @keyup.enter="book.set" />
                 </q-popup-edit>
               </div>
                 
                 


                 <div class="cursor-pointer ellipsis cardInfo">
                   By {{book.author}}
                   <q-popup-edit v-model="label" auto-save v-slot="scope">
                     <q-input v-model="book.author" dense autofocus counter @keyup.enter="book.author" />
                   </q-popup-edit>
                 </div>
             </div>
               <div class="col-2">
                 <q-circular-progress
                     v-if="book.length > book.pagesRead"
                     show-value
                     :value="Math.round((book.pagesRead / book.length) * 100)"
                     size="40px"
                     :thickness="0.2"
                     color="green-5"
                     center-color="grey-9"
                     track-color="transparent"
                     class="q-ml-md q-mr-lg"
                 >
                   {{Math.round((book.pagesRead / book.length) * 100)}}%
                 </q-circular-progress>

                
                 

               </div>
             </div>

            


             
           </q-card-section>
        
        <br>

            <q-card-section class="q-pt-none">
              <div class="cursor-pointer ellipsis cardInfo">
                Length: {{book.length}} Pages
                <q-popup-edit v-model="label" auto-save v-slot="scope">
                  <q-input v-model.number="book.length" dense autofocus counter @keyup.enter="book.length" />
                </q-popup-edit>
              </div>
             
              <div class="cursor-pointer ellipsis cardInfo">
                Language: {{book.language}}
                <q-popup-edit v-model="label" auto-save v-slot="scope">
                  <q-input v-model="book.language" dense autofocus counter @keyup.enter="book.language" />
                </q-popup-edit>
              </div>
       
              <div class="cursor-pointer ellipsis cardInfo">
                Time Period: {{book.timePeriod}}
                <q-popup-edit v-model="label" auto-save v-slot="scope">
                  <q-input v-model="book.timePeriod" dense autofocus counter @keyup.enter="book.timePeriod" />
                </q-popup-edit>
              </div>
            
              <div class="cursor-pointer ellipsis cardInfo">
                Type: {{book.type}}
                <q-popup-edit v-model="label" auto-save v-slot="scope">
                  <q-input v-model="book.type" dense autofocus counter @keyup.enter="book.type" />
                </q-popup-edit>
              </div>
              
              <div class="cursor-pointer ellipsis cardInfo">
                Pages Read: {{book.pagesRead}} Pages
                <q-popup-edit v-model="label" auto-save v-slot="scope">
                  <q-input v-model.number="book.pagesRead" dense autofocus counter @keyup.enter="book.pagesRead" />
                </q-popup-edit>
              </div>
              
              
            </q-card-section>
        

        <q-card-actions align="around">
          

            <q-btn size="10px" v-if="book.length <= book.pagesRead" @click="$emit('add-to-rbs', book)" class="completed text-white" >Archive</q-btn>

            <q-btn  size="10px" @click.prevent="deleteIt" class="top-card text-white" >delete</q-btn>

          
          
        </q-card-actions>
    </q-card>
    `
})