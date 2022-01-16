import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pediatrician',
  templateUrl: './pediatrician.component.html',
  styleUrls: ['./pediatrician.component.css']
})
export class PediatricianComponent  {

  pediatrician=[

    {
    drTitle:"Dr. Omkar Nath Bhakoo",
    description:"Pediatrician for children",
    drImage:"https://images.indianexpress.com/2016/07/bhook-759.jpg"
    },
    {
      drTitle:"Dr. R.N.Srivastava",
    description:"Pediatrician for women",
    drImage:"https://gumlet.assettype.com/thenewsagency%2F2021-07%2F1f604845-64a1-40c9-9b16-0dcfb1afbfe5%2FWhatsApp_Image_2021_07_15_at_6_51_27_PM.jpeg?rect=0%2C63%2C1024%2C576&w=1200&auto=format%2Ccompress&ogImage=true"
    },
    
    {
      drTitle:"Dr. Rashid Merchant",
    description:"Pediatrician ",
    drImage:"https://www.nanavatimaxhospital.org/controlpanel/uploadedfiles/gallery/1566556915_Dr.-Rashid-H-Merchant---Nanavati-Hospital.jpg"
    }
    
    
    
    ]

}
