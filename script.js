let f5 = false;let f8 = false;
let f7 = false;
let f1 = false;let f4 = false;
let f2 = false;let f3 = false;
function validate_name(){
        
        let x = document.getElementById("name").value;
        let text;
        if(x=="")
        {
          text = "Name can't be empty!";
        }
        else{
          text = "Nice Name!!";
          f1 = true;
        }
      
        document.getElementById("name-op").innerHTML = text;
      }
      
      function validate_reg()
      {
        
        let x1 = document.getElementById("reg").value;
        let text;
        if(x1=="")
        {
          text = "Reg Number can not be empty";
          document.getElementById("reg-op").innerHTML = text;
        }
        else
        {
          if(x1.length != 9)
            {
              text = "Enter Valid Reg No";
              document.getElementById("reg-op").innerHTML = text;
            }
          else{
            let f = 0;
            for(let i=0;i<x1.length;i++)
            {
              if(i==0)
              {
                let s1 = x1.substr(0,2);
                if(isNaN(s1))
                {
                  text = "The first two characters should be numbers!"
                  document.getElementById("reg-op").innerHTML = text;
                  f = 1;
                }  
              }
              else if(i==2)
              {
                let sub = x1.substr(2,3);
                if(sub === "BCE" || sub === "ECE" || sub==="ECM" || sub==="BSC")
                  {
                  }
                  else
                  {
                    text = "Enter the valid Department"
                    f=1;
                    document.getElementById("reg-op").innerHTML = text;
                  }
              }
              else if(i==5)
              {
                  // let sub = x1.substr(2,3);
                  let sub1 = x1.substr(5,4);
                  
                  if(isNaN(sub1))
                  {
                    text = "The last four digit should be numbers!!";
                    f=1;
                    document.getElementById("reg-op").innerHTML = text;
                  }
                }
      
              }
              if(!f)
              {
                text = "Valid reg No!";
                document.getElementById("reg-op").innerHTML = text;
                f2 = true;
              }
            }
          }
      
      }
      function validate_year(){
        
        let x = document.getElementById("year").value;
        let text;
        if(x=="")
        {
          text = "Institute can't be empty!";
        }
        else{
          text = "Go Ahead!!";
          f3=true;
        }
      
        document.getElementById("year-op").innerHTML = text;
      
      }
      
      function validate_address(){
        
        let x = document.getElementById("add").value;
        let text;
        if(x=="")
        {
          text = "Address can not be empty!";
          document.getElementById("address-op").innerHTML = text;
        }
        else{
          text = "Valid Address";
          f4 = true;
          document.getElementById("address-op").innerHTML = text;
        }
      }
      
      function validate_city_state(){
        
        let x1 = document.getElementById("city").value;
        // let x2 = document.getElementById("state").value;
        let text; 
        if(x1=="")
        {
          text = "Please Enter the Research Interest!";
          document.getElementById("city-op").innerHTML = text;
        }
        else{
          text = "Valid Research Interets";
          f5 = true;
          document.getElementById("city-op").innerHTML = text;
        }
      
      }
      
      function validate_mail()
      {
        
        let x = document.getElementById("mail").value;
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let text;
        if(x.match(mailformat))
        {
          text = "Valid Email Address!!";
          f7 = true;
          document.getElementById("mail-op").innerHTML = text;
        }
        else{
          text = "Invalid Email Address!!";

          document.getElementById("mail-op").innerHTML = text;
        }
      }
      
      function validate_mobile(){
        
        let x = document.getElementById("mobile").value;
        let text;
        var phoneno = /^\d{10}$/;
        if(x.match(phoneno))
        {
          text = "Valid Phone Number";
          f8 = true;
          document.getElementById("mobile-op").innerHTML = text;
        }
        else{
          text = "InValid Phone Number";
          document.getElementById("mobile-op").innerHTML = text;
        }
      }
      
      function reload(){
        window.location.reload();
      }

      function check(){
        if(f1==true || f2==true || f3==true || f4==true || f5==true || f7==true || f8==true)
        {
                document.getElementById("final-op").innerHTML = "You have successfully Submitted!";
        }
        else{
                document.getElementById("final-op").innerHTML = "There is an error!!";       
        }
      }
      
      