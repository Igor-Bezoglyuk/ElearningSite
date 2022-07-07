var elements = document.getElementsByClassName('.Content5-blocks');

 for (var i = 0; i < 5; i++) { // Здесь уже начинаем с 0, так как разбираем массив
                    
            let text = ArrayMessage[i][0];  
            let login = ArrayMessage[i][1];   
            let ava = ArrayMessage[i][2]; 

            alert(text,login,ava);

            if (login == OurLogin){                   // Если сообщение от нас отображаем справа

                document.write('<div class="mess" id="me1"> <div class="message" id="me"> <img src=""> <span id="ff"></span> </div></div>');
        }
