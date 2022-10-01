import cv2
import numpy as np

def color_quantization( img, k):
    data = np. float32(img).reshape((-1, 3))
    criteria = (cv2. TERM_CRITERIA_EPS +cv2.TERM_CRITERIA_MAX_ITER, 20, 0.081)
    ret, label, center = cv2.kmeans(data, k, None, criteria,10,cv2.KMEANS_RANDOM_CENTERS)
    center = np.uint8(center)
    result = center[label. flatten()]
    result = result. reshape( img. shape)
    return result

def edge_mask( img, line_size, blur_velue):
    gray = cv2.cvtColor( img, cv2.COLOR_BGR2GRAY)
    gray_blur = cv2.medianBlur( gray, blur_value)
    edges = cv2.adaptiveThreshold(gray_blur, 255,cv2.ADAPTIVE_THRESH_MEAN_C, cv2.THRESH_BINARY,line_size,blur_value)
    return edges
img=cv2.imread("DSCN1055.jpg")
line_size=7
blur_value=7
edges = edge_mask(img, line_size, blur_value)  
total_color = 9
img = color_quantization( img, total_color)    

blurred = cv2.bilateralFilter(img,d=7,sigmaColor=200,sigmaSpace=200)
cartoon=cv2.bitwise_and(blurred,blurred,mask=edges)
cv2.imwrite("carton.png",cartoon)