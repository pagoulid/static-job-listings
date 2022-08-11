var data = [
    {
      "id": 1,
      "company": "Photosnap",
      "logo": "./images/photosnap.svg",
      "new": true,
      "featured": true,
      "position": "Senior Frontend Developer",
      "role": "Frontend",
      "level": "Senior",
      "postedAt": "1d ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["HTML", "CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 2,
      "company": "Manage",
      "logo": "./images/manage.svg",
      "new": true,
      "featured": true,
      "position": "Fullstack Developer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1d ago",
      "contract": "Part Time",
      "location": "Remote",
      "languages": ["Python"],
      "tools": ["React"]
    },

    {
        "id": 3,
        "company": "Account",
        "logo": "./images/account.svg",
        "new": true,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2d ago",
        "contract": "Part Time",
        "location": "USA Only",
        "languages": ["JavaScript"],
        "tools": ["React", "Sass"]
      },
      {
        "id": 4,
        "company": "MyHome",
        "logo": "./images/myhome.svg",
        "new": false,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "5d ago",
        "contract": "Contract",
        "location": "USA Only",
        "languages": ["CSS", "JavaScript"],
        "tools": []
      },
      {
        "id": 5,
        "company": "Loop Studios",
        "logo": "./images/loop-studios.svg",
        "new": false,
        "featured": false,
        "position": "Software Engineer",
        "role": "Fullstack",
        "level": "Midweight",
        "postedAt": "1w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "languages": ["JavaScript"],
        "tools": ["Ruby", "Sass"]
      },
      {
        "id": 6,
        "company": "FaceIt",
        "logo": "./images/faceit.svg",
        "new": false,
        "featured": false,
        "position": "Junior Backend Developer",
        "role": "Backend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "UK Only",
        "languages": ["Ruby"],
        "tools": ["RoR"]
      },
      {
        "id": 7,
        "company": "Shortly",
        "logo": "./images/shortly.svg",
        "new": false,
        "featured": false,
        "position": "Junior Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "languages": ["HTML", "JavaScript"],
        "tools": ["Sass"]
      },
      {
        "id": 8,
        "company": "Insure",
        "logo": "./images/insure.svg",
        "new": false,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "USA Only",
        "languages": ["JavaScript"],
        "tools": ["Vue", "Sass"]
      },
      {
        "id": 9,
        "company": "Eyecam Co.",
        "logo": "./images/eyecam-co.svg",
        "new": false,
        "featured": false,
        "position": "Full Stack Engineer",
        "role": "Fullstack",
        "level": "Midweight",
        "postedAt": "3w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "languages": ["JavaScript", "Python"],
        "tools": ["Django"]
      },
      {
        "id": 10,
        "company": "The Air Filter Company",
        "logo": "./images/the-air-filter-company.svg",
        "new": false,
        "featured": false,
        "position": "Front-end Dev",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "1mo ago",
        "contract": "Part Time",
        "location": "Worldwide",
        "languages": ["JavaScript"],
        "tools": ["React", "Sass"]
      }];


data.forEach((element)=>{
    


    var parent = document.getElementById('item_list');
    
    var div = document.createElement("div");
    
    CreateGrid(div,element);


    parent.appendChild(div);
});

