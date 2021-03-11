// Will store the style preferences in an object of class Style 
//For this we will construct a Style class 
class Style {
    constructor(fontFamily, fontColor, backgroundColor, graphic){
        this.fontFamily = fontFamily;
        this.fontColor = fontColor;
        this.backgroundColor = backgroundColor;
        this.graphic = graphic;
    }
}

let styleSet = [0, 1, 2, 3];

//GET THE STYLE PANEL THAT WILL DROP DOWN ONCE THE AROW BUTTON IS CLICKED
//------------------------------------------------------------------------
const stylePanel = document.getElementById('style_panel');
//------------------------------------------------------------------------
//------------------------------------------------------------------------

//GET THE ARROW FROM THE DROP MENU BUTTON 
const styleArrow = document.getElementById('styleArrow');
//------------------------------------------------------------------------
//------------------------------------------------------------------------

//SET BOOLEAN CHECKERS FOR IF THE MENU IS OPEN AND IF IT'S RUNNING -------
//------------------------------------------------------------------------
let isStylePanelRunning = false;

let isStyleMenuOpen = false;
//------------------------------------------------------------------------
//------------------------------------------------------------------------


//-------------------------------------------------DROP DOWN MENU-----------------------------------------------------
//CREATE FUNCTIONS TO DROP AND HIDE THE STYLE MENU -----------------------
//------------------------------------------------------------------------
function dropStylePanel(){
    isStylePanelRunning = true;

    changeMenuButton();

    let element = stylePanel;
    
    let elementTop = -17;

    let frames = setInterval(drop,10);

    function drop(){
    
        if(elementTop === 0){

        clearInterval(frames);

        isStylePanelRunning = false;
        
        isStyleMenuOpen = true;
        
      }
      else{
        
        elementTop++;
        
        element.style.top=elementTop+"vh";
      
       }
    }
}

function closeStylePanel(){

    isStylePanelRunning = true;

    changeMenuButton();

    let element = stylePanel;
    
    let elementTop = 0;

    let frames = setInterval(hide,10);

    function hide(){
    
        if(elementTop === -17){

        clearInterval(frames);
        
        isStylePanelRunning = false;

        isStyleMenuOpen = false;
        
      }
      else{
        
        elementTop--;
        
        element.style.top=elementTop+"vh";
      
       }
    }
}
//----------------------------------------END---------------------------------------------
//-------------------------------------------------------------------------------------


//--------------------------------------------------------DROP DOWN BUTTON-----------------------------------------

//CREATE A FUNCTION TO TOGGLE THE DROPDOWN MENU BUTTON --------------------------------
//-------------------------------------------------------------------------------------

let styleMenuButtonShowingDown = true;

function dropMenuButtonUp(){
    let element = styleArrow;
    
    let elemetScale = 1;
    
    element.style.transform="scaleY(1)";

    element.style.transformOrigin="center";
    
    element.style.transformBox="fill-box";

    let frames = setInterval(scale, 10);

    function scale(){
        if(elemetScale <= -1){
            clearInterval(frames);
            element.style.transform="scaleY(-1)";
            styleMenuButtonShowingDown = false;
        }else{
            element.style.transform=`scaleY(${elemetScale})`;
            elemetScale-=0.1;
        }
    }
}

function dropMenuButtonDown(){
    let element = styleArrow;
    
    let elemetScale = -1;
  
    element.style.transform="scaleY(-1)";


    element.style.transformOrigin="center";
    
    element.style.transformBox="fill-box";

    let frames = setInterval(scale, 10);

    function scale(){
        if(elemetScale >= 1){
            clearInterval(frames);
            element.style.transform="scaleY(1)";
            styleMenuButtonShowingDown = true;
        }else{
            element.style.transform=`scaleY(${elemetScale})`;
            elemetScale+=0.1;
        }
    }
}


//CLOSE EACH TWO FUNCTIONS FOR FORWARD AND BACKWARDS TOGGLE IN ONE FUNCTION WITH A TRUE FALSE STATMENT 
//----------------------------------------------------------------------------------------------------
function changeMenuButton(){

(styleMenuButtonShowingDown) ? dropMenuButtonUp() : dropMenuButtonDown();
}

//------------------------------------------------------------------------
//------------------------------------------------------------------------

function styleMenuToggle(){

    (isStyleMenuOpen) ?  closeStylePanel() : dropStylePanel();


}

