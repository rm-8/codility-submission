
// Writing of function
function solution(S) {
    const N = S.length; // Number of strings
    const M = S[0].length; // Length of each string

    for (let i = 0; i < N; i++) // Loop over each string
        for (let j = i + 1; j < N; j++) // Loop over other strings
            for (let k = 0; k < M; k++) // Loop over characters
                if (S[i][k] === S[j][k]) return [i, j, k]; // Return indices if match found

    return []; // Return empty array if no match found
}

const S = ["abc", "bca", "dbe"]; // Example strings
console.log(solution(S)); 
