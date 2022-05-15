let data = [{
        "id": 1,
        "group": "banana",
        "video_url": "https://vimeo.com/140636133",
        "video_frame": `<iframe src="https://player.vimeo.com/video/140636133?h=c643e50f23" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`
    },
    {
        "id": 2,
        "group": "beans",
        "video_url": "https://player.vimeo.com/video/138557845?h=a9357ef612",
        "video_frame": `<iframe src="https://player.vimeo.com/video/138557845?h=a9357ef612" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
<p>`

    },
    {
        "id": 3,
        "group": "control",
        "video_url": "https://www.youtube.com/watch?v=SjHUb7NSrNk",
        "video_frame": `<iframe width="560" height="315" src="https://www.youtube.com/embed/SjHUb7NSrNk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }
];

const form = document.getElementById('form');
const student_id = document.getElementById('IDInput');
const main = document.querySelector(".main");

function playVideo(video_url, video_frame) {
    console.log(`Playing video ${video_url}`)
    main.innerHTML = `
        <div class="container video">
        <div class="row">
            ${video_frame}
            </div>
    </div>
    
    `
}


function formSubmit(event) {
    console.log(`Form submitted with ID: ${student_id.value}`);
    for (let i = 0; i < data.length; i++) {
        if (data[i].id == student_id.value) {

            playVideo(data[i].video_url, data[i].video_frame);
        }
    }

    event.preventDefault();
}


form.addEventListener('submit', formSubmit);