//-----------------------------------------END-------------------------------
//------------------------------------------------------------------------


//-- ICONS ON HOVER ----------------------------------------------------------

const fontFamilyIcon = document.getElementById('fontFamily');

const fontColorIcon = document.getElementById('fontColor');

const pageColorIcon = document.getElementById('backgroundColor');

const graphicIcon = document.getElementById('graphic');

const iconInfoPop = document.getElementById('iconInfoPop');

const fontFamilyInfo = "Icons/Font_family_pop.svg";

const fontColorInfo = "Icons/Font_color_pop.svg";

const backgroundColorInfo = "Icons/Page_color_pop.svg";

const graphicInfo = "Icons/Graphic_pop.svg";

let infoPopIsOn = false;

function openInfoPop(scr){

    if (infoPopIsOn) iconInfoPop.style.display="none";

    if(popForStyleOpen !== true){

    infoPopIsOn = true;
    
    infoPop.src=scr;
    
    iconInfoPop.style.display="block"   
    
}

}

function closeInfoPop(){

    infoPopIsOn = false;
    iconInfoPop.style.display="none"   
      
}

//-----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------

const frostBack = document.getElementById('frostBack');

let popForStyleOpen = false;

const fontFamilyMenu = document.getElementById('fontBack');

const graphicInfoPop = document.getElementById('graphicInfoPop');

const graphicPop = document.getElementById('graphicPop');

const csGender = document.getElementById('csGender');

const graphicInfoScrArray = 
["Icons/mechanic_pop.svg", //0
"Icons/customer_service_pop.svg", //1 
"Icons/IT_pop.svg" , //2 
"Icons/Photographer_pop.svg",//3
"Icons/writer_pop.svg", //4
"Icons/Artist_pop.svg", //5
"Icons/Gym_pop.svg", //6
"Icons/medic_pop.svg"] //7


let isAMenuOpen = false;

let whatMenuIsOpen = undefined;



function openMenu(element, option){
    

    if(option === undefined || option === null) console.log("Original Menu Open");

    if(option === true) willBeAppliedFont = true;
    if(option === false) willBeAppliedFont = false;
    
    if(isAMenuOpen) whatMenuIsOpen.style.display = "none";
       
        iconInfoPop.style.display="none";

        whatMenuIsOpen = element;
    
    if(whatMenuIsOpen !== csGender) styleMenuToggle();

        frostBack.style.display="block";

        popForStyleOpen = true;

        element.style.display = "block";
        
        isAMenuOpen = true;  
  };

function closeMenu(){
    

    whatMenuIsOpen.style.display = "none";

    isAMenuOpen = false;

    frostBack.style.display="none";

    popForStyleOpen = false;

    whatMenuIsOpen = undefined;

};

function popGraphicInfo(which_src){
       
    graphicPop.src=graphicInfoScrArray[which_src];
    graphicInfoPop.style.display="block";

}

function closeGraphicInfo(){
    graphicInfoPop.style.display="none";
}

const graphic_holder = document.getElementById("graphic_holder");

const graphicMechanic = 'Icons/mechanic_template.svg';

const graphicMaleCS = 'Icons/male_cs_temlate.svg';

const graphicFimaleCS = 'Icons/fimale_cs_temlate.svg';

const graphicCoder = 'Icons/coder_graphic_template.svg';

function applyGraphic(graphicTemplate){
    closeMenu();
    cvPage.style.backgroundImage=`url(${graphicTemplate})`

}

const cvPage = document.getElementById('cvPage');

let willBeAppliedFont = undefined;

const theFont = cvPage.style.color;

const theBg = cvPage.style.backgroundColor;

const Merriweather = "Merriweather";

const Comfortaa = "Comfortaa";

const Montserrat = "Montserrat";

const MontserratButton = document.getElementById('Montserrat');

const MerriweatherButton = document.getElementById('Merriweather');

const ComfortaaButton = document.getElementById('Comfortaa');

let currentFont = undefined;



function chooseFont(font, option){
    
    option.style.transformOrigin="center";

    option.style.transformBox="fill-box";

    option.style.transform="scale(0.7)";

    cvPage.style.fontFamily = font;
    
    styleSet[0] = font;

    console.log(`%c ${font} was selected for Font Family. AaBbCc123`, `font-size: 1rem`);

    closeMenu();

};


const DeepGray = "rgb(40, 40, 40)";

