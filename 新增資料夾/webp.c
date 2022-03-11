#include "img.h"

int main(int argc, char **argv){
	MyImage *img;
	
	img = createMyImage(128, 128);
	fillcolor(img,255, 128, 0);
	saveImage(img, "test.webp");
	freeMyImage(img);
	
	return 0;
}
