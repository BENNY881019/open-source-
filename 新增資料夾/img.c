#include "img.h"
#include <stdlib.h>

MyImage *createMyimage(int width, int height){
	MyImage *img;
	
	img = (MyImage*)malloc(sizeof(MyImage));
	img->width = width;
	img->height = height;
	img->data = (unsigned char *)malloc(sizeof(unsigned char)*3*width*height);
	return img;
}

void freeMyImage(MyImage *img){
     free(img->data);
	 free(img);
}	 

unsigned char *getPixel(MyImage *img, int x, int y){
	int k;
	
	k = 3*(img->width*y+x);
	return img->data+k;
}

void setPixel(MyImage *img, int x, int y,
              unsigned char r, unsigned char g, unsigned b) {
   unsigned char *pixel;
   
   pixel = getPixel(img, x, y);
   pixel[0];
   pixel[1];
   pixel[2];   
}
