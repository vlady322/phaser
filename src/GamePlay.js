//PROYECTO EN PHASER
/*
GamePlayManager = {
    init: function() {
        console.log("init");
    },
    preload: function() {
        console.log("preload");
    },
    create: function() {
        console.log("create");
    },
    update: function() {
        console.log("update");
    }
}
//instanciamos el juego
//                         WHITH,HEIGT,USAMOS RENDER CANVAS PARA LA ANIMACION 
var game = new Phaser.Game(1136, 640, Phaser.CANVAS);    
game.state.add("gameplay", GamePlayManager); //y recien creamos el metodo
game.state.start("gameplay"); 


//  2
//cargamos la imagen
GamePlayManager = {
    init: function() {
        console.log("init");
    },
    preload: function() {
        game.load.image('background', 'assets/images/background.png');// 1 ********** 
    },
    create: function() {
        game.add.sprite(0, 0, 'background');//                           2 ********** 
    },
    update: function() {
        console.log("update");
    }
}
var game = new Phaser.Game(1136, 640, Phaser.CANVAS);
game.state.add("gameplay", GamePlayManager);
game.state.start("gameplay");

//3
//la animacion se adapte al tamaño de la pantalla
GamePlayManager = {
    init: function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; // 1 ********** 
        game.scale.pageAlignHorizontally = true;             // 2 ********** 
        game.scale.pageAlignVertically = true;               // 3 ********** 
        //se encontrarà anileado en el centro
    },
    preload: function() {
        game.load.image('background', 'assets/images/background.png');
    },
    create: function() {
        game.add.sprite(0, 0, 'background');
    },
    update: function() {
        
    }
}
var game = new Phaser.Game(1136, 640, Phaser.CANVAS);
game.state.add("gameplay", GamePlayManager);
game.state.start("gameplay");



//4
// cargaremos sprites
GamePlayManager = {
    init: function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
    },
    preload: function() {
        game.load.image('background', 'assets/images/background.png'); 
                                                            //  ancho,alto,el png tiene 2 imagenes
        game.load.spritesheet('horse', 'assets/images/horse.png', 84, 156, 2);  // 1 ********** 
    },
    create: function() {
        game.add.sprite(0, 0, 'background');
        this.horse = game.add.sprite(0,0,'horse');              // 2 **********                         
        this.horse.frame = 1; //(0 ojo serrado, 1 ojo abierto)  // 3 ********** 
        //imagen en el centro de la pantalla
        this.horse.x = game.width/2;                            // 4 ********** 
        this.horse.y = game.height/2;                           // 5 ********** 
    },
    update: function() {
        
    }
}
var game = new Phaser.Game(1136, 640, Phaser.CANVAS); 
game.state.add("gameplay", GamePlayManager);
game.state.start("gameplay");


//5
//escalar, rotar y ver pontos de referencia de nuestro sprite
GamePlayManager = {
    init: function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
    },
    preload: function() {
        game.load.image('background', 'assets/images/background.png');
        game.load.spritesheet('horse', 'assets/images/horse.png', 84, 156, 2);
    },
    create: function() {
        game.add.sprite(0, 0, 'background');
        this.horse = game.add.sprite(0,0,'horse');
        this.horse.frame = 0;
        this.horse.x = game.width/2;
        this.horse.y = game.height/2;
        this.horse.anchor.setTo(0.5,0.5);//para que este en el centro   // 1 **********                         
        this.horse.angle = 0; // rotar sprite n grados                  // 2 ********** 
        this.horse.scale.setTo(1, 2);//escalado                         // 4 ********** 
        this.horse.alpha = 0.5; //sprite transparente // 5 ********** 
    },
    update: function() {
    }
}
var game = new Phaser.Game(1136, 640, Phaser.CANVAS);
game.state.add("gameplay", GamePlayManager);
game.state.start("gameplay");



//6
// haremos que nuestro caballo siga las coordenadas de nuestro mouse
GamePlayManager = {
    init: function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        //para que se active al dar clic
        this.flagFirstMouseDown = false;                // 8 ********** 
    },
    preload: function() {
        game.load.image('background', 'assets/images/background.png');
        game.load.spritesheet('horse', 'assets/images/horse.png', 84, 156, 2);
    },
    create: function() {
        game.add.sprite(0, 0, 'background');
        this.horse = game.add.sprite(0,0,'horse');
        this.horse.frame = 0;
        this.horse.x = game.width/2;
        this.horse.y = game.height/2;
        this.horse.anchor.setTo(0.5);
        //borramos las 3 lineas de abajo              // 1 ********** 
        game.input.onDown.add(this.onTap, this);
        
    },
    onTap:function(){                      // 8 ********** 
          this.flagFirstMouseDown = true;  // 8 ********** 
    },                                     // 8 ********** 
    update: function() {
        if(this.flagFirstMouseDown){// flag para que se active al dar clic // 9 ********** 
            var pointerX = game.input.x;            // 2 ********** 
            var pointerY = game.input.y;            // 3 ********** 
            //calculamos distancias
            var distX = pointerX - this.horse.x;    // 4 ********** 
            var distY = pointerY - this.horse.y;    // 5 ********** 

            if(distX>0){ //mouse esta a la derecha      // 6 ********** 
                this.horse.scale.setTo(1,1);            // 6 ********** 
            }else{       //mouse esta a la isquierdav   // 6 ********** 
                this.horse.scale.setTo(-1,1);           // 6 ********** 
            }
            //mover el caballo hacia la posicion del mouse
                                //  velocidad que se mueve
            this.horse.x += distX * 0.02;               // 7 ********** 
            this.horse.y += distY * 0.02;               // 7 ********** 
        }  
    }
}
var game = new Phaser.Game(1136, 640, Phaser.CANVAS);
game.state.add("gameplay", GamePlayManager);
game.state.start("gameplay");
*/

