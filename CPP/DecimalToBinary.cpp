#include<iostream>
using namespace std;
int main()
{
    int n;
    cin>>n;

    int res=0;
    int p=1;

    while(n>0){

        int digit = n%2;
        n=n/2;
        res+=digit*p;
        p=p*10;        
    }

    cout<<res;
    return 0;
}