#include "img.h"

int main(int argc, char **argv){
	MyImage *img;
	
	img = createMyImage(128, 128);
	fillColor(img,255, 0, 0);
	saveImage(img, "test.webp");
	freeMyImage(img);
	
	return 0;
}
