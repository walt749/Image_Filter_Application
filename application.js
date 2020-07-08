

const canvas = document.getElementById("canvas");
const contx = canvas.getContext("2d");


let img = new Image();
let fileName = "";

const downloadBtn = document.getElementById("download-btn");
const uploadFile = document.getElementById("upload-file");
const revertBtn = document.getElementById("revert-btn");

document.addEventListener('click',(e)=> {
    if (e.target.classList.contains('filter-btn')) {
        if (e.target.classList.contains('brightness-add')) {
            Caman('#canvas', img, function () {
                this.brightness(5).render();
            });
        } else if (e.target.classList.contains('brightness-remove')) {
            Caman('#canvas', img, function () {
                this.brightness(-5).render();
            });
        } else if (e.target.classList.contains('contrast-add')) {
            Caman('#canvas', img, function () {
                this.contrast(5).render();
            });
        } else if (e.target.classList.contains('contrast-remove')) {
            Caman('#canvas', img, function () {
                this.contrast(-5).render();
            });
        } else if (e.target.classList.contains('saturation-add')) {
            Caman('#canvas', img, function () {
                this.saturation(5).render();
            });
        } else if (e.target.classList.contains('saturation-remove')) {
            Caman('#canvas', img, function () {
                this.saturation(-5).render();
            });
        } else if (e.target.classList.contains('vibrance-add')) {
            Caman('#canvas', img, function () {
                this.vibrance(5).render();
            });
        } else if (e.target.classList.contains('vibrance-remove')) {
            Caman('#canvas', img, function () {
                this.vibrance(-5).render();
            });
        } else if (e.target.classList.contains('vintage-add')) {
            Caman('#canvas', img, function () {
                this.vintage(5).render();
            });
        } else if (e.target.classList.contains('lomo-add')) {
            Caman('#canvas', img, function () {
                this.lomo(5).render();
            });
        }
        else if (e.target.classList.contains('crossprocess-add')) {
            Caman('#canvas', img, function () {
                this.crossProcess(5).render();
            });
        }
        else if(e.target.classList.contains('clarity-add')){
            Caman('#canvas', img, function(){
                this.clarity(5).render();
            });
        }else if(e.target.classList.contains('nostalgia-add')){
            Caman('#canvas', img, function(){
                this.nostalgia(5).render();
            });
        }
        else if(e.target.classList.contains('hermajesty-add')){
            Caman('#canvas', img, function(){
                this.herMajesty(5).render();
            });
        }
        else if(e.target.classList.contains('pinhole-add')){
            Caman('#canvas', img, function(){
                this.pinhole(5).render();

            });
        }






    }



});



revertBtn.addEventListener('click', e => {
    Caman('#canvas', img,function () {
        this.revert();
    });

} );

//upload
uploadFile.addEventListener("change",(e) =>{

    //get file
    const file = document.getElementById("upload-file").files[0];


    //init filereader
    const reader = new FileReader();

    if(file){
        //set file name
        fileName = file.name;
        reader.readAsDataURL(file);
    }

    reader.addEventListener("load", ()=> {

        //create img
        img = new Image();
        //set src
        img.src = reader.result;

        //on image load, add to canvas
        img.onload = function(){
         canvas.width = img.width;
         canvas.height = img.height;
         contx.drawImage(img, 0,0, img.width, img.height);
         canvas.removeAttribute('data-caman-id');

        }

    }, false)


}  );


//download event
downloadBtn.addEventListener('click', (e)=> {

    const fileExtension = fileName.slice(-4);

    //init new file
    let newFileName;

    //check image type
    if(fileExtension === '.jpg' || fileExtension === '.png'){
        newFileName = fileName.substring(0,fileName.length - 4) + '-edited.jpg';
    }

    //download function
    download(canvas, newFileName);
});


//download function
function download(canvas, filename) {

    let e;

    const link = document.createElement('a');

    link.download = filename;
    link.href = canvas.toDataURL('image/jpeg', 0.8);

    e = new MouseEvent('click');

    link.dispatchEvent(e);
}
