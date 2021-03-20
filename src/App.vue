<template>
  <div>
    <h1>Notes</h1>
  

      <div>
      <textarea autofocus class="text-box" placeholder=" Write note..." v-model="text" />
     </div>

     
      <button @click="clr" class="clr-btn">Cancel</button>
      <button @click="saveNote" class="sbmt-btn">Save</button><br><br>
       
          <div align="center" >Total Saved Notes : <b>{{ savedNotes.length}}</b></div>
      <div class="savedNotes" v-for="(note, index) in savedNotes" v-bind:key="note.id">
        <h6>{{note.date}}</h6>
        <p>{{ note.text}}</p>
     <div align="right" class="dlt-btn" @click="deleteNote(index)" title="Delete note"><b>&times;</b></div>


      </div>


  </div>
</template>
<script>
  export default{
    name:'App',
    data(){
      return{
        //show:false,
    
          text:'',        
        savedNotes: [{}]
         }


    },


    methods:{
      clr(){
        this.text="";
      },
      saveNote(){ 
           if (this.text.trim().length == 0) {
        return
      }
          if(this.text.length >=1){
          this.savedNotes.push({
            text:this.text,
            date: new Date(
            Date.now()).toLocaleString()
          })
          this.text="";}
          },
      deleteNote(index){
       this.savedNotes.splice(index, 1)
      }
    },
    
     mounted() {
            if (localStorage.getItem('savedNotes')) this.savedNotes = JSON.parse(localStorage.getItem('savedNotes'));
        },
        watch: {
            savedNotes: {
                handler() {
                    localStorage.setItem('savedNotes', JSON.stringify(this.savedNotes));
                },
                deep: true,
            }
    },
    

  }

</script>
<style>
body{
text-align:center;
}
.text-box{
  font-size:18px;
  font-weight:50;
  font-style:italic;
   height:20vh;
    width:50vh; 

  border: 1px solid white;
  background-color:#b9d2de;
  outline:none;
   border-radius: 5px 5px 5px 5px;
}
.text-box:focus{
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
 
}
  
.clr-btn{
  outline:none;
  margin-right:50px;
  font-size:16px;
  background-color:#f2f2f2f2;
  color:orange;
 border:1px solid white;
  border-radius: 15px 15px 15px 15px;

 }
  .clr-btn:hover{
    color:red;
    background-color:lightblue;
  }
.sbmt-btn{
  border-radius: 15px 15px 15px 15px;
  color:green;
  font-size:18px;
  
  border: 1px solid white;
  outline:none;
  background-color:#f2f2f2f2;
 margin-left:50px;  
}
.sbmt-btn:hover{
 color:green;
  background-color:lightblue;
}
 
.savedNotes{
  display: inline-block;
 
  border-radius: 4px 10px 4px 10px;
  padding:.1px;
  font-size:18px;
  word-wrap: break-word;
  background-color:gray;
  width:50vh;
  height:auto;
  margin:10px;
}
.dlt-btn{

  margin-left:48vh;
  margin-right:2px;
   font-size:20px;
}
.dlt-btn:hover{
  color:red;
}
</style>