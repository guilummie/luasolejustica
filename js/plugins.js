// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"YEP_CoreEngine","status":true,"description":"v1.32 Needed for the majority of Yanfly Engine Scripts. Also\r\ncontains bug fixes found inherently in RPG Maker.","parameters":{"---Screen---":"","Screen Width":"1280","Screen Height":"720","Scale Battlebacks":"true","Scale Title":"true","Scale Game Over":"true","Open Console":"false","Reposition Battlers":"true","GameFont Load Timer":"0","Update Real Scale":"false","Collection Clear":"true","---Gold---":"","Gold Max":"99999999","Gold Font Size":"20","Gold Icon":"313","Gold Overlap":"A lotta","---Items---":"","Default Max":"99","Quantity Text Size":"20","---Parameters---":"","Max Level":"99","Actor MaxHP":"9999","Actor MaxMP":"9999","Actor Parameter":"999","Enemy MaxHP":"999999","Enemy MaxMP":"9999","Enemy Parameter":"999","---Battle---":"","Animation Rate":"4","Flash Target":"false","Show Events Transition":"true","Show Events Snapshot":"true","---Map Optimization---":"","Refresh Update HP":"true","Refresh Update MP":"true","Refresh Update TP":"false","---Font---":"","Chinese Font":"SimHei, Heiti TC, sans-serif","Korean Font":"Dotum, AppleGothic, sans-serif","Default Font":"GameFont, Verdana, Arial, Courier New","Font Size":"28","Text Align":"left","---Windows---":"","Digit Grouping":"true","Line Height":"36","Icon Width":"32","Icon Height":"32","Face Width":"144","Face Height":"144","Window Padding":"18","Text Padding":"6","Window Opacity":"192","Gauge Outline":"true","Gauge Height":"18","Menu TP Bar":"true","---Window Colors---":"","Color: Normal":"0","Color: System":"16","Color: Crisis":"17","Color: Death":"18","Color: Gauge Back":"19","Color: HP Gauge 1":"20","Color: HP Gauge 2":"21","Color: MP Gauge 1":"22","Color: MP Gauge 2":"23","Color: MP Cost":"23","Color: Power Up":"24","Color: Power Down":"25","Color: TP Gauge 1":"28","Color: TP Gauge 2":"29","Color: TP Cost Color":"29"}},
{"name":"VE_BasicModule","status":true,"description":"v1.23 - Plugin with base code required for all Victor Engine plugins.","parameters":{"== Trait Names ==":"","Hit Rate Name":"Hit","Evasion Rate Name":"Evasion","Critical Rate Name":"Critical","Critical Evasion Name":"C. Evasion","Magic Evasion Name":"M. Evasion","Magic Reflection Name":"M. Reflection","Counter Attack Name":"Counter","HP Regeneration Name":"HP Regen","MP Regeneration Name":"MP Regen","TP Regeneration Name":"TP Regen","Target Rate Name":"Target Rate","Guard Rate Name":"Guard Rate","Recovery Effect Name":"Recovery","Pharmacology Name":"Pharmacology","MP Cost Rate Name":"MP Cost","TP Charge Rate Name":"TP Charge","Physical Damage Name":"Physical Damage","Magical Damage Name":"Magical Damage","Floor Damage Name":"Floor Damage","Experience Rate Name":"Exp. Rate\r"}},
{"name":"VE_ConditionalTurnBattle","status":true,"description":"v1.01 - Changes the turn system to one based on individual actions.","parameters":{"= CTB Setup =":"======================================","CTB Param Weight":"50","Initial CTB Rate":"20","CTB Ready Sound":"Chime2, 30, 100, 0","Show Party Command":"true","Turn Update Mode":"time","Turn Update Count":"this.allBattleMembers().length","Turn Update Time":"100","Regen Update Mode":"action","Buffs Update Mode":"action","= CTB Window =":"======================================","Show CTB Window":"true","CTB Window X":"897","CTB Window Y":"0","CTB Window Width":"64 + this.maxIcons() * 32","CTB Window Height":"72","CTB Window Back Opacity":"this.standardBackOpacity()","CTB Window Frame Opacity":"255","CTB Window Filename":"","CTB Background Offset":"0, 0","Max Icons":"10","Battler Display Distance":"36, 0","Active Display Offset":"0, 0","= CTB Display =":"======================================","Show Names":"false","Names Offset":"36, 0","Iconset Filename":"IconSet","Icon Size":"32, 32","Actor Icon Face":"true","Actor Icon Offset":"0, 0","Actor Icon Backgroud":"200, 201, 202, 203","Default Actor Icon":"0","Enemy Icon Battler":"true","Enemy Icon Offset":"0, 0","Enemy Icon Backgroud":"200, 201, 202, 203","Default Enemy Icon":"0","Same Enemy Indicator":"letter","Active Icon Overlay":"0","Cast Icon Overlay":"0","Icon Zoom":"both\r"}},
{"name":"MadeWithMv","status":false,"description":"Show a Splash Screen \"Made with MV\" and/or a Custom Splash Screen before going to main screen.","parameters":{"Show Made With MV":"true","Made with MV Image":"MadeWithMv","Show Custom Splash":"false","Custom Image":"","Fade Out Time":"120","Fade In Time":"120","Wait Time":"160"}},
{"name":"TitleCommandPosition","status":true,"description":"Changes the position of the title command window.","parameters":{"Offset X":"-20","Offset Y":"60","Width":"240","Background":"1"}},
{"name":"SRD_BattleStatusCustomizer","status":true,"description":"(PART 1) Gives control over the information provided within the Battle Status windows for each Actor.","parameters":{"Default Parts Used":"Face, Icon, Text 1, Gauge 1, Gauge 2, Gauge 3","Active Updating":"false","== Actor Window ==":"","Actor Window Width":"this._statusWindow.width / 4","Actor Window Height":"180","Actor Window Ori. X":"this._statusWindow.x","Actor Window Ori. Y":"this._statusWindow.y","Actor Window X":"prev._mainX + prev.width","Actor Window Y":"prev._mainY","Actor Default Opacity":"255","Actor Default Tone":"$gameSystem.windowTone()","== Face Options ==":"","Face Position":"(boxWidth - 144) / 2 | 0","Face Size":"144 | 144","== Icon Options ==":"","Icon Position":"0 | 32","Icon Width":"boxWidth","Icon Scale":"1","== Status Window ==":"","Status Visible":"false","Status Rows":"1","Status Cols":"4","== Input Motion ==":"","Input Highlight":"false","Input X Speed":"0","Input X Max":"0","Input Y Speed":"-4","Input Y Max":"-30","== Select Motion ==":"","Select Highlight":"true","Select X Speed":"0","Select X Max":"0","Select Y Speed":"0","Select Y Max":"0","== Text 1 ==":"","Text 1 Value":"actor.name()","Text 1 Position":"0 | 0","Text 1 Width":"boxWidth","Text 1 Size":"18","Text 1 Align":"center","== Text 2 ==":"","Text 2 Value":"","Text 2 Position":"","Text 2 Width":"","Text 2 Size":"","Text 2 Align":"","== Text 3 ==":"","Text 3 Value":"","Text 3 Position":"","Text 3 Width":"","Text 3 Size":"","Text 3 Align":"","== Text 4 ==":"","Text 4 Value":"","Text 4 Position":"","Text 4 Width":"","Text 4 Size":"","Text 4 Align":"","== Text 5 ==":"","Text 5 Value":"","Text 5 Position":"","Text 5 Width":"","Text 5 Size":"","Text 5 Align":""}},
{"name":"SRD_BattleStatusCustomizer_Part2","status":true,"description":"(PART 2) The second part of the Battle Status Customizer. This allows you to manipulate gauges.","parameters":{"== Global Settings ==":"","Gauge X Offset":"0","Gauge Y Offset":"-10","Text X Pos":"x + 4","Text Y Pos":"y + 5","Gauge Font":"Gamefont","Gauge Font Size":"height - 4","Gauge Italic":"false","Gauge Text Color":"#ffffff","Gauge Outline Color":"rgba(0, 0, 0, 0.5)","Gauge Outline Width":"4","== Gauge 1 ==":"","Gauge 1 Text":"TextManager.hpA","Gauge 1 Current":"actor.hp","Gauge 1 Max":"actor.mhp","Gauge 1 Position":"2 | boxHeight - 56","Gauge 1 Size":"boxWidth - 4 | 22","Gauge 1 Colors":"this.hpGaugeColor1() | this.hpGaugeColor2()","Gauge 1 Back Color":"\"#202040\"","Gauge 1 Draw C/M":"true","== Gauge 2 ==":"","Gauge 2 Text":"TextManager.mpA","Gauge 2 Current":"actor.mp","Gauge 2 Max":"actor.mmp","Gauge 2 Position":"2 | boxHeight - 32","Gauge 2 Size":"boxWidth / 2 | 22","Gauge 2 Colors":"this.mpGaugeColor1() | this.mpGaugeColor2()","Gauge 2 Back Color":"\"#202040\"","Gauge 2 Draw C/M":"true","== Gauge 3 ==":"","Gauge 3 Text":"TextManager.tpA","Gauge 3 Current":"actor.tp","Gauge 3 Max":"actor.maxTp()","Gauge 3 Position":"(boxWidth / 2) + 4 | boxHeight - 32","Gauge 3 Size":"(boxWidth / 2) - 6 | 22","Gauge 3 Colors":"this.tpGaugeColor1() | this.tpGaugeColor2()","Gauge 3 Back Color":"\"#202040\"","Gauge 3 Draw C/M":"true","== Gauge 4 ==":"","Gauge 4 Text":"TextManager.mpA","Gauge 4 Current":"actor.mp","Gauge 4 Max":"actor.mmp","Gauge 4 Position":"2 | boxHeight - 32","Gauge 4 Size":"boxWidth - 4 | 22","Gauge 4 Colors":"this.mpGaugeColor1() | this.mpGaugeColor2()","Gauge 4 Back Color":"\"#202040\"","Gauge 4 Draw C/M":"true","== Gauge 5 ==":"","Gauge 5 Text":"","Gauge 5 Current":"","Gauge 5 Max":"","Gauge 5 Position":"","Gauge 5 Size":"","Gauge 5 Colors":"","Gauge 5 Back Color":"","Gauge 5 Draw C/M":"","== Gauge 6 ==":"","Gauge 6 Text":"","Gauge 6 Current":"","Gauge 6 Max":"","Gauge 6 Position":"","Gauge 6 Size":"","Gauge 6 Colors":"","Gauge 6 Back Color":"","Gauge 6 Draw C/M":"","== Gauge 7 ==":"","Gauge 7 Text":"","Gauge 7 Current":"","Gauge 7 Max":"","Gauge 7 Position":"","Gauge 7 Size":"","Gauge 7 Colors":"","Gauge 7 Back Color":"","Gauge 7 Draw C/M":"","== Gauge 8 ==":"","Gauge 8 Text":"","Gauge 8 Current":"","Gauge 8 Max":"","Gauge 8 Position":"","Gauge 8 Size":"","Gauge 8 Colors":"","Gauge 8 Back Color":"","Gauge 8 Draw C/M":"","== Gauge 9 ==":"","Gauge 9 Text":"","Gauge 9 Current":"","Gauge 9 Max":"","Gauge 9 Position":"","Gauge 9 Size":"","Gauge 9 Colors":"","Gauge 9 Back Color":"","Gauge 9 Draw C/M":"","== Gauge 10 ==":"","Gauge 10 Text":"","Gauge 10 Current":"","Gauge 10 Max":"","Gauge 10 Position":"","Gauge 10 Size":"","Gauge 10 Colors":"","Gauge 10 Back Color":"","Gauge 10 Draw C/M":"","== Gauge 11 ==":"","Gauge 11 Text":"","Gauge 11 Current":"","Gauge 11 Max":"","Gauge 11 Position":"","Gauge 11 Size":"","Gauge 11 Colors":"","Gauge 11 Back Color":"","Gauge 11 Draw C/M":"","== Gauge 12 ==":"","Gauge 12 Text":"","Gauge 12 Current":"","Gauge 12 Max":"","Gauge 12 Position":"","Gauge 12 Size":"","Gauge 12 Colors":"","Gauge 12 Back Color":"","Gauge 12 Draw C/M":"","== Gauge 13 ==":"","Gauge 13 Text":"","Gauge 13 Current":"","Gauge 13 Max":"","Gauge 13 Position":"","Gauge 13 Size":"","Gauge 13 Colors":"","Gauge 13 Back Color":"","Gauge 13 Draw C/M":"","== Gauge 14 ==":"","Gauge 14 Text":"","Gauge 14 Current":"","Gauge 14 Max":"","Gauge 14 Position":"","Gauge 14 Size":"","Gauge 14 Colors":"","Gauge 14 Back Color":"","Gauge 14 Draw C/M":"","== Gauge 15 ==":"","Gauge 15 Text":"","Gauge 15 Current":"","Gauge 15 Max":"","Gauge 15 Position":"","Gauge 15 Size":"","Gauge 15 Colors":"","Gauge 15 Back Color":"","Gauge 15 Draw C/M":"","== Gauge 16 ==":"","Gauge 16 Text":"","Gauge 16 Current":"","Gauge 16 Max":"","Gauge 16 Position":"","Gauge 16 Size":"","Gauge 16 Colors":"","Gauge 16 Back Color":"","Gauge 16 Draw C/M":"","== Gauge 17 ==":"","Gauge 17 Text":"","Gauge 17 Current":"","Gauge 17 Max":"","Gauge 17 Position":"","Gauge 17 Size":"","Gauge 17 Colors":"","Gauge 17 Back Color":"","Gauge 17 Draw C/M":"","== Gauge 18 ==":"","Gauge 18 Text":"","Gauge 18 Current":"","Gauge 18 Max":"","Gauge 18 Position":"","Gauge 18 Size":"","Gauge 18 Colors":"","Gauge 18 Back Color":"","Gauge 18 Draw C/M":"","== Gauge 19 ==":"","Gauge 19 Text":"","Gauge 19 Current":"","Gauge 19 Max":"","Gauge 19 Position":"","Gauge 19 Size":"","Gauge 19 Colors":"","Gauge 19 Back Color":"","Gauge 19 Draw C/M":"","== Gauge 20 ==":"","Gauge 20 Text":"","Gauge 20 Current":"","Gauge 20 Max":"","Gauge 20 Position":"","Gauge 20 Size":"","Gauge 20 Colors":"","Gauge 20 Back Color":"","Gauge 20 Draw C/M":"","== Gauge 21 ==":"","Gauge 21 Text":"","Gauge 21 Current":"","Gauge 21 Max":"","Gauge 21 Position":"","Gauge 21 Size":"","Gauge 21 Colors":"","Gauge 21 Back Color":"","Gauge 21 Draw C/M":"","== Gauge 22 ==":"","Gauge 22 Text":"","Gauge 22 Current":"","Gauge 22 Max":"","Gauge 22 Position":"","Gauge 22 Size":"","Gauge 22 Colors":"","Gauge 22 Back Color":"","Gauge 22 Draw C/M":"","== Gauge 23 ==":"","Gauge 23 Text":"","Gauge 23 Current":"","Gauge 23 Max":"","Gauge 23 Position":"","Gauge 23 Size":"","Gauge 23 Colors":"","Gauge 23 Back Color":"","Gauge 23 Draw C/M":"","== Gauge 24 ==":"","Gauge 24 Text":"","Gauge 24 Current":"","Gauge 24 Max":"","Gauge 24 Position":"","Gauge 24 Size":"","Gauge 24 Colors":"","Gauge 24 Back Color":"","Gauge 24 Draw C/M":"","== Gauge 25 ==":"","Gauge 25 Text":"","Gauge 25 Current":"","Gauge 25 Max":"","Gauge 25 Position":"","Gauge 25 Size":"","Gauge 25 Colors":"","Gauge 25 Back Color":"","Gauge 25 Draw C/M":"","== Gauge 26 ==":"","Gauge 26 Text":"","Gauge 26 Current":"","Gauge 26 Max":"","Gauge 26 Position":"","Gauge 26 Size":"","Gauge 26 Colors":"","Gauge 26 Back Color":"","Gauge 26 Draw C/M":"","== Gauge 27 ==":"","Gauge 27 Text":"","Gauge 27 Current":"","Gauge 27 Max":"","Gauge 27 Position":"","Gauge 27 Size":"","Gauge 27 Colors":"","Gauge 27 Back Color":"","Gauge 27 Draw C/M":"","== Gauge 28 ==":"","Gauge 28 Text":"","Gauge 28 Current":"","Gauge 28 Max":"","Gauge 28 Position":"","Gauge 28 Size":"","Gauge 28 Colors":"","Gauge 28 Back Color":"","Gauge 28 Draw C/M":"","== Gauge 29 ==":"","Gauge 29 Text":"","Gauge 29 Current":"","Gauge 29 Max":"","Gauge 29 Position":"","Gauge 29 Size":"","Gauge 29 Colors":"","Gauge 29 Back Color":"","Gauge 29 Draw C/M":"","== Gauge 30 ==":"","Gauge 30 Text":"","Gauge 30 Current":"","Gauge 30 Max":"","Gauge 30 Position":"","Gauge 30 Size":"","Gauge 30 Colors":"","Gauge 30 Back Color":"","Gauge 30 Draw C/M":"","== Gauge 31 ==":"","Gauge 31 Text":"","Gauge 31 Current":"","Gauge 31 Max":"","Gauge 31 Position":"","Gauge 31 Size":"","Gauge 31 Colors":"","Gauge 31 Back Color":"","Gauge 31 Draw C/M":"","== Gauge 32 ==":"","Gauge 32 Text":"","Gauge 32 Current":"","Gauge 32 Max":"","Gauge 32 Position":"","Gauge 32 Size":"","Gauge 32 Colors":"","Gauge 32 Back Color":"","Gauge 32 Draw C/M":"","== Gauge 33 ==":"","Gauge 33 Text":"","Gauge 33 Current":"","Gauge 33 Max":"","Gauge 33 Position":"","Gauge 33 Size":"","Gauge 33 Colors":"","Gauge 33 Back Color":"","Gauge 33 Draw C/M":"","== Gauge 34 ==":"","Gauge 34 Text":"","Gauge 34 Current":"","Gauge 34 Max":"","Gauge 34 Position":"","Gauge 34 Size":"","Gauge 34 Colors":"","Gauge 34 Back Color":"","Gauge 34 Draw C/M":"","== Gauge 35 ==":"","Gauge 35 Text":"","Gauge 35 Current":"","Gauge 35 Max":"","Gauge 35 Position":"","Gauge 35 Size":"","Gauge 35 Colors":"","Gauge 35 Back Color":"","Gauge 35 Draw C/M":"","== Gauge 36 ==":"","Gauge 36 Text":"","Gauge 36 Current":"","Gauge 36 Max":"","Gauge 36 Position":"","Gauge 36 Size":"","Gauge 36 Colors":"","Gauge 36 Back Color":"","Gauge 36 Draw C/M":"","== Gauge 37 ==":"","Gauge 37 Text":"","Gauge 37 Current":"","Gauge 37 Max":"","Gauge 37 Position":"","Gauge 37 Size":"","Gauge 37 Colors":"","Gauge 37 Back Color":"","Gauge 37 Draw C/M":"","== Gauge 38 ==":"","Gauge 38 Text":"","Gauge 38 Current":"","Gauge 38 Max":"","Gauge 38 Position":"","Gauge 38 Size":"","Gauge 38 Colors":"","Gauge 38 Back Color":"","Gauge 38 Draw C/M":"","== Gauge 39 ==":"","Gauge 39 Text":"","Gauge 39 Current":"","Gauge 39 Max":"","Gauge 39 Position":"","Gauge 39 Size":"","Gauge 39 Colors":"","Gauge 39 Back Color":"","Gauge 39 Draw C/M":"","== Gauge 40 ==":"","Gauge 40 Text":"","Gauge 40 Current":"","Gauge 40 Max":"","Gauge 40 Position":"","Gauge 40 Size":"","Gauge 40 Colors":"","Gauge 40 Back Color":"","Gauge 40 Draw C/M":"","== Gauge 41 ==":"","Gauge 41 Text":"","Gauge 41 Current":"","Gauge 41 Max":"","Gauge 41 Position":"","Gauge 41 Size":"","Gauge 41 Colors":"","Gauge 41 Back Color":"","Gauge 41 Draw C/M":"","== Gauge 42 ==":"","Gauge 42 Text":"","Gauge 42 Current":"","Gauge 42 Max":"","Gauge 42 Position":"","Gauge 42 Size":"","Gauge 42 Colors":"","Gauge 42 Back Color":"","Gauge 42 Draw C/M":"","== Gauge 43 ==":"","Gauge 43 Text":"","Gauge 43 Current":"","Gauge 43 Max":"","Gauge 43 Position":"","Gauge 43 Size":"","Gauge 43 Colors":"","Gauge 43 Back Color":"","Gauge 43 Draw C/M":"","== Gauge 44 ==":"","Gauge 44 Text":"","Gauge 44 Current":"","Gauge 44 Max":"","Gauge 44 Position":"","Gauge 44 Size":"","Gauge 44 Colors":"","Gauge 44 Back Color":"","Gauge 44 Draw C/M":"","== Gauge 45 ==":"","Gauge 45 Text":"","Gauge 45 Current":"","Gauge 45 Max":"","Gauge 45 Position":"","Gauge 45 Size":"","Gauge 45 Colors":"","Gauge 45 Back Color":"","Gauge 45 Draw C/M":"","== Gauge 46 ==":"","Gauge 46 Text":"","Gauge 46 Current":"","Gauge 46 Max":"","Gauge 46 Position":"","Gauge 46 Size":"","Gauge 46 Colors":"","Gauge 46 Back Color":"","Gauge 46 Draw C/M":"","== Gauge 47 ==":"","Gauge 47 Text":"","Gauge 47 Current":"","Gauge 47 Max":"","Gauge 47 Position":"","Gauge 47 Size":"","Gauge 47 Colors":"","Gauge 47 Back Color":"","Gauge 47 Draw C/M":"","== Gauge 48 ==":"","Gauge 48 Text":"","Gauge 48 Current":"","Gauge 48 Max":"","Gauge 48 Position":"","Gauge 48 Size":"","Gauge 48 Colors":"","Gauge 48 Back Color":"","Gauge 48 Draw C/M":"","== Gauge 49 ==":"","Gauge 49 Text":"","Gauge 49 Current":"","Gauge 49 Max":"","Gauge 49 Position":"","Gauge 49 Size":"","Gauge 49 Colors":"","Gauge 49 Back Color":"","Gauge 49 Draw C/M":"","== Gauge 50 ==":"","Gauge 50 Text":"","Gauge 50 Current":"","Gauge 50 Max":"","Gauge 50 Position":"","Gauge 50 Size":"","Gauge 50 Colors":"","Gauge 50 Back Color":"","Gauge 50 Draw C/M":""}},
{"name":"HO_AchievementSystem","status":true,"description":"v1.2 Achievement System for RPG Maker MV","parameters":{"--- Data ---":"","Achievement List":"[\"{\\\"Title\\\":\\\"\\\\\\\\i[87]O nome do jogo!\\\",\\\"Completed Title\\\":\\\"\\\\\\\\c[14]%1\\\",\\\"Description\\\":\\\"\\\\\\\"Veja o trio abrir a \\\\\\\\\\\\\\\\c[3]PORTA\\\\\\\\\\\\\\\\c[0] para o \\\\\\\\\\\\\\\\c[2]SALÃO ÂMAGO\\\\\\\\\\\\\\\\c[0].\\\\\\\"\\\",\\\"Tiers\\\":\\\"[\\\\\\\"{\\\\\\\\\\\\\\\"Progress\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Points\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Eval\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"}\\\\\\\"]\\\",\\\"Categories\\\":\\\"[\\\\\\\"Todos\\\\\\\"]\\\",\\\"Concealed\\\":\\\"false\\\",\\\"Visible\\\":\\\"true\\\",\\\"Repeatable\\\":\\\"1\\\",\\\"Max Points\\\":\\\"0\\\",\\\"Reward\\\":\\\"{\\\\\\\"Gold\\\\\\\":\\\\\\\"100\\\\\\\",\\\\\\\"Experience\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Items\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"Weapons\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"Armors\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"Custom\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"Eval\\\\\\\":\\\\\\\"\\\\\\\"}\\\",\\\"Reward Mode\\\":\\\"0\\\",\\\"Sort Value\\\":\\\"this._index + (this.isCompleted() ? 99999 : 0)\\\"}\",\"{\\\"Title\\\":\\\"\\\\\\\\i[87]\\\\\\\"Com uma mãe assim...\\\\\\\"\\\",\\\"Completed Title\\\":\\\"\\\\\\\\c[14]%1\\\",\\\"Description\\\":\\\"\\\\\\\"\\\\\\\\\\\\\\\"...Quem precisa de inimigos?\\\\\\\\\\\\\\\"\\\\\\\\nReceba equipamentos de \\\\\\\\\\\\\\\\c[9]PROTECTIA\\\\\\\\\\\\\\\\c[0].\\\\\\\"\\\",\\\"Tiers\\\":\\\"[\\\\\\\"{\\\\\\\\\\\\\\\"Progress\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Points\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Eval\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"}\\\\\\\"]\\\",\\\"Categories\\\":\\\"[\\\\\\\"Todos\\\\\\\"]\\\",\\\"Concealed\\\":\\\"false\\\",\\\"Visible\\\":\\\"true\\\",\\\"Repeatable\\\":\\\"1\\\",\\\"Max Points\\\":\\\"0\\\",\\\"Reward\\\":\\\"{\\\\\\\"Gold\\\\\\\":\\\\\\\"15\\\\\\\",\\\\\\\"Experience\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Items\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"Weapons\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"Armors\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"Custom\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"Eval\\\\\\\":\\\\\\\"\\\\\\\"}\\\",\\\"Reward Mode\\\":\\\"0\\\",\\\"Sort Value\\\":\\\"this._index + (this.isCompleted() ? 99999 : 0)\\\"}\",\"{\\\"Title\\\":\\\"\\\\\\\\i[87]Tinha que ser o Chaves...\\\",\\\"Completed Title\\\":\\\"\\\\\\\\c[14]%1\\\",\\\"Description\\\":\\\"\\\\\\\"Encontrou a primeira chave do jogo.\\\\\\\"\\\",\\\"Tiers\\\":\\\"[\\\\\\\"{\\\\\\\\\\\\\\\"Progress\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Points\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Eval\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"}\\\\\\\"]\\\",\\\"Categories\\\":\\\"[\\\\\\\"Todos\\\\\\\"]\\\",\\\"Concealed\\\":\\\"false\\\",\\\"Visible\\\":\\\"false\\\",\\\"Repeatable\\\":\\\"1\\\",\\\"Max Points\\\":\\\"0\\\",\\\"Reward\\\":\\\"{\\\\\\\"Gold\\\\\\\":\\\\\\\"10\\\\\\\",\\\\\\\"Experience\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Items\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"Weapons\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"Armors\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"Custom\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"Eval\\\\\\\":\\\\\\\"\\\\\\\"}\\\",\\\"Reward Mode\\\":\\\"0\\\",\\\"Sort Value\\\":\\\"this._index + (this.isCompleted() ? 99999 : 0)\\\"}\",\"{\\\"Title\\\":\\\"\\\\\\\\i[87]Tinha que ser o Chaves (de novo)!\\\",\\\"Completed Title\\\":\\\"\\\\\\\\c[14]%1\\\",\\\"Description\\\":\\\"\\\\\\\"Encontrou a primeira Chave Prateada do jogo.\\\\\\\"\\\",\\\"Tiers\\\":\\\"[\\\\\\\"{\\\\\\\\\\\\\\\"Progress\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Points\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Eval\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"}\\\\\\\"]\\\",\\\"Categories\\\":\\\"[\\\\\\\"Todos\\\\\\\"]\\\",\\\"Concealed\\\":\\\"false\\\",\\\"Visible\\\":\\\"false\\\",\\\"Repeatable\\\":\\\"1\\\",\\\"Max Points\\\":\\\"0\\\",\\\"Reward\\\":\\\"{\\\\\\\"Gold\\\\\\\":\\\\\\\"10\\\\\\\",\\\\\\\"Experience\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Items\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"Weapons\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"Armors\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"Custom\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"Eval\\\\\\\":\\\\\\\"\\\\\\\"}\\\",\\\"Reward Mode\\\":\\\"0\\\",\\\"Sort Value\\\":\\\"this._index + (this.isCompleted() ? 99999 : 0)\\\"}\",\"{\\\"Title\\\":\\\"\\\\\\\\i[87]Wallmaster?\\\",\\\"Completed Title\\\":\\\"\\\\\\\\c[14]%1\\\",\\\"Description\\\":\\\"\\\\\\\"Seja pego pela Chama Azul pela primeira vez.\\\\\\\"\\\",\\\"Tiers\\\":\\\"[\\\\\\\"{\\\\\\\\\\\\\\\"Progress\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Points\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Eval\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"}\\\\\\\"]\\\",\\\"Categories\\\":\\\"[\\\\\\\"Todos\\\\\\\"]\\\",\\\"Concealed\\\":\\\"false\\\",\\\"Visible\\\":\\\"false\\\",\\\"Repeatable\\\":\\\"1\\\",\\\"Max Points\\\":\\\"0\\\",\\\"Reward\\\":\\\"{\\\\\\\"Gold\\\\\\\":\\\\\\\"10\\\\\\\",\\\\\\\"Experience\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Items\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"Weapons\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"Armors\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"Custom\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"Eval\\\\\\\":\\\\\\\"\\\\\\\"}\\\",\\\"Reward Mode\\\":\\\"0\\\",\\\"Sort Value\\\":\\\"this._index + (this.isCompleted() ? 99999 : 0)\\\"}\",\"{\\\"Title\\\":\\\"\\\\\\\\i[87]Ganância\\\",\\\"Completed Title\\\":\\\"\\\\\\\\c[14]%1\\\",\\\"Description\\\":\\\"\\\\\\\"Derrote Avaritia, o Pecado da Ganância.\\\\\\\"\\\",\\\"Tiers\\\":\\\"[\\\\\\\"{\\\\\\\\\\\\\\\"Progress\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Points\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Eval\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"}\\\\\\\"]\\\",\\\"Categories\\\":\\\"[\\\\\\\"Todos\\\\\\\"]\\\",\\\"Concealed\\\":\\\"false\\\",\\\"Visible\\\":\\\"false\\\",\\\"Repeatable\\\":\\\"1\\\",\\\"Max Points\\\":\\\"0\\\",\\\"Reward\\\":\\\"{\\\\\\\"Gold\\\\\\\":\\\\\\\"10\\\\\\\",\\\\\\\"Experience\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Items\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"Weapons\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"Armors\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"Custom\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"Eval\\\\\\\":\\\\\\\"\\\\\\\"}\\\",\\\"Reward Mode\\\":\\\"0\\\",\\\"Sort Value\\\":\\\"this._index + (this.isCompleted() ? 99999 : 0)\\\"}\"]","Category List":"[\"{\\\"Title\\\":\\\"Todos\\\",\\\"Description\\\":\\\"\\\\\\\"As conquistas do jogo ficam aqui.\\\\\\\"\\\",\\\"Concealed\\\":\\\"false\\\",\\\"Visible\\\":\\\"true\\\"}\"]","Reward List":"[\"{\\\"Points\\\":\\\"1\\\",\\\"Gold\\\":\\\"50\\\",\\\"Experience\\\":\\\"50\\\",\\\"Items\\\":\\\"[]\\\",\\\"Weapons\\\":\\\"[]\\\",\\\"Armors\\\":\\\"[]\\\",\\\"Custom\\\":\\\"[]\\\"}\"]","--- General ---":"","Achievement Points":"false","Achievement Rewards":"false","Reward Distribution":"false","Rewards Category Index":"2","Silent Completion":"false","--- Menu Command ---":"","Command Name":"Conquistas","Enabled?":"true","Visible?":"true","--- Scene ---":"","Scene Background":"","--- Title Window ---":"","Title Width":"Graphics.boxWidth","Title Height":"this.fittingHeight(1)","Title X":"0","Title Y":"0","Title Vocab":"\\c[23]Conquistas","Title Align":"Center","Total Points Vocab":"%1\\i[163]","--- List Window ---":"","List Width":"Graphics.boxWidth / 3 + 16","List Height":"Graphics.boxHeight - this.fittingHeight(1)","List X":"0","List Y":"this.fittingHeight(1)","Collapsed Prefix":"\\i[187]","Expanded Prefix":"\\i[189]","Concealed Achievement Vocab":"\\i[161]???","Concealed Category Vocab":"???","Achievement Indent":"8","Point Rewards Format":"\\i[163]%1","Point Rewards Completed Format":"\\i[163]\\c[21]%1","--- Data Window ---":"","Data Width":"Graphics.boxWidth * 2 / 3 - 16","Data Height":"Graphics.boxHeight - this.fittingHeight(1)","Data X":"Graphics.boxWidth / 3 + 16","Data Y":"this.fittingHeight(1)","Progress Display Mode":"0","Progress Vocab":"Progress: %1/%2 (%3%)","Tier Vocab":"Tier: %1/%2","Point Vocab Next":"Next Tier: %1\\i[163]","Point Vocab Total":"%1/%2\\i[163]","Point Vocab Infinite":"%1\\i[163]","Reward Vocab":"\\c[1]Reward","Reward Format Gold":"\\i[313]\\g: x%1","Reward Format Experience":"\\i[79]Experience: x%1","Reward Format Items":"\\i[%1]%2: x%3","Repeatable Vocab":"Repeated: %1/%2","Repeatable Vocab Infinite":"Repeated: %1","Horizontal Line Color 1":"1","Horizontal Line Color 2":"9","--- Alert Window ---":"","Show Alert Window?":"true","Show New Tier Alert?":"true","Show Reward Alert?":"true","Alert Width":"Graphics.boxWidth / 2","Alert X":"Graphics.boxWidth / 4","Alert Y":"0","Alert Window Skin":"Window","Alert Vocab Completion":"Conquista alcançada!","Alert Vocab Progress":"","Alert Vocab Achievement Reward":"","Alert Vocab Point Reward":"","Time Visible":"120","Alert Sound Name":"Absorb2","Alert Sound Volume":"50","Alert Sound Pitch":"100","Alert Sound Pan":"0"}},
{"name":"SavesInLocalData","status":true,"description":"Causes desktop save files to be saved in/loaded from local application directories rather than alongside game data.","parameters":{}}
];
