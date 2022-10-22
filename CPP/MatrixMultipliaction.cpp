#include<iostream>
using namespace std;

void multiply(int **a,int **b,int r1,int c1,int r2,int c2){
    int **arr = new int*[r1];

    for(int i=0;i<r1;i++){
        arr[i]= new int[c2];
    }

    for(int i=0;i<r1;i++){
        for(int j=0;j<c2;j++){
               arr[i][j]=0;
            for(int k=0;k<r2;k++){
                arr[i][j]+= a[i][k]*b[k][j];
            }
        }
    }

    for(int i=0;i<r1;i++){
        for(int j=0;j<c2;j++){
            cout<<arr[i][j]<<" ";
        }
        cout<<endl;
    }


    for(int i=0;i<r1;i++){
        delete arr[i];
    }


    delete[] arr;

}

void takeInput(int **arr,int n,int m){
    for(int i=0;i<n;i++){
        arr[i] = new int[m];
    }

    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            cin>>arr[i][j];
        }
    }


    cout<<"your array is "<<endl;
    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
           cout<<arr[i][j]<<" ";
        }
        cout<<endl;
    }




}
int main()
{

    int r1,r2,c1,c2;
    cout<<"enter for first array";
    cin>>r1>>c1;

    cout<<"enter for second array";
    cin>>r2>>c2;

    int **a = new int*[r1];
    takeInput(a,r1,c1);
        int **b = new int*[r2];

    cout<<"for second array";
    takeInput(b,r2,c2);

    if(c1!=r2){
        cout<<"not valid";
    }else{
        multiply(a,b,r1,c1,r2,c2);
    }

     for(int i=0;i<r1;i++){
        delete a[i];
    }


    delete[] a;

     for(int i=0;i<r1;i++){
        delete b[i];
    }


    delete[] b;




    return 0;
}