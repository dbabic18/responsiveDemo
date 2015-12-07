 var listMat= document.getElementById('listMat');
        listMat.getElementsByClassName('anchor')[0].onclick = function (evt) {
            if (listMat.classList.contains('visible'))
                listMat.classList.remove('visible');
            else
               listMat.classList.add('visible');
        }
        listMat.onblur = function(evt) {
            listMat.classList.remove('visible');
        }