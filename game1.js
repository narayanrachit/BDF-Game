var Menu = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Menu ()
    {
        Phaser.Scene.call(this, 'menu');
    },
    
    preload: function(){
        
        this.load.image("ground","topground.png");
        this.load.image("sky","1937.jpg");
        this.load.image("ray","ray.png");
        this.load.image("start", "start.png");
        this.load.image("logo", "logo.jpeg");
    },
    create: function ()
    {
         W = game.config.width;
    H = game.config.height;
    
    let ground = this.add.tileSprite(0,H-128,W,128,'ground');
    ground.setOrigin(0,0);
    
    //try to create a background
    let background = this.add.sprite(0,0,'sky');
    background.setOrigin(0,0);
    background.displayWidth = W;
    background.displayHeight = H;
    background.depth = -2;
        background.alpha = 0.8;
    
    //create rays on the top of the background
    let rays = [];
    
    for(let i=-10;i<=10;i++){
        let ray = this.add.sprite(W/2,H-100,'ray');
        ray.displayHeight = 1.5*H;
        ray.setOrigin(0.5,1);
        ray.alpha = 0.2;
        ray.angle = i*20;
        ray.depth = -1;
        rays.push(ray);
    }
    console.log(rays);
    
    //tween
    this.tweens.add({
        targets: rays,
        props:{
            angle:{
                value : "+=20"
            },
        },
        duration : 8000,
        repeat : -1
    });
    
    
    let platforms = this.physics.add.staticGroup();
    platforms.create(500,400,'ground').setScale(2,0.5).refreshBody();
    platforms.create(100,100, 'logo').setScale(0.07, 0.07).refreshBody()
        
        
   // spinBtn is START buttton
    this.spinBtn = this.add.image(750, 375, 'start', this).setInteractive();
    this.spinBtn.setScale(0.75);
    //this.spinBtn.setPosition(this.spinBtn.width * this.spinBtn.scale/2,this.spinBtn.height * this.spinBtn.scale/2);
    //this.spinBtn.inputEnabled = true;
    //this.spinBtn.on('pointerdown', function(){this.scene.start('demo', {id: 0, image: 'topground.png'}); }  ,this);
        
        console.log("This is made by RACHIT NARAYAN");
        this.add.text(250, 70, 'Welocme to The Bag-Age Game', { font: 'bold 60px Courier', fill: '#000000' });
        
        this.add.text(100, 630, 'Press 1 to START AND 2 TO READ INSTRUCTIONS', { font: '50px Courier', fill: '#000000' });

        this.input.keyboard.once('keyup_ONE', function () {

            this.scene.start('demo', { id: 0, image: 'topground.png' });

        }, this);

        this.input.keyboard.once('keyup_TWO', function () {

            this.scene.start('inst', { id: 1, image: 'ray.png' });

        }, this);

        this.events.on('shutdown', this.shutdown, this);
    },

    shutdown: function ()
    {
        //  We need to clear keyboard events, or they'll stack up when the Menu is re-run
        this.input.keyboard.shutdown();
    }

});




