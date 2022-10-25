# converting video to gray and black and white
from cv2 import imshow
import numpy as np

import cv2 as cv

cap = cv.VideoCapture("resources/video.mp4")

#reading and playing

while(True):
    (ret, frame )= cap.read()
    gray_frame = cv.cvtColor(frame, cv.COLOR_BGR2GRAY)
    (thresh, binary) = cv.threshold(gray_frame, 127, 255, cv.THRESH_BINARY)
    # to show fideo
    if ret == True:
        cv.imshow("Video", binary)
        # to quit with q key
        cv.waitKey(1) & 0xFF == ord('q')
    else:
        break

cap.release()
cv.destroyAllWindows()
