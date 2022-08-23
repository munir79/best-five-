document.getElementById('calu').addEventListener('click',function(){
    const perplayercost = document.getElementById('perplayercosta');
    const getvalue=perplayercost.value;
    
    const previoustotal = document.getElementById('totalcost');
    const presentvalue=previoustotal.innerText;
    previoustotal.innerText=5*getvalue;
 
    
})