var Inst = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Inst ()
    {
        Phaser.Scene.call(this, 'inst');
    },
    
    preload: function(){
        
        this.load.image("ground","topground.png");
        this.load.image("sky","1937.jpg");
        this.load.image("ray","ray.png");
        this.load.image("start", "start.png");
        this.load.image("head", "head.jpeg");
        this.load.image("head2", "head 2.jpeg");
        this.load.image("body", "body.jpeg");
        
    },
    create: function ()
    {
         W = game.config.width;
    H = game.config.height;
    
    let ground = this.add.tileSprite(0,H-128,W,128,'ground');
    ground.setOrigin(0,0);
    
    //try to create a background
    let background = this.add.sprite(0,0,'sky');
    background.setOrigin(0,0);
    background.displayWidth = W;
    background.displayHeight = H;
    background.depth = -2;
    background.alpha = 1;
        
    
    
   // create rays on the top of the background
    let rays = [];
    
    for(let i=-10;i<=10;i++){
        let ray = this.add.sprite(W/2,H-100,'ray');
        ray.displayHeight = 1.5*H;
        ray.setOrigin(0.5,1);
        ray.alpha = 0.2;
        ray.angle = i*20;
        ray.depth = -1;
        rays.push(ray);
    }
    console.log(rays);
    
    //tween
    this.tweens.add({
        targets: rays,
        props:{
            angle:{
                value : "+=20"
            },
        },
        duration : 8000,
        repeat : -1
    });
       
        
        this.add.text(460, 630, 'Press 1 to start the game', { font: 'bold 40px Stencil', fill: '#000000' });
        
        console.log("This is made by RACHIT NARAYAN");
        
        //Instruction Images
        let platforms = this.physics.add.staticGroup();
        platforms.create(750,70,'head').setScale(0.8).refreshBody();
        platforms.create(750, 130, 'head2').setScale(0.6).refreshBody();
        platforms.create(750, 400, 'body').setScale(0.6).refreshBody();
        
        

        this.input.keyboard.once('keyup_ONE', function () {

            this.scene.start('demo', { id: 0, image: 'topground.png' });

        }, this);


        this.events.on('shutdown', this.shutdown, this);
    },

    shutdown: function ()
    {
        //  We need to clear keyboard events, or they'll stack up when the Menu is re-run
        this.input.keyboard.shutdown();
    }

});





var Endgame = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Endgame ()
    {
        Phaser.Scene.call(this, 'endgame');
    },
    
    preload: function(){
        
        this.load.image("ground","topground.png");
        this.load.image("sky","1937.jpg");
        this.load.image("ray","ray.png");
        this.load.image("smily", "smily.png")
        
    },
    create: function ()
    {
         W = game.config.width;
    H = game.config.height;
    
    let ground = this.add.tileSprite(0,H-128,W,128,'ground');
    ground.setOrigin(0,0);
    
    //try to create a background
    let background = this.add.sprite(0,0,'sky');
    background.setOrigin(0,0);
    background.displayWidth = W;
    background.displayHeight = H;
    background.depth = -2;
    
    //create rays on the top of the background
    let rays = [];
    
    for(let i=-10;i<=10;i++){
        let ray = this.add.sprite(W/2,H-100,'ray');
        ray.displayHeight = 1.5*H;
        ray.setOrigin(0.5,1);
        ray.alpha = 0.2;
        ray.angle = i*20;
        ray.depth = -1;
        rays.push(ray);
    }
    console.log(rays);
    
    //tween
    this.tweens.add({
        targets: rays,
        props:{
            angle:{
                value : "+=20"
            },
        },
        duration : 8000,
        repeat : -1
    });
    
    
    let platforms = this.physics.add.staticGroup();
    platforms.create(500,400,'ground').setScale(2,0.5).refreshBody();
        
        
        console.log("This is made by RACHIT NARAYAN");
        
        this.add.text(150, 70, 'You have become Dauntless', { fontFamily: 'Arial', font: '84px', fill: '#000000' });
        
        let coins = this.physics.add.staticGroup();
        coins.create(750,450,'smily').setScale(0.2,0.2).refreshBody();
        
        
         this.input.once('pointerup', function () {

            this.scene.start('menu');

        }, this);
        


},
});



var Lost = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Lost ()
    {
        Phaser.Scene.call(this, 'lost');
    },
    
    preload: function(){
        
        this.load.image("ground","topground.png");
        this.load.image("sky","1937.jpg");
        this.load.image("ray","ray.png");
        this.load.image("smily", "smily.png")
        //this.load.image("start", "start.png");
        
    },
    create: function ()
    {
         W = game.config.width;
    H = game.config.height;
    
    let ground = this.add.tileSprite(0,H-128,W,128,'ground');
    ground.setOrigin(0,0);
    
    //try to create a background
    let background = this.add.sprite(0,0,'sky');
    background.setOrigin(0,0);
    background.displayWidth = W;
    background.displayHeight = H;
    background.depth = -2;
    
    //create rays on the top of the background
    let rays = [];
    
    for(let i=-10;i<=10;i++){
        let ray = this.add.sprite(W/2,H-100,'ray');
        ray.displayHeight = 1.5*H;
        ray.setOrigin(0.5,1);
        ray.alpha = 0.2;
        ray.angle = i*20;
        ray.depth = -1;
        rays.push(ray);
    }
    console.log(rays);
    
    //tween
    this.tweens.add({
        targets: rays,
        props:{
            angle:{
                value : "+=20"
            },
        },
        duration : 8000,
        repeat : -1
    });
    
    
        console.log("This is made by RACHIT NARAYAN");
        
        this.add.text(500, 70, 'TRY AGAIN', { fontFamily: 'Arial', font: '84px', fill: '#000000' });
        
        this.add.text(350, 250, 'CLICK TO RETURN', { fontFamily: 'Arial', font: '84px', fill: '#000000' });
        
         this.input.once('pointerup', function () {

            this.scene.start('menu');

        }, this);
        


},
});



