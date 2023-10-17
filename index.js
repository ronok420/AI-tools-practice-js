const  aiuniversedata= async (data2) =>{
    const url = 'https://openapi.programming-hero.com/api/ai/tools';
    const res = await fetch(url);
    const data= await res.json();
    
    
    displayAiTools(data);

}

const displayAiTools = (data,) => {
    console.log(data);

    // Object.keys(data).forEach(key =>

    let tools = data.data.tools;
    console.log(tools); // Log the tools array to verify its content
//  tools=tools.slice(0,3);    
const showAll= document.getElementById('show-all');
let toollength=tools.length;
if(toollength > 6){
    tools= tools.slice(0,6);
    showAll.classList.remove('d-none');


}
else{


    showAll.classList.add('d-none');


}







 const phonecontainer=document.getElementById('phonecontainer');
 phonecontainer.innerHTML = '';

//    Object.keys(data).forEach(property =>{
        // const value = data[property];
        // console.log(property);
        // console.log(`Iteration ${x + 1}: Property: ${property}, Value: ${data[property]}`);
     tools.forEach((tool,index) => {
        
        let imageLink = tool.image; // Default image link
        if (index === 5) {
            imageLink = 'https://www.demandsage.com/wp-content/uploads/2022/12/Jasper-Chat-Review-DemandSage-1024x576.png';
        } else if (index === 10) {
            imageLink = 'https://images.livemint.com/img/2023/02/11/600x338/REPLIKA_1676093279258_1676093288320_1676093288320.jpg';
        }
        else{
            imageLink=tool.image;
        }

        
  
        // <i class="bi bi-calendar"></i>

           

            const aidiv= document.createElement('div');
            aidiv.classList.add('col');
            const featuresListItems = tool.features.map((features, index) => `<li>${index + 1}. ${features}</li>`).join('');

            aidiv.innerHTML=`
           
            <div class="card h-100">
            <img src="${imageLink}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">features</h5>
                <ul class="card-text">
                ${featuresListItems}
                </ul>
                
            </div>
            <hr class="my-3 "> <!-- Straight line -->
            <div class="card-body  ">
                <h5 class="card-title">${tool.name} </h5>
                <ul class="card-text   d-flex justify-content-between align-items-center">
                &#128197;  ${tool.published_in}  
               
                <i class="bi bi-arrow-right text-danger fw-bold fs-4 rounded-circle d-flex justify-content-center align-items-center p-2"  style="background-color: #D4EFDF;"></i>
                
                </ul>
               
                
            </div>
            </div>
            

            
            
            `;
          
            phonecontainer.appendChild(aidiv);



    
    });
//   document.getElementById('show-all-button').addEventListener('click',function(){
    
//     =tools.length;
// console.log();
//     aiuniversedata();

// })
document.getElementById('show-all-button').addEventListener('click', function () {
    // Update tools array to show all elements
    tools = data.data.tools;
    phonecontainer.innerHTML = ''; // Clear previous content before adding all items

    tools.forEach((tool, index) => {
        let imageLink = tool.image;
        if (index === 5) {
            imageLink = 'https://www.demandsage.com/wp-content/uploads/2022/12/Jasper-Chat-Review-DemandSage-1024x576.png';
        } else if (index === 10) {
            imageLink = 'https://images.livemint.com/img/2023/02/11/600x338/REPLIKA_1676093279258_1676093288320_1676093288320.jpg';
        } else {
            imageLink = tool.image;
        }

        const aidiv = document.createElement('div');
        aidiv.classList.add('col');
        const featuresListItems = tool.features.map((feature, featureIndex) => `<li>${featureIndex + 1}. ${feature}</li>`).join('');

        aidiv.innerHTML = `
            <div class="card h-100">
                <img src="${imageLink}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Features</h5>
                    <ul class="card-text">
                        ${featuresListItems}
                    </ul>
                </div>
                <hr class="my-3 "> <!-- Straight line -->
                <div class="card-body">
                    <h5 class="card-title">${tool.name}</h5>
                    <ul class="card-text d-flex justify-content-between align-items-center">
                        &#128197; ${tool.published_in}
                        <i class="bi bi-arrow-right text-danger fw-bold fs-4 rounded-circle d-flex justify-content-center align-items-center p-2"  style="background-color: #D4EFDF;"></i>
                    </ul>
                </div>
            </div>
        `;

        phonecontainer.appendChild(aidiv);
    });

    // Hide the 'Show All' button
    showAll.classList.add('d-none');
});


const sortButton = document.getElementById('sort-button');
sortButton.addEventListener('click', function () {
    // Call the function to sort the tools by date
    sortToolsByDate();
});

function sortToolsByDate() {
    tools.sort((a, b) => {
        // Convert the published_in dates to Date objects for comparison
        const dateA = new Date(a.published_in);
        const dateB = new Date(b.published_in);
        
        // Compare the dates and return the result
        return dateA - dateB;
    });

    // Clear the phonecontainer before adding sorted tools
    phonecontainer.innerHTML = '';

    // Render the sorted tools
    tools.forEach((tool, index) => {
        // ... (same code as before for rendering tools)


        let toolName= `${tool.name}`;

        let imageLink = tool.image;
       if ( toolName=== 'Jasper Chat') {
           imageLink = 'https://www.demandsage.com/wp-content/uploads/2022/12/Jasper-Chat-Review-DemandSage-1024x576.png';
       } else if (toolName ==='Replika') {
           imageLink = 'https://images.livemint.com/img/2023/02/11/600x338/REPLIKA_1676093279258_1676093288320_1676093288320.jpg';
       } else {
           imageLink = tool.image;
       }

        //  let imageLink = tool.image;
        // if (index === 5) {
        //     imageLink = 'https://www.demandsage.com/wp-content/uploads/2022/12/Jasper-Chat-Review-DemandSage-1024x576.png';
        // } else if (index === 10) {
        //     imageLink = 'https://images.livemint.com/img/2023/02/11/600x338/REPLIKA_1676093279258_1676093288320_1676093288320.jpg';
        // } else {
        //     imageLink = tool.image;
        // }

        const aidiv = document.createElement('div');
        aidiv.classList.add('col');
        const featuresListItems = tool.features.map((feature, featureIndex) => `<li>${featureIndex + 1}. ${feature}</li>`).join('');

        aidiv.innerHTML = `
            <div class="card h-100">
                <img src="${imageLink}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Features</h5>
                    <ul class="card-text">
                        ${featuresListItems}
                    </ul>
                </div>
                <hr class="my-3 "> <!-- Straight line -->
                <div class="card-body">
                    <h5 class="card-title">${tool.name}</h5>
                    <ul class="card-text d-flex justify-content-between align-items-center">
                        &#128197; ${tool.published_in}
                        <i class="bi bi-arrow-right text-danger fw-bold fs-4 rounded-circle d-flex justify-content-center align-items-center p-2"  style="background-color: #D4EFDF;"></i>
                    </ul>
                </div>
            </div>
        `;

        phonecontainer.appendChild(aidiv);

    });

    // Hide the 'Show All' button after sorting
    showAll.classList.add('d-none');
}




}







aiuniversedata();