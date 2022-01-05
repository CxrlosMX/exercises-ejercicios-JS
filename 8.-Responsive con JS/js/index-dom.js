import responsiveMedia from "./responsive-web.js";
const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    responsiveMedia("youtube", "(min-width: 1024px)", `<a href="https://www.youtube.com/watch?v=VHoT4N43jK8" target="_blank">Ver video</a>`, `<iframe width="560" height="315" src="https://www.youtube.com/embed/5NV6Rdv1a3I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    responsiveMedia("gmaps", "(min-width: 1024px)", `<a href="https://www.youtube.com/watch?v=VHoT4N43jK8" target="_blank">Ver Mapa</a>`, `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240863.68495801158!2d-99.28369697602048!3d19.391003836620573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d201b420c8c849%3A0x84231ae36f6ec524!2sMuseo%20Nacional%20de%20Antropolog%C3%ADa!5e0!3m2!1ses-419!2smx!4v1641422499429!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`);
});