function CreateGrid(div,element){
    var DIVstyles ={
        "display":"grid",
        "grid-template-columns": "[column1-start] max-content [column1-end column2-start] 3fr [column2-end column3-start] max-content [column3-end]",
        "grid-template-rows":"[row1-start] max-content [row1-end row2-start] max-content [row2-end row3-start] 2fr [row3-end]",
        "width":"80%",
        "height":"20%",
        "box-shadow": "0.5px 0.5px 5px 0.2px black",
        
        "border-left": "6px solid  hsl(180, 8%, 52%)",
    
        "margin":"inherit"
    }
    



   

 /*IMG*/
    var div1 = getLogo(element.logo);
    
 /*IMG*/ 

 /*company new feature list*/ 

    var div2 = getTopList(element.company,element.new,element.featured); 
   
/*Position*/ 
    var div3=getPos(element.position);

/*PostedAt contract location */ 
    var arr = [element.postedAt,element.contract,element.location];

    

    
    var div4 =getList(arr,{
        "list-style":"none",
        "padding-left":"0",
        "width":"95%"
        },
        {
        "display":"inline-block",
        "padding-left":"8px",
        "font-size":"smaller",
        "color":"grey"

    });

    var div5 =getList(element.languages.concat(element.tools),
                        {

                            "list-style":"none",
                            "padding":"0" ,
                            "margin-top":"2rem"
                        },
                        {
                            "display":"inline-block",
                            "margin-left":"3px",
                            "font-size":"smaller",
                            "color":"hsl(180, 14%, 20%)",
                            "background-color":"hsl(180, 31%, 95%)"

                });






    

    var styles1 = {
        "grid-row-start": "row2-start",
        "grid-column-start": "column1-start"
        
    };
    var styles2 = {
        "grid-row-start": "row1-start",
        "grid-column-start": "column2-start",
        "padding-left":"5px"
    };
    var styles3 = {
        "grid-row-start": "row2-start",
        "grid-column-start": "column2-start"
    };
    var styles4 = {
        "grid-row-start": "row3-start",
        "grid-column-start": "column2-start"
    };

    let styles5;
     
    
    if(window.innerWidth<=800){
        styles5= {"grid-row-start": "row2-start",
      "grid-column-start": "column2-start",
        "padding-top":"3rem",
        "padding-left":"5%s"}

    }else{
      styles5= {"grid-row-start": "row2-start",
      "grid-column-start": "column3-start"} 
    }
        
    
    Object.assign(div.style,DIVstyles);
    Object.assign(div1.style,styles1);
    Object.assign(div2.style,styles2);
    Object.assign(div3.style,styles3);
    Object.assign(div4.style,styles4);
    Object.assign(div5.style,styles5);

    
    div.appendChild(div1);
    div.appendChild(div2);
    div.appendChild(div3);
    div.appendChild(div4);
    div.appendChild(div5);

    /*Event Listeners*/ 
    window.addEventListener("resize",function(){changeOnResize(div5,{"grid-row-start": "row2-start",
    "grid-column-start": "column2-start",
      "padding-top":"3rem",
      "padding-left":"5%"}, {"grid-row-start": "row2-start",
      "grid-column-start": "column3-start",
      "padding":"0",
      } ,800)});

    }
    

function getLogo(logo){

    var div_logo = document.createElement("div");
    var img = document.createElement("img");
    img.src = logo;
    div_logo.appendChild(img);

    return div_logo;

}

function getTopList(company,Ifnew,Iffeatured){

    /*styles*/
    var ul_styles ={
        "list-style":"none",
        "padding-left":"0",
        
    };

   

    var comp_li_styles ={
        "display":"inline-block",
        "padding-left":"8px",
        "color":"hsl(180, 8%, 52%)",
        "font-weight":"bold"

    };
    /*styles*/ 
    var Topdiv = document.createElement("div");
    
    var ul=document.createElement("UL");

    

    var company_list = getListElement(company,comp_li_styles);

    /* If new and featured */
    var fbool = false;
    var nbool = false;

    if(Ifnew){
        var new_li_styles ={
            "display":"inline-block",
            "margin-left":"8px",
            "padding-left":"10px",
            "color":"white",
            "background-color":"hsl(180, 8%, 52%)",
            "width":"3rem",
            "border-radius":"9px"

    
        };

        nbool=true;
        var new_list = getListElement("NEW!",new_li_styles);
        
    }

    if(Iffeatured){

        var feat_li_styles ={
            "display":"inline-block",
            "margin-left":"8px",
            "padding-left":"10px",
            "color":"white",
            "background-color":"black",
            "width":"6rem",
            "border-radius":"9px"

    
        };
        fbool=true;
        var featured_list = getListElement("FEATURED",feat_li_styles);

    }

    /* If new and featured */

    Object.assign(ul.style,ul_styles);

    ul.appendChild(company_list);
    if(nbool){ul.appendChild(new_list);}
    if(fbool){ul.appendChild(featured_list);}

    Topdiv.appendChild(ul);

    return Topdiv;


}

function getPos(position){
    var pos_styles={
        "padding-top":"2rem",
        "padding-left":"5%"
    }
    var pos_div = document.createElement("div");
    var text = document.createTextNode(position);
    
    pos_div.appendChild(text);

    Object.assign(pos_div.style,pos_styles);
    return pos_div;

}

function getList(array,ul_styles,li_styles){

    var Bottom_div=document.createElement("div");
    var ul=document.createElement("UL");



   

    Object.assign(ul.style,ul_styles);

    for(item of array){
        var list_element = document.createElement("li");
        var text = document.createTextNode(item);
        list_element.appendChild(text);
        Object.assign(list_element.style,li_styles);

        ul.appendChild(list_element);
  
    }

    Bottom_div.appendChild(ul);
    return Bottom_div;



}


function getListElement(text,styles){

    var list = document.createElement("li");
    var textNode = document.createTextNode(text);
    list.appendChild(textNode);

    Object.assign(list.style,styles);

    return list;


}

function changeOnResize(element,Lstyle,Gstyle,onWidth){
    var styles;
    
    if(window.innerWidth<=onWidth){
        styles= Lstyle;

    }else{
      styles= Gstyle;
    }

    Object.assign(element.style,styles);
}


