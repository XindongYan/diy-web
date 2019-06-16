import React from 'react';
import { Card, List } from 'antd';

export default class Game extends React.PureComponent {

	state = {
		current: 'CPU',
		currentSelect: '1',
		games: {
			data: [
				{ "showIndex": 1, "id": 1, "name": "绝地求生", "icon": "http://img30.360buyimg.com/diytwo/jfs/t1/20285/9/6966/127341/5c653cfbE68d936f1/8b2bbcdd1596ac95.jpg", "reason": "狭路相逢勇者胜敢争第一" },
				{ "showIndex": 2, "id": 2, "name": "英雄联盟", "icon": "http://img30.360buyimg.com/diytwo/jfs/t1/19956/15/6952/109257/5c6531b8E027137dc/00458838ba0f893a.jpg", "reason": "无数召唤师在符文之地的战争" },
				{ "showIndex": 3, "id": 3, "name": "逆水寒", "icon": "http://img30.360buyimg.com/diytwo/jfs/t1/31014/15/2077/75738/5c653c0bE5c6559a3/77fe50e9f391ba62.jpg", "reason": "逆水寒剑的江湖儿女故事" },
				{ "showIndex": 4, "id": 4, "name": "守望先锋", "icon": "http://img30.360buyimg.com/diytwo/jfs/t1/8248/2/14522/110983/5c65319eEc3796183/ad962d2d9186227d.jpg", "reason": "成员和智能机械的恩怨纠葛的射击游戏" },
				{ "showIndex": 5, "id": 5, "name": "极品飞车", "icon": "http://img30.360buyimg.com/diytwo/jfs/t1/17202/26/7083/115570/5c653177E84a658a0/5593929f415dd3c6.jpg", "reason": "爽快的赛车体验.逼真的车辆模拟" },
				{ "showIndex": 6, "id": 6, "name": "魔兽世界", "icon": "http://img30.360buyimg.com/diytwo/jfs/t1/21354/13/6914/93871/5c653200Ebb67bfa5/3a8fab6d56d43133.jpg", "reason": "新的历险.探索未知的世界\r\n" },
				{ "showIndex": 7, "id": 7, "name": "DOTA2", "icon": "http://img30.360buyimg.com/diytwo/jfs/t1/19384/7/6970/70794/5c65323dE25e26cfa/504b7fca27506e1d.jpg", "reason": "天辉与夜魇以守护远古遗迹为使命" },
				{ "showIndex": 8, "id": 8, "name": "GTA", "icon": "http://img30.360buyimg.com/diytwo/jfs/t1/19788/39/6854/128249/5c65314fE37731506/4dd3e84060b2d0e1.jpg", "reason": "集合驾驶.枪战.格斗养成" }
			]
		},
		products: {
			'1': [
				{
					item: [
						{
							"name": "英特尔（Intel）i5 8500 酷睿六核 盒装CPU处理器",
							"price": "1799.00",
							"num": "1",
							"imagePath": "jfs/t14434/196/2670938343/2466623/73c579f6/5ab1f616N196cd6ca.jpg",
							"categoryName": "CPU",
						},
						{
							"name": "微星（MSI）B360M MORTAR迫击炮 电竞“吃鸡”主板（Intel B360/LGA 1151）",
							"price": "699.00",
							"num": "1",
							"imagePath": "jfs/t18583/201/1051190495/305673/5e738c48/5ab9f56eN6927a03a.jpg",
							"categoryName": "主板",
						},
						{
							"name": "七彩虹(Colorful)iGame1060烈焰战神S-6GD5 Top LE 1506-1708MHz/8008MHz6G192bit吃鸡显卡",
							"price": "1449.00",
							"num": "1",
							"imagePath": "jfs/t7915/230/3439911989/82231/da219211/59f6edd7N33b6b9e4.jpg",
							"categoryName": "显卡",
						},
						{
							"name": "金士顿(Kingston) 16GB(8G×2)套装 DDR4 2666 台式机内存 骇客神条 Fury雷电系列",
							"price": "649.00",
							"num": "1",
							"imagePath": "jfs/t21139/212/2295950665/163364/e5896307/5b4eb32bN5e65f496.jpg",
							"categoryName": "内存",
						},
						{
							"name": "希捷(SEAGATE)酷鱼系列 2TB 7200转 256M SATA3 台式机机械硬盘(ST2000DM008)",
							"price": "389.00",
							"num": "1",
							"imagePath": "jfs/t1/10547/33/13375/311370/5c820591Ed263955e/e57a3c0bc6a49ea3.jpg",
							"categoryName": "硬盘",
						},
						{
							"name": "三星（SAMSUNG）250GB SSD固态硬盘 SATA3.0接口 860 EVO（MZ-76E250B）",
							"price": "339.00",
							"num": "1",
							"imagePath": "jfs/t25027/279/1994410610/120964/18425cab/5bc05552N2aa18fd8.jpg",
							"categoryName": "SSD",
						},
						{
							"name": "酷冷至尊（coolermaster）MasterBox Lite 5(睿)台式电脑主机中塔机箱(ATX主板/前镜面板/侧透/独立电源仓)",
							"price": "299.00",
							"num": "1",
							"imagePath": "jfs/t1/31657/27/3559/298951/5c764263E055ff9a6/5debbb440bcf140d.jpg",
							"categoryName": "机箱",
						},
						{
							"name": "酷冷至尊（CoolerMaster）额定650W V650电脑电源（80Plus金牌/全模组/全日系电容/质保五年/台式机电源）",
							"price": "699.00",
							"num": "1",
							"imagePath": "jfs/t5548/156/588184289/258657/2ea8249/5902f256N7f76f764.jpg",
							"categoryName": "电源",
						},
						{
							"name": "九州风神 （DEEPCOOL）大霜塔CPU散热(双塔/风冷/支持AM4/2066/多平台/6热管/双LED风扇/附带硅脂)",
							"price": "219.00",
							"num": "1",
							"imagePath": "g13/M0A/08/0D/rBEhVFKYAS4IAAAAAAOrwk7RcRoAAGHLgKgLaIAA6va129.jpg",
							"categoryName": "散热",
						},
						{
							"name": "三星（SAMSUNG）27英寸2K/QHD高分 1800R曲率量子点技术 HDMI/DP全高清接口 电脑显示（C27H711QEC）",
							"price": "2199.00",
							"num": "1",
							"imagePath": "jfs/t1/17191/29/5362/354762/5c3c0855E405dc587/85a6327e11c7597f.jpg",
							"categoryName": "显示",
						}
					],
				},

				{
					item: [
						{
							"name": "英特尔（Intel） i7-9700K  酷睿八核 盒装CPU处理器",
							"price": "3299.00",
							"num": "1",
							"imagePath": "jfs/t27469/203/1025585900/193714/6bfa61b2/5bbf43e7Ndd80aff7.jpg",
							"categoryName": "CPU",
						},
						{
							"name": "技嘉（GIGABYTE）Z390 AORUS PRO WIFI “电竞专家”主板 (Intel Z390/LGA 1151)",
							"price": "1739.00",
							"num": "1",
							"imagePath": "jfs/t27133/132/979031857/439066/d471e955/5bbf0c72Neb6b4205.jpg",
							"categoryName": "主板",
						},
						{
							"name": "技嘉(GIGABYTE)GeForce RTX 2060 GAMING OC PRO 6G 14000MHz 192bit GDDR6专业显卡",
							"price": "3299.00",
							"num": "1",
							"imagePath": "jfs/t1/27485/8/6013/57698/5c46e67aE9b406fb8/450dd63f076c3369.jpg",
							"categoryName": "显卡",
						},
						{
							"name": "美商海盗船(USCORSAIR)复仇者LPX DDR4 3200 16GB(8Gx2条)台式机内存",
							"price": "839.00",
							"num": "1",
							"imagePath": "jfs/t14749/293/476597803/95781/d0dd0396/5a2e3fdbN833e26c5.jpg",
							"categoryName": "内存",
						},
						{
							"name": "希捷(SEAGATE)酷鱼系列 2TB 7200转 256M SATA3 台式机机械硬盘(ST2000DM008)",
							"price": "389.00",
							"num": "1",
							"imagePath": "jfs/t1/10547/33/13375/311370/5c820591Ed263955e/e57a3c0bc6a49ea3.jpg",
							"categoryName": "硬盘",
						},
						{
							"name": "三星（SAMSUNG）500GB SSD固态硬盘 SATA3.0接口 860 EVO（MZ-76E500B）",
							"price": "529.00",
							"num": "1",
							"categoryName": "SSD",
						},
						{
							"name": "恩杰 NZXT H440 白色 中塔式机箱（钢化面板/水冷支持/电源仓/侧透/支持长显卡）",
							"price": "599.00",
							"num": "1",
							"imagePath": "jfs/t4741/72/1235070493/103820/21f87030/58eee531N216c2e27.jpg",
							"categoryName": "机箱",
						},
						{
							"name": "EVGA 额定750W G3电源 (80PLUS金牌/全模组/10年质保/13cmHDB风扇/ECO节能/全日系电容)",
							"price": "879.00",
							"num": "1",
							"imagePath": "jfs/t10843/136/2155299335/206438/de0a3ed4/59f02c45N1dbf9387.jpg",
							"categoryName": "电源",
						},
						{
							"name": "酷冷至尊(CoolerMaster)冰神G240RGB CPU水冷散热(I9 2066、AM4/ARGB灯珠/双腔水泵/低阻冷排/FEP水冷管)",
							"price": "799.00",
							"num": "1",
							"imagePath": "jfs/t1/3080/22/6920/95071/5ba45208E6a72a442/7d49ce17bebb6cc0.jpg",
							"categoryName": "散热",
						},
						{
							"name": "戴尔（DELL）U2518DR 25英寸2K 四边微边框 旋转升降IPS屏 HDR 爱眼不闪屏 个人商务 电脑显示（带HDMI线）",
							"price": "2199.00",
							"num": "1",
							"imagePath": "jfs/t19612/356/1640074113/469459/e02951a9/5ad0702bNb8c78589.jpg",
							"categoryName": "显示",
						},
					]
				},

				{
					item: [
						{
							"name": "英特尔（Intel） i7-9700K  酷睿八核 盒装CPU处理器",
							"price": "3299.00",
							"num": "1",
							"imagePath": "jfs/t27469/203/1025585900/193714/6bfa61b2/5bbf43e7Ndd80aff7.jpg",
							"categoryName": "CPU",
						},
						{
							"name": "玩家国度（ROG）ROG STRIX Z390-E GAMING 主板 支持intel9代CPU 9600K/9700K/9900K（Intel Z390/LGA 1151）",
							"price": "2199.00",
							"num": "1",
							"imagePath": "jfs/t1/9314/13/1792/332115/5bcfe826E29b20b90/7275f36216a850f2.jpg",
							"categoryName": "主板",
						},
						{
							"name": "华硕（ASUS）ROG-STRIX-GeForce RTX2080 TI-O11G-GAMING 1350-1665MHz 14000MHz 游戏电竞专业显卡 11G",
							"price": "13999.00",
							"num": "1",
							"imagePath": "jfs/t1/19651/11/13139/337318/5c9db05cE7a798136/f111585c1abd104a.jpg",
							"categoryName": "显卡",
						},
						{
							"name": "芝奇（G.SKILL）16GB(8G×2)套装 DDR4 3200频率 台式机内存条 幻光戟RGB灯条(C16)",
							"price": "999.00",
							"num": "1",
							"imagePath": "jfs/t3082/185/5978515992/258515/dc6beac1/589a7190N62b6ee82.jpg",
							"categoryName": "内存",
						},
						{
							"name": "希捷(SEAGATE)酷鱼系列 4TB 5400转256M SATA6Gb/s 台式机机械硬盘(ST4000DM004)",
							"price": "629.00",
							"num": "1",
							"imagePath": "jfs/t1/29463/36/9740/323593/5c820502E5d3274e1/a595d505b9fd7ea7.jpg",
							"categoryName": "硬盘",
						},
						{
							"name": "三星（SAMSUNG）500GB SSD固态硬盘 SATA3.0接口 860 EVO（MZ-76E500B）",
							"price": "529.00",
							"num": "1",
							"imagePath": "jfs/t25555/356/1975137885/120964/18425cab/5bc056a7N02e342e6.jpg",
							"categoryName": "SSD",
						},
						{
							"name": "追风者(PHANTEKS) 518XTG 曜石黑 双系统钢化玻璃电竞直播水冷铝机箱(3毫米铝材/配3把风扇/可编程DRGB灯效)",
							"price": "1598.90",
							"num": "1",
							"imagePath": "jfs/t28831/56/858615804/281068/9ea1ca95/5bff6080N67355811.jpg",
							"categoryName": "机箱",
						},
						{
							"name": "海韵 (SEASONIC) 旗舰金 750W PRIME ULTRA  (80PLUS金牌/十二年质保/全模组/静音/支持风扇启停模式）",
							"price": "1059.00",
							"num": "1",
							"imagePath": "jfs/t1/7807/22/9012/255881/5c1229c2E9202a3f1/bd614e02ee2a2d02.jpg",
							"categoryName": "电源",
						},
						{
							"name": "酷冷至尊(CoolerMaster)冰神G240RGB CPU水冷散热(I9 2066、AM4/ARGB灯珠/双腔水泵/低阻冷排/FEP水冷管)",
							"price": "799.00",
							"num": "1",
							"imagePath": "jfs/t1/3080/22/6920/95071/5ba45208E6a72a442/7d49ce17bebb6cc0.jpg",
							"categoryName": "散热",
						},
						{
							"name": "华硕（ASUS）ROG XG32VQR 31.5英寸曲面144hz显示自营 2K显示  HDR Aura-sync神光同步电竞显示",
							"price": "4299.00",
							"num": "1",
							"imagePath": "jfs/t1/14333/9/5569/1111185/5c3f1262E5b91064d/b39c7ee977f477ec.jpg",
							"categoryName": "显示",
						}
					]
				}
			],
			'2': [
				{
					item: [
						{
							"name": "AMD 锐龙 5 2600X 处理器 (r5) 6核12线程 AM4 接口 3.6GHz 盒装CPU",
							"price": "1399.00",
							"num": "1",
							"imagePath": "jfs/t18034/256/1288473246/221842/57b7f448/5ac463b1N3480d6c7.jpg",
							"categoryName": "CPU",
						},
						{
							"name": "微星（MSI）B450M MORTAR迫击炮 电竞“吃鸡”主板（AMD B450/Socket AM4）",
							"price": "669.00",
							"num": "1",
							"imagePath": "jfs/t23932/285/1421873531/298410/38491d1b/5b5ffb6cN2093506e.jpg",
							"categoryName": "主板",
						},
						{
							"name": "微星（MSI）GeForce GTX 1060 GAMING X 6G 1594-1809MHZ GDDR5 192BIT PCI-E 3.0 旗舰红龙 吃鸡显卡",
							"price": "1899.00",
							"num": "1",
							"imagePath": "jfs/t18442/74/2071557420/119185/e4e3d236/5ae3f0e5N46bba1d8.jpg",
							"categoryName": "显卡",
						},
						{
							"name": "金士顿(Kingston) 8GB DDR4 2400 台式机内存 骇客神条 Fury雷电系列",
							"price": "299.00",
							"num": "1",
							"imagePath": "jfs/t12451/166/1227532677/90377/6155f6a0/5a1cd523N27f9b8a2.jpg",
							"categoryName": "内存",
						},
						{
							"name": "希捷(SEAGATE)酷鱼系列 4TB 5400转256M SATA6Gb/s 台式机机械硬盘(ST4000DM004)",
							"price": "679.00",
							"num": "1",
							"imagePath": "jfs/t1/29463/36/9740/323593/5c820502E5d3274e1/a595d505b9fd7ea7.jpg",
							"categoryName": "硬盘",
						},
						{
							"name": "西部数据（WD）240GB SSD固态硬盘 SATA3.0接口 Green系列-SSD日常家用普及版｜三年质保",
							"price": "249.00",
							"num": "1",
							"imagePath": "jfs/t26554/309/1696734401/105543/8f1abbb2/5beb8546Nbdb8143e.jpg",
							"categoryName": "SSD",
						},
						{
							"name": "爱国者（aigo）炫影黑京东专供版 电脑机箱（配3把发光风扇/支持ATX主板/蜂窝玻璃面板/背线）",
							"price": "229.00",
							"num": "1",
							"imagePath": "jfs/t1/10979/12/198/438043/5bd9a7e0Efb7369a8/8b6fda6a4a7d78b0.jpg",
							"categoryName": "机箱",
						},
						{
							"name": "航嘉（Huntkey）额定450W JUMPER450S电源 (主动PFC/双管正激/宽幅电压/背部走线/高性价比)",
							"price": "259.00",
							"num": "1",
							"imagePath": "jfs/t1/8517/14/3989/381061/5bd8fabdEc5c36e1f/20de60c20b169203.jpg",
							"categoryName": "电源",
						},
						{
							"name": "九州风神 DEEPCOOL 玄冰GT风冷CPU散热(多平台/支持2066/AM4平台/4热管/RGB风扇及顶片/附带硅脂)",
							"price": "199.00",
							"num": "1",
							"imagePath": "jfs/t19576/285/523158499/222523/c413cbbc/5a8ec368Nf8da888c.jpg",
							"categoryName": "散热",
						},
						{
							"name": "AOC C32G1 31.5英寸 曲面 144Hz高刷新率 广色域 HDMI+DP接口 微框 快拆支架 游戏电竞显示",
							"price": "1799.00",
							"num": "1",
							"imagePath": "jfs/t25492/109/2572354767/300798/f374ecfd/5be8f1aeNda68cf03.jpg",
							"categoryName": "显示",
						}
					],
				},

				{
					item: [
						{
							"name": "英特尔（Intel） i7 8700 酷睿六核 盒装CPU处理器",
							"price": "2499.00",
							"num": "1",
							"imagePath": "jfs/t19876/121/551161046/273454/946beee7/5afe4de8Nda23f166.jpg",
							"categoryName": "CPU",
						},
						{
							"name": "华硕（ASUS）TUF B360M-PLUS GAMING S 游戏主板（Intel B360/LGA 1151）",
							"price": "689.00",
							"num": "1",
							"imagePath": "jfs/t1/1112/31/2284/740177/5b962e6dE04d26986/b73f0b4d6c32a824.jpg",
							"categoryName": "主板",
						},
						{
							"name": "七彩虹（Colorful）iGame GeForce RTX 2060 Ultra OC GDDR6 6G 电竞游戏显卡",
							"price": "3099.00",
							"num": "1",
							"imagePath": "jfs/t1/19341/19/4086/109371/5c2dd4caEf7338d36/d14082186541959e.jpg",
							"categoryName": "显卡",
						},
						{
							"name": "芝奇（G.SKILL）8GB DDR4 3200频率 台式机内存条 Sniper X 狙击者(空军款)",
							"price": "389.00",
							"num": "1",
							"imagePath": "jfs/t15568/242/2156737590/183992/cbc7c62f/5a94d280N0be3b11e.jpg",
							"categoryName": "内存",
						},
						{
							"name": "希捷(SEAGATE)酷鱼系列 4TB 5400转256M SATA6Gb/s 台式机机械硬盘(ST4000DM004)",
							"price": "679.00",
							"num": "1",
							"imagePath": "jfs/t1/29463/36/9740/323593/5c820502E5d3274e1/a595d505b9fd7ea7.jpg",
							"categoryName": "硬盘",
						},
						{
							"name": "金士顿(Kingston) 240GB SSD固态硬盘 SATA3.0接口 A400系列",
							"price": "239.00",
							"num": "1",
							"imagePath": "jfs/t12391/320/1216333188/171521/651287d/5a1cd70fN72ba28f5.jpg",
							"categoryName": "SSD",
						},
						{
							"name": "酷冷至尊(CoolerMaster)MB500 毁灭者Ⅲ钢化玻璃RGB版 中塔机箱(ATX主板/长显卡/同步4大板商RGB灯效)",
							"price": "469.00",
							"num": "1",
							"imagePath": "jfs/t15490/186/2027284460/377171/238ca810/5a70441cN15396c49.jpg",
							"categoryName": "机箱",
						},
						{
							"name": "安钛克(Antec)EAG500pro金牌半模组 台式机电脑主机机箱电源500W（日系电容/14cm智能温控静音风扇/5年质保）",
							"price": "499.00",
							"num": "1",
							"imagePath": "jfs/t24151/148/1232487850/407678/3c3dffc8/5b56ecdcN7a52bdfd.jpg",
							"categoryName": "电源",
						},
						{
							"name": "酷冷至尊(Cooler Master) T400 CPU 散热(支持I9 2066、AM4 /4热管/PWM温控/LED风扇/背锁扣具)",
							"price": "129.00",
							"num": "1",
							"imagePath": "jfs/t3466/260/1338816984/360633/3cc14a20/5823cbcaNad1a5e4d.jpg",
							"categoryName": "散热",
						},
						{
							"name": "华硕 ASUS VG279Q 27英寸显示 144Hz显示 IPS显示屏 电脑显示自营 液晶显示 电竞显示 Apex英雄",
							"price": "2499.00",
							"num": "1",
							"imagePath": "jfs/t1/27779/10/5576/1154496/5c3f0502Ef714a8e4/7e73f89f425d5fc0.jpg",
							"categoryName": "显示",
						},
					],
				},

				{
					item: [
						{
							"name": "英特尔（Intel） i7-9700K  酷睿八核 盒装CPU处理器",
							"price": "3299.00",
							"num": "1",
							"imagePath": "jfs/t27469/203/1025585900/193714/6bfa61b2/5bbf43e7Ndd80aff7.jpg",
							"categoryName": "CPU",
						},
						{
							"name": "微星（MSI）MPG Z390 GAMING PRO CARBON 暗黑板主板（Intel Z390/LGA 1151）",
							"price": "1629.00",
							"num": "1",
							"imagePath": "jfs/t26338/219/939366773/303463/9dc0708a/5bbd61beNf4684e4d.jpg",
							"categoryName": "主板",
						},
						{
							"name": "微星（MSI）GeForce RTX 2070 ARMOR 8G  GDDR6 装甲师 电竞游戏电脑独立显卡",
							"price": "3999.00",
							"num": "1",
							"imagePath": "jfs/t1/10924/11/12292/276834/5c778906E5a5811cf/716fb3025e03d479.jpg",
							"categoryName": "显卡",
						},
						{
							"name": "金士顿(Kingston) 16GB(8G×2)套装 DDR4 3200 台式机内存 骇客神条 Predator掠食者系列 RGB灯条",
							"price": "799.00",
							"num": "1",
							"imagePath": "jfs/t24592/180/1396845503/136217/c1e78a14/5bb0c0baNb5eca769.jpg",
							"categoryName": "内存",
						},
						{
							"name": "希捷(SEAGATE)酷鱼系列 4TB 5400转256M SATA6Gb/s 台式机机械硬盘(ST4000DM004)",
							"price": "679.00",
							"num": "1",
							"imagePath": "jfs/t1/29463/36/9740/323593/5c820502E5d3274e1/a595d505b9fd7ea7.jpg",
							"categoryName": "硬盘",
						},
						{
							"name": "三星（SAMSUNG）250GB SSD固态硬盘 SATA3.0接口 860 EVO（MZ-76E250B）",
							"price": "329.00",
							"num": "1",
							"imagePath": "jfs/t25027/279/1994410610/120964/18425cab/5bc05552N2aa18fd8.jpg",
							"categoryName": "SSD",
						},
						{
							"name": "酷冷至尊(CoolerMaster)MB500 毁灭者Ⅲ钢化玻璃RGB版 中塔机箱(ATX主板/长显卡/同步4大板商RGB灯效)",
							"price": "469.00",
							"num": "1",
							"imagePath": "jfs/t15490/186/2027284460/377171/238ca810/5a70441cN15396c49.jpg",
							"categoryName": "机箱",
						},
						{
							"name": "酷冷至尊（CoolerMaster）额定550W V550游戏电源（80PLUS金牌/全模组/全日系电容/短机身/可背线/质保五年）",
							"price": "549.00",
							"num": "1",
							"imagePath": "jfs/t4663/210/3744512175/257780/4d9c6dd3/5902f160N756b5530.jpg",
							"categoryName": "电源",
						},
						{
							"name": "九州风神（ DEEPCOOL） 玄冰400幻彩版CPU风冷散热（多平台/支持AM4/4热管/智能温控/12CM风扇/附带硅脂）",
							"price": "129.00",
							"num": "1",
							"imagePath": "jfs/t24100/93/2126816192/311177/2ec477a5/5b74dde0Nbea868f6.jpg",
							"categoryName": "散热",
						},
						{
							"name": "戴尔（DELL）S2719DGF 27英寸2K旋转升降155Hz刷新1毫秒响应不闪屏电竞个人商务电脑显示（Blue Logo版）",
							"price": "2688.00",
							"num": "1",
							"imagePath": "jfs/t1/17382/20/12738/220458/5c999e1bE79c3d76a/d8fb402f54cb5360.jpg",
							"categoryName": "显示",
						},
					]
				}
			],
			'3': [
				{
					item: [
						{
							"name": "英特尔（Intel）i5 8500 酷睿六核 盒装CPU处理器",
							"price": "1699.00",
							"num": "1",
							"imagePath": "jfs/t14434/196/2670938343/2466623/73c579f6/5ab1f616N196cd6ca.jpg",
							"categoryName": "CPU",
						},
						{
							"name": "技嘉（GIGABYTE）B360 M AORUS PRO “小雕” 电竞游戏主板 (Intel B360/LGA 1151)",
							"price": "658.00",
							"num": "1",
							"imagePath": "jfs/t25003/25/2213652449/408305/a70bd3a6/5bc6961aNaaa1a82c.jpg",
							"categoryName": "主板",
						},
						{
							"name": "技嘉(GIGABYTE)GeForce GTX 1060 G1 Gaming D5X 6G显卡",
							"price": "1649.00",
							"num": "1",
							"imagePath": "jfs/t26659/50/1448314355/91436/7c6c315f/5be3f7e8N4bf6c180.jpg",
							"categoryName": "显卡",
						},
						{
							"name": "金士顿(Kingston) 8GB DDR4 3200 台式机内存 骇客神条 Predator掠食者系列 RGB灯条",
							"price": "399.00",
							"num": "1",
							"imagePath": "jfs/t26788/333/542340718/72799/f40ec26e/5bb0c11cNc154389a.jpg",
							"categoryName": "内存",
						},
						{
							"name": "希捷(Seagate)4TB 256MB 5400RPM 台式机机械硬盘 SATA接口 希捷酷鱼BarraCuda系列(ST4000DM004)",
							"price": "649.00",
							"num": "1",
							"imagePath": "jfs/t1/29463/36/9740/323593/5c820502E5d3274e1/a595d505b9fd7ea7.jpg",
							"categoryName": "硬盘",
						},
						{
							"name": "三星（SAMSUNG）250GB SSD固态硬盘 SATA3.0接口 860 EVO（MZ-76E250B）",
							"price": "329.00",
							"num": "1",
							"imagePath": "jfs/t25027/279/1994410610/120964/18425cab/5bc05552N2aa18fd8.jpg",
							"categoryName": "SSD",
						},
						{
							"name": "乔思伯（JONSBO）U4 银色 ATX机箱 （支持ATX主板/高塔散热/ATX电源/全铝外壳/5MM厚度钢化玻璃侧板）",
							"price": "399.00",
							"num": "1",
							"imagePath": "jfs/t15679/245/1705382681/331783/bdb75074/5a5ea273Nf3f26646.jpg",
							"categoryName": "机箱",
						},
						{
							"name": "安钛克(Antec)VP500台式机电脑主机机箱电源500W（48万好评VP系列/静音风扇/2年换新只换不修）",
							"price": "259.00",
							"num": "1",
							"imagePath": "jfs/t4636/12/4547143022/251377/21a31cb2/59102a88N87eb76c2.jpg",
							"category": 691,
							"categoryName": "电源",
						},
						{
							"name": "九州风神（DEEPCOOL） 玄冰400 CPU散热（多平台/支持AM4/4热管/智能温控/发蓝光/12CM风扇/附带硅脂）",
							"price": "88.00",
							"num": "1",
							"imagePath": "jfs/t3295/32/2226662883/548742/e3a245d6/57ddfdd0N664c6861.jpg",
							"categoryName": "散热",
						},
						{
							"name": "AOC C24G1 23.6英寸 第3代创新曲率1500R 144Hz高刷新率 双HDMI接口 人体工学支架 游戏电竞曲面显示",
							"price": "1199.00",
							"num": "1",
							"imagePath": "jfs/t1/22501/4/1960/316981/5c185c7cE24aa0688/fa66d261e0c958aa.jpg",
							"categoryName": "显示",
						},
					]
				},
				{
					item: [
						{
							"name": "英特尔（Intel） i7 8700 酷睿六核 盒装CPU处理器",
							"price": "2399.00",
							"num": "1",
							"imagePath": "jfs/t19876/121/551161046/273454/946beee7/5afe4de8Nda23f166.jpg",
							"categoryName": "CPU",
						},
						{
							"name": "微星（MSI）B360M MORTAR迫击炮 电竞“吃鸡”主板（Intel B360/LGA 1151）",
							"price": "669.00",
							"num": "1",
							"imagePath": "jfs/t18583/201/1051190495/305673/5e738c48/5ab9f56eN6927a03a.jpg",
							"categoryName": "主板",
						},
						{
							"name": "微星（MSI）GeForce RTX 2070 8G DUKE 龙爵 256BIT GDDR6 三风黑龙 电脑独立电竞游戏显卡",
							"price": "4099.00",
							"num": "1",
							"imagePath": "jfs/t1/11273/3/6897/247014/5c483aebE045e5f07/359c14e3c3465caf.jpg",
							"categoryName": "显卡",
						},
						{
							"name": "金士顿(Kingston) 16GB(8G×2)套装 DDR4 2666 台式机内存 骇客神条 Fury雷电系列",
							"price": "629.00",
							"num": "1",
							"imagePath": "jfs/t21139/212/2295950665/163364/e5896307/5b4eb32bN5e65f496.jpg",
							"categoryName": "内存",
						},
						{
							"name": "希捷(Seagate)2TB 256MB 7200RPM 台式机机械硬盘 SATA接口 希捷酷鱼BarraCuda系列(ST2000DM008)",
							"price": "378.00",
							"num": "1",
							"imagePath": "jfs/t1/10547/33/13375/311370/5c820591Ed263955e/e57a3c0bc6a49ea3.jpg",
							"categoryName": "硬盘",
						},
						{
							"name": "三星（SAMSUNG）250GB SSD固态硬盘 SATA3.0接口 860 EVO（MZ-76E250B）",
							"price": "329.00",
							"num": "1",
							"imagePath": "jfs/t25027/279/1994410610/120964/18425cab/5bc05552N2aa18fd8.jpg",
							"categoryName": "SSD",
						},
						{
							"name": "酷冷至尊（coolermaster）MasterBox Lite 5(睿)台式电脑主机中塔机箱(ATX主板/前镜面板/侧透/独立电源仓)",
							"price": "299.00",
							"num": "1",
							"imagePath": "jfs/t1/31657/27/3559/298951/5c764263E055ff9a6/5debbb440bcf140d.jpg",
							"categoryName": "机箱",
						},
						{
							"name": "酷冷至尊（CoolerMaster）额定650W V650电脑电源（80Plus金牌/全模组/全日系电容/质保五年/台式机电源）",
							"price": "699.00",
							"num": "1",
							"imagePath": "jfs/t5548/156/588184289/258657/2ea8249/5902f256N7f76f764.jpg",
							"categoryName": "电源",
						},
						{
							"name": "九州风神（DEEPCOOL） 玄冰400 CPU散热（多平台/支持AM4/4热管/智能温控/发蓝光/12CM风扇/附带硅脂）",
							"price": "88.00",
							"num": "1",
							"imagePath": "jfs/t3295/32/2226662883/548742/e3a245d6/57ddfdd0N664c6861.jpg",
							"categoryName": "散热",
						},
						{
							"name": "戴尔（DELL） U2417H 23.8英寸四边微边框旋转升降IPS屏 出厂色彩校准 99%sRGB 个人商务 电脑显示",
							"price": "1449.00",
							"num": "1",
							"imagePath": "jfs/t19465/355/1589199191/309972/37772b63/5ad06fc6N291eab65.jpg",
							"categoryName": "显示",
						}
					]
				},
				{
					item: [
						{
							"name": "英特尔（Intel） i7-9700K  酷睿八核 盒装CPU处理器",
							"price": "3299.00",
							"num": "1",
							"imagePath": "jfs/t27469/203/1025585900/193714/6bfa61b2/5bbf43e7Ndd80aff7.jpg",
							"categoryName": "CPU",
						},
						{
							"name": "华硕（ASUS）PRIME Z390-A 主板 大师系列 支持intel9代CPU 9600K/9700K/9900K（Intel Z390/LGA 1151）",
							"price": "1679.00",
							"num": "1",
							"imagePath": "jfs/t1/23116/27/14243/692030/5ca5bee3E69cde2ce/48de2902725295ba.jpg",
							"categoryName": "主板",
						},
						{
							"name": "英伟达（NVIDIA） GeForce RTX 2080 Founders Edition",
							"price": "5999.00",
							"num": "1",
							"imagePath": "jfs/t24370/69/2228367083/143438/7b5cabec/5b7a34aaNc0d2e5ff.jpg",
							"categoryName": "显卡",
						},
						{
							"name": "芝奇（G.SKILL）16GB(8G×2)套装 DDR4 3200频率 台式机内存条 幻光戟RGB灯条(C16)",
							"price": "899.00",
							"num": "1",
							"imagePath": "jfs/t3082/185/5978515992/258515/dc6beac1/589a7190N62b6ee82.jpg",
							"categoryName": "内存",
						},
						{
							"name": "希捷(Seagate)4TB 256MB 5400RPM 台式机机械硬盘 SATA接口 希捷酷鱼BarraCuda系列(ST4000DM004)",
							"price": "649.00",
							"num": "1",
							"imagePath": "jfs/t1/29463/36/9740/323593/5c820502E5d3274e1/a595d505b9fd7ea7.jpg",
							"categoryName": "硬盘",
						},
						{
							"name": "三星（SAMSUNG）500GB SSD固态硬盘 SATA3.0接口 860 EVO（MZ-76E500B）",
							"price": "499.00",
							"num": "1",
							"imagePath": "jfs/t25555/356/1975137885/120964/18425cab/5bc056a7N02e342e6.jpg",
							"categoryName": "SSD",
						},
						{
							"name": "美商海盗船（USCorsair）SPEC-ALPHA  黑红色 中塔游戏机箱（侧透/支持ATX主板/24CM水冷排/38CM显卡）",
							"price": "499.00",
							"num": "1",
							"imagePath": "jfs/t1921/86/2195296604/87081/27e10763/56c53f3eN8e62cfd4.jpg",
							"categoryName": "机箱",
						},
						{
							"name": "美商海盗船(USCorsair) 静音 高功率 游戏电源推荐 额定650W RM650x（80PLUS金牌/全日系电容）",
							"price": "749.00",
							"num": "1",
							"imagePath": "jfs/t18598/176/2378913422/157182/ce857682/5af2f1abN8966fcdf.jpg",
							"categoryName": "电源",
						},
						{
							"name": "酷冷至尊(Cooler Master)冰神B240 CPU水冷散热(支持I9 2066、AM4/双腔水泵/微流道设计/均衡型风扇)",
							"price": "369.00",
							"num": "1",
							"imagePath": "jfs/t3100/179/7970533158/280859/f34a1305/58be1869N064232e9.jpg",
							"categoryName": "散热",
						},
						{
							"name": "三星（SAMSUNG）31.5英寸 4K/UHD高分辨率 FreeSync技术LED背光 可壁挂PS4液晶电脑显示 （U32J590UQC）",
							"price": "2499.00",
							"num": "1",
							"imagePath": "jfs/t1/2159/7/16534/424582/5be29198E1b3def84/78cbda41793a40b9.jpg",
							"categoryName": "显示",
						},
					]
				}
			],
			'4': [
				{
					item: [
						{
							"skuId": 6902454,
							"name": "AMD 锐龙 5 2600X 处理器 (r5) 6核12线程 AM4 接口 3.6GHz 盒装CPU",
							"price": "1299.00",
							"num": "1",
							"imagePath": "jfs/t18034/256/1288473246/221842/57b7f448/5ac463b1N3480d6c7.jpg",
							"state": "1",
							"category": 678,
							"categoryName": "CPU",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "122922"
						},
						{
							"skuId": 8259910,
							"name": "微星（MSI）B450M MORTAR迫击炮 电竞“吃鸡”主板（AMD B450/Socket AM4）",
							"price": "669.00",
							"num": "1",
							"imagePath": "jfs/t23932/285/1421873531/298410/38491d1b/5b5ffb6cN2093506e.jpg",
							"state": "1",
							"category": 681,
							"categoryName": "主板",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 3295240,
							"name": "微星（MSI）GeForce GTX 1060 GAMING X 6G 1594-1809MHZ GDDR5 192BIT PCI-E 3.0 旗舰红龙 吃鸡显卡",
							"price": "1899.00",
							"num": "1",
							"imagePath": "jfs/t18442/74/2071557420/119185/e4e3d236/5ae3f0e5N46bba1d8.jpg",
							"state": "1",
							"category": 679,
							"categoryName": "显卡",
							"promo": "",
							"stock": 0,
							"attr": [

							],
							"score": "157607"
						},
						{
							"skuId": 2121097,
							"name": "金士顿(Kingston) 8GB DDR4 2400 台式机内存 骇客神条 Fury雷电系列",
							"price": "295.00",
							"num": "1",
							"imagePath": "jfs/t12451/166/1227532677/90377/6155f6a0/5a1cd523N27f9b8a2.jpg",
							"state": "1",
							"category": 680,
							"categoryName": "内存",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "9489"
						},
						{
							"skuId": 4220257,
							"name": "希捷(Seagate)4TB 256MB 5400RPM 台式机机械硬盘 SATA接口 希捷酷鱼BarraCuda系列(ST4000DM004)",
							"price": "649.00",
							"num": "1",
							"imagePath": "jfs/t1/29463/36/9740/323593/5c820502E5d3274e1/a595d505b9fd7ea7.jpg",
							"state": "1",
							"category": 683,
							"categoryName": "硬盘",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "3220"
						},
						{
							"skuId": 3594241,
							"name": "西部数据（WD）240GB SSD固态硬盘 SATA3.0接口 Green系列-SSD日常家用普及版｜三年质保",
							"price": "249.00",
							"num": "1",
							"imagePath": "jfs/t1/36726/10/1914/122621/5cb44a7bEa80d36dd/9553f997b4d1312a.jpg",
							"state": "1",
							"category": 11303,
							"categoryName": "SSD",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "10109"
						},
						{
							"skuId": 3303012,
							"name": "爱国者（aigo）炫影黑京东专供版 电脑机箱（配3把发光风扇/支持ATX主板/蜂窝玻璃面板/背线）",
							"price": "229.00",
							"num": "1",
							"imagePath": "jfs/t1/10979/12/198/438043/5bd9a7e0Efb7369a8/8b6fda6a4a7d78b0.jpg",
							"state": "1",
							"category": 687,
							"categoryName": "机箱",
							"promo": "满199-20",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 942041,
							"name": "航嘉（Huntkey）额定450W JUMPER450S电源 (主动PFC/双管正激/宽幅电压/背部走线/高性价比)",
							"price": "219.00",
							"num": "1",
							"imagePath": "jfs/t1/8517/14/3989/381061/5bd8fabdEc5c36e1f/20de60c20b169203.jpg",
							"state": "1",
							"category": 691,
							"categoryName": "电源",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 5194354,
							"name": "九州风神 DEEPCOOL 玄冰GT风冷CPU散热(多平台/支持2066/AM4平台/4热管/RGB风扇及顶片/附带硅脂)",
							"price": "199.00",
							"num": "1",
							"imagePath": "jfs/t19576/285/523158499/222523/c413cbbc/5a8ec368Nf8da888c.jpg",
							"state": "1",
							"category": 682,
							"categoryName": "散热",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 8441864,
							"name": "AOC C32G1 31.5英寸 曲面 144Hz高刷新率 广色域 HDMI+DP接口 微框 快拆支架 游戏电竞显示",
							"price": "1699.00",
							"num": "1",
							"imagePath": "jfs/t25492/109/2572354767/300798/f374ecfd/5be8f1aeNda68cf03.jpg",
							"state": "1",
							"category": 688,
							"categoryName": "显示",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": -1,
							"name": null,
							"price": null,
							"num": "1",
							"imagePath": null,
							"state": "1",
							"category": 690,
							"categoryName": "鼠标",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
					]
				},
				{
					item: [
						{
							"skuId": 5448942,
							"name": "英特尔（Intel） i7 8700 酷睿六核 盒装CPU处理器",
							"price": "2399.00",
							"num": "1",
							"imagePath": "jfs/t19876/121/551161046/273454/946beee7/5afe4de8Nda23f166.jpg",
							"state": "1",
							"category": 678,
							"categoryName": "CPU",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "117645"
						},
						{
							"skuId": 5194045,
							"name": "微星（MSI）Z370 KRAIT GAMING银环蛇 主板（Intel Z370/LGA 1151）",
							"price": "暂无报价",
							"num": "1",
							"imagePath": "jfs/t16885/296/665743759/260850/165e03ef/5a9f4887Na5c2beb7.jpg",
							"state": "0",
							"category": 681,
							"categoryName": "主板",
							"promo": "",
							"stock": 0,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 8601922,
							"name": "华硕（ASUS）ROG STRIX-GTX1060-A6G-GAMING  猛禽系列游戏吃鸡”显卡",
							"price": "暂无报价",
							"num": "1",
							"imagePath": "jfs/t1/6195/36/7297/170586/5be2a283Eae23ff6f/126711aaa02ad697.jpg",
							"state": "0",
							"category": 679,
							"categoryName": "显卡",
							"promo": "",
							"stock": 0,
							"attr": [

							],
							"score": "153103"
						},
						{
							"skuId": 3828405,
							"name": "芝奇（G.SKILL）16GB(8G×2)套装 DDR4 3200频率 台式机内存条 幻光戟RGB灯条(C16)",
							"price": "899.00",
							"num": "1",
							"imagePath": "jfs/t3082/185/5978515992/258515/dc6beac1/589a7190N62b6ee82.jpg",
							"state": "1",
							"category": 680,
							"categoryName": "内存",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "10819"
						},
						{
							"skuId": 3356012,
							"name": "希捷(SEAGATE)酷鱼系列 2TB 7200转64M SATA3 台式机机械硬盘(ST2000DM006)",
							"price": "419.00",
							"num": "1",
							"imagePath": "jfs/t1/10057/9/13515/328145/5c8205ffE89ab67fe/7c6f04e5c4c18c72.jpg",
							"state": "1",
							"category": 683,
							"categoryName": "硬盘",
							"promo": "",
							"stock": 0,
							"attr": [

							],
							"score": "2738"
						},
						{
							"skuId": 6287165,
							"name": "三星（SAMSUNG）250GB SSD固态硬盘 SATA3.0接口 860 EVO（MZ-76E250B）",
							"price": "329.00",
							"num": "1",
							"imagePath": "jfs/t25027/279/1994410610/120964/18425cab/5bc05552N2aa18fd8.jpg",
							"state": "1",
							"category": 11303,
							"categoryName": "SSD",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "11519"
						},
						{
							"skuId": 5724574,
							"name": "安钛克(Antec)龙焰 中塔钢化玻璃侧透/RGB/支持ATX-MATX-ITX主板/长显卡/280水冷电脑机箱 台式机游戏主机箱",
							"price": "269.00",
							"num": "1",
							"imagePath": "jfs/t1/3760/2/589/483890/5b921f3eE337a5527/0c01ed9fd050107a.jpg",
							"state": "1",
							"category": 687,
							"categoryName": "机箱",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 3743889,
							"name": "长城（GreatWall）额定550W G5全模组电脑电源（80PLUS铜牌/12V大电流/DC-DC/三芯片精准控制/五年质保）",
							"price": "379.00",
							"num": "1",
							"imagePath": "jfs/t1/1018/30/11386/113573/5bcec39eE6a31814e/ec68955394f3627e.jpg",
							"state": "1",
							"category": 691,
							"categoryName": "电源",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 4567820,
							"name": "酷冷至尊(Cooler Master)冰神B240 CPU水冷散热(支持I9 2066、AM4/双腔水泵/微流道设计/均衡型风扇)",
							"price": "369.00",
							"num": "1",
							"imagePath": "jfs/t3100/179/7970533158/280859/f34a1305/58be1869N064232e9.jpg",
							"state": "1",
							"category": 682,
							"categoryName": "散热",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 4606144,
							"name": "三星（SAMSUNG）27英寸2K/QHD高分 1800R曲率量子点技术 HDMI/DP全高清接口 电脑显示（C27H711QEC）",
							"price": "1999.00",
							"num": "1",
							"imagePath": "jfs/t1/17191/29/5362/354762/5c3c0855E405dc587/85a6327e11c7597f.jpg",
							"state": "1",
							"category": 688,
							"categoryName": "显示",
							"promo": "满1000-100",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
					]
				},
				{
					item: [
						{
							"skuId": 5008395,
							"name": "英特尔（Intel） i7 8700K 酷睿六核 盒装CPU处理器",
							"price": "2649.00",
							"num": "1",
							"imagePath": "jfs/t18448/200/2532654839/268503/b46a717e/5afe4d0cN10f96d55.jpg",
							"state": "1",
							"category": 678,
							"categoryName": "CPU",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "124332"
						},
						{
							"skuId": 5233751,
							"name": "华硕（ASUS）PRIME Z370-A 主板（Intel Z370/LGA 1151）",
							"price": "1849.00",
							"num": "1",
							"imagePath": "jfs/t19312/211/374140508/602490/ba66331f/5a6ee0e8N5e4e0d8b.jpg",
							"state": "1",
							"category": 681,
							"categoryName": "主板",
							"promo": "",
							"stock": 0,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 100000913459,
							"name": "华硕（ASUS）ROG-STRIX-GeForce RTX2070-O8G-GAMING 1410-1845MHz 14000MHz猛禽游戏显卡",
							"price": "4599.00",
							"num": "1",
							"imagePath": "jfs/t1/19595/34/13254/367733/5c9dcf02E392c1f78/3a7085cbc41789da.jpg",
							"state": "1",
							"category": 679,
							"categoryName": "显卡",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "254988"
						},
						{
							"skuId": 1990572,
							"name": "美商海盗船(USCORSAIR) 复仇者LPX DDR4 3000 32GB(16Gx2条) 台式机内存",
							"price": "1399.00",
							"num": "1",
							"imagePath": "jfs/t16300/97/277253020/95781/d0dd0396/5a2e3feeN97ed6143.jpg",
							"state": "1",
							"category": 680,
							"categoryName": "内存",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "10242"
						},
						{
							"skuId": 2031266,
							"name": "西部数据(WD)蓝盘 4TB SATA6Gb/s 64MB 台式机械硬盘(WD40EZRZ)",
							"price": "629.00",
							"num": "1",
							"imagePath": "jfs/t1/24222/39/14509/160110/5cb6f621Ecda71e84/e169a826128780b4.jpg",
							"state": "1",
							"category": 683,
							"categoryName": "硬盘",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "3049"
						},
						{
							"skuId": 7234518,
							"name": "三星（SAMSUNG）500GB SSD固态硬盘 M.2接口(NVMe协议) 970 EVO（MZ-V7E500BW）",
							"price": "989.00",
							"num": "1",
							"imagePath": "jfs/t27469/245/1079100394/139978/af9b4877/5bc056d3Ndbdf20c4.jpg",
							"state": "1",
							"category": 11303,
							"categoryName": "SSD",
							"promo": "",
							"stock": 0,
							"attr": [

							],
							"score": "51734"
						},
						{
							"skuId": 3595249,
							"name": "分形工艺（Fractal Design）Define R5 限量冰金版白色 侧透 静音机箱(标配风扇/模块化/支持水冷散热)",
							"price": "899.00",
							"num": "1",
							"imagePath": "jfs/t24487/156/718467594/154812/844ec769/5b3e51a7N289f1374.jpg",
							"state": "1",
							"category": 687,
							"categoryName": "机箱",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 6757755,
							"name": "美商海盗船（USCorsair）额定750W RM750x 全模组电脑电源（80PLUS金牌/低噪音 /十年质保/全日系电容）",
							"price": "849.00",
							"num": "1",
							"imagePath": "jfs/t17680/157/2389293851/155605/bb6ea3df/5af2f1c0Nd4b4211a.jpg",
							"state": "1",
							"category": 691,
							"categoryName": "电源",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 4567820,
							"name": "酷冷至尊(Cooler Master)冰神B240 CPU水冷散热(支持I9 2066、AM4/双腔水泵/微流道设计/均衡型风扇)",
							"price": "369.00",
							"num": "1",
							"imagePath": "jfs/t3100/179/7970533158/280859/f34a1305/58be1869N064232e9.jpg",
							"state": "1",
							"category": 682,
							"categoryName": "散热",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 5239431,
							"name": "华硕(ASUS) ROG玩家国度 PG27VQ 27英寸显示屏 2K显示 165hz G-Sync 曲屏电脑显示自营 电竞显示",
							"price": "4898.00",
							"num": "1",
							"imagePath": "jfs/t1/16063/3/5625/1164989/5c3f0d48E1226d58d/de236143d7c05d57.jpg",
							"state": "1",
							"category": 688,
							"categoryName": "显示",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
					]
				}
			],
			'5': [
				{
					item: [
						{
							"skuId": 6405178,
							"name": "英特尔（Intel）i5 8500 酷睿六核 盒装CPU处理器",
							"price": "1699.00",
							"num": "1",
							"imagePath": "jfs/t14434/196/2670938343/2466623/73c579f6/5ab1f616N196cd6ca.jpg",
							"state": "1",
							"category": 678,
							"categoryName": "CPU",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "78091"
						},
						{
							"skuId": 6756750,
							"name": "华硕（ASUS）PRIME B360-PLUS 主板 大师系列 （Intel B360/LGA 1151）",
							"price": "769.00",
							"num": "1",
							"imagePath": "jfs/t18544/84/2409381088/520522/a527a678/5af419dcN3d3fe649.jpg",
							"state": "1",
							"category": 681,
							"categoryName": "主板",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 3182191,
							"name": "华硕（ASUS）DUAL-GeForce GTX1060-O6G 1569-1809MHz  GDDR5 雪豹系列gtx1060 6g显卡",
							"price": "1799.00",
							"num": "1",
							"imagePath": "jfs/t7618/260/2068444304/347589/6a3ba180/59a687d6N3729d32f.jpg",
							"state": "1",
							"category": 679,
							"categoryName": "显卡",
							"promo": "",
							"stock": 0,
							"attr": [

							],
							"score": "153103"
						},
						{
							"skuId": 2121093,
							"name": "金士顿(Kingston) 16GB(8G×2)套装 DDR4 2400 台式机内存 骇客神条 Fury雷电系列",
							"price": "649.00",
							"num": "1",
							"imagePath": "jfs/t12622/266/1207944116/162945/b109dd26/5a1cd53dN2b9943f0.jpg",
							"state": "1",
							"category": 680,
							"categoryName": "内存",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "9489"
						},
						{
							"skuId": 3843702,
							"name": "希捷(Seagate)1TB 64MB 7200RPM 台式机机械硬盘 SATA接口 希捷酷鱼BarraCuda系列(ST1000DM010)",
							"price": "288.00",
							"num": "1",
							"imagePath": "jfs/t1/10148/11/13551/296326/5c8204d2E52b3e010/88c623bdda0ef7ab.jpg",
							"state": "1",
							"category": 683,
							"categoryName": "硬盘",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "2782"
						},
						{
							"skuId": 6287165,
							"name": "三星（SAMSUNG）250GB SSD固态硬盘 SATA3.0接口 860 EVO（MZ-76E250B）",
							"price": "329.00",
							"num": "1",
							"imagePath": "jfs/t25027/279/1994410610/120964/18425cab/5bc05552N2aa18fd8.jpg",
							"state": "1",
							"category": 11303,
							"categoryName": "SSD",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "11519"
						},
						{
							"skuId": 7649067,
							"name": "爱国者（aigo）月光宝盒T20精艺版 黑色 台式电脑机箱（支持ATX大板/钢化玻璃侧板/360冷排/竞技投射灯）",
							"price": "259.00",
							"num": "1",
							"imagePath": "jfs/t20383/253/1013419334/217969/5a4d175b/5b1e1e28N091455cb.jpg",
							"state": "1",
							"category": 687,
							"categoryName": "机箱",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 387247,
							"name": "酷冷至尊（CoolerMaster）额定450W GX450游戏电脑电源（80PLUS铜牌/全日系电容/五年质保/台式机电源）",
							"price": "329.00",
							"num": "1",
							"imagePath": "jfs/t4318/338/2649781349/121341/54728df/58d4ddfdN51e2037b.jpg",
							"state": "1",
							"category": 691,
							"categoryName": "电源",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 2771147,
							"name": "酷冷至尊(Cooler Master) T400i CPU 散热(支持I9 2066平台/4热管/ PWM温控/LED风扇/背锁扣具/直触热管)",
							"price": "89.90",
							"num": "1",
							"imagePath": "jfs/t5719/255/1740733584/348144/c373eb36/592926b7Nea3d17fd.jpg",
							"state": "1",
							"category": 682,
							"categoryName": "散热",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 2357091,
							"name": "三星（SAMSUNG）27英寸1800R曲面 广视角可壁挂 HDMI高清接口 电脑液晶显示 （C27F390FHC）",
							"price": "1079.00",
							"num": "1",
							"imagePath": "jfs/t1/17100/3/1415/194637/5c121befEfda1e4b4/e7930f61a5d2c106.jpg",
							"state": "1",
							"category": 688,
							"categoryName": "显示",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
					]
				},
				{
					item: [
						{
							"skuId": 5448942,
							"name": "英特尔（Intel） i7 8700 酷睿六核 盒装CPU处理器",
							"price": "2399.00",
							"num": "1",
							"imagePath": "jfs/t19876/121/551161046/273454/946beee7/5afe4de8Nda23f166.jpg",
							"state": "1",
							"category": 678,
							"categoryName": "CPU",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "117645"
						},
						{
							"skuId": 7047293,
							"name": "微星（MSI）B360 GAMING PRO CARBON暗黑板 电竞“吃鸡”主板（Intel B360/LGA 1151）",
							"price": "899.00",
							"num": "1",
							"imagePath": "jfs/t17668/235/1823750682/292259/f23535e/5ad840f0N2013269a.jpg",
							"state": "1",
							"category": 681,
							"categoryName": "主板",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 3295240,
							"name": "微星（MSI）GeForce GTX 1060 GAMING X 6G 1594-1809MHZ GDDR5 192BIT PCI-E 3.0 旗舰红龙 吃鸡显卡",
							"price": "1899.00",
							"num": "1",
							"imagePath": "jfs/t18442/74/2071557420/119185/e4e3d236/5ae3f0e5N46bba1d8.jpg",
							"state": "1",
							"category": 679,
							"categoryName": "显卡",
							"promo": "",
							"stock": 0,
							"attr": [

							],
							"score": "157607"
						},
						{
							"skuId": 3828405,
							"name": "芝奇（G.SKILL）16GB(8G×2)套装 DDR4 3200频率 台式机内存条 幻光戟RGB灯条(C16)",
							"price": "899.00",
							"num": "1",
							"imagePath": "jfs/t3082/185/5978515992/258515/dc6beac1/589a7190N62b6ee82.jpg",
							"state": "1",
							"category": 680,
							"categoryName": "内存",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "10819"
						},
						{
							"skuId": 2054175,
							"name": "西部数据(WD)蓝盘 2TB SATA6Gb/s 64MB 台式机械硬盘(WD20EZRZ)",
							"price": "399.00",
							"num": "1",
							"imagePath": "jfs/t5821/12/8399628501/172373/95b2b77d/597b07b6N443d5894.jpg",
							"state": "1",
							"category": 683,
							"categoryName": "硬盘",
							"promo": "",
							"stock": 0,
							"attr": [

							],
							"score": "2418"
						},
						{
							"skuId": 6212482,
							"name": "三星（SAMSUNG）500GB SSD固态硬盘 SATA3.0接口 860 EVO（MZ-76E500B）",
							"price": "499.00",
							"num": "1",
							"imagePath": "jfs/t25555/356/1975137885/120964/18425cab/5bc056a7N02e342e6.jpg",
							"state": "1",
							"category": 11303,
							"categoryName": "SSD",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "12435"
						},
						{
							"skuId": 4088837,
							"name": "酷冷至尊（coolermaster）MasterBox Lite 5(睿)台式电脑主机中塔机箱(ATX主板/前镜面板/侧透/独立电源仓)",
							"price": "299.00",
							"num": "1",
							"imagePath": "jfs/t1/31657/27/3559/298951/5c764263E055ff9a6/5debbb440bcf140d.jpg",
							"state": "1",
							"category": 687,
							"categoryName": "机箱",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 1852502,
							"name": "酷冷至尊（CoolerMaster）额定550W V550游戏电源（80PLUS金牌/全模组/全日系电容/短机身/可背线/质保五年）",
							"price": "549.00",
							"num": "1",
							"imagePath": "jfs/t4663/210/3744512175/257780/4d9c6dd3/5902f160N756b5530.jpg",
							"state": "1",
							"category": 691,
							"categoryName": "电源",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 3936189,
							"name": "酷冷至尊(Cooler Master)冰神B120I CPU水冷散热(支持I9 2066平台/双腔水泵/微流道设计/均衡型风扇)",
							"price": "259.00",
							"num": "1",
							"imagePath": "jfs/t3148/306/7923212959/331965/b1bb9341/58be18fdNedb0c61f.jpg",
							"state": "1",
							"category": 682,
							"categoryName": "散热",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 4606144,
							"name": "三星（SAMSUNG）27英寸2K/QHD高分 1800R曲率量子点技术 HDMI/DP全高清接口 电脑显示（C27H711QEC）",
							"price": "1999.00",
							"num": "1",
							"imagePath": "jfs/t1/17191/29/5362/354762/5c3c0855E405dc587/85a6327e11c7597f.jpg",
							"state": "1",
							"category": 688,
							"categoryName": "显示",
							"promo": "满1000-100",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
					]
				},
				{
					item: [
						{
							"skuId": 5008395,
							"name": "英特尔（Intel） i7 8700K 酷睿六核 盒装CPU处理器",
							"price": "2649.00",
							"num": "1",
							"imagePath": "jfs/t18448/200/2532654839/268503/b46a717e/5afe4d0cN10f96d55.jpg",
							"state": "1",
							"category": 678,
							"categoryName": "CPU",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "124332"
						},
						{
							"skuId": 100000561582,
							"name": "玩家国度（ROG）ROG STRIX Z390-E GAMING 主板 支持intel9代CPU 9600K/9700K/9900K（Intel Z390/LGA 1151）",
							"price": "2149.00",
							"num": "1",
							"imagePath": "jfs/t1/9314/13/1792/332115/5bcfe826E29b20b90/7275f36216a850f2.jpg",
							"state": "1",
							"category": 681,
							"categoryName": "主板",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 100000913459,
							"name": "华硕（ASUS）ROG-STRIX-GeForce RTX2070-O8G-GAMING 1410-1845MHz 14000MHz猛禽游戏显卡",
							"price": "4599.00",
							"num": "1",
							"imagePath": "jfs/t1/19595/34/13254/367733/5c9dcf02E392c1f78/3a7085cbc41789da.jpg",
							"state": "1",
							"category": 679,
							"categoryName": "显卡",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "254988"
						},
						{
							"skuId": 2132492,
							"name": "美商海盗船(USCORSAIR) 统治者铂金 DDR4 3000 32GB(16Gx2条) 台式机内存",
							"price": "1999.00",
							"num": "1",
							"imagePath": "jfs/t16549/225/269013558/139377/c5e8beab/5a2e44a8N49aa414c.jpg",
							"state": "1",
							"category": 680,
							"categoryName": "内存",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "10232"
						},
						{
							"skuId": 2031266,
							"name": "西部数据(WD)蓝盘 4TB SATA6Gb/s 64MB 台式机械硬盘(WD40EZRZ)",
							"price": "629.00",
							"num": "1",
							"imagePath": "jfs/t1/24222/39/14509/160110/5cb6f621Ecda71e84/e169a826128780b4.jpg",
							"state": "1",
							"category": 683,
							"categoryName": "硬盘",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "3049"
						},
						{
							"skuId": 7234518,
							"name": "三星（SAMSUNG）500GB SSD固态硬盘 M.2接口(NVMe协议) 970 EVO（MZ-V7E500BW）",
							"price": "989.00",
							"num": "1",
							"imagePath": "jfs/t27469/245/1079100394/139978/af9b4877/5bc056d3Ndbdf20c4.jpg",
							"state": "1",
							"category": 11303,
							"categoryName": "SSD",
							"promo": "",
							"stock": 0,
							"attr": [

							],
							"score": "51734"
						},
						{
							"skuId": 3738233,
							"name": "美商海盗船(USCorsair) 中塔游戏机箱 570X RGB 黑色游戏机箱 (附送RGB风扇\\四面侧透\\炫彩灯光\\支持水冷)",
							"price": "1349.00",
							"num": "1",
							"imagePath": "jfs/t3760/174/2241525917/195273/b1b378fa/5844c33eNe662ad72.jpg",
							"state": "1",
							"category": 687,
							"categoryName": "机箱",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 6544246,
							"name": "美商海盗船(USCorsair) 静音 高功率 游戏电源推荐 额定650W RM650x（80PLUS金牌/全日系电容）",
							"price": "749.00",
							"num": "1",
							"imagePath": "jfs/t18598/176/2378913422/157182/ce857682/5af2f1abN8966fcdf.jpg",
							"state": "1",
							"category": 691,
							"categoryName": "电源",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 6048811,
							"name": "美商海盗船 (USCORSAIR) H115i PRO RGB 一体式CPU水冷散热 280MM冷排 双140磁悬浮风扇 五年质保",
							"price": "1199.00",
							"num": "1",
							"imagePath": "jfs/t12997/311/2218471516/107380/2ddb6b72/5a3b703bN85f6efc9.jpg",
							"state": "1",
							"category": 682,
							"categoryName": "散热",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 4585499,
							"name": "戴尔（DELL）U2718Q 27英寸4K超高清四边微边框旋转升降IPS屏 HDR 爱眼滤蓝光 99%sRGB 个人商务 电脑显示",
							"price": "3888.00",
							"num": "1",
							"imagePath": "jfs/t16918/140/1613200607/361797/2d840593/5ad07046Na3740fb1.jpg",
							"state": "1",
							"category": 688,
							"categoryName": "显示",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
					]
				}
			],
			'6': [
				{
					item: [
						{
							"skuId": 6405178,
							"name": "英特尔（Intel）i5 8500 酷睿六核 盒装CPU处理器",
							"price": "1699.00",
							"num": "1",
							"imagePath": "jfs/t14434/196/2670938343/2466623/73c579f6/5ab1f616N196cd6ca.jpg",
							"state": "1",
							"category": 678,
							"categoryName": "CPU",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "78091"
						},
						{
							"skuId": 6957643,
							"name": "华硕 ASUS TUF B360M-PLUS GAMING 电竞特工 主板 吃鸡 国民电竞游戏主板（Intel B360/LGA 1151）",
							"price": "679.00",
							"num": "1",
							"imagePath": "jfs/t16768/227/1229761109/654711/a5fb1828/5ac1dc2bNf0092642.jpg",
							"state": "1",
							"category": 681,
							"categoryName": "主板",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 3281156,
							"name": "索泰(ZOTAC)GTX1060 X-GAMING OC显卡自营/台式机游戏吃鸡独立显卡6GD5/1569-1784/8008MHz",
							"price": "1499.00",
							"num": "1",
							"imagePath": "jfs/t6988/285/2115461466/171490/7f426059/59896cadN7c170bf7.jpg",
							"state": "1",
							"category": 679,
							"categoryName": "显卡",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "156831"
						},
						{
							"skuId": 2121097,
							"name": "金士顿(Kingston) 8GB DDR4 2400 台式机内存 骇客神条 Fury雷电系列",
							"price": "295.00",
							"num": "1",
							"imagePath": "jfs/t12451/166/1227532677/90377/6155f6a0/5a1cd523N27f9b8a2.jpg",
							"state": "1",
							"category": 680,
							"categoryName": "内存",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "9489"
						},
						{
							"skuId": 3843702,
							"name": "希捷(Seagate)1TB 64MB 7200RPM 台式机机械硬盘 SATA接口 希捷酷鱼BarraCuda系列(ST1000DM010)",
							"price": "288.00",
							"num": "1",
							"imagePath": "jfs/t1/10148/11/13551/296326/5c8204d2E52b3e010/88c623bdda0ef7ab.jpg",
							"state": "1",
							"category": 683,
							"categoryName": "硬盘",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "2782"
						},
						{
							"skuId": 3807143,
							"name": "金士顿(Kingston) 120GB SSD固态硬盘 SATA3.0接口 A400系列",
							"price": "149.00",
							"num": "1",
							"imagePath": "jfs/t12394/314/1195431763/171521/651287d/5a1cd6f5N1d1a3bdb.jpg",
							"state": "1",
							"category": 11303,
							"categoryName": "SSD",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "8728"
						},
						{
							"skuId": 874610,
							"name": "先马（SAMA） 领秀 标准版 全塔机箱（210宽度/前板双风扇位/8PCI扩展槽）",
							"price": "279.00",
							"num": "1",
							"imagePath": "jfs/t15928/43/21562484/221091/2043eea1/5a24f336N5a763e02.jpg",
							"state": "1",
							"category": 687,
							"categoryName": "机箱",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 251340,
							"name": "安钛克(Antec)VP450 台式机电脑主机机箱电源450W（48万好评VP系列/静音风扇/2年换新只换不修）",
							"price": "229.00",
							"num": "1",
							"imagePath": "jfs/t4207/233/150888454/169946/53822a3d/58aff154Nef5a9575.jpg",
							"state": "1",
							"category": 691,
							"categoryName": "电源",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 598827,
							"name": "九州风神（DEEPCOOL） 玄冰400 CPU散热（多平台/支持AM4/4热管/智能温控/发蓝光/12CM风扇/附带硅脂）",
							"price": "88.00",
							"num": "1",
							"imagePath": "jfs/t3295/32/2226662883/548742/e3a245d6/57ddfdd0N664c6861.jpg",
							"state": "1",
							"category": 682,
							"categoryName": "散热",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 2168838,
							"name": "AOC 23.6英寸 焕新二代PLS屏 1.6mm窄边框P2491VWHE/BW 广视角 爱眼不闪屏电脑显示（HDMI版）",
							"price": "729.00",
							"num": "1",
							"imagePath": "jfs/t18580/202/1754635171/229093/35d74487/5ad85152N79227d0d.jpg",
							"state": "1",
							"category": 688,
							"categoryName": "显示",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
					]
				},
				{
					item: [
						{
							"skuId": 5448942,
							"name": "英特尔（Intel） i7 8700 酷睿六核 盒装CPU处理器",
							"price": "2399.00",
							"num": "1",
							"imagePath": "jfs/t19876/121/551161046/273454/946beee7/5afe4de8Nda23f166.jpg",
							"state": "1",
							"category": 678,
							"categoryName": "CPU",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "117645"
						},
						{
							"skuId": 5194045,
							"name": "微星（MSI）Z370 KRAIT GAMING银环蛇 主板（Intel Z370/LGA 1151）",
							"price": "暂无报价",
							"num": "1",
							"imagePath": "jfs/t16885/296/665743759/260850/165e03ef/5a9f4887Na5c2beb7.jpg",
							"state": "0",
							"category": 681,
							"categoryName": "主板",
							"promo": "",
							"stock": 0,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 8601922,
							"name": "华硕（ASUS）ROG STRIX-GTX1060-A6G-GAMING  猛禽系列游戏吃鸡”显卡",
							"price": "暂无报价",
							"num": "1",
							"imagePath": "jfs/t1/6195/36/7297/170586/5be2a283Eae23ff6f/126711aaa02ad697.jpg",
							"state": "0",
							"category": 679,
							"categoryName": "显卡",
							"promo": "",
							"stock": 0,
							"attr": [

							],
							"score": "153103"
						},
						{
							"skuId": 3828405,
							"name": "芝奇（G.SKILL）16GB(8G×2)套装 DDR4 3200频率 台式机内存条 幻光戟RGB灯条(C16)",
							"price": "899.00",
							"num": "1",
							"imagePath": "jfs/t3082/185/5978515992/258515/dc6beac1/589a7190N62b6ee82.jpg",
							"state": "1",
							"category": 680,
							"categoryName": "内存",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "10819"
						},
						{
							"skuId": 3356012,
							"name": "希捷(SEAGATE)酷鱼系列 2TB 7200转64M SATA3 台式机机械硬盘(ST2000DM006)",
							"price": "419.00",
							"num": "1",
							"imagePath": "jfs/t1/10057/9/13515/328145/5c8205ffE89ab67fe/7c6f04e5c4c18c72.jpg",
							"state": "1",
							"category": 683,
							"categoryName": "硬盘",
							"promo": "",
							"stock": 0,
							"attr": [

							],
							"score": "2738"
						},
						{
							"skuId": 6287165,
							"name": "三星（SAMSUNG）250GB SSD固态硬盘 SATA3.0接口 860 EVO（MZ-76E250B）",
							"price": "329.00",
							"num": "1",
							"imagePath": "jfs/t25027/279/1994410610/120964/18425cab/5bc05552N2aa18fd8.jpg",
							"state": "1",
							"category": 11303,
							"categoryName": "SSD",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "11519"
						},
						{
							"skuId": 5724574,
							"name": "安钛克(Antec)龙焰 中塔钢化玻璃侧透/RGB/支持ATX-MATX-ITX主板/长显卡/280水冷电脑机箱 台式机游戏主机箱",
							"price": "269.00",
							"num": "1",
							"imagePath": "jfs/t1/3760/2/589/483890/5b921f3eE337a5527/0c01ed9fd050107a.jpg",
							"state": "1",
							"category": 687,
							"categoryName": "机箱",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 3743889,
							"name": "长城（GreatWall）额定550W G5全模组电脑电源（80PLUS铜牌/12V大电流/DC-DC/三芯片精准控制/五年质保）",
							"price": "379.00",
							"num": "1",
							"imagePath": "jfs/t1/1018/30/11386/113573/5bcec39eE6a31814e/ec68955394f3627e.jpg",
							"state": "1",
							"category": 691,
							"categoryName": "电源",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 4567820,
							"name": "酷冷至尊(Cooler Master)冰神B240 CPU水冷散热(支持I9 2066、AM4/双腔水泵/微流道设计/均衡型风扇)",
							"price": "369.00",
							"num": "1",
							"imagePath": "jfs/t3100/179/7970533158/280859/f34a1305/58be1869N064232e9.jpg",
							"state": "1",
							"category": 682,
							"categoryName": "散热",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 4606144,
							"name": "三星（SAMSUNG）27英寸2K/QHD高分 1800R曲率量子点技术 HDMI/DP全高清接口 电脑显示（C27H711QEC）",
							"price": "1999.00",
							"num": "1",
							"imagePath": "jfs/t1/17191/29/5362/354762/5c3c0855E405dc587/85a6327e11c7597f.jpg",
							"state": "1",
							"category": 688,
							"categoryName": "显示",
							"promo": "满1000-100",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
					]
				},
				{
					item: [
						{
							"skuId": 5008395,
							"name": "英特尔（Intel） i7 8700K 酷睿六核 盒装CPU处理器",
							"price": "2649.00",
							"num": "1",
							"imagePath": "jfs/t18448/200/2532654839/268503/b46a717e/5afe4d0cN10f96d55.jpg",
							"state": "1",
							"category": 678,
							"categoryName": "CPU",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "124332"
						},
						{
							"skuId": 5233751,
							"name": "华硕（ASUS）PRIME Z370-A 主板（Intel Z370/LGA 1151）",
							"price": "1849.00",
							"num": "1",
							"imagePath": "jfs/t19312/211/374140508/602490/ba66331f/5a6ee0e8N5e4e0d8b.jpg",
							"state": "1",
							"category": 681,
							"categoryName": "主板",
							"promo": "",
							"stock": 0,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 100000913459,
							"name": "华硕（ASUS）ROG-STRIX-GeForce RTX2070-O8G-GAMING 1410-1845MHz 14000MHz猛禽游戏显卡",
							"price": "4599.00",
							"num": "1",
							"imagePath": "jfs/t1/19595/34/13254/367733/5c9dcf02E392c1f78/3a7085cbc41789da.jpg",
							"state": "1",
							"category": 679,
							"categoryName": "显卡",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "254988"
						},
						{
							"skuId": 1990572,
							"name": "美商海盗船(USCORSAIR) 复仇者LPX DDR4 3000 32GB(16Gx2条) 台式机内存",
							"price": "1399.00",
							"num": "1",
							"imagePath": "jfs/t16300/97/277253020/95781/d0dd0396/5a2e3feeN97ed6143.jpg",
							"state": "1",
							"category": 680,
							"categoryName": "内存",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "10242"
						},
						{
							"skuId": 2031266,
							"name": "西部数据(WD)蓝盘 4TB SATA6Gb/s 64MB 台式机械硬盘(WD40EZRZ)",
							"price": "629.00",
							"num": "1",
							"imagePath": "jfs/t1/24222/39/14509/160110/5cb6f621Ecda71e84/e169a826128780b4.jpg",
							"state": "1",
							"category": 683,
							"categoryName": "硬盘",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "3049"
						},
						{
							"skuId": 7234518,
							"name": "三星（SAMSUNG）500GB SSD固态硬盘 M.2接口(NVMe协议) 970 EVO（MZ-V7E500BW）",
							"price": "989.00",
							"num": "1",
							"imagePath": "jfs/t27469/245/1079100394/139978/af9b4877/5bc056d3Ndbdf20c4.jpg",
							"state": "1",
							"category": 11303,
							"categoryName": "SSD",
							"promo": "",
							"stock": 0,
							"attr": [

							],
							"score": "51734"
						},
						{
							"skuId": 3595249,
							"name": "分形工艺（Fractal Design）Define R5 限量冰金版白色 侧透 静音机箱(标配风扇/模块化/支持水冷散热)",
							"price": "899.00",
							"num": "1",
							"imagePath": "jfs/t24487/156/718467594/154812/844ec769/5b3e51a7N289f1374.jpg",
							"state": "1",
							"category": 687,
							"categoryName": "机箱",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 6757755,
							"name": "美商海盗船（USCorsair）额定750W RM750x 全模组电脑电源（80PLUS金牌/低噪音 /十年质保/全日系电容）",
							"price": "849.00",
							"num": "1",
							"imagePath": "jfs/t17680/157/2389293851/155605/bb6ea3df/5af2f1c0Nd4b4211a.jpg",
							"state": "1",
							"category": 691,
							"categoryName": "电源",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 4567820,
							"name": "酷冷至尊(Cooler Master)冰神B240 CPU水冷散热(支持I9 2066、AM4/双腔水泵/微流道设计/均衡型风扇)",
							"price": "369.00",
							"num": "1",
							"imagePath": "jfs/t3100/179/7970533158/280859/f34a1305/58be1869N064232e9.jpg",
							"state": "1",
							"category": 682,
							"categoryName": "散热",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 5239431,
							"name": "华硕(ASUS) ROG玩家国度 PG27VQ 27英寸显示屏 2K显示 165hz G-Sync 曲屏电脑显示自营 电竞显示",
							"price": "4898.00",
							"num": "1",
							"imagePath": "jfs/t1/16063/3/5625/1164989/5c3f0d48E1226d58d/de236143d7c05d57.jpg",
							"state": "1",
							"category": 688,
							"categoryName": "显示",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
					]
				}
			],
			'7': [
				{
					item: [
						{
							"skuId": 6405178,
							"name": "英特尔（Intel）i5 8500 酷睿六核 盒装CPU处理器",
							"price": "1699.00",
							"num": "1",
							"imagePath": "jfs/t14434/196/2670938343/2466623/73c579f6/5ab1f616N196cd6ca.jpg",
							"state": "1",
							"category": 678,
							"categoryName": "CPU",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "78091"
						},
						{
							"skuId": 6070997,
							"name": "微星（MSI）Z370M MORTAR主板 （Intel Z370/LGA 1151）",
							"price": "暂无报价",
							"num": "1",
							"imagePath": "jfs/t15718/141/1466076504/278781/d3d1b002/5a532d1eN2c49222d.jpg",
							"state": "0",
							"category": 681,
							"categoryName": "主板",
							"promo": "",
							"stock": 0,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 3977224,
							"name": "微星（MSI）GeForce GTX 1050 Ti GAMING X 4G 1290-1493MHZ 128BIT GDDR5 PCI-E 3.0 旗舰红龙 吃鸡显卡",
							"price": "1149.00",
							"num": "1",
							"imagePath": "jfs/t9322/52/226672575/470550/1fa29e4d/59a3cf11N22e355fd.jpg",
							"state": "1",
							"category": 679,
							"categoryName": "显卡",
							"promo": "满1000-100",
							"stock": 1,
							"attr": [

							],
							"score": "92057"
						},
						{
							"skuId": 2121093,
							"name": "金士顿(Kingston) 16GB(8G×2)套装 DDR4 2400 台式机内存 骇客神条 Fury雷电系列",
							"price": "649.00",
							"num": "1",
							"imagePath": "jfs/t12622/266/1207944116/162945/b109dd26/5a1cd53dN2b9943f0.jpg",
							"state": "1",
							"category": 680,
							"categoryName": "内存",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "9489"
						},
						{
							"skuId": 675971,
							"name": "西部数据(WD)蓝盘 1TB SATA6Gb/s 7200转64MB 台式机械硬盘(WD10EZEX)",
							"price": "279.00",
							"num": "1",
							"imagePath": "jfs/t1/20370/18/12959/151700/5c9b3166Ed15a774c/a1d888887e479860.jpg",
							"state": "1",
							"category": 683,
							"categoryName": "硬盘",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "2970"
						},
						{
							"skuId": 4311178,
							"name": "金士顿(Kingston) 240GB SSD固态硬盘 SATA3.0接口 A400系列",
							"price": "229.00",
							"num": "1",
							"imagePath": "jfs/t12391/320/1216333188/171521/651287d/5a1cd70fN72ba28f5.jpg",
							"state": "1",
							"category": 11303,
							"categoryName": "SSD",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "10321"
						},
						{
							"skuId": 4088837,
							"name": "酷冷至尊（coolermaster）MasterBox Lite 5(睿)台式电脑主机中塔机箱(ATX主板/前镜面板/侧透/独立电源仓)",
							"price": "299.00",
							"num": "1",
							"imagePath": "jfs/t1/31657/27/3559/298951/5c764263E055ff9a6/5debbb440bcf140d.jpg",
							"state": "1",
							"category": 687,
							"categoryName": "机箱",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 387247,
							"name": "酷冷至尊（CoolerMaster）额定450W GX450游戏电脑电源（80PLUS铜牌/全日系电容/五年质保/台式机电源）",
							"price": "329.00",
							"num": "1",
							"imagePath": "jfs/t4318/338/2649781349/121341/54728df/58d4ddfdN51e2037b.jpg",
							"state": "1",
							"category": 691,
							"categoryName": "电源",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 2771147,
							"name": "酷冷至尊(Cooler Master) T400i CPU 散热(支持I9 2066平台/4热管/ PWM温控/LED风扇/背锁扣具/直触热管)",
							"price": "89.90",
							"num": "1",
							"imagePath": "jfs/t5719/255/1740733584/348144/c373eb36/592926b7Nea3d17fd.jpg",
							"state": "1",
							"category": 682,
							"categoryName": "散热",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 2683269,
							"name": "ZEOL S242 23.8英寸 四边微边框 旋转升降 IPS屏 出厂色彩校准 99%sRGB  24 液晶电脑显示  HDMI接口",
							"price": "1199.00",
							"num": "1",
							"imagePath": "jfs/t1/26458/4/11107/155697/5c9f637eEe674af3c/60694237e37b725f.jpg",
							"state": "1",
							"category": 688,
							"categoryName": "显示",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
					]
				},
				{
					item: [
						{
							"skuId": 5448942,
							"name": "英特尔（Intel） i7 8700 酷睿六核 盒装CPU处理器",
							"price": "2399.00",
							"num": "1",
							"imagePath": "jfs/t19876/121/551161046/273454/946beee7/5afe4de8Nda23f166.jpg",
							"state": "1",
							"category": 678,
							"categoryName": "CPU",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "117645"
						},
						{
							"skuId": 5194045,
							"name": "微星（MSI）Z370 KRAIT GAMING银环蛇 主板（Intel Z370/LGA 1151）",
							"price": "暂无报价",
							"num": "1",
							"imagePath": "jfs/t16885/296/665743759/260850/165e03ef/5a9f4887Na5c2beb7.jpg",
							"state": "0",
							"category": 681,
							"categoryName": "主板",
							"promo": "",
							"stock": 0,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 3295240,
							"name": "微星（MSI）GeForce GTX 1060 GAMING X 6G 1594-1809MHZ GDDR5 192BIT PCI-E 3.0 旗舰红龙 吃鸡显卡",
							"price": "1899.00",
							"num": "1",
							"imagePath": "jfs/t18442/74/2071557420/119185/e4e3d236/5ae3f0e5N46bba1d8.jpg",
							"state": "1",
							"category": 679,
							"categoryName": "显卡",
							"promo": "",
							"stock": 0,
							"attr": [

							],
							"score": "157607"
						},
						{
							"skuId": 2918471,
							"name": "金士顿(Kingston) 16GB(8G×2)套装 DDR4 2666 台式机内存 骇客神条 Fury雷电系列",
							"price": "629.00",
							"num": "1",
							"imagePath": "jfs/t21139/212/2295950665/163364/e5896307/5b4eb32bN5e65f496.jpg",
							"state": "1",
							"category": 680,
							"categoryName": "内存",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "9861"
						},
						{
							"skuId": 6856662,
							"name": "希捷(Seagate)2TB 256MB 7200RPM 台式机机械硬盘 SATA接口 希捷酷鱼BarraCuda系列(ST2000DM008)",
							"price": "378.00",
							"num": "1",
							"imagePath": "jfs/t1/10547/33/13375/311370/5c820591Ed263955e/e57a3c0bc6a49ea3.jpg",
							"state": "1",
							"category": 683,
							"categoryName": "硬盘",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "4290"
						},
						{
							"skuId": 6212482,
							"name": "三星（SAMSUNG）500GB SSD固态硬盘 SATA3.0接口 860 EVO（MZ-76E500B）",
							"price": "499.00",
							"num": "1",
							"imagePath": "jfs/t25555/356/1975137885/120964/18425cab/5bc056a7N02e342e6.jpg",
							"state": "1",
							"category": 11303,
							"categoryName": "SSD",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "12435"
						},
						{
							"skuId": 2352321,
							"name": "美商海盗船（USCorsair）SPEC-ALPHA  黑红色 中塔游戏机箱（侧透/支持ATX主板/24CM水冷排/38CM显卡）",
							"price": "499.00",
							"num": "1",
							"imagePath": "jfs/t1921/86/2195296604/87081/27e10763/56c53f3eN8e62cfd4.jpg",
							"state": "1",
							"category": 687,
							"categoryName": "机箱",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 7408072,
							"name": "安钛克(Antec)VP500铜牌 台式机电脑主机机箱电源500W (48万好评VP系列/静音风扇/3年换新只换不修)",
							"price": "299.00",
							"num": "1",
							"imagePath": "jfs/t23353/316/1221383788/407679/d9ee9401/5b56ebfeN2e5a8b59.jpg",
							"state": "1",
							"category": 691,
							"categoryName": "电源",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 689273,
							"name": "九州风神 （DEEPCOOL）大霜塔CPU散热(双塔/风冷/支持AM4/2066/多平台/6热管/双LED风扇/附带硅脂)",
							"price": "219.00",
							"num": "1",
							"imagePath": "g13/M0A/08/0D/rBEhVFKYAS4IAAAAAAOrwk7RcRoAAGHLgKgLaIAA6va129.jpg",
							"state": "1",
							"category": 682,
							"categoryName": "散热",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 3916601,
							"name": "AOC AGON 爱攻II AG272FCX 27英寸高清 吃鸡 144Hz刷新 1800R曲率 ΔE<3 全接口游戏电竞曲面显示 绝地求生",
							"price": "1798.00",
							"num": "1",
							"imagePath": "jfs/t1/26778/35/13806/411186/5ca1ce12E378cb3b1/0c007ad714c6144c.jpg",
							"state": "1",
							"category": 688,
							"categoryName": "显示",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
					]
				},
				{
					item: [
						{
							"skuId": 5008395,
							"name": "英特尔（Intel） i7 8700K 酷睿六核 盒装CPU处理器",
							"price": "2649.00",
							"num": "1",
							"imagePath": "jfs/t18448/200/2532654839/268503/b46a717e/5afe4d0cN10f96d55.jpg",
							"state": "1",
							"category": 678,
							"categoryName": "CPU",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "124332"
						},
						{
							"skuId": 100000542145,
							"name": "华硕（ASUS）PRIME Z390-A 主板 大师系列 支持intel9代CPU 9600K/9700K/9900K（Intel Z390/LGA 1151）",
							"price": "1679.00",
							"num": "1",
							"imagePath": "jfs/t1/23116/27/14243/692030/5ca5bee3E69cde2ce/48de2902725295ba.jpg",
							"state": "1",
							"category": 681,
							"categoryName": "主板",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 100000971956,
							"name": "英伟达（NVIDIA） GeForce RTX 2070 Founders Edition",
							"price": "4399.00",
							"num": "1",
							"imagePath": "jfs/t25501/62/2221711440/192566/8d0fc130/5bc55eb6N45cf0118.jpg",
							"state": "1",
							"category": 679,
							"categoryName": "显卡",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "269826"
						},
						{
							"skuId": 3828405,
							"name": "芝奇（G.SKILL）16GB(8G×2)套装 DDR4 3200频率 台式机内存条 幻光戟RGB灯条(C16)",
							"price": "899.00",
							"num": "1",
							"imagePath": "jfs/t3082/185/5978515992/258515/dc6beac1/589a7190N62b6ee82.jpg",
							"state": "1",
							"category": 680,
							"categoryName": "内存",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "10819"
						},
						{
							"skuId": 3682523,
							"name": "希捷(SEAGATE)酷鹰系列 4TB 5900转64M SATA3 监控级硬盘(ST4000VX007)",
							"price": "719.00",
							"num": "1",
							"imagePath": "jfs/t1/30634/37/6934/299744/5c920987E2a8a79c2/9a59d8963a5c43f6.jpg",
							"state": "1",
							"category": 683,
							"categoryName": "硬盘",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "3724"
						},
						{
							"skuId": 7408611,
							"name": "金士顿(Kingston) 480GB SSD固态硬盘 M.2接口(SATA总线) UV500系列",
							"price": "479.00",
							"num": "1",
							"imagePath": "jfs/t24325/217/1049702229/115781/d5baa5f/5b4eaf04N89864b7c.jpg",
							"state": "1",
							"category": 11303,
							"categoryName": "SSD",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "12131"
						},
						{
							"skuId": 1786887,
							"name": "酷冷至尊(CoolerMaster)MasterCasePro5 模组化中塔机箱(ATX主板/钢化玻璃侧板/USB3.0/三个14CM无光风扇)",
							"price": "699.00",
							"num": "1",
							"imagePath": "jfs/t14524/65/2261420593/370302/c1ef34f4/5a77efccN98effec0.jpg",
							"state": "1",
							"category": 687,
							"categoryName": "机箱",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 1852511,
							"name": "酷冷至尊（CoolerMaster）额定650W V650电脑电源（80Plus金牌/全模组/全日系电容/质保五年/台式机电源）",
							"price": "699.00",
							"num": "1",
							"imagePath": "jfs/t5548/156/588184289/258657/2ea8249/5902f256N7f76f764.jpg",
							"state": "1",
							"category": 691,
							"categoryName": "电源",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 3936189,
							"name": "酷冷至尊(Cooler Master)冰神B120I CPU水冷散热(支持I9 2066平台/双腔水泵/微流道设计/均衡型风扇)",
							"price": "259.00",
							"num": "1",
							"imagePath": "jfs/t3148/306/7923212959/331965/b1bb9341/58be18fdNedb0c61f.jpg",
							"state": "1",
							"category": 682,
							"categoryName": "散热",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 5239431,
							"name": "华硕(ASUS) ROG玩家国度 PG27VQ 27英寸显示屏 2K显示 165hz G-Sync 曲屏电脑显示自营 电竞显示",
							"price": "4898.00",
							"num": "1",
							"imagePath": "jfs/t1/16063/3/5625/1164989/5c3f0d48E1226d58d/de236143d7c05d57.jpg",
							"state": "1",
							"category": 688,
							"categoryName": "显示",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
					]
				}
			],
			'8': [
				{
					item: [
						{
							"skuId": 5008447,
							"name": "英特尔（Intel） i3 8100 酷睿四核 盒装CPU处理器",
							"price": "999.00",
							"num": "1",
							"imagePath": "jfs/t19888/308/840166793/136764/a710b526/5b0cf96bN60ae5bae.jpg",
							"state": "1",
							"category": 678,
							"categoryName": "CPU",
							"promo": "",
							"stock": 0,
							"attr": [

							],
							"score": "51527"
						},
						{
							"skuId": 6833426,
							"name": "微星（MSI）B360M MORTAR迫击炮 电竞“吃鸡”主板（Intel B360/LGA 1151）",
							"price": "669.00",
							"num": "1",
							"imagePath": "jfs/t18583/201/1051190495/305673/5e738c48/5ab9f56eN6927a03a.jpg",
							"state": "1",
							"category": 681,
							"categoryName": "主板",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 4055764,
							"name": "技嘉(GIGABYTE)GeForce GTX 1050 OC 1379-1493MHz/7008MHz 2G/128bit游戏显卡",
							"price": "899.00",
							"num": "1",
							"imagePath": "jfs/t18025/202/870248637/502872/6bf325a4/5aaa1687N34bd33a3.jpg",
							"state": "1",
							"category": 679,
							"categoryName": "显卡",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "80431"
						},
						{
							"skuId": 2551101,
							"name": "金士顿(Kingston) 8GB(4G×2)套装 DDR4 2400 台式机内存 骇客神条 Fury雷电系列",
							"price": "429.00",
							"num": "1",
							"imagePath": "jfs/t13774/362/1219430832/162945/b109dd26/5a1cd65bN950a241d.jpg",
							"state": "1",
							"category": 680,
							"categoryName": "内存",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "8884"
						},
						{
							"skuId": 675971,
							"name": "西部数据(WD)蓝盘 1TB SATA6Gb/s 7200转64MB 台式机械硬盘(WD10EZEX)",
							"price": "279.00",
							"num": "1",
							"imagePath": "jfs/t1/20370/18/12959/151700/5c9b3166Ed15a774c/a1d888887e479860.jpg",
							"state": "1",
							"category": 683,
							"categoryName": "硬盘",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "2970"
						},
						{
							"skuId": 1398976,
							"name": "闪迪（SanDisk）120GB SSD固态硬盘 SATA3.0接口 加强版-电脑升级核心组件｜三年质保",
							"price": "179.00",
							"num": "1",
							"imagePath": "jfs/t1/29885/18/163/220952/5c0788b5Ec4743175/cfcc84c1db47e7c2.jpg",
							"state": "1",
							"category": 11303,
							"categoryName": "SSD",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "9014"
						},
						{
							"skuId": 3303012,
							"name": "爱国者（aigo）炫影黑京东专供版 电脑机箱（配3把发光风扇/支持ATX主板/蜂窝玻璃面板/背线）",
							"price": "229.00",
							"num": "1",
							"imagePath": "jfs/t1/10979/12/198/438043/5bd9a7e0Efb7369a8/8b6fda6a4a7d78b0.jpg",
							"state": "1",
							"category": 687,
							"categoryName": "机箱",
							"promo": "满199-20",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 708007,
							"name": "航嘉（Huntkey）额定400W JUMPER400电源（80PLUS白牌/主动PFC/双管正激/全电压/背部走线）",
							"price": "249.00",
							"num": "1",
							"imagePath": "jfs/t445/22/86231384/160651/b450ddfa/54094edcN42d051e2.jpg",
							"state": "1",
							"category": 691,
							"categoryName": "电源",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 695774,
							"name": "安钛克(Antec)战虎A40战斗版 CPU散热 送导热硅脂硅胶(纯铜4热管/9cm风扇/LED蓝光风扇/电脑主机箱显卡风冷",
							"price": "69.90",
							"num": "1",
							"imagePath": "jfs/t2653/274/3414412620/364002/d3a2ad4c/578c3630N3f53dda3.jpg",
							"state": "1",
							"category": 682,
							"categoryName": "散热",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 7126948,
							"name": "优派（ViewSonic）23.8英寸IPS微边框178°广视角 爱眼滤蓝不闪LED背光液晶显示 HDMI/可壁挂（VA2478-H-2）",
							"price": "688.00",
							"num": "1",
							"imagePath": "jfs/t1/30721/21/12649/240710/5cb8385dEfe444472/ceb244bedf495b59.jpg",
							"state": "1",
							"category": 688,
							"categoryName": "显示",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
					]
				},
				{
					item: [
						{
							"skuId": 6405178,
							"name": "英特尔（Intel）i5 8500 酷睿六核 盒装CPU处理器",
							"price": "1699.00",
							"num": "1",
							"imagePath": "jfs/t14434/196/2670938343/2466623/73c579f6/5ab1f616N196cd6ca.jpg",
							"state": "1",
							"category": 678,
							"categoryName": "CPU",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "78091"
						},
						{
							"skuId": 6680344,
							"name": "技嘉（GIGABYTE）B360M D3H “吃鸡”游戏主板 (Intel B360/LGA 1151)",
							"price": "669.00",
							"num": "1",
							"imagePath": "jfs/t17347/214/1293110974/472367/36c8bdc8/5ac33229N8de2b45e.jpg",
							"state": "1",
							"category": 681,
							"categoryName": "主板",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 3182191,
							"name": "华硕（ASUS）DUAL-GeForce GTX1060-O6G 1569-1809MHz  GDDR5 雪豹系列gtx1060 6g显卡",
							"price": "1799.00",
							"num": "1",
							"imagePath": "jfs/t7618/260/2068444304/347589/6a3ba180/59a687d6N3729d32f.jpg",
							"state": "1",
							"category": 679,
							"categoryName": "显卡",
							"promo": "",
							"stock": 0,
							"attr": [

							],
							"score": "153103"
						},
						{
							"skuId": 2918471,
							"name": "金士顿(Kingston) 16GB(8G×2)套装 DDR4 2666 台式机内存 骇客神条 Fury雷电系列",
							"price": "629.00",
							"num": "1",
							"imagePath": "jfs/t21139/212/2295950665/163364/e5896307/5b4eb32bN5e65f496.jpg",
							"state": "1",
							"category": 680,
							"categoryName": "内存",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "9861"
						},
						{
							"skuId": 2054175,
							"name": "西部数据(WD)蓝盘 2TB SATA6Gb/s 64MB 台式机械硬盘(WD20EZRZ)",
							"price": "399.00",
							"num": "1",
							"imagePath": "jfs/t5821/12/8399628501/172373/95b2b77d/597b07b6N443d5894.jpg",
							"state": "1",
							"category": 683,
							"categoryName": "硬盘",
							"promo": "",
							"stock": 0,
							"attr": [

							],
							"score": "2418"
						},
						{
							"skuId": 3594241,
							"name": "西部数据（WD）240GB SSD固态硬盘 SATA3.0接口 Green系列-SSD日常家用普及版｜三年质保",
							"price": "249.00",
							"num": "1",
							"imagePath": "jfs/t1/36726/10/1914/122621/5cb44a7bEa80d36dd/9553f997b4d1312a.jpg",
							"state": "1",
							"category": 11303,
							"categoryName": "SSD",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "10109"
						},
						{
							"skuId": 5724574,
							"name": "安钛克(Antec)龙焰 中塔钢化玻璃侧透/RGB/支持ATX-MATX-ITX主板/长显卡/280水冷电脑机箱 台式机游戏主机箱",
							"price": "269.00",
							"num": "1",
							"imagePath": "jfs/t1/3760/2/589/483890/5b921f3eE337a5527/0c01ed9fd050107a.jpg",
							"state": "1",
							"category": 687,
							"categoryName": "机箱",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 387247,
							"name": "酷冷至尊（CoolerMaster）额定450W GX450游戏电脑电源（80PLUS铜牌/全日系电容/五年质保/台式机电源）",
							"price": "329.00",
							"num": "1",
							"imagePath": "jfs/t4318/338/2649781349/121341/54728df/58d4ddfdN51e2037b.jpg",
							"state": "1",
							"category": 691,
							"categoryName": "电源",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 598827,
							"name": "九州风神（DEEPCOOL） 玄冰400 CPU散热（多平台/支持AM4/4热管/智能温控/发蓝光/12CM风扇/附带硅脂）",
							"price": "88.00",
							"num": "1",
							"imagePath": "jfs/t3295/32/2226662883/548742/e3a245d6/57ddfdd0N664c6861.jpg",
							"state": "1",
							"category": 682,
							"categoryName": "散热",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 3531552,
							"name": "HKC 27英寸 VA面板 144Hz电竞 1800R曲面屏 hdmi吃鸡游戏 1080p 宽屏 滤蓝光不闪屏 电脑液晶显示 G27",
							"price": "1349.00",
							"num": "1",
							"imagePath": "jfs/t1/28547/6/1371/268298/5c11b9f8Edeaa1fd1/d1ec31edbb151e36.jpg",
							"state": "1",
							"category": 688,
							"categoryName": "显示",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
					]
				},
				{
					item: [
						{
							"skuId": 6405178,
							"name": "英特尔（Intel）i5 8500 酷睿六核 盒装CPU处理器",
							"price": "1699.00",
							"num": "1",
							"imagePath": "jfs/t14434/196/2670938343/2466623/73c579f6/5ab1f616N196cd6ca.jpg",
							"state": "1",
							"category": 678,
							"categoryName": "CPU",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "78091"
						},
						{
							"skuId": 6680344,
							"name": "技嘉（GIGABYTE）B360M D3H “吃鸡”游戏主板 (Intel B360/LGA 1151)",
							"price": "669.00",
							"num": "1",
							"imagePath": "jfs/t17347/214/1293110974/472367/36c8bdc8/5ac33229N8de2b45e.jpg",
							"state": "1",
							"category": 681,
							"categoryName": "主板",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 3182191,
							"name": "华硕（ASUS）DUAL-GeForce GTX1060-O6G 1569-1809MHz  GDDR5 雪豹系列gtx1060 6g显卡",
							"price": "1799.00",
							"num": "1",
							"imagePath": "jfs/t7618/260/2068444304/347589/6a3ba180/59a687d6N3729d32f.jpg",
							"state": "1",
							"category": 679,
							"categoryName": "显卡",
							"promo": "",
							"stock": 0,
							"attr": [

							],
							"score": "153103"
						},
						{
							"skuId": 2918471,
							"name": "金士顿(Kingston) 16GB(8G×2)套装 DDR4 2666 台式机内存 骇客神条 Fury雷电系列",
							"price": "629.00",
							"num": "1",
							"imagePath": "jfs/t21139/212/2295950665/163364/e5896307/5b4eb32bN5e65f496.jpg",
							"state": "1",
							"category": 680,
							"categoryName": "内存",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "9861"
						},
						{
							"skuId": 2054175,
							"name": "西部数据(WD)蓝盘 2TB SATA6Gb/s 64MB 台式机械硬盘(WD20EZRZ)",
							"price": "399.00",
							"num": "1",
							"imagePath": "jfs/t5821/12/8399628501/172373/95b2b77d/597b07b6N443d5894.jpg",
							"state": "1",
							"category": 683,
							"categoryName": "硬盘",
							"promo": "",
							"stock": 0,
							"attr": [

							],
							"score": "2418"
						},
						{
							"skuId": 3594241,
							"name": "西部数据（WD）240GB SSD固态硬盘 SATA3.0接口 Green系列-SSD日常家用普及版｜三年质保",
							"price": "249.00",
							"num": "1",
							"imagePath": "jfs/t1/36726/10/1914/122621/5cb44a7bEa80d36dd/9553f997b4d1312a.jpg",
							"state": "1",
							"category": 11303,
							"categoryName": "SSD",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "10109"
						},
						{
							"skuId": 5724574,
							"name": "安钛克(Antec)龙焰 中塔钢化玻璃侧透/RGB/支持ATX-MATX-ITX主板/长显卡/280水冷电脑机箱 台式机游戏主机箱",
							"price": "269.00",
							"num": "1",
							"imagePath": "jfs/t1/3760/2/589/483890/5b921f3eE337a5527/0c01ed9fd050107a.jpg",
							"state": "1",
							"category": 687,
							"categoryName": "机箱",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 387247,
							"name": "酷冷至尊（CoolerMaster）额定450W GX450游戏电脑电源（80PLUS铜牌/全日系电容/五年质保/台式机电源）",
							"price": "329.00",
							"num": "1",
							"imagePath": "jfs/t4318/338/2649781349/121341/54728df/58d4ddfdN51e2037b.jpg",
							"state": "1",
							"category": 691,
							"categoryName": "电源",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 598827,
							"name": "九州风神（DEEPCOOL） 玄冰400 CPU散热（多平台/支持AM4/4热管/智能温控/发蓝光/12CM风扇/附带硅脂）",
							"price": "88.00",
							"num": "1",
							"imagePath": "jfs/t3295/32/2226662883/548742/e3a245d6/57ddfdd0N664c6861.jpg",
							"state": "1",
							"category": 682,
							"categoryName": "散热",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 3531552,
							"name": "HKC 27英寸 VA面板 144Hz电竞 1800R曲面屏 hdmi吃鸡游戏 1080p 宽屏 滤蓝光不闪屏 电脑液晶显示 G27",
							"price": "1349.00",
							"num": "1",
							"imagePath": "jfs/t1/28547/6/1371/268298/5c11b9f8Edeaa1fd1/d1ec31edbb151e36.jpg",
							"state": "1",
							"category": 688,
							"categoryName": "显示",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
					]
				},
				{
					item: [
						{
							"skuId": 5448942,
							"name": "英特尔（Intel） i7 8700 酷睿六核 盒装CPU处理器",
							"price": "2399.00",
							"num": "1",
							"imagePath": "jfs/t19876/121/551161046/273454/946beee7/5afe4de8Nda23f166.jpg",
							"state": "1",
							"category": 678,
							"categoryName": "CPU",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "117645"
						},
						{
							"skuId": 5194045,
							"name": "微星（MSI）Z370 KRAIT GAMING银环蛇 主板（Intel Z370/LGA 1151）",
							"price": "暂无报价",
							"num": "1",
							"imagePath": "jfs/t16885/296/665743759/260850/165e03ef/5a9f4887Na5c2beb7.jpg",
							"state": "0",
							"category": 681,
							"categoryName": "主板",
							"promo": "",
							"stock": 0,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 3295240,
							"name": "微星（MSI）GeForce GTX 1060 GAMING X 6G 1594-1809MHZ GDDR5 192BIT PCI-E 3.0 旗舰红龙 吃鸡显卡",
							"price": "1899.00",
							"num": "1",
							"imagePath": "jfs/t18442/74/2071557420/119185/e4e3d236/5ae3f0e5N46bba1d8.jpg",
							"state": "1",
							"category": 679,
							"categoryName": "显卡",
							"promo": "",
							"stock": 0,
							"attr": [

							],
							"score": "157607"
						},
						{
							"skuId": 2918471,
							"name": "金士顿(Kingston) 16GB(8G×2)套装 DDR4 2666 台式机内存 骇客神条 Fury雷电系列",
							"price": "629.00",
							"num": "1",
							"imagePath": "jfs/t21139/212/2295950665/163364/e5896307/5b4eb32bN5e65f496.jpg",
							"state": "1",
							"category": 680,
							"categoryName": "内存",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "9861"
						},
						{
							"skuId": 6856662,
							"name": "希捷(Seagate)2TB 256MB 7200RPM 台式机机械硬盘 SATA接口 希捷酷鱼BarraCuda系列(ST2000DM008)",
							"price": "378.00",
							"num": "1",
							"imagePath": "jfs/t1/10547/33/13375/311370/5c820591Ed263955e/e57a3c0bc6a49ea3.jpg",
							"state": "1",
							"category": 683,
							"categoryName": "硬盘",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "4290"
						},
						{
							"skuId": 6212482,
							"name": "三星（SAMSUNG）500GB SSD固态硬盘 SATA3.0接口 860 EVO（MZ-76E500B）",
							"price": "499.00",
							"num": "1",
							"imagePath": "jfs/t25555/356/1975137885/120964/18425cab/5bc056a7N02e342e6.jpg",
							"state": "1",
							"category": 11303,
							"categoryName": "SSD",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "12435"
						},
						{
							"skuId": 2352321,
							"name": "美商海盗船（USCorsair）SPEC-ALPHA  黑红色 中塔游戏机箱（侧透/支持ATX主板/24CM水冷排/38CM显卡）",
							"price": "499.00",
							"num": "1",
							"imagePath": "jfs/t1921/86/2195296604/87081/27e10763/56c53f3eN8e62cfd4.jpg",
							"state": "1",
							"category": 687,
							"categoryName": "机箱",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 7408072,
							"name": "安钛克(Antec)VP500铜牌 台式机电脑主机机箱电源500W (48万好评VP系列/静音风扇/3年换新只换不修)",
							"price": "299.00",
							"num": "1",
							"imagePath": "jfs/t23353/316/1221383788/407679/d9ee9401/5b56ebfeN2e5a8b59.jpg",
							"state": "1",
							"category": 691,
							"categoryName": "电源",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 689273,
							"name": "九州风神 （DEEPCOOL）大霜塔CPU散热(双塔/风冷/支持AM4/2066/多平台/6热管/双LED风扇/附带硅脂)",
							"price": "219.00",
							"num": "1",
							"imagePath": "g13/M0A/08/0D/rBEhVFKYAS4IAAAAAAOrwk7RcRoAAGHLgKgLaIAA6va129.jpg",
							"state": "1",
							"category": 682,
							"categoryName": "散热",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						},
						{
							"skuId": 3916601,
							"name": "AOC AGON 爱攻II AG272FCX 27英寸高清 吃鸡 144Hz刷新 1800R曲率 ΔE<3 全接口游戏电竞曲面显示 绝地求生",
							"price": "1798.00",
							"num": "1",
							"imagePath": "jfs/t1/26778/35/13806/411186/5ca1ce12E378cb3b1/0c007ad714c6144c.jpg",
							"state": "1",
							"category": 688,
							"categoryName": "显示",
							"promo": "",
							"stock": 1,
							"attr": [

							],
							"score": "0"
						}
					]
				}
			]
    },
    gameName: '荒野行动'
	}

	componentDidMount() {

  }

	handleClick = (info, item) => {
		const key = '' + info;
		this.setState({
      currentSelect: key,
      gameName: item.name
		})
	}

	render() {
		const { games, products, currentSelect, gameName } = this.state;

		return (
			<div>
				<List
					grid={{ gutter: 16, column: 8 }}
					dataSource={games.data}
					renderItem={(item, index) => (
						<List.Item>
							<div onClick={e => this.handleClick(index + 1, item)} style={{ margin: 0, padding: 0, borderRadius: 8, overflow: 'hidden' }}><a><img style={{ height: 130, width: '100%' }} src={item.icon} alt="img" /></a></div>
						</List.Item>
					)}
				/>
        <p style={{ height: 20 }}>当前游戏：{gameName}</p>
				<List
					grid={{ gutter: 16, column: 3 }}
					dataSource={products[currentSelect]}
					footer={
						<div>
							<b>京东</b> 提供数据来源
						</div>
					}
					renderItem={(item, index) => (
						<List.Item>
							<Card>
								{index === 0 ? <h3>标准配置</h3> : index === 1 ? <h3>进阶配置</h3> : index === 2 ? <h3>发烧配置</h3> : ''}
								<List
									itemLayout="vertical"
									size="large"
									dataSource={item.item}
									renderItem={item => (
										<List.Item>
											<img
													width={80}
													style={{ float: 'right' }}
													alt="logo"
													src={`https://img30.360buyimg.com/diytwo/${item.imagePath}`}
												/>
											<List.Item.Meta
												title={item.categoryName}
												description={'￥' + item.price}
											// avatar={<Avatar src={'https://img30.360buyimg.com/diytwo/' + item.imagePath} />}
											/>
											{item.name}
										</List.Item>
									)}
								/>
							</Card>
						</List.Item>
					)}
				/>,
			</div>
		)
	}
}
