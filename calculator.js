  function calculator() {
        var total = $(".stuffi .total p");
    
      var price = {
    
            area: 29,
            perimeter: 7.5,
            angle: 8,
            lamp: 14.0,
            chandelier1: 16.0,
            chandelier2: 36.0,
            oval: 9.6,
            cant: 3.5
    
        };
    
        var inputs = {
    
            area: $('input[name=area]'),
            perimeter: $('input[name=perimeter]'),
            angle: $('input[name=angle]'),
            lamp: $('input[name=lamp]'),
            chandelier1: $('input[name=chandelier1]'),
            chandelier2: $('input[name=chandelier2]'),
            oval: $('input[name=oval]'),
            cant: $('input[name=cant]')
    
        };
        updateTotal();
        $('.stuffi input').on('change', function () {
            updateTotal();
        });
        function updateTotal() {
            total.text(calcPrice().toFixed(2))
        }
        function calcPrice() {
    
            var _price = 0;
    
            for(let key in inputs){
    
                if(key != 'cant'){
    
                    var val = inputs[key].val();
    
                    if(val == '') {
                        inputs[key].val(0);
                    }
                    val = val == '' ? 0 : parseFloat(val);
    
                    if(key == 'angle' || key == 'lamp' || key == 'chandelier1' || key == 'chandelier2') {
                        val = parseInt(val);
                        inputs[key].val(val);
                    }
    
                    if(key == 'angle'){
                       
    
                        val = val <= 4 ? 0 : val - 4;
    
                    }
    
                    _price += val * price[key];
    
                }
    
            }
    
            var cant = inputs.cant.is(':checked');
            if(cant == true){
    
                console.log('cant', cant)
    
                var val = inputs.perimeter.val();
    
                _price += val * price.cant;
    
            }   
            return _price;
        }
    }

    calculator();
    

   
    
   
    