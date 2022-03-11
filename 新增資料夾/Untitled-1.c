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