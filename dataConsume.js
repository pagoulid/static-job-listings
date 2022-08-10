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
    }];


data.forEach((element)=>{
    var keys = Object.keys(element);


    var parent = document.getElementById('item_list');
    
    var div = document.createElement("div");
    
    CreateGrid(div,element);


    parent.appendChild(div);
});

function CreateGrid(div,element){
    var DIVstyles ={
        "display":"grid",
        "grid-template-columns": "[column1-start] max-content [column1-end column2-start] 3fr [column2-end column3-start] max-content [column3-end]",
        "grid-template-rows":"[row1-start] max-content [row1-end row2-start] max-content [row2-end row3-start] 2fr [row3-end]"
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
        "list-style":"none"
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
                            "padding":"0"
                        },
                        {
                            "display":"inline-block",
                            "margin-left":"3px",
                            "font-size":"smaller",
                            "color":"rgb(8, 83, 4)",
                            "background-color":"rgba(34, 227, 69, 0.727)"

                });






    

    var styles1 = {
        "grid-row-start": "row2-start",
        "grid-column-start": "column1-start"
    };
    var styles2 = {
        "grid-row-start": "row1-start",
        "grid-column-start": "column2-start"
    };
    var styles3 = {
        "grid-row-start": "row2-start",
        "grid-column-start": "column2-start"
    };
    var styles4 = {
        "grid-row-start": "row3-start",
        "grid-column-start": "column2-start"
    };

    var styles5 = {
        "grid-row-start": "row2-start",
        "grid-column-start": "column3-start"
    };
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




    /*for( var key of keys){

        var li = CreateAndAppend(element[key],key);
        ul.appendChild(li);

    }*/

    
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
        "list-style":"none"
    };

    var li_styles ={
        "display":"inline-block",
        "padding-left":"8px"

    };
    /*styles*/ 
    var Topdiv = document.createElement("div");
    
    var ul=document.createElement("UL");

    

    var company_list = getListElement(company,li_styles);

    /* If new and featured */
    var fbool = false;
    var nbool = false;

    if(Ifnew){
        nbool=true;
        var new_list = getListElement("New",li_styles);
        
    }

    if(Iffeatured){
        fbool=true;
        var featured_list = getListElement("Featured",li_styles);

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



    /*var ul_styles ={
        "list-style":"none"
    };

    var li_styles ={
        "display":"inline-block",
        "padding-left":"8px",
        "font-size":"smaller",
        "color":"grey"

    };*/

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


