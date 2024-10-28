#include <bits/stdc++.h>
using namespace std;

int summation(int a, int b) {
    return a + b;
}

int main() {
    int num1 = 14;
    int num2 = 45;
    
    // Corrected line: Removed the 'int' keyword
    int result = summation(num1, num2);

    cout << result << endl;
    return 0;
}
