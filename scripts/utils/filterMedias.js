function filterMedias(arrayOfMedias, typeOfFilter){

    if(typeOfFilter === "popularity"){

        return arrayOfMedias.sort(function(a, b) {
            return b.likes - a.likes;
        });
    }

    if(typeOfFilter === "date"){

        return arrayOfMedias.sort(function (a, b) {
            let dateA = a.date;
            let dateB = b.date;
            if (dateA > dateB) {
                return -1;
            } else if (dateA === dateB) {
                return 0;
            } else {
             return 1;
            }
        });
    }

    if(typeOfFilter === "title"){

        return arrayOfMedias.sort(function (a, b) {
            if (a.title < b.title) {
                return -1;
            } else {
                return 1;
            }
        });
    }
    
}