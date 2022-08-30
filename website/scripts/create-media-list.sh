#!/bin/bash
CHANNEL="https://www.youtube.com/channel/UCKYXBIuddRoeq6hj1xpDGRA"
YOUTUBE_OUTPUT=$(youtube-dl --get-filename -o '{"date":%(upload_date)s,"title":"%(title)s","url":"https://www.youtube.com/watch?v=%(id)s"},' $CHANNEL | sort -u)
(
    echo '['
    echo ${YOUTUBE_OUTPUT::-1}
    echo ']'

) > ../src/data/unstacked-media.json