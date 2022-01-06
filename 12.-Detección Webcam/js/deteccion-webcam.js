const d = document,
    w = window,
    n = navigator,
    ua = n.userAgent;

export default function webCam(id) {
    const $video = d.getElementById(id);

    // Objeto mediaDevices-->Es un objeto
    console.log("H");

    if (n.mediaDevices.getUserMedia) {
        n.mediaDevices.getUserMedia({video:true,audio:false}).then((stream)=>{
            console.log(stream);
            $video.srcObject=stream;
            $video.play();
        }).catch((err)=>{
            console.log(`Sucedio un error ${err}`);
            $video.insertAdjacentHTML("afterend",`<p>${e}</p>`);
        });
        // n.mediaDevices.getUserMedia({ video: true, audio: false }).then(((stream => {
        //     console.log(stream);
        //     $video.srcObject=stream;
        //     $video.play();
        // }).catch((err) => console.log(`Sucedió el siguiente error: ${err}`))
    }
}