const DeepDarkGrayButton = document.getElementById('DeepDarkGray');

const Maroon = "rgb(128, 0, 0)";

const MaroonButton = document.getElementById('Maroon');

const Gold = "rgb(184, 134, 11)";

const DarkGoldButton = document.getElementById('DarkGold');

const Blue = "rgb(7, 7, 59)";

const MidnightBlueButton = document.getElementById('MidnightBlue');

const SlateGray = "rgb(47, 79, 79)";

const DarkSlateGrayButton = document.getElementById('DarkSlateGray');

const Indigo = "rgb(62, 0, 106)";

const IndigoButton = document.getElementById('Indigo');

const Olive = "rgb(89, 89, 0)";

const OliveButton = document.getElementById('Olive');

const Salmon = "rgb(204, 113, 83)";

const SalmonButton = document.getElementById('Salmon');

let fontColorSelected = undefined;

let backgroundColorSelected = undefined;

let fontColorCode = undefined;

let backgroundColorCode = undefined;

let colorSelectorCounter = 0;

const bgColorSample = document.getElementById('bgColorSample');

const colorPickerOne = document.getElementById('colorPickerOne');

const colorPickerTwo = document.getElementById('colorPickerTwo');

const colorPickerButton = document.getElementById('palletButton');

const colorMenuArrow = document.getElementById('colorMenuArrow');

const colorArrowFrame = document.getElementById('colorMenu');

const colorHolder = document.getElementById('colorHolder');


function chooseColor(color, colorButton){

    

    if(cvPage.style.color === color || cvPage.style.backgroundColor === color){return false;}

    else{

    if (willBeAppliedFont === true) {
     

    if(fontColorSelected === undefined) {
        fontColorSelected = colorButton; 
        fontColorSelected.style.transform = "scale(0.8)";
        fontColorSelected.style.transformOrigin = "center";
        fontColorSelected.style.transformBox = "fill-box";
        fontColorSelected.style.opacity = 0.5; 
        fontColorSelected.classList.remove("styleButton")
    }

    if(fontColorSelected !== undefined) {
        fontColorSelected.style.transform = "scale(1)";
        fontColorSelected.style.opacity = 1; 
        fontColorSelected.classList.add("styleButton");
        fontColorSelected = colorButton; 
        fontColorSelected.style.transform = "scale(0.8)";
        fontColorSelected.style.transformOrigin = "center";
        fontColorSelected.style.transformBox = "fill-box";
        fontColorSelected.style.transformOrigin = "center";
        fontColorSelected.style.transformBox = "fill-box";
        fontColorSelected.style.opacity = 0.5; 
        fontColorSelected.classList.remove("styleButton")
    }
    
    cvPage.style.color = color; 
    
    console.log(`%c ${color} was selected for Font Color. AaBbCc123`, `color: ${color}; font-size: 1rem`);
    
    colorHolder.style.display="none";

    isAMenuOpen = false;

    frostBack.style.display="none";

    popForStyleOpen = false;

    whatMenuIsOpen = undefined;

    fontColorCode = color;
    
}


   if(willBeAppliedFont === false) {
       
       
    
    if(backgroundColorSelected === undefined) {
        backgroundColorSelected = colorButton; 
        backgroundColorSelected.style.transformOrigin = "center";
        backgroundColorSelected.style.transformBox = "fill-box";
        backgroundColorSelected.style.opacity = 0.5; 
        backgroundColorSelected.style.transform = "scale(0.8)";
        backgroundColorSelected.classList.remove("styleButton");

    }

    if(backgroundColorSelected !== undefined) {
        backgroundColorSelected.style.transform = "scale(1)";
        backgroundColorSelected.style.opacity = 1; 
        backgroundColorSelected.classList.add("styleButton");
        backgroundColorSelected = colorButton; 
        backgroundColorSelected.style.transformOrigin = "center";
        backgroundColorSelected.style.transformBox = "fill-box";
        backgroundColorSelected.style.opacity = 0.5; 
        backgroundColorSelected.style.transform = "scale(0.8)";
        backgroundColorSelected.classList.remove("styleButton");
    }

    cvPage.style.backgroundColor = color; 
    
    console.log(`%c ${color} was selected for BackGround Color. |||||`, `color: ${color}; font-size: 1rem`);

        colorHolder.style.display="none";

        isAMenuOpen = false;

        frostBack.style.display="none";

        popForStyleOpen = false;

        whatMenuIsOpen = undefined;

        backgroundColorCode = color;
   
  } 
    }
      
     
    if((fontColorSelected !== undefined) && (backgroundColorSelected !== undefined)) document.getElementById('switchIcon').style.display="block";
};



