#include<iostream>
using namespace std;
int main()
{
    int n,m,b;
    cin>>n>>m>>b;
    int c=0;
    int res=0,p=1;

    while(n>0){
        int d1= n%10;
        int d2=m%10;

        n=n/10;
        m=m/10;

        int d=d1-d2+c;
        if(d<0){
            c=-1;
            d+=b;
        }else{
            c=0;

        }
        res+=d*p;
         p=p*10;
    }

    cout<<res;
    return 0;
}