/**
	JSIAMind_22 :
		IA Mind of "Chaton"
		@date: 08/06/2013
**/

///Variables
var Logger = Tera.Libs.Logger;

///Constructor
function construct(){}

///When a virtual fighter must play
function Play(IA)
{
	with(IA){
		switch (UsedNeurons)
        {
			case 1:{
				InitCells();
				Subbuff();
				break;
			}
			case 2:{
				InitCells();
				Attack();
				break;
			}
			case 3:{
				InitCells();
				Attack();
				break;
			}
			case 4:{
				InitCells();
				Attack();
				break;
			}
			case 5:{
				InitCells();
				moveToEnnemy();
				break;
			}
			default:{
				Stop();
				break;
			}
		}
	}
}
