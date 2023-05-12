var videos = document.getElementsByClassName('video');
        var currentVideoIndex = 0;

        function toggleVideo() {
            videos[currentVideoIndex].style.display = 'none';

            currentVideoIndex++;
            if (currentVideoIndex >= videos.length) {
                currentVideoIndex = 0;
            }

            videos[currentVideoIndex].style.display = 'block';
        }