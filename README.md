# Next.js & HeroUI Template

This is a template for creating applications using Next.js 14 (app directory) and HeroUI (v2).

[Try it on CodeSandbox](https://githubbox.com/heroui-inc/heroui/next-app-template)

## Technologies Used

- [Next.js 14](https://nextjs.org/docs/getting-started)
- [HeroUI v2](https://heroui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)

## How to Use

### Use the template with create-next-app

To create a new project based on this template using `create-next-app`, run the following command:

```bash
npx create-next-app -e https://github.com/heroui-inc/next-app-template
```

### Install dependencies

You can use one of them `npm`, `yarn`, `pnpm`, `bun`, Example using `npm`:

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Setup pnpm (optional)

If you are using `pnpm`, you need to add the following code to your `.npmrc` file:

```bash
public-hoist-pattern[]=*@heroui/*
```

After modifying the `.npmrc` file, you need to run `pnpm install` again to ensure that the dependencies are installed correctly.

## License

Licensed under the [MIT license](https://github.com/heroui-inc/next-app-template/blob/main/LICENSE).
{/_ <div className="grid grid-cols-1 sm:grid-cols-2 -mt-2 md:grid-cols-3 gap-6 lg:px-14 mx-auto">
{productData.map((item, index) => (
<div
                        key={index}
                        className="bg-[#F9F9F9] shadow-sm cursor-pointer mx-auto rounded-lg py-8 px-7 hover:shadow-md transition"
                    >
<h3 className="text-lg text-black font-semibold mb-1">
{item.title}
</h3>
<p className="text-sm text-gray-500 mb-3">{item.description}</p>
<Image
                            src={item.image}
                            alt={item.title}
                            height={200}
                            width={300}
                            className=" object-cover rounded-md"
                        />
</div>
))}
</div> _/}
