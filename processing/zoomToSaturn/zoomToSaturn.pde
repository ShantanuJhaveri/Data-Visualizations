float i,m,n,p,s,t;

void setup(){
  size(1080,720);noStroke();
            }
void draw(){
  background(0);
  translate(-0.4*1080,-720/4);
  for(i=2e3;i>0;i--){p=i%2==0?0:1;m=t/cos(t/i)+p*
  (t/2+i%t);
rect(960+m*sin(n=t/9+i*i)*cos((p==0?1:0)*i/t),540+m*cos(n+p*2),s=3-cos(n)*3,s);}t+=.05;
}
