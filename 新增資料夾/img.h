#ifndef _img_h
#define _img_h

typedef struct _MyImage {
	int width;
	int height;
    unsigned char *data;
}MyImage;

MyImage *createMyImage(int width, int height);
void freeMyImage(MyImage *img);
unsigned char *getPixel(MyImage *img, int x, int y);
void setPixel(MyImage *img, int x, int y,unsigned char r,unsigned char g,unsigned b);

#endif	
