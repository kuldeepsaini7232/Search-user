const search=document.getElementById("userInput");
const matchList=document.getElementById("matchList");

//fetch data.json and filter it
const userSearch=async searchUser=>{
    const res=await fetch("data.json");
    const user=await res.json();
    let matchData=user.filter(data=>{
        const regex=new RegExp(`^${searchUser}`,'gi');
        return data.id.match(regex) || data.name.match(regex) || data.address.match(regex) ||data.pincode.match(regex);
    });
    if(matchData.length===0)
    {
        matchData=[];
        matchList.innerHTML='';
    }
    //show results in html
    showData(matchData);
};
const showData=matchData=>{
    if(matchData.length>0)
    {
       const html=matchData.map(n=>`
       <div class="user">
       <h4>userId:${n.id}</h4>
       <h4>userName:${n.name}</h4>
       <h4>address:${n.address}</h4>
       <h4>pincode:${n.pincode}</h4>
       </div>
       `
     ).join();
     matchList.innerHTML=html;
    };
  
}
search.addEventListener("input",()=>{
    userSearch(search.value)
});

