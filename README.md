This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## TODOS los paquetes utilizados
- npx create-next-app 
- npm install @supabase/ssr    ## ( ssr: server side rendering)
-npm install @dnd-kit/core @dnd-kit/sortable @dnd-kit/utilities  ( libreria drag and drop )
-npm install @radix-ui/react-dialog @radix-ui/react-label @radix-ui/react-select @radix-ui/react-slot( UI )
-npm install lucide-react class-variance-authority (iconos , y para compatibilidad con radix es la variance)
-npm install tailwind-merge clsx
-npm install @clerk/nextjs 
-npm install tw-animate-css
-npm install tw-animate-css
-npx shadcn@latest init # esto crea components.json y lib/utils.ts con la funcion cn , esta ultima se hizo gracias a instalar antes las librerias de tailwind-merge y clsx ahora podes usar esta funcion para combinar classname .
##AHORA INSTALAMOS LOS COMPONENTES QUE VAMOS A USAR DE SHADCN
-npx shadcn add button card input label textarea dialog select badge