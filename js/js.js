var Game = {
	
	data : ['SCORE','COINS','WORLD','TIME','LIVES'],
	
	imgs : ['img/gk1.jpg','img/allbgs.png','img/move.gif','img/bullet.gif','img/flower.gif','img/gold.gif','img/macadam.gif','img/map-ask.gif','img/mushroom.gif','img/mushroomR.gif'],
	
	gk		:	{ //关卡的数据
		
		units : 32, //宽高 
		
		type : { //地图样式
			
			0 : 'maptype-bare',
			1 : 'maptype-land',
			2 : 'maptype-stone',
			3 : 'maptype-ask',
			4 : 'maptype-pipeline1',
			5 : 'maptype-pipeline2',
			6 : 'maptype-pipeline3',
			7 : 'maptype-pipeline4',
			8 : 'maptype-rock',
			9 : 'maptype-nothing',
			10: 'maptype-blockhouse',
			11: 'maptype-flagTop',
			12: 'maptype-flagpole',
			13: 'maptype-castleRock1',
			14: 'maptype-castleRock2',
			15: 'maptype-castleRock3',
			16: 'maptype-castleRock4',
			17: 'maptype-castleRock5',
			18: 'maptype-castleRock6'
			
		},
		flag : {
			style : 'flag',
			score : 2000	
		},
		annexs : [ 
			{},
			{
				style : 'gold',
				score : 200	
			},
			{
				style : 'largenMushroom',
				score : 1000,
				effect : 'bigStyle',
				iSpeedX : 4,
				iSpeedY : 8
			},
			{
				style : 'flower',
				score : 1000,
				effect : 'sendBulletStyle'
			},
			{
				style : 'lifeMushroom',
				text : '1UP',
				effect : 'life',
				iSpeedX : 4,
				iSpeedY : 8
			},
		],
		
		level_1 : { //第一关
			style : 'map-list',
			personX : 80,
			personY : 384,
			obstacles : [	
							[
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1'],
								['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1']
							],
							[
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','3-1','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['3-1','0','0','0','2','3-2','2','3-1','2','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','4','5','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','6','7','0','0'],
								['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1'],
								['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1']
							],
							[
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','4','5'],
								['0','0','0','0','0','0','4','5','0','0','0','0','0','0','6','7'],
								['0','0','0','0','0','0','6','7','0','0','0','0','0','0','6','7'],
								['0','0','0','0','0','0','6','7','0','0','0','0','0','0','6','7'],
								['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1'],
								['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1']
							],
							[
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','4','5','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','6','7','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','6','7','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','6','7','0','0','0','0','0'],
								['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1'],
								['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1']
							],
							[
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0-4','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','2','3-2','2'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['1','1','1','1','1','0','0','1','1','1','1','1','1','1','1','1'],
								['1','1','1','1','1','0','0','1','1','1','1','1','1','1','1','1']
							],
							[
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								
								['2','2','2','2','2','2','2','2','0','0','0','2','2','2','3-1','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','2-1','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['1','1','1','1','1','1','0','0','0','1','1','1','1','1','1','1'],
								['1','1','1','1','1','1','0','0','0','1','1','1','1','1','1','1']
							],
							[
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','3-2','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','2','2','0','0','0','0','3-1','0','0','3-1','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1'],
								['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1']
							],
							[
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','2','2','2','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['3-1','0','0','0','0','0','2','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1'],
								['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1']
							],
							[
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['2','3-1','3-1','2','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','2','2','0','0','0','0','0','0','8','0','0','8','0','0','0'],
								['0','0','0','0','0','0','0','0','8','8','0','0','8','8','0','0'],
								['0','0','0','0','0','0','0','8','8','8','0','0','8','8','8','0'],
								['0','0','0','0','0','0','8','8','8','8','0','0','8','8','8','8'],
								['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1'],
								['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1']
							],
							[
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','8','8','0','0','8','0','0','0','0'],
								['0','0','0','0','0','0','8','8','8','0','0','8','8','0','0','0'],
								['0','0','0','0','0','8','8','8','8','0','0','8','8','8','0','0'],
								['0','0','0','0','8','8','8','8','8','0','0','8','8','8','8','0'],
								['1','1','1','1','1','1','1','1','1','0','0','1','1','1','1','1'],
								['1','1','1','1','1','1','1','1','1','0','0','1','1','1','1','1']
							],
							[
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','2','2','3-1','2','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','4','5','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','6','7','0','0','0','0','0','0','0','0','0','0','0'],
								['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1'],
								['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1']
							],
							[
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','8','8','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','8','8','8','0','0'],
								['0','0','0','0','0','0','0','0','0','0','8','8','8','8','0','0'],
								['0','0','0','0','0','0','0','0','0','8','8','8','8','8','0','0'],
								['0','0','0','0','0','0','0','0','8','8','8','8','8','8','0','0'],
								['0','0','0','0','0','0','0','8','8','8','8','8','8','8','0','0'],
								['0','0','0','4','5','0','8','8','8','8','8','8','8','8','0','0'],
								['0','0','0','6','7','8','8','8','8','8','8','8','8','8','0','0'],
								['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1'],
								['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1']
							],
							[
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','11','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','12','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','12','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','12','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','12','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','12','0','0','0','0','0','0','0','0'],
								['0','0','0','0','0','0','0','12','0','0','0','0','13','13','13','0'],
								['0','0','0','0','0','0','0','12','0','0','0','0','14','18','17','0'],
								['0','0','0','0','0','0','0','12','0','0','0','13','15','15','15','13'],
								['0','0','0','0','0','0','0','12','0','0','0','18','18','16','18','18'],
								['0','0','0','0','0','0','0','8','0','0','0','18','18','10','18','18'],
								['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1'],
								['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1']
							]
			],
			enemyPosition : [
				{
					X : 640,
					Y : 384,
					type : 'mushroom'
				},
				{
					X : 1376,
					Y : 384,
					type : 'mushroom'
				},
				{
					X : 1664,
					Y : 384,
					type : 'mushroom'
				},
				{
					X : 1700,
					Y : 384,
					type : 'mushroom'
				},
				{
					X : 2560,
					Y : 128,
					type : 'mushroom'
				},
				{
					X : 2608,
					Y : 128,
					type : 'mushroom'
				},
				{
					X : 3040,
					Y : 384,
					type : 'mushroom'
				},
				{
					X : 3088,
					Y : 384,
					type : 'mushroom'
				},
				{
					X : 3616,
					Y : 384,
					type : 'mushroom'
				},
				{
					X : 3664,
					Y : 384,
					type : 'mushroom'
				},
				{
					X : 3936,
					Y : 384,
					type : 'mushroom'
				},
				{
					X : 3984,
					Y : 384,
					type : 'mushroom'
				},
				{
					X : 4064,
					Y : 384,
					type : 'mushroom'
				},
				{
					X : 4112,
					Y : 384,
					type : 'mushroom'
				},
				{
					X : 5504,
					Y : 384,
					type : 'mushroom'
				},
				{
					X : 5552,
					Y : 384,
					type : 'mushroom'
				}
				
			]
		},
		times : 400
	},
	start : 72,
	mario	:	{ //马里奥数据
		id : 'person',
		style : 'base',
		bigStyle : 'big',
		sendBulletStyle : 'sendBullet',
		leftStyle : 'personL',
		rightStyle : 'personR',
		leftMoveStyle : 'personLM',
		rightMoveStyle : 'personRM',
		leftJumpStyle : 'personLU',
		rightJumpStyle : 'personRU',
		leftFStyle : 'personLF',
		rightFStyle : 'personRF',
		supportLStyle : 'supportL',
		supportRStyle : 'supportR',
		dieStyle : 'die',
		life : 3,
		marioSpeedX : 6,
		marioSpeedY : 8,
		jumpHigh : 128,
		acceleratedSpeedX : .2,
		bind : {
			left : 65,
			right : 68,
			jump : 75,
			sendBullet : 74
		},
		bullet : {
			style : 'bullet',
			speed : 8,
			explode : 'explode'
		}
	},
	
	enemy	:	{ //敌人数据
		
		mushroom : {
			style : 'mushroom',
			reStyle : 'reverse',
			iSpeedX : -2,
			iSpeedY : 8,
			score : 100
		}
		
	},
	loading : function(){
		var iNow = 0;
		var This = this;
		for(var i=0; i<this.imgs.length; i++){
			this.imgLoad(this.imgs[i],function(){
				iNow ++;
				if(iNow == This.imgs.length){
					This.init();
				}
			});
		}
	},
	init	:	function(){ //初始化
		this.gameWrap = $("main");
		this.gameText = $("text");
		this.gameNotice = $("notice")
		this.over = $("over");
		this.blood = 0;
		this.gkNum = 1;
		this.pause = false;
		this.gameStart();
	},
	
	gameStart : function(){
		
		var This = this;
		this.gameText.style.display = "block";
		this.createData();
		this.createMap(this.gkNum);
		this.createMario();
		this.createAllEnemy();
		document.onkeydown = function(ev){
		
			var ev = ev || window.event;
			if(ev.keyCode == 72){
				document.onkeydown = null;
				This.gameText.style.display = "none";
				This.showLives();	
				This.showNotice();
			}	
			return false;
		}

	},
	
	
	redraw : function(){  //重绘
		if(this.blood == 0){
			this.gameOver();
			return;	
		}
		this.showNotice();
		if(this.gameMap){
			this.gameWrap.removeChild(this.gameMap);
		}
		this.createMap(this.gkNum);
		this.createMario();
		this.createAllEnemy();
	},
	
	showNotice : function(){  //显示公告
		var This = this;
		var aSpan = this.gameNotice.getElementsByTagName("span");
		this.gameNotice.style.display = 'block';
		aSpan[0].innerHTML = this.world.innerHTML;
		aSpan[3].innerHTML = this.blood;
		setTimeout(function(){
			This.gameNotice.style.display = 'none';	
			This.countDown(); // 重新计时
			This.bindMario(); // 操作玛丽奥
		},2000)
		
	},
	
	gameOver : function(){
		var This = this;
		this.over.style.display = 'block';
		this.gameWrap.removeChild(this.gameMap);
		this.gameWrap.removeChild(this.oDataDisplay);
		setTimeout(function(){
			This.over.style.display = 'none';
			This.gameStart();
		},5000)
		
	},
	
	showLives : function(){ //显示生命
		this.blood = this.mario.life;
		this.lives.innerHTML = this.blood;
	},
	
	countDown : function(){  //倒计时
		var This = this;
		this.time.innerHTML = this.gk.times;
		clearInterval(this.timeTimer);
		this.timeTimer = setInterval(function(){
			This.time.innerHTML = 	parseInt(This.time.innerHTML) - 1;
			if(parseInt(This.time.innerHTML) == 0){ 
				clearInterval(This.timeTimer);
				This.delMario()
			};
		},500)
		
	},
	createMap : function(iNow){ //创建地图
		
		
		this.level = this.gk["level_"+iNow];
		this.lengthBg = this.level.obstacles.length;
		this.mapType = [];
		this.flagpole = [];
		this.flagTop = null;
		this.blockhouse = null;
		this.world.innerHTML = iNow;
		var iW = 0,
			arr = [],
			oList,
			oDiv,
			piece,
			gameMap = document.createElement("div");
		gameMap.className = 'map';
		for(var i=0; i<this.lengthBg; i++){
			oList = document.createElement("div");
			oList.className = this.level.style;
			this.mapType[i] = [];
			for(var j=0; j<this.level.obstacles[i].length; j++){
				for(var k=0; k<this.level.obstacles[i][j].length; k++){
					oDiv = document.createElement("div");
					piece = this.level.obstacles[i][j][k].split('-');
					oDiv.className = this.gk.type[piece[0]];
					oDiv.type = parseInt(piece[0]);
					oDiv.annexs = parseInt(piece[1] || 0);
					oDiv.isCollide = false;
					if(oDiv.type == 10){
						this.blockhouse = oDiv;	
					}else if(oDiv.type == 11){
						this.flagTop = oDiv;
					}else if(oDiv.type == 12){
						this.flagpole.push(oDiv);
					};
					oList.appendChild(oDiv);
					this.mapType[i].push(oDiv);
				}
				oList.style.width = this.level.obstacles[i][j].length * this.gk.units + 'px';
			}
			oList.style.height = this.level.obstacles[i].length * this.gk.units + 'px';
			this.mapType.push(this.mapType[i]);
			iW += parseInt(oList.style.width);
			gameMap.appendChild(oList);
		}
		gameMap.style.width = iW + 'px';
		this.gameWrap.appendChild(gameMap);
		
		//布局转换
		
		for(var i=0; i<this.mapType.length; i++){
			var arr1 = [];
			for(var j=0; j<this.mapType[i].length; j++){
				arr1.push([this.mapType[i][j].offsetLeft,this.mapType[i][j].offsetTop]);	
			}
			arr.push(arr1);
		}
		for(var i=0; i<arr.length; i++){
			for(var j=0; j<arr[i].length; j++){
				this.mapType[i][j].style.position = 'absolute';
				this.mapType[i][j].style.left = arr[i][j][0] + 'px';
				this.mapType[i][j].style.top = arr[i][j][1] + 'px';
				
			}	
			
		}
		this.gameMap = gameMap;
		this.createFlag();
	},
	createFlag : function(){ // 创建旗帜
		
		var oFlag = document.createElement("div");
		var T = this.getPos(this.flagTop,this.gameMap).t; //旗头的Y坐标
		var L = this.getPos(this.flagTop,this.gameMap).l; //旗头的X坐标
		oFlag.className = this.gk.flag.style;
		oFlag.style.top = T + 0.75 * this.gk.units + 'px'; 
		oFlag.style.left = L - 0.5 * this.gk.units + 'px';
		oFlag.score = this.gk.flag.score;
		this.gameMap.appendChild(oFlag);
		this.flag = oFlag;
		this.setFlagpoleScore();
		
	},
	setFlagpoleScore : function(){ // 给旗竿设置分数
		var iNow = this.flagpole.length + 1;
		var OneScore = this.flag.score/iNow;
		for(var i=0; i<this.flagpole.length; i++){
			this.flagpole[i].score = this.flag.score - OneScore*(i+1);
		}
	},
	
	
	
	createMario : function(){ //创建马里奥
		var oDiv = document.createElement("div");
		oDiv.id = this.mario.id;
		oDiv.className = this.mario.style;
		addClass(oDiv,this.mario.rightStyle);
		oDiv.style.top = this.level.personY + 'px';
		oDiv.style.left = this.level.personX + 'px';
		oDiv.direction = 1;  // 判断方向键 最后按下键值
		oDiv.iT = 0;  // 着陆点Y坐标
		oDiv.iSpeedX = 0;
		oDiv.iSpeedY = 0;
		oDiv.trampleEnemy = false; //是否踩怪
		oDiv.timerY = null;
		oDiv.timer = null;
		oDiv.isJump = false; // 是否跳跃状态
		oDiv.isBig = false; // 是否处于大马里奥状态
		oDiv.isCloaking = false; //隐身 每次变身缩小时 处于隐身状态
		oDiv.isSendBullet = false; // 是否能发射子弹
		this.gameMap.appendChild(oDiv);	
		this.player = oDiv;
	},
	
	bindMario : function(){ //操作马里奥
		this.key = []; //存储 键值
		this.iBgOldLeft = 0; // 背景移动距离存值
		this.bulletNum = 0; // 子弹数量
		var This = this;
		var oBtn = true;  // 发射子弹的时候 每次按键只能发射一次
		var jumpBtn = true;
		
		document.onkeydown = function(ev){
			var ev = ev || window.event;
			This.key[ev.keyCode] = true;
			if(ev.keyCode == This.mario.bind.sendBullet){
				
				This.createBullet(oBtn);
				oBtn = false;
			}
			return false;
		};
		
		document.onkeyup = function(ev){
			var ev = ev || window.event;
			This.key[ev.keyCode] = false;
			
			if(ev.keyCode == This.mario.bind.sendBullet){
				oBtn = true;
			}else if(ev.keyCode == This.mario.bind.jump){
				jumpBtn = true;
			}
			return false;
		};
		this.frame();
	},
	frame : function(){
		var This = this;
		clearInterval(this.player.timer)
		this.player.timer = setInterval(function(){
			if(This.pause) return;
			This.change();
			This.backgroundMove();
			This.enemyShow();
		},30);
	},
	change : function(){  // 马里奥移动和跳跃  iNum 操作第几个马里奥
		var playerRect = this.player;
		var player = this.mario.bind;
		var iWin = false;
		var L,T;
		// 左右移动 速度
		if(this.key[player.right]){
			playerRect.iSpeedX += this.mario.acceleratedSpeedX;
			removeClass(playerRect,this.mario.leftStyle);
			addClass(playerRect,this.mario.rightStyle);
			playerRect.direction = 1;
		}else if(this.key[player.left]){
			playerRect.iSpeedX -= this.mario.acceleratedSpeedX;
			removeClass(playerRect,this.mario.rightStyle);	
			addClass(playerRect,this.mario.leftStyle);
			playerRect.direction = -1;
		}
		if(playerRect.iSpeedX!=0 && playerRect.isJump){
			if(playerRect.direction == 1){
				playerRect.iSpeedX += this.mario.acceleratedSpeedX;	
			}else if(playerRect.direction == -1){
				playerRect.iSpeedX -= this.mario.acceleratedSpeedX;
			}
		}
		if(!this.key[player.left] && !this.key[player.right]){
			if(playerRect.iSpeedX	> 0){
				playerRect.iSpeedX -= this.mario.acceleratedSpeedX;
				if(playerRect.iSpeedX<0) playerRect.iSpeedX = 0;	
			}else if(playerRect.iSpeedX < 0){
				playerRect.iSpeedX += this.mario.acceleratedSpeedX;
				if(playerRect.iSpeedX>0) playerRect.iSpeedX = 0;
			}
		}
		if(playerRect.iSpeedX > this.mario.marioSpeedX || playerRect.iSpeedX < -this.mario.marioSpeedX){
			playerRect.iSpeedX = playerRect.iSpeedX > 0 ? this.mario.marioSpeedX : -this.mario.marioSpeedX;	
		}
		// 跳跃 速度
		if(this.key[player.jump]){
			if(!playerRect.isJump){
				playerRect.isJump = true;
				playerRect.iSpeedY = -this.mario.marioSpeedY;
			};
		}else{
			playerRect.iSpeedY = this.mario.marioSpeedY;
		}
		if(playerRect.trampleEnemy){
			playerRect.iSpeedY = - this.mario.marioSpeedY;
		}
		// 马里奥 左右移动 样式
		if(playerRect.iSpeedX < 0){ 
			removeClass(playerRect,this.mario.rightMoveStyle);	
			addClass(playerRect,this.mario.leftMoveStyle);
		}else if(playerRect.iSpeedX > 0){
			removeClass(playerRect,this.mario.leftMoveStyle);	
			addClass(playerRect,this.mario.rightMoveStyle);
		}else{
			removeClass(playerRect,this.mario.leftMoveStyle);
			removeClass(playerRect,this.mario.rightMoveStyle);		
		}
		// 马里奥 跳跃 样式
		removeClass(playerRect,this.mario.leftJumpStyle);
		removeClass(playerRect,this.mario.rightJumpStyle);
		if(playerRect.offsetTop != playerRect.iT){
			if(playerRect.direction<0){
				addClass(playerRect,this.mario.leftJumpStyle);
			}else{
				addClass(playerRect,this.mario.rightJumpStyle);
			}
			playerRect.isJump = true;
		}
		if(playerRect.isJump){	
			if(playerRect.iSpeedX>0){
				addClass(playerRect,this.mario.rightJumpStyle);
			}else if(playerRect.iSpeedX<0){	
				addClass(playerRect,this.mario.leftJumpStyle);
			}
		}
		L = playerRect.offsetLeft + playerRect.iSpeedX;
		T = playerRect.offsetTop + playerRect.iSpeedY;
		var n = parseInt(L/512);
		for(var i=n-2<0?0:n-2,l=n+2>this.mapType.length?this.mapType.length:n+2; i<l; i++){
			for(var j=0,ll=this.mapType[i].length; j<ll; j++){
				var spriteRect = this.mapType[i][j];
				if(spriteRect.type > 0){ //  与物体碰撞
					switch(this.pzDir(playerRect,spriteRect)){
						case 'left':
							if(playerRect.iSpeedX > 0){
								playerRect.iSpeedX = 0;
								L = this.getPos(spriteRect,this.gameMap).l - playerRect.offsetWidth;
								if(spriteRect.type == 12){
									iWin = true;
								};
							}
						break;	
						case 'right':
							if(playerRect.iSpeedX < 0){
								playerRect.iSpeedX = 0;
								L = this.getPos(spriteRect,this.gameMap).l + spriteRect.offsetWidth;
							}
						break;
						case 'top':
							if(playerRect.iSpeedY > 0){
								playerRect.iT = T = this.getPos(spriteRect,this.gameMap).t - playerRect.offsetHeight;
								playerRect.isJump = false;
							}
						break;
						case 'bottomMid':
							if(playerRect.iSpeedY < 0){
								
								playerRect.iSpeedY *= -1;
								T = this.getPos(spriteRect,this.gameMap).t + spriteRect.offsetHeight;
								this.topHeadMario(spriteRect,playerRect);
								
							}
						break;
						
					}
				}else if(spriteRect.type == 0){
					if(this.pzDir(playerRect,spriteRect) == 'bottomMid' && spriteRect.annexs > 0){
						if(playerRect.iSpeedY < 0){
								
							playerRect.iSpeedY *= -1;
							T = this.getPos(spriteRect,this.gameMap).t + spriteRect.offsetHeight;
							this.topHeadMario(spriteRect,playerRect);
							
						}
					}
				}
			}
		}
		
		
		if(T>this.gameWrap.clientHeight){
			this.player.isCloaking = false;
			this.delMario();
		}
		if(T<playerRect.iT-this.mario.jumpHigh){
			T = playerRect.iT-this.mario.jumpHigh;
			if(!playerRect.timerY){
				playerRect.timerY = setTimeout(function(){
					playerRect.iSpeedY *= -1;
					clearTimeout(playerRect.timerY);
					playerRect.timerY = null;
				},100)
			}
			
		}
		if(playerRect.trampleEnemy){
			if(T<playerRect.iT-32){
				T = playerRect.iT-32;
				playerRect.trampleEnemy = false;
				playerRect.iSpeedY *= -1;
				
			}
		}
		
		if(L < Math.abs(this.iBgOldLeft)){
			L = Math.abs(this.iBgOldLeft);
			playerRect.iSpeedX = 0;
		}
		
		playerRect.style.top = T + 'px';
		playerRect.style.left = L  + 'px';
		if(iWin) this.winMario();
	},
	
	backgroundMove : function(){  //背景移动
		if(this.player.iSpeedX==0) return;
		var iLeft =  (512-this.player.offsetWidth)/3 - this.player.offsetLeft;
		if(this.iBgOldLeft < iLeft) return;
		
		if(iLeft > 0){
			iLeft = 0;
		}else if(iLeft < (1 - this.lengthBg) * 512){
			iLeft = (1 - this.lengthBg) * 512;
		}
		
		this.gameMap.style.left = iLeft  + 'px';
		this.iBgOldLeft = iLeft;
		
	},
	
	waneMario : function(){  // 变小
		var This = this;
		if(this.player.isSendBullet){
			removeClass(this.player,this.mario.sendBulletStyle);
			this.player.isSendBullet = false;
		}
		removeClass(this.player,this.mario.bigStyle);
		this.player.isBig = false;
		this.player.isCloaking = true;
		this.cloaking();
		setTimeout(function(){
			This.player.isCloaking = false;	
		},5000)
	},
	cloaking : function(){ // 闪
		var This = this;
		var timer = setInterval(function(){
			if(!This.player.isCloaking) clearInterval(timer);
			addClass(This.player,'cloaking');
			setTimeout(function(){
				removeClass(This.player,'cloaking');
			},100);
		},200)
	},
	pauseFn : function(){  //停止
		var This = this;
		this.pause = true;
		setTimeout(function(){
			This.pause = false;	
		},1000)
	},
	
	changeStyle : function(sClass){  //变身
		this.pauseFn();
		var This = this;
		var T = this.player.offsetTop;
		var H = this.player.offsetHeight;
		var timer = setInterval(function(){
			addClass(This.player,sClass);
			This.player.style.top = T + H - This.player.offsetHeight + 'px';
			if(!This.pause) {
				clearInterval(timer);
				return;
			}
			setTimeout(function(){
				removeClass(This.player,sClass);
				This.player.style.top = T + 'px'
			},100);
		},200)
		
	},
	delMario : function(){  // 马里奥死亡
		
		if(this.player.isCloaking) return;
		if(this.player.isBig){
			if(this.player.isSendBullet){
				removeClass(this.player,this.mario.sendBulletStyle);
			}
			removeClass(this.player,this.mario.bigStyle);
		}
		var T = this.player.offsetTop;
		var This = this;
		clearInterval(this.player.timer);
		clearInterval(this.timeTimer);
		for(var i=0; i<this.aEnemy.length; i++){
			clearInterval(this.aEnemy[i].timer);
		}
		addClass(this.player,this.mario.dieStyle);
		this.lives.innerHTML = --this.blood;
		setTimeout(function(){
			startMoveTime(This.player,{top: T - 4*This.gk.units},'easeOut',function(){
				startMoveTime(This.player,{top: This.gameMap.offsetHeight},'easeIn',function(){
					setTimeout(function(){
						This.redraw();	
					},1000);
				});
				
			});
		},300);
		
		
	},
	
	winMario : function(){ // 赢了
		var This = this;
		clearInterval(this.player.timer);
		clearInterval(this.timeTimer);
		this.showPoleScore();
		if(this.player.direction == -1){
			removeClass(this.player,'personLU');
			removeClass(this.player,'personLM');
			addClass(this.player,'personRM');
		}
		removeClass(this.player,'personRU');
		addClass(this.player,This.mario.supportRStyle);
		this.player.style.left = this.getPos(this.player,this.gameMap).l + 0.75 * this.gk.units + 'px';
		this.slidePole(this.flag);
		this.slidePole(this.player,function(){
			removeClass(This.player,This.mario.supportRStyle);
			This.player.style.left = This.getPos(This.player,This.gameMap).l + 0.5 * This.gk.units + 'px';
			addClass(This.player,This.mario.supportLStyle);
			setTimeout(function(){
				This.moveToHouse();	
			},100)
		});
		
		
	},
	
	
	
	topHeadMario : function(spriteRect,playerRect){ // 头顶障碍物
		var iL = playerRect.offsetLeft;
		
		var T = this.getPos(spriteRect,this.gameMap).t;
		var L = this.getPos(spriteRect,this.gameMap).l;
		var This = this;
		
		
		switch(spriteRect.annexs){
			case -1 :
			break;
			case 0 :
				if(playerRect.isBig){
					this.macadam(spriteRect);
				}else{
					if(!spriteRect.isCollide){
						spriteRect.isCollide = true;
						startMoveTime(spriteRect,{top: T - 0.5 * this.gk.units},100,function(){
							startMoveTime(spriteRect,{top: T},100,function(){
								spriteRect.isCollide = false;	
							})
						});
					}
				}
				this.topHeadEnemy(spriteRect,playerRect.direction);
			break;
			case 1 :
				if(!spriteRect.isCollide){
					spriteRect.isCollide = true;
					startMoveTime(spriteRect,{top: T - 0.5 * this.gk.units},100,function(){
						startMoveTime(spriteRect,{top: T},100,function(){
							This.flyGold(spriteRect);
							spriteRect.isCollide = false;	
						})
					})
				}
				this.topHeadEnemy(spriteRect,playerRect.direction);
			break;	
			case 2 :
				if(!spriteRect.isCollide){
					spriteRect.isCollide = true;
					startMoveTime(spriteRect,{top: T - 0.5 * this.gk.units},100,function(){
						startMoveTime(spriteRect,{top: T},100,function(){
							This.createAnnexs(spriteRect,playerRect);
							spriteRect.isCollide = false;		
						})
					});
				}
				this.topHeadEnemy(spriteRect,playerRect.direction);
			break;
			case 4 :
				This.createAnnexs(spriteRect,playerRect);
				this.topHeadEnemy(spriteRect,playerRect.direction);
			break;	
		}
		
		
	},
	createBullet : function(oBtn){  // 创建子弹
		if(!this.player.isSendBullet || this.bulletNum == 2 || !oBtn)  return;  //this.bulletNum限制子弹数量 最多2个
		var This = this;
		var style = this.player.direction > 0 ? this.mario.rightFStyle : this.mario.leftFStyle;
		addClass(this.player,style);
		setTimeout(function(){
			removeClass(This.player,style);
		},100)
		this.bulletNum ++;
		var oBullet = document.createElement('div');
		oBullet.className = this.mario.bullet.style;
		this.gameMap.appendChild(oBullet);
		oBullet.style.left = (this.player.direction > 0 ? this.getPos(this.player,this.gameMap).l + this.player.offsetWidth : this.getPos(this.player,this.gameMap).l) - oBullet.offsetWidth + 'px';
		oBullet.style.top = this.getPos(this.player,this.gameMap).t + (this.player.offsetHeight - oBullet.offsetHeight)/2 + 'px';
		this.moveBullet(oBullet);
	},
	
	moveBullet : function(obj){ // 子弹飞
		var speedX = this.mario.bullet.speed * this.player.direction * 2;
		var speedY = this.mario.bullet.speed;
		var iT = 0;
		var This = this;
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			if(This.pause) return;
			var T = obj.offsetTop + speedY;
			var L = obj.offsetLeft + speedX;
			
			if(L<-This.gameMap.offsetLeft - obj.offsetWidth || L > -This.gameMap.offsetLeft + 512 ){
				
				This.bulletNum --;
				clearInterval(obj.timer);
				This.gameMap.removeChild(obj);
				
				
			}
			if(speedY<0 && T < iT - 1.5 * This.gk.units){
				speedY*=-1;
				T = iT - 1.5 * This.gk.units;
			}
			var n = parseInt(L/512);
			for(var i=n-2<0?0:n-2,l=n+2>This.mapType.length?This.mapType.length:n+2; i<l; i++){
				for(var j=0,ll=This.mapType[i].length; j<ll; j++){
					var spriteRect = This.mapType[i][j];
					if(spriteRect.type > 0){ //  与物体碰撞
						switch(This.pzDir(obj,spriteRect)){
							case 'left':
								This.removeBullet(obj);
							break;	
							case 'right':
								This.removeBullet(obj);
							break;
							case 'top':
								if(speedY>0){
									speedY*=-1;
									iT = T = This.getPos(spriteRect,This.gameMap).t - obj.offsetHeight;
								}
							break;
							case 'bottom':
								
							break;
							
						}	
						
					}
				}
			
			}
			for(var i=0; i<This.aEnemy.length; i++){
			
				if(This.pz(obj,This.aEnemy[i]) && !This.aEnemy[i].die){
					var dir = speedX > 0 ? 1 : -1;
					This.removeBullet(obj);
					This.reverseEnemy(This.aEnemy[i],dir)
					
				}	
				
			}
			
			obj.style.left = L + 'px';
			obj.style.top = T + 'px';
		},30);
		
	},
	
	removeBullet : function(obj){ // 移除子弹
		if(!obj.timer) return;
		this.bulletNum --;
		var This = this;
		clearInterval(obj.timer);
		obj.timer = null;
		obj.className = this.mario.bullet.explode;
		setTimeout(function(){
			This.gameMap.removeChild(obj);
		},100)
	},
	createAllEnemy : function(){ // 创建敌人容器 循环所有敌人的位置
		this.enemyParent = document.createElement("div");
		this.enemyParent.className = 'enemy';
		for(var i=0; i<this.level.enemyPosition.length; i++){
			this.createOneEnemy(this.level.enemyPosition[i].type,this.level.enemyPosition[i].X,this.level.enemyPosition[i].Y)
		}
		
		this.gameMap.appendChild(this.enemyParent);
		this.aEnemy = this.enemyParent.getElementsByTagName("div");
		
	},
	enemyShow : function(){ // 背景移动触发敌人移动
		for(var i=0; i<this.aEnemy.length; i++){
			if(!this.aEnemy[i].die && !this.aEnemy[i].isMove && this.aEnemy[i].offsetLeft <= - this.gameMap.offsetLeft + 512){
				this.aEnemy[i].isMove = true;
				this.objectMove(this.aEnemy[i]);
			}
			
		}
	},
	createOneEnemy : function(enemyType,X,Y){  // 创建单个敌人  敌人类型  X 和 Y 轴坐标
		var oEnemy = document.createElement("div");
		var enemyData = this.enemy[enemyType];
		oEnemy.className = enemyData.style;
		oEnemy.style.left = X + 'px'; 
		oEnemy.style.top = Y + 'px';
		oEnemy.isMove = false;
		oEnemy.die = false;
		oEnemy.iX = enemyData.iSpeedX;
		oEnemy.iY = enemyData.iSpeedY;
		oEnemy.score = enemyData.score;
		oEnemy.isEnemy = true;
		this.enemyParent.appendChild(oEnemy);
	},
	delOneEnemy : function(enemyElem){ // 单个敌人死亡
		var This = this;
		enemyElem.die = true;
		addClass(enemyElem,'die')
		clearInterval(enemyElem.timer);
		this.scoreShow(enemyElem);
		setTimeout(function(){
			This.enemyParent.removeChild(enemyElem);
		},500);
		
	},
	reverseEnemy : function(enemyElem,dir){ // 敌人被子弹击中  致死
	
		var This = this;
		enemyElem.die = true;
		addClass(enemyElem,'reverse');
		this.scoreShow(enemyElem)
		this.parabolicMotion(enemyElem,6*dir,-20);
		
	},
	topHeadEnemy : function(spriteRect,dir){ //被马里奥头顶障碍物  致死
		for(var i=0; i<this.aEnemy.length; i++){
			if(this.pzDir(this.aEnemy[i],spriteRect) == 'top'){
				this.reverseEnemy(this.aEnemy[i],dir);
			}
		}	
	},
	
	
	flyGold : function(spriteRect){ // 从障碍物里飞金币
		var This = this;
		var oDiv = document.createElement("div");
		oDiv.className = this.gk.annexs[spriteRect.annexs].style;
		oDiv.score = this.gk.annexs[spriteRect.annexs].score;
		if(typeof spriteRect.goldNum == 'undefined'){
			spriteRect.goldNum = spriteRect.type == 2 ? 5 : 1;
		}
		spriteRect.goldNum --;
		if(spriteRect.goldNum == 0){
			spriteRect.className = 'maptype-nothing';
			spriteRect.type = 9;
			spriteRect.annexs = -1;
		}
		this.gameMap.appendChild(oDiv);
		var L = this.getPos(spriteRect,this.gameMap).l;
		var T = this.getPos(spriteRect,this.gameMap).t - oDiv.offsetHeight;
		oDiv.style.left = L + 'px';
		oDiv.style.top = T + 'px';
		startMoveTime(oDiv,{top: T - 2 * this.gk.units},200,'easeOut',function(){
			startMoveTime(oDiv,{top: T},200,'easeIn',function(){
				This.scoreShow(oDiv);
				This.gameMap.removeChild(oDiv);
			});
		});
		this.coins.innerHTML = parseInt(this.coins.innerHTML) + 1;
	},
	
	createAnnexs : function(spriteRect,playerRect){ //创建 附属物
		var L = this.getPos(spriteRect,this.gameMap).l;
		var T = this.getPos(spriteRect,this.gameMap).t;
		var oDiv = document.createElement("div");
		var This = this;
		if(spriteRect.annexs == 2){
			if(playerRect.isBig){
				spriteRect.annexs = 3;
			}
		}
		oDiv.className = this.gk.annexs[spriteRect.annexs].style;
		oDiv.style.left = L + 'px';
		oDiv.style.top = T + 'px';
		oDiv.isEnemy = false;
		oDiv.isMove = true;
		oDiv.iX = this.gk.annexs[spriteRect.annexs].iSpeedX || 0;
		oDiv.iY = this.gk.annexs[spriteRect.annexs].iSpeedY || 0;
		oDiv.effect = this.gk.annexs[spriteRect.annexs].effect;
		if(spriteRect.annexs == 4){
			oDiv.text = this.gk.annexs[spriteRect.annexs].text;
		}else if(spriteRect.annexs == 2 || spriteRect.annexs == 3){
			oDiv.score = this.gk.annexs[spriteRect.annexs].score;
		}
		spriteRect.className = 'maptype-nothing';
		spriteRect.type = 9;
		spriteRect.annexs = -1;
		this.gameMap.appendChild(oDiv);
		var iH = oDiv.offsetHeight;
		oDiv.style.height = '0px';
		startMoveTime(oDiv,{height: iH,top: T-iH},600,function(){
			This.objectMove(oDiv);	
		});
	},
	macadam : function(spriteRect){ // 头撞障碍物形成碎石
		
		var T = this.getPos(spriteRect,this.gameMap).t;
		var L = this.getPos(spriteRect,this.gameMap).l;
		var aSel = [];
		spriteRect.className = this.gk.type[0];
		spriteRect.type = 0;
		spriteRect.annexs = 0;
		for(var i=0; i<4; i++){
			var oM = document.createElement("div");
			oM.className = 'macadam';
			aSel.push(oM);
			this.gameMap.appendChild(oM);
		}
		var iW = aSel[0].offsetWidth;
		var iH = aSel[0].offsetHeight;
		aSel[0].style.top = T + 'px';
		aSel[0].style.left = L + 'px';
		aSel[1].style.top = T + 'px';
		aSel[1].style.left = L +  iW + 'px';
		aSel[2].style.top = T + iH + 'px';
		aSel[2].style.left = L + 'px';
		aSel[3].style.top = T + iH + 'px';
		aSel[3].style.left = L + iW + 'px';
		this.parabolicMotion(aSel[0],-6,-24);
		this.parabolicMotion(aSel[1],6,-24);
		this.parabolicMotion(aSel[2],-6,-20);
		this.parabolicMotion(aSel[3],6,-20);
		this.score.innerHTML = parseInt(this.score.innerHTML) + 50;
	},
	
	parabolicMotion : function(obj,iSpeedX,iSpeedY){  //抛物线运动
		clearInterval(obj.timer);
		var iH = this.gameMap.offsetHeight;
		var This = this;
		obj.timer = setInterval(function(){
			if(This.pause) return;
			iSpeedY += 3;
			var T = obj.offsetTop + iSpeedY;
			var L = obj.offsetLeft + iSpeedX;
			if(T > iH){
				clearInterval(obj.timer);
			}
			obj.style.top = T + 'px';
			obj.style.left = L + 'px';
			
		},30)
		
	},
	
	createData : function(){
	
		var oDiv = document.createElement('div');
		oDiv.className = 'data_display';
		var oUl = document.createElement('ul');
		for(var i=0; i<this.data.length; i++){
			
			var oLi = document.createElement('li');
			oLi.innerHTML = this.data[i] + '<br><span>0</span>'
			oUl.appendChild(oLi);
			
		}
		oDiv.appendChild(oUl);
		this.gameWrap.appendChild(oDiv);
		this.oDataDisplay = oDiv;
		this.aData = oDiv.getElementsByTagName('span');
		this.score = this.aData[0];
		this.coins = this.aData[1];
		this.world = this.aData[2];
		this.time = this.aData[3];
		this.lives = this.aData[4];
		
			
		
	},
	
	
	
	scoreShow : function(obj){  // 所得分数 显示
		
		var T = obj.offsetTop;
		var L = obj.offsetLeft + this.gameMap.offsetLeft;
		var oSpan = document.createElement("span");
		var This = this;
		oSpan.className = 'score';
		oSpan.style.top = T + 'px';
		oSpan.style.left = L + 'px';
		
		if( 'score' in obj){
			oSpan.innerHTML = obj.score;
			this.score.innerHTML = parseInt(this.score.innerHTML) + obj.score;
		}else if( 'text' in obj){
			oSpan.innerHTML = obj.text;
		}
		
		this.gameWrap.appendChild(oSpan);
		startMoveTime(oSpan,{top: T-2 * this.gk.units},function(){
			This.gameWrap.removeChild(oSpan);
		});
		
	},
	
	objectMove : function(obj){ // 物体移动移动 包括 敌人移动和附属物移动
		clearInterval(obj.timer)
		var iSpeedX = obj.iX;
		var iSpeedY = obj.iY;
		var This = this;
		var L,T;
		obj.timer = setInterval(function(){
			if(!obj.isMove||This.pause){
				return;
			};//进入可视区的时候移动 增加性能
			
			L = obj.offsetLeft + iSpeedX;
			T = obj.offsetTop + iSpeedY;
			if(L + obj.offsetWidth<-This.gameMap.offsetLeft){
				clearInterval(obj.timer);
			}
			var n = parseInt(L/512);
			for(var i=n-2<0?0:n-2,l=n+2>This.mapType.length?This.mapType.length:n+2; i<l; i++){
				for(var j=0,ll=This.mapType[i].length; j<ll; j++){
					var spriteRect = This.mapType[i][j];
					if(spriteRect.type > 0){ //  与物体碰撞
						switch(This.pzDir(obj,spriteRect)){
							case 'left':
								if(iSpeedX > 0){
									iSpeedX *= -1;
								}
							break;	
							case 'right':
								if(iSpeedX < 0){
									iSpeedX *= -1;
								}
							break;
							case 'top':
								if(iSpeedY > 0){
									T = This.getPos(spriteRect,This.gameMap).t - obj.offsetHeight;
								}
							break;
							case 'bottom':
								
							break;
						}	
						
					}
				}
			}
			
			if(obj.isEnemy){ 
				if(!obj.die){  
					switch(This.pzDir(This.player,obj)){ // 做为敌人  与马里奥碰撞
						case 'left':
						case 'right':
						case 'bottom':
						case 'bottomLeft':
						case 'bottomRight':
							if(This.player.isBig){
								This.waneMario();
							}else{
								This.delMario();
							}
						break;
						case 'top':
							This.player.trampleEnemy = true;
							This.player.iT = obj.offsetTop - This.player.offsetHeight;
							This.delOneEnemy(obj);
						break;
					}
				}
			}else{  // 做为附属物  与马里奥碰撞
				if(This.pz(This.player,obj)){
					clearInterval(obj.timer);
					This.scoreShow(obj);
					This.gameMap.removeChild(obj);
					if(obj.className == This.gk.annexs[2].style){
						if(!This.player.isBig){
							This.changeStyle(This.mario[obj.effect]);
							
							This.player.isBig = true;
						}
					}else if(obj.className == This.gk.annexs[3].style){
						if(!This.player.isSendBullet){
							This.changeStyle(This.mario[obj.effect]);
							if(!This.player.isBig){
								This.player.isBig = true;
							}else{
								This.player.isSendBullet = true;	
							}
						}
					}else if(obj.className == This.gk.annexs[4].style){
						This.lives.innerHTML = ++This.blood;
					}
					
				}
			}
			
			
			obj.style.left = L + 'px';
			obj.style.top = T + 'px';
		},30)
	},
	
	
	showPoleScore : function(){ // 碰撞旗杆 展现相应分数
		
		var T = this.getPos(this.player,this.gameMap).t;
		var L ;
		var iNow = this.flagpole.length - 1;
		var oSpan = document.createElement("span");
		for(var i=0; i<this.flagpole.length; i++){
			if(this.getPos(this.flagpole[i],this.gameMap).t > T){
				iNow = i;
				break;
			};
		};
		T = this.getPos(this.flagpole[iNow],this.gameMap).t;
		L = this.getPos(this.flagpole[iNow],this.gameMap).l + this.flagpole[iNow].offsetWidth;
		oSpan.className = 'score';
		oSpan.style.top = T + 'px';
		oSpan.style.left = L + 'px';
		oSpan.innerHTML = this.flagpole[iNow].score;
		this.score.innerHTML = parseInt(this.score.innerHTML) + this.flagpole[iNow].score;
		this.gameMap.appendChild(oSpan);
		startMoveTime(oSpan,{top: this.flagpole[0].offsetTop});
		
	},
	
	
	
	slidePole : function(obj,fn){  //滑竿 
	
		var flagBottom = this.flagpole[this.flagpole.length - 1];
		var T = this.getPos(flagBottom,this.gameMap).t + flagBottom.offsetHeight - this.player.offsetHeight;
		if(T < obj.offsetTop ){
			obj.style.top = T + 'px';	
		}
		startMoveTime(obj,{top:T},1000,fn);	
	
	},
	
	moveToHouse : function(){ // 移动到城堡
	
		var T = this.getPos(this.blockhouse,this.gameMap).t	 + this.blockhouse.offsetHeight - this.player.offsetHeight;
		var L = this.getPos(this.blockhouse,this.gameMap).l;
		var This = this;
		this.player.style.top = T + 'px';
		this.player.style.left = this.player.offsetLeft + 0.75 * this.gk.units + 'px';
		removeClass(this.player,This.mario.supportLStyle);
		startMoveTime(this.player,{left:L},2000,function(){
			This.player.style.display = 'none';
			This.timeToScore();	
		});
		
	},
	
	timeToScore : function(){ //剩余时间转换成分数 
		var This = this;
		var timer = null;
		clearInterval(timer);
		timer = setInterval(function(){
			This.time.innerHTML = parseInt(This.time.innerHTML) - 1;
			This.score.innerHTML = parseInt(This.score.innerHTML) + 50;
			if(parseInt(This.time.innerHTML) == 0) clearInterval(timer);
		},10)
	},
	
	pz : function(obj1,obj2){  //碰撞检测
		var L1 = this.getPos(obj1,this.gameMap).l;
		var R1 = L1 + obj1.offsetWidth;
		var T1 = this.getPos(obj1,this.gameMap).t;
		var B1 = T1 + obj1.offsetHeight;
		
		var L2 = this.getPos(obj2,this.gameMap).l;
		var R2 = L2 + obj2.offsetWidth;
		var T2 = this.getPos(obj2,this.gameMap).t;
		var B2 = T2 + obj2.offsetHeight;
		
		if( L1>R2 || R1<L2 || T1>B2 || B1<T2 ){
			return false;
		}
		else{
			return true;
		}
	},
	
	pzDir : function(obj1,obj2){ //碰撞检测 方向 两个物体都是相等的正方体的情况
		if(!this.pz(obj1,obj2)) return;
		var L1 = this.getPos(obj1,this.gameMap).l + obj1.offsetWidth/2;
		var T1 = this.getPos(obj1,this.gameMap).t + obj1.offsetHeight/2;
		
		var L2 = this.getPos(obj2,this.gameMap).l + obj2.offsetWidth/2;
		var T2 = this.getPos(obj2,this.gameMap).t + obj2.offsetHeight/2;
		
		if(Math.abs(L1-L2) > Math.abs(T1-T2)){
			
			if(L1<L2){
				return 'left';	
			}else if(L1>L2){
				return 'right';	
			}
			
		}else if(Math.abs(L1-L2) < Math.abs(T1-T2)){
			
			if(T1<T2){
				if(L1 + obj1.offsetWidth/2 > this.getPos(obj2,this.gameMap).l && L1 - obj1.offsetWidth/2 < this.getPos(obj2,this.gameMap).l + obj2.offsetWidth){
					return 'top';	
				}
			}else if(T1>T2){
				if(L1 < this.getPos(obj2,this.gameMap).l){
					return 'bottomLeft';
				}else if(L1 > this.getPos(obj2,this.gameMap).l + obj2.offsetWidth){
					return 'bottomRight';
				}else{
					return 'bottomMid';
					
				}
				
			}
		}
		return false;
	},
	getPos : function(obj,anc){
		
		var aPos = {l: 0, t: 0};
		while(obj && obj != anc){
			aPos.l += obj.offsetLeft;
			aPos.t += obj.offsetTop;
			obj = obj.offsetParent;
		}
		return aPos;
	},
	imgLoad : function(url, callback) {
		var img = new Image();
		img.src = url;
		if (img.complete) {
			callback(img.width, img.height);
		} else {
			img.onload = function () {
				 callback(img.width, img.height);
				 img.onload = null;
			};
		};
	}
}