// 7
// agregamos mas imagenes de para la animaciòn
GamePlayManager = {
    init: function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;

        this.flagFirstMouseDown = false;               
    },
    preload: function() {
        game.load.image('background', 'assets/images/background.png');
        game.load.spritesheet('horse', 'assets/images/horse.png', 84, 156, 2);
        //las demas imagenes
        game.load.image('shark', 'assets/images/shark.png');     // 1 ********** 
        game.load.image('fishes', 'assets/images/fishes.png');   // 1 ********** 
    },
    create: function() {
        game.add.sprite(0, 0, 'background');
        this.shark = game.add.sprite(500,20,'shark');          // 2 ********** 
        this.fishes = game.add.sprite(100, 550, 'fishes');     // 2 ********** 

        this.horse = game.add.sprite(0,0,'horse');
        this.horse.frame = 0;
        this.horse.x = game.width/2;
        this.horse.y = game.height/2;
        this.horse.anchor.setTo(0.5);
        game.input.onDown.add(this.onTap, this);
        
    },
    onTap:function(){                      
          this.flagFirstMouseDown = true;  
    },                                     
    update: function() {
        if(this.flagFirstMouseDown){ 
            //para que las imagenes se muevan
            this.shark.x--;           // 3 **********
            if(this.shark.x<-300){    // 3 **********
                this.shark.x = 1300;  // 3 **********
            }
            
            this.fishes.x+=0.3;        // 3 **********
            if(this.fishes.x>1300){    // 3 **********
                this.fishes.x = -300;  // 3 **********
            }                         


            var pointerX = game.input.x;          
            var pointerY = game.input.y;           
          
            var distX = pointerX - this.horse.x;    
            var distY = pointerY - this.horse.y;   

            if(distX>0){ 
                this.horse.scale.setTo(1,1);           
            }else{       
                this.horse.scale.setTo(-1,1);          
            }
            this.horse.x += distX * 0.02;              
            this.horse.y += distY * 0.02;            
        }  
    }
}
var game = new Phaser.Game(1136, 640, Phaser.CANVAS);
game.state.add("gameplay", GamePlayManager);
game.state.start("gameplay");
