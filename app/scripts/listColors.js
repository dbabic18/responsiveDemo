 var listColor = document.getElementById('listColor');
        listColor.getElementsByClassName('anchor')[0].onclick = function (evt) {
            if (listColor.classList.contains('visible'))
                listColor.classList.remove('visible');
            else
               listColor.classList.add('visible');
        }
        listColor.onblur = function(evt) {
            listColor.classList.remove('visible');
        }