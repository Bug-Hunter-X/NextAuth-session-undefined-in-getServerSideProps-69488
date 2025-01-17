# NextAuth session undefined in getServerSideProps

This repository demonstrates a common issue when using NextAuth.js with `getServerSideProps` where the session object might be undefined, even when authentication is successful. The problem arises from incorrect usage or improper configuration of the `unstable_getServerSession` function.

## Problem

The provided `bug.js` file shows how the `unstable_getServerSession` function might be used incorrectly, leading to an undefined session object. This results in errors during rendering and unexpected behavior in the application.

## Solution

The `bugSolution.js` file offers a corrected implementation. Key changes involve ensuring the correct context is provided to `unstable_getServerSession` and appropriate handling for potential errors.

## Usage

1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Observe the difference in behavior between `bug.js` and `bugSolution.js`.

This example highlights the importance of proper context management and error handling when integrating NextAuth.js into your Next.js application. Carefully review the documentation and adapt the solution to match your specific requirements and application structure.