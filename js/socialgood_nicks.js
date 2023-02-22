

TweenMax.to(intro_iscovery_img, .8, {css:{left:"-120%", alpha:"0"}, delay:2.2, ease:Quint.easeIn}); 									
TweenMax.to(intro_d, .8, {css:{left:"44%", scaleY:"1.1", scaleX:"1.1"}, delay:2.2, ease:Quint.easeIn}); 									
TweenMax.to(intro_iscovery, .8, {css:{left:"44%"}, delay:2.2, ease:Quint.easeIn}); 									
TweenMax.to(intro_d, 0, {css:{alpha:"0"}, delay:3, ease:Quint.easeOut}); 									
TweenMax.to(intro_globe, .9, {css:{scaleY:".6", scaleX:".6", left:"43%", top:"30%"}, delay:2.2, ease:Quint.easeIn}); 								
TweenMax.to(intro_globe, 0, {css:{alpha:"0"}, delay:3.1, ease:Quint.easeOut}); 									
TweenMax.to(intro_d2, 0, {css:{alpha:"1", scaleY:"1", scaleX:"1"}, delay:3, ease:Quint.easeIn}); 									
TweenMax.to(intro_heart, .8, {css:{scaleY:"1", scaleX:"1", alpha:"1"}, delay:3, ease:Back.easeOut.config(1.3)}); 									
TweenMax.to(intro_line_1, 1.8, {css:{scaleY:"1", scaleX:"1", alpha:".5", left:"51%" }, delay:3, ease:Quint.easeOut}); 									
TweenMax.to(intro_line_2, 1.8, {css:{scaleY:"1", scaleX:"1", alpha:".5", left:"51%" }, delay:3.4, ease:Quint.easeOut}); 									

TweenMax.to(intro_socialgood, .8, {css:{left:"21%"}, delay:5, ease:Quint.easeOut}); 									
TweenMax.to(intro_socialgood_img, .8, {css:{left:"0%"}, delay:5, ease:Quint.easeOut}); 									
TweenMax.to(intro_d2, .8, {css:{left:"4%"}, delay:5, ease:Quint.easeOut});  									
TweenMax.to(intro_heart, .8, {css:{left:"4.2%"}, delay:5, ease:Quint.easeOut});  									
TweenMax.to(intro_line_1, .8, {css:{left:"11%"}, delay:5, ease:Quint.easeOut});  									
TweenMax.to(intro_line_2, .8, {css:{left:"11%"}, delay:5, ease:Quint.easeOut});  									
TweenMax.to(intro_socialgood, .8, {css:{left:"21%"}, delay:5, ease:Quint.easeOut}); 	
TweenMax.to(intro_script_img, .8, {css:{scaleY:"1", scaleX:"1", alpha:"1", left:"0%" }, delay:5, ease:Quint.easeOut}); 									




function animate_conservation(){
	TweenMax.to(con_main_pic, 1.2, {css:{rotation:"0", scaleY:"1", scaleX:"1", alpha:"1", left:"0"}, delay:.5, ease:Quint.easeOut}); 								
	TweenMax.to(con_cat_logo, 1, {css:{alpha:"1", left:"0"}, delay:.2, ease:Quint.easeInOut}); 								
	TweenMax.to(con_text_con, 1.2, {css:{alpha:"1", left:"0"}, delay:1.1, ease:Quint.easeOut}); 								
	TweenMax.to(con_text_6mil, .7, {css:{scaleY:"1", scaleX:"1", alpha:"1", left:"0"}, delay:1.4, ease:Back.easeOut.config(1.3)}); 								
	TweenMax.to(con_text_acres, .7, {css:{scaleY:"1", scaleX:"1", alpha:"1", left:"0"}, delay:1.8, ease:Back.easeOut.config(1.3)}); 								
	TweenMax.to(con_text_protected, 1.2, {css:{alpha:"1", left:"0"}, delay:1.5, ease:Quint.easeInOut}); 								
	TweenMax.to(con_partner, .6, {css:{scaleY:"1", scaleX:"1", alpha:"1"}, delay:2.5, ease:Quint.easeInOut});	
}


function animate_hunger(){
	TweenMax.to(hunger_text_1, 1, {css:{scaleY:"1", scaleX:"1", alpha:"1"}, delay:.5, ease:Quint.easeInOut}); 									
	TweenMax.to(hunger_main_pic, .8, {css:{rotation:"0", scaleY:"1", scaleX:"1", alpha:"1", top:"0", left:"0"}, delay:.5, ease:Quint.easeOut});  								
	TweenMax.to(hunger_turnup_logo, 1, {css:{rotation:"0", scaleY:"1", scaleX:"1", alpha:"1", top:"0", left:"0"}, delay:.6, ease:Quint.easeInOut}); 							
	TweenMax.to(hunger_text_provided, 1.2, {css:{alpha:"1", top:"0"}, delay:1, ease:Quint.easeInOut}); 								
	TweenMax.to(hunger_partner, .6, {css:{scaleY:"1", scaleX:"1", alpha:"1"}, delay:.6, ease:Quint.easeInOut});							
}

