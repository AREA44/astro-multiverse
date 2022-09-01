# Astro Multiverse

Say hello to **Multiverse**, a slick, one-page gallery design with a fully functional lightbox.

## Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
|:----------------  |:-------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:3000`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

## How it works

### Thumb

Just add your thumb to the thumb section in [`index.astro`](src/pages/index.astro) in the following format:

```ts
	<Thumb
		title="Title"
		href="path/to/images/image.jpg"
		description="Description"
	/>
```

## License

**Lens** by [HTML5 UP](https://html5up.net). Free for personal and commercial use under the [CCA 3.0](https://html5up.net/license) license.

## Credits

- Demo images by [Unsplash](https://unsplash.com)
- Icons by [Font Awesome](https://fontawesome.io)
- [jQuery](https://jquery.com)
- [Poptrox](https://github.com/ajlkn/jquery.poptrox)