function switchColors(){

    cvPage.style.color = backgroundColorCode;

    cvPage.style.backgroundColor = fontColorCode;

    let colorArrayNames = [fontColorSelected, backgroundColorSelected];

    fontColorSelected = colorArrayNames[1];

    backgroundColorSelected = colorArrayNames[0];

    let colorArrayCodes = [fontColorCode, backgroundColorCode];

    fontColorCode = colorArrayCodes[1];

    backgroundColorCode = colorArrayCodes[0];



}

let colorPickerIs = 1;

function colorArrowLeft(){

    let element = colorMenuArrow;
    
    let elementRotateX = 0;

    element.style.transformOrigin="center center";
    
    element.style.transformBox="fill-box";

    let frames = setInterval(rotate, 1);

    function rotate(){
        if(elementRotateX <= -180){
            clearInterval(frames);

            element.style.transform="translate(-15%) rotate(-180deg)";
            
            
        }else{
            element.style.transform=`rotate(${elementRotateX}deg)`;
            
            elementRotateX-=5;
            
        }
    }
}

function colorArrowRight(){
    
    scaleColorButtonFrame();
    
    let element = colorMenuArrow;
    
    let elementScaleX = -1;
    
    element.style.transformOrigin="center center";
    
    element.style.transformBox="fill-box";

    let frames = setInterval(scale, 10);

    function scale(){
        if(elementScaleX >= 1){
            clearInterval(frames);
            element.style.transform="scaleX(1)";
            
        }else{
            element.style.transform=`scaleX(${elementScaleX})`;
            elementScaleX+=0.1;
        }
    }
}
function scaleColorButtonFrame(){

    let element = colorArrowFrame;
    
    let elementScale = 1;
    
    element.style.transformOrigin="center";
    
    element.style.transformBox="fill-box";

    let frames = setInterval(scale, 25);

    function scale(){
        if(elementScale <= 0.5){
            
            clearInterval(frames);
            
            element.style.transform="scale(0.5)";
            
            let elementTwo = colorArrowFrame;
    
            let elementScaleTwo = 0.5;
    
            let framesTwo = setInterval(scaleTwo, 25);
            
            function scaleTwo(){

                if(elementScaleTwo >= 1){
                    
                    clearInterval(framesTwo);

                    elementTwo.style.transform="scale(1)";
                }else{
                    
                    elementTwo.style.transform=`scale(${elementScaleTwo})`;
                    
                    elementScaleTwo+=0.1;
                }
            }
            
        }else{
            element.style.transform=`scale(${elementScale})`;
            elementScale-=0.1;
        }
    }

}

function changePicker(){
   
if(colorPickerIs === 1){
    let leftOne = 0;

    let leftTwo = 30;

    let elementOne = colorPickerOne;

    let elementTwo = colorPickerTwo;

    let frames = setInterval(shiftColorPicker,10);

    colorArrowLeft();

    function shiftColorPicker(){

        if(leftOne === -30){
            
            clearInterval(frames);
            
            elementOne.style.left = -30 + "vw";
            
            elementTwo.style.left = 0 + "vw";

            colorPickerIs = 2;


        }else{
            elementOne.style.left = leftOne + "vw";

            leftOne--;

            elementTwo.style.left = leftTwo + "vw";

            leftTwo--;

           }
        }
     } else if(colorPickerIs === 2){
        
        let leftOne = -30;

        let leftTwo = 0;
    
        let elementOne = colorPickerOne;
    
        let elementTwo = colorPickerTwo;

        colorArrowRight();
    
        let frames = setInterval(shiftColorPicker,10);
        
        function shiftColorPicker(){
    
            if(leftOne === 0){
                
                clearInterval(frames);
                
                elementOne.style.left = 0 + "vw";
               
                elementTwo.style.left = 30 + "vw";
               
                colorPickerIs = 1;
    
            }else{
                elementOne.style.left = leftOne + "vw";
    
                leftOne++;
    
                elementTwo.style.left = leftTwo + "vw";
    
                leftTwo++;
    
               }
            }
     }

}



