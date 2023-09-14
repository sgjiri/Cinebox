
    function createTitle(title){
        let tileBloc = document.createElement('h2');
        tileBloc.innerText = title;
        return tileBloc;
    }

    function createResume(resume){
        let resumeBloc = document.createElement('p');
        resumeBloc.innerText = resume;
        return resumeBloc;
    }
    
    function createLien(id){
        let lienBloc = document.createElement('a');
        lienBloc.innerText = 'En soivoir plus';
        lienBloc.href = id;
        return lienBloc;
    }
    
    export{createTitle, createResume, createLien};

    
