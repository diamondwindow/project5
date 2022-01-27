class player {
    constructor() {
        var heightMain = document.getElementById("player");
        heightMain.style.height = screen.height + "px";
        if (screen.width < 620) {
            heightMain.style.width = screen.width + "px";
        }
        var heightDiv = document.getElementById("content")
        heightDiv.style.height = screen.height - 300 + "px";

    }
}

onload = new player();

class Player{
    constructor(){
        
        this.audio_file = document.getElementById("audio_file");
        this.isPlayed;

        this.play = document.getElementById("play");
        this.play.addEventListener("click",()=>{this.play_pause();});

        this.audios =[];
        this.audios[0] = "https://server03.quran.com.kw:7032/;";
        this.audios[1] = "https://qurango.net/radio/eid";
        this.audios[2] = "https://qurango.net/radio/fatwa";
    
        this.names = [];

        this.names[0] = "إذاعة القرأن الكريم";
        
        this.names[1] = "إذاعة تكبيرات العيد";
        this.names[2] = "إذاعة الفتاوي العامه";
        
        this.numberAudio =0;

     

        this.next = document.getElementById("next");
        this.next.addEventListener("click",()=>{
            this.next_audio();
        });
           

        this.back = document.getElementById("back");
        this.back.addEventListener("click",()=>{
            
          this.back_audio();  
         
        });

        this.setSource();
    }
    play_pause(){
        if(this.isPlayed==false){
            this.play.src = "pause.png";
            this.audio_file.play();
            this.isPlayed=true;
        }
        else{
            this.play.src = "play.png";
            this.audio_file.pause();
            this.isPlayed=false;
        }
    }

    next_audio(){
         if(this.numberAudio<this.audios.length-1){
                ++this.numberAudio;
                this.isPlayed = false; 
                }
         else   {
                this.numberAudio = 0;
                }
               
                this.setSource();
    }
    back_audio(){
        if(this.numberAudio>0){
            --this.numberAudio;
            this.isPlayed = false; 
         }
         else{
            this.numberAudio = this.audios.length -1;
            
         }
        
         this.setSource();
    }
    setSource(){
     
    document.getElementById("title_radio").innerHTML = this.names[this.numberAudio];
    document.getElementById("audio_file").src = this.audios[this.numberAudio];

    this.play_pause();
    }

}
onload = new Player();