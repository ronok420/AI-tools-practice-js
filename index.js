


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

                

               
                <button type="button" onclick="loadPhoneModal('${tool.id}')" class="btn " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                               <i class="bi bi-arrow-right text-danger fw-bold fs-4 rounded-circle d-flex justify-content-center align-items-center p-2"  style="background-color: #D4EFDF;  "></i>

               </button>

             
               
                



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

                        <button type="button" onclick="loadPhoneModal('${tool.id}')" class="btn " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                       
                        <i class="bi bi-arrow-right text-danger fw-bold fs-4 rounded-circle d-flex justify-content-center align-items-center p-2"  style="background-color: #D4EFDF;  "></i>

                         </button>

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
                       
                       
                        <button type="button" onclick="loadPhoneModal('${tool.id}')" class="btn " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                 <i class="bi bi-arrow-right text-danger fw-bold fs-4 rounded-circle d-flex justify-content-center align-items-center p-2"  style="background-color: #D4EFDF;  "></i>

                          </button>


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

const loadPhoneModal = async id =>{
    const url =`https://openapi.programming-hero.com/api/ai/tool/${id}`;
    const res =await fetch(url);
    const data = await res.json();
    displayModalDetails(data);
    



}
const displayModalDetails = modal =>{


    let toolId= `${modal.data.id}`;

    let imageLink = modal.data.image_link[0];
   if ( toolId === '06') 
   {
    imageLink = 'https://www.demandsage.com/wp-content/uploads/2022/12/Jasper-Chat-Review-DemandSage-1024x576.png';
} 
   else if (toolId ==='11') {
       imageLink = 'https://images.livemint.com/img/2023/02/11/600x338/REPLIKA_1676093279258_1676093288320_1676093288320.jpg';
   } else {
       imageLink = modal.data.image_link[0];
   }

   




   let featuresList = '';

   // Check if modal.data.features is an object
   if (typeof modal.data.features === 'object' && modal.data.features !== null) {
       // Iterate over the object using for...in loop
       for (let key in modal.data.features) {
           // Check if the property is an object and has a 'feature_name' property
           if (typeof modal.data.features[key] === 'object' && modal.data.features[key].hasOwnProperty('feature_name')) {
               // Assuming 'feature_name' is a property of the nested objects
               featuresList += `<li>${modal.data.features[key].feature_name}</li>`;
           }
       }
   } else {
       // Handle the case when features is not an object
       featuresList = '<li>No features available</li>';
   }

    console.log(modal);

    const modalbody=document.getElementById('mmodal-div');
    //  const features = modal.data.features.map(feature2 => `<li>${feature2}</li>`).join('');
     const integrations = modal.data.integrations.map(element => `<li>${element}</li>`).join('');
    //  const pricingHtml = modal.data.pricing.map(element => `<p>Plan: ${element.plan}, Price: ${element.price}</p>`).join('');


    const firstPlan = modal.data.pricing[0];
const secondPlan = modal.data.pricing[1];
const thirdPlan = modal.data.pricing[2];
   
    modalbody.innerHTML=`

    <div class="modal-div card border border-danger mx-2 " style="width: 25rem;">

    <h5 class="card-title">${modal.data.description}</h5>


    <div class="parent-div d-flex justify-content-center" style="background-color: #; padding: 7%; ">
                <div class="child-div" style="background-color: #ABEBC6; color: #2C3E50; margin: 2%; padding: 2%;  border-radius: 15%; ">
                    <!-- Content for the first div -->
                    <p><strong>${firstPlan.price}</strong></p>
                    <p><strong>${firstPlan.plan}</strong></p>

                       </div>

                <div class="child-div" style="background-color: #FEF5E7; color: #76D7C4; margin: 2%; padding: 2%; border-radius:15%;">
                    <!-- Content for the second div -->
                    <p><strong>${secondPlan.price}</strong></p>
                    <p><strong>${secondPlan.plan}</strong></p>


                </div>

                <div class="child-div" style="background-color: #F5B7B1; color: white; margin: 2%; padding: 2%; border-radius:15%;">
                    <!-- Content for the third div -->
                    <p><strong>${thirdPlan.price}</strong></p>
                    <p><strong>${thirdPlan.plan}</strong></p>                   
                    
                    </div>
</div>






                            
                    <div class="card-body d-flex">
                            
                            
                                    <div>
                                        <p class="card-text"></p>
                                        <h5 class="card-title">features:</h5>
                                        <ul>${featuresList}</ul>
                                    
                                    </div>




                                    <div class="mt-3"> 
                                        <h5 class="card-title">integrations:</h5>
                                        <ol>${integrations}</ol>
                                    </div>


                       </div>
                            
    </div>
                        
                          
     <div class="modal-div card border border-secondary mx-2" style="width: 25rem;">
                            <div class="card-body">
                                 <img src="${imageLink}" class="card-img-top" alt="Image Alt Text">
                                 <h5 class="card-title">${modal.data.input_output_examples[0].input}</h5>
                                 <p class="card-text">${modal.data.input_output_examples[0].output}</p>
                             
                              
                            </div>
                            
     </div>

                         
                         
                          
    
    `;
}





aiuniversedata();
