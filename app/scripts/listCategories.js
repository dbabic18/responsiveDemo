var listCat = document.getElementById('listCat');
        listCat.getElementsByClassName('anchor')[0].onclick = function (evt) {
            if (listCat.classList.contains('visible'))
                listCat.classList.remove('visible');
            else
                listCat.classList.add('visible');
        }

        listCat.onblur = function(evt) {
            listCat.classList.remove('visible');
        }