var Demo = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Demo ()
    {
        Phaser.Scene.call(this, { key: 'demo' });
    },

    init: function (data)
    {
        console.log('init', data);

        this.imageID = data.id;
        this.imageFile = data.image;
        this.score=0;
        this.scoreText=null;
        this.scount = 0;
        this.smiles=null;
        this.overlapcnt = 0;
        this.gameover=null;
        this.bombcnt=0;
        
        
        this.player_config = {
            player_speed : 200,
            player_jumpspeed : -800,
                }
        
        
    },
    
    
    preload: function ()
    {
            this.load.image("ground","topground.png");
        this.load.image("sky","1937.jpg");
       this.load.spritesheet("dude","dude.png",{frameWidth:32,frameHeight:48});
        this.load.image("ray","ray.png");
        this.load.image("child", "children.png");
        this.load.image("tree", "tree.png");
        this.load.image("bomb", "bomb.png");
        this.load.image("calc", "calc.png");
        this.load.image("child1", "child1.png");
        this.load.image("child2", "child2.png");
        this.load.image("child3", "child3.png");
        this.load.image("child4", "child4.png");
        this.load.image("pencil", "pencil.png");
        this.load.image("pen", "pen.png");
        this.load.image("bag", "bag.png");
        this.load.image("copy", "copy.png");
        this.load.image("board", "board.png");
        this.load.image("brush", "brush.png");
        this.load.image("colorpencils", "colorpencils.png");
        this.load.image("crayons", "crayons.png");
        this.load.image("eraser", "eraser.png");
        this.load.image("bubble", "bubble.png");    
       },

    create: function ()
    {   
        W = game.config.width;
        H = game.config.height;

        //add tilesprites
        let ground = this.add.tileSprite(0,H-128,W,128,'ground');
        ground.setOrigin(0,0);

        //try to create a background
        let background = this.add.sprite(0,0,'sky');
        background.setOrigin(0,0);
        background.displayWidth = W;
        background.displayHeight = H;
        background.depth = -2;

        //create rays on the top of the background
        let rays = [];

        for(let i=-10;i<=10;i++){
            let ray = this.add.sprite(W/2,H-100,'ray');
            ray.displayHeight = 1.5*H;
            ray.setOrigin(0.5,1);
            ray.alpha = 0.2;
            ray.angle = i*20;
            ray.depth = -1;
            rays.push(ray);
        }
        console.log(rays);

        //tween
        this.tweens.add({
            targets: rays,
            props:{
                angle:{
                    value : "+=20"
                },
            },
            duration : 8000,
            repeat : -1
        });


        console.log("This is made by RACHIT NARAYAN");


        this.player = this.physics.add.sprite(200,100,'dude',4);
        this.player.setScale(2,2);
        console.log(this.player);



        //set the bounce values
        this.player.setBounce(0.5);
        this.player.setCollideWorldBounds(true);
        //player animations and player movements

        this.anims.create({
            key : 'left',
            frames: this.anims.generateFrameNumbers('dude',{start:0,end:3}),
            frameRate : 10,
            repeat : -1
        });
        this.anims.create({
            key : 'center',
            frames: [{key:'dude',frame:4}],
            frameRate : 10,
        });
        this.anims.create({
            key : 'right',
            frames: this.anims.generateFrameNumbers('dude',{start:5,end:8}),
            frameRate : 10,
            repeat : -1
        });


        // keyboard
        this.cursors = this.input.keyboard.createCursorKeys();


        //create coins
        let coins = this.physics.add.staticGroup();
        coins.create(700,300,'pencil').setScale(0.07,0.07).refreshBody();
        coins.create(40,150,'bag').setScale(0.04,0.04).refreshBody();
        coins.create(200,400,'pen').setScale(0.03,0.03).refreshBody();
        coins.create(550,470,'copy').setScale(0.09,0.09).refreshBody();
        coins.create(550,100,'crayons').setScale(0.07,0.07).refreshBody();
        coins.create(450,230,'brush').setScale(0.1,0.1).refreshBody();
        coins.create(850,70,'colorpencils').setScale(0.09,0.09).refreshBody();
        coins.create(950,270,'calc').setScale(0.3,0.3).refreshBody();
        coins.create(1400,70,'board').setScale(0.17,0.17).refreshBody();
        coins.create(1430,400,'eraser').setScale(0.3).refreshBody();
        
        let bubbles = this.physics.add.staticGroup();
        bubbles.create(700,300,'bubble').setScale(0.07,0.07).refreshBody();
        bubbles.create(40,150,'bubble').setScale(0.07,0.07).refreshBody();
        bubbles.create(200,400,'bubble').setScale(0.07,0.07).refreshBody();
        bubbles.create(550,470,'bubble').setScale(0.07,0.07).refreshBody();
        bubbles.create(550,100,'bubble').setScale(0.07,0.07).refreshBody();
        bubbles.create(450,230,'bubble').setScale(0.07,0.07).refreshBody();
        bubbles.create(850,70,'bubble').setScale(0.07,0.07).refreshBody();
        bubbles.create(950,270,'bubble').setScale(0.07,0.07).refreshBody();
        bubbles.create(1400,70,'bubble').setScale(0.09,0.09).refreshBody();
        bubbles.create(1430,400,'bubble').setScale(0.09).refreshBody();

        //create more platforms
        let platforms = this.physics.add.staticGroup();
        platforms.create(500,400,'ground').setScale(2,0.5).refreshBody();
        platforms.create(850,150,'ground').setScale(2,0.5).refreshBody();
        platforms.create(100,250,'ground').setScale(2,0.5).refreshBody();
        platforms.create(980,490,'ground').setScale(2,0.5).refreshBody();
        platforms.create(1400,300,'ground').setScale(2,0.5).refreshBody();
        platforms.create(1450,220,'tree').setScale(0.2,0.2).refreshBody();
        platforms.create(940,85,'tree').setScale(0.14,0.14).refreshBody();
        platforms.add(ground);

        
        //create individual and movable child
        
        var image = this.physics.add.image(620, 310, 'child1').setScale(0.07, 0.07);
        
        this.tweens.add({
            targets: image,
            x: 400,
            duration: 3000,
            ease: 'Power2',
            yoyo: true,
            repeat: 1000,
            delay: 1

        });
            this.physics.add.collider(platforms, image);

        
        var image1 = this.physics.add.image(200,550, 'child2').setScale(0.07, 0.07);
        
        this.tweens.add({
            targets: image1,
            x: 50,
            duration: 4000,
            ease: 'Power2',
            yoyo: true,
            repeat: 1000,
            delay: 1

        });
            this.physics.add.collider(platforms, image1);
        
         var image2 = this.physics.add.image(1100,300, 'child3').setScale(0.05, 0.05);
        
        this.tweens.add({
            targets: image2,
            x: 890,
            duration:2000,
            ease: 'Power2',
            yoyo: true,
            repeat: 1000,
            delay: 1

        });
            this.physics.add.collider(platforms, image2);
        
        var image3 = this.physics.add.image(1450,400, 'child4').setScale(0.05, 0.05);
        
        this.tweens.add({
            targets: image3,
            x: 1300,
            duration:2500,
            ease: 'Power2',
            yoyo: true,
            repeat: 1000,
            delay: 1

        });
            this.physics.add.collider(platforms, image3);
       
        
        
        //BOMB ADDED RANDOMLY OR ADD AS APPLES
        
        let x = (this.player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
        
        
        this.bombs = this.physics.add.group();
        let bomb = this.bombs.create(x,32,'bomb');
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(200); //Phaser.Math.Between(-200, 200)
        bomb.allowGravity = false;
        
        
        this.bombs1 = this.physics.add.group();
        let bomb1 = this.bombs1.create(Phaser.Math.Between(200,400),50,'bomb');
        bomb1.setBounce(1);
        bomb1.setCollideWorldBounds(true);
        bomb1.setVelocity(200); //Phaser.Math.Between(-200, 200)
        bomb1.allowGravity = false;
        
    
        this.physics.add.existing(ground,true);
        //add a collision detection between player and ground
        this.physics.add.collider(platforms,this.player);
            
            this.physics.add.collider(bomb, platforms);
            this.physics.add.collider(bomb1, platforms);
        
        

            //COIN OVERLAP AND SCORE INCREASE
        this.physics.add.overlap(this.player,coins, function (player, coins)
                {
                    coins.disableBody(true, true);

                    this.score += 10;
                    this.scoreText.setText('Score: ' + this.score);
                }
        ,null,this);
        
        
        //Player collides with bubble
        this.physics.add.overlap(this.player,bubbles, function (player, bubbles)
                {
                    bubbles.disableBody(true, true);

                   
                }
        ,null,this);
        

            //PLAYER COLLIDES WITH BOMB SCORE DECREASES
        
        
            this.physics.add.collider(this.player,bomb, function(player, bomb){
                bomb.setVelocity(200);
                if(this.score>0){
                    this.bombcnt+=1;
                    console.log(this.bombcnt);
                this.score -= 5;
                this.scoreText.setText('Score: ' + this.score);}
                else{
                    this.scoreText.setText('Score: ' + this.score);
                }

            }, null, this);
        

            this.physics.add.collider(this.player,bomb1, function(player, bomb1){
                //bomb.setVelocity(200);
                if(this.score>0){
                    this.bombcnt+=1;
                    console.log(this.bombcnt);
                this.score -= 5;
                this.scoreText.setText('Score: ' + this.score);}
                else{
                    this.scoreText.setText('Score: ' + this.score);
                }

            }, null, this);
        
        
        //PLAYER COLLIDES WITH Mid-Kid 
        
        let overlapCollider;
        let overlapTriggered = false;
        //let smiles;
        //let scount = 0;        
        overlapCollider = this.physics.add.collider(this.player, image, goal.bind(this));
        
        function goal(){
            if(this.score>=10){
                this.score -= 10;
                this.scoreText.setText('Score: ' + this.score);
                //this.scount++;
                this.overlapcnt+=1
                    console.log(this.overlapcnt);
                //smile(scount);
                if(overlapTriggered){
                  this.physics.world.removeCollider(overlapCollider);
                  return;
                    
                    };
                overlapTriggered = true;
                
                this.scount +=1
                
               // console.log(this.scount);
                
                this.smiles.setText('Smiles: ' + this.scount);
                //this.player.setTint(0xff0000);
            //smiles = this.add.text(16, 60, 'Smiles: '+ '\ud83d\ude03', { fontFamily: 'Arial' , fontSize: '32px', fill: '#000' });
            }
            };
        

        
        //PLAYER COLLIDES WITH frist bottom kid
        let overlapCollid;
        let overlapTrigger = false;
        
        
        overlapCollid = this.physics.add.collider(this.player, image1, goa.bind(this));
        
        function goa(){
            if(this.score>=10){
                this.score -= 10;
                this.scoreText.setText('Score: ' + this.score);
                //this.scount++;
                this.overlapcnt+=1
                    console.log(this.overlapcnt);
                //smile(scount);
                if(overlapTrigger){
                  this.physics.world.removeCollider(overlapCollid);
                  return;
                    };
                overlapTrigger = true;
                
                this.scount += 1;
                
        
            this.smiles.setText('Smiles: ' + (this.scount));
     }
            
                
            };
        
        //player collides with second bottom up kid
        
        
        let overlapColl;
        let overlapTrigg = false;
        
        overlapColl = this.physics.add.overlap(this.player, image2, go.bind(this));
        
        function go(){
             if(this.score>=10){
                this.score -= 10;
                this.scoreText.setText('Score: ' + this.score);
                //this.scount++;
                this.overlapcnt+=1
                    console.log(this.overlapcnt);
                //smile(scount);
                if(overlapTrigg){
                  this.physics.world.removeCollider(overlapColl);
                  return;
                    };
                overlapTrigg = true;
                
                this.scount += 1;
                
           
            this.smiles.setText('Smiles: ' + (this.scount));
             }
        };
        
        //player collides with the last kid
        
        let overlapC;
        let overlapT = false;
        
        overlapC = this.physics.add.overlap(this.player, image3, g.bind(this));
        
        function g(){
             if(this.score>=10){
                this.score -= 10;
                this.scoreText.setText('Score: ' + this.score);
                //this.scount++;
                this.overlapcnt+=1
                console.log(this.overlapcnt);
                //smile(scount);
                if(overlapT){
                  this.physics.world.removeCollider(overlapC);
                  return;
                    };
                overlapT = true;
                
                this.scount += 1;
                
           
            this.smiles.setText('Smiles: ' + (this.scount));
               
                
                    
             }  
        };





        //create cameras
        this.cameras.main.setBounds(0,0,W,H);
        this.physics.world.setBounds(0,0,W,H);

        this.cameras.main.startFollow(this.player,true,true);
        this.cameras.main.setZoom(1.5);


        //ADD FIX SCORE TO CAMERA         
        this.scoreText = this.add.text(16, 30, 'Score: 0', { fontFamily: 'Arial' ,fontSize: '32px', fill: '#000' });
        this.scoreText.fixedToCamera = true;
        //this.scoreText .cameraOffset.setTo(16, 30);
        //this.scoreText.setScrollFactor(1);
        
        this.smiles = this.add.text(16,60, 'Smiles: ', {fontFamily: 'Arial', fontSize: '32px', fill: '#000'});
        this.smiles.fixedToCamera = true;

        
        this.gameover = this.add.text(500,300, 'You Have become Dauntless', {fontFamily: 'Arial', fontSize: '62px', fill: '#000'});
        this.gameover.setOrigin(0.5);
        this.gameover.visible = false;

            //let t = this.add.text(200, 500, "this text is fixed to the camera", { font: "32px Arial", fill: "#ffffff", align: "center" });
        //t.fixedToCamera = true;
        //t.cameraOffset.setTo(200, 500);


      //EDIT THIS  
        this.add.text(16, 10, 'Click to Return', { fontFamily: 'Arial' ,font: '24px Courier', fill: '#000000' });

        //this.add.image(400, 300, 'pic' + this.imageID).setScale(2);
        
        
        //Return back to scene
        this.input.once('pointerup', function () {

            this.scene.start('menu');

        }, this);
 

},

    
    
    
update: function(){
            if(this.cursors.left.isDown){
                        this.player.setVelocityX(-this.player_config.player_speed);
                        this.player.anims.play('left',true);
            }
            else if(this.cursors.right.isDown){
                this.player.setVelocityX(this.player_config.player_speed);
                this.player.anims.play('right',true);
            }
            else{
                this.player.setVelocityX(0);
                this.player.anims.play('center');
            }

            //add jumping ability , stop the player when in air
            if(this.cursors.up.isDown && this.player.body.touching.down){
                this.player.setVelocityY(this.player_config.player_jumpspeed);
            }
            
      if (this.scount ==4 && this.overlapcnt ==8 && this.score<=20){
                     this.scene.start('endgame');
                 }
    if(this.bombcnt>=5){
        this.scene.start('lost');
    }
       

    }
  
    
});

var config = {
    type:Phaser.AUTO,
    
    scale:{
        mode:Phaser.Scale.EXACT_FIT,
        width : 1500,
        height :750,
    },
    
    //backgroundColor : 0xffff11,
    
    physics:{
        default:'arcade',
        arcade :{
            gravity:{
                y:1000, 
            },
            debug:false,
        }
    },
    
    scene: [ Menu, Demo, Endgame, Inst, Lost ]
};

var game = new Phaser.Game(config);