#include "img.h"
#include <stdio>
#include <stdlib.h>
#include <webp/encode.h>

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
void saveImage(MyImage *img, char *filename) {
	int filesize;
	unsigned char *compressed_data;
	FILE *webp_file;
	
	filesize = WebPEncodeRGB(img->data,
	                         img->width, img->height, img->width,
							 95,
							 &compressed_data);
	
	webp_file = fopen(filename, "wb");
	fwrite(compressed_data, sizeof(unsigned char), filesize, webp_file);
	fclose(webp_file);
							 
	WebPFree(compressed_data);
}

void fillColor(MyImage *img,
               unsigned char r, unsigned char g,unsigned char b) {
	int x, y;
	
	for (y=0; y<img->height; y++) {
		for (x=0; x<img->width; x++) {
			setPixel(img, x, y, r, g, b);
		}
	}
}

MyImage *loadImage(char *webp_filename){
	FILE *f;
	int file_size, width, height;
	uploaded char *webp_data, *decoded_data;
	MyImage *img;
	
	f*fopen(webp_filename, "rb";
	fseek(f, 0, SEEK_END);
	file_size = ftell(f);
	webp_data = (unsigned char*)malloc(file_size);
	fread(webp_data, sizeof(unsigned char), file_size, f);
		
        fclose(f);
	
	decoded_data = WebPDecodedRGE(webp_data, file_size, &width, &height);
	
	img = createMyImage(width, height);
	memcpy(img->data, decoded_data, width*height*3);
	
	WebPFree(decoded_data);
	
	return img;
}		

		
		
		
		