function animate_poverty(){
	TweenMax.to(poverty_main_pic, 1, {css:{rotation:"0", scaleY:"1", scaleX:"1", alpha:"1", left:"0"}, delay:.5, ease:Quint.easeOut}); 								
	TweenMax.to(poverty_rise_logo, 1.2, {css:{scaleY:"1", scaleX:"1", alpha:"1", top:"0"}, delay:.2, ease:Back.easeOut.config(1.7)}); 							
	TweenMax.to(poverty_text_support, 1.2, {css:{alpha:"1", left:"0"}, delay:1.1, ease:Quint.easeOut}); 								
	TweenMax.to(poverty_text_10m, .6, {css:{scaleY:"1", scaleX:"1", alpha:"1"}, delay:1.4,ease:Quint.easeInOut});									
	TweenMax.to(poverty_text_people, .6, {css:{scaleY:"1", scaleX:"1", alpha:"1"}, delay:2, ease:Quint.easeInOut});								
	TweenMax.to(poverty_text_22nations, .6, {css:{scaleY:"1", scaleX:"1", alpha:"1"}, delay:2.6, ease:Quint.easeOut});								
	TweenMax.to(poverty_text_education, 1.2, {css:{alpha:"1", left:"0"}, delay:2, ease:Quint.easeInOut}); 								
	TweenMax.to(poverty_text_health, 1, {css:{alpha:"1", left:"0"}, delay:2.2, ease:Quint.easeInOut}); 								
	TweenMax.to(poverty_partner, .6, {css:{scaleY:"1", scaleX:"1", alpha:"1"}, delay:.6, ease:Quint.easeInOut});							
}








TweenMax.to(con_main_pic, 1.2, {css:{rotation:"0", scaleY:"1", scaleX:"1", alpha:"1", left:"0"}, delay:.5, ease:Quint.easeOut}); 								
TweenMax.to(con_cat_logo, 1, {css:{alpha:"1", left:"0"}, delay:.2, ease:Quint.easeInOut}); 								
TweenMax.to(con_text_con, 1.2, {css:{alpha:"1", left:"0"}, delay:1.1, ease:Quint.easeOut}); 								
TweenMax.to(con_text_6mil, .7, {css:{scaleY:"1", scaleX:"1", alpha:"1", left:"0"}, delay:1.4, ease:Back.easeOut.config(1.3)}); 								
TweenMax.to(con_text_acres, .7, {css:{scaleY:"1", scaleX:"1", alpha:"1", left:"0"}, delay:1.8, ease:Back.easeOut.config(1.3)}); 								
TweenMax.to(con_text_protected, 1.2, {css:{alpha:"1", left:"0"}, delay:1.5, ease:Quint.easeInOut}); 								
TweenMax.to(con_partner, .6, {css:{scaleY:"1", scaleX:"1", alpha:"1"}, delay:2.5, ease:Quint.easeInOut});

TweenMax.to(poverty_main_pic, 1, {css:{rotation:"0", scaleY:"1", scaleX:"1", alpha:"1", left:"0"}, delay:.5, ease:Quint.easeOut}); 								
TweenMax.to(poverty_rise_logo, 1.2, {css:{scaleY:"1", scaleX:"1", alpha:"1", top:"0"}, delay:.2, ease:Back.easeOut.config(1.7)}); 							
TweenMax.to(poverty_text_support, 1.2, {css:{alpha:"1", left:"0"}, delay:1.1, ease:Quint.easeOut}); 								
TweenMax.to(poverty_text_10m, .6, {css:{scaleY:"1", scaleX:"1", alpha:"1"}, delay:1.4,ease:Quint.easeInOut});									
TweenMax.to(poverty_text_people, .6, {css:{scaleY:"1", scaleX:"1", alpha:"1"}, delay:2, ease:Quint.easeInOut});								
TweenMax.to(poverty_text_22nations, .6, {css:{scaleY:"1", scaleX:"1", alpha:"1"}, delay:2.6, ease:Quint.easeOut});								
TweenMax.to(poverty_text_education, 1.2, {css:{alpha:"1", left:"0"}, delay:2, ease:Quint.easeInOut}); 								
TweenMax.to(poverty_text_health, 1, {css:{alpha:"1", left:"0"}, delay:2.2, ease:Quint.easeInOut}); 								
TweenMax.to(poverty_partner, .6, {css:{scaleY:"1", scaleX:"1", alpha:"1"}, delay:.6, ease:Quint.easeInOut});							


TweenMax.to(hunger_text_1, 1, {css:{scaleY:"1", scaleX:"1", alpha:"1"}, delay:.5, ease:Quint.easeInOut}); 									
TweenMax.to(hunger_main_pic, .8, {css:{rotation:"0", scaleY:"1", scaleX:"1", alpha:"1", top:"0", left:"0"}, delay:.5, ease:Quint.easeOut});  								
TweenMax.to(hunger_turnup_logo, 1, {css:{rotation:"0", scaleY:"1", scaleX:"1", alpha:"1", top:"0", left:"0"}, delay:.6, ease:Quint.easeInOut}); 							
TweenMax.to(hunger_text_provided, 1.2, {css:{alpha:"1", top:"0"}, delay:1, ease:Quint.easeInOut}); 								
TweenMax.to(hunger_partner, .6, {css:{scaleY:"1", scaleX:"1", alpha:"1"}, delay:.6, ease:Quint.easeInOut});							



