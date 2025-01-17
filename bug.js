```javascript
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "pages/api/auth/[...nextauth]";

export default async function Home() {
  const session = await unstable_getServerSession(context, authOptions);
  // ... rest of your component
}
```