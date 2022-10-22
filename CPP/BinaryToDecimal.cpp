#include<iostream>
using namespace std;
int main()
{
    int n;
    cin>>n;

    int res=0;
    int p=1;

    while(n>0){
        int ans = n%10;
        res +=ans*p;
        n=n/10;
        p=p*2;
    }
    cout<<res;
    return 0;
}