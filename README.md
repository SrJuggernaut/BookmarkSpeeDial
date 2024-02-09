# BookmarkSpeeDial

BookmarkSpeeDial is a Firefox extension that creates a Speed Dial using the Bookmarks as the data source.

## Installation

To install, simply install the extension from the [Firefox Add-ons Store](https://addons.mozilla.org/en-US/firefox/addon/bookmarkspeedial/)

## Usage

BookmarkSpeeDial automatically replaces the new tab page with a speed dial. To use it, simply open a new tab. On the first run the home page will be the root of your bookmarks, you can navigate to any other folder in your bookmarks and select it as the home page, this will cause the speed dial to open with that folder as the home page from now on.

## Develop

This extension is developed using [Bun](https://bun.sh/) because functions like [watch](https://bun.sh/guides/read-file/watch) are used to review changes in the `src` directory and run a full build, making it easier to load the plugin as a temporary plugin in Firefox.

### Install dependencies

```bash
bun install
```

### Start development

```bash
bun run develop
```

### Build

To build the extension, run the following command:

```bash
bun run build
```
This will generate the `dist` directory with the extension in form of an `xpi` file.

## License

[Mozilla Public License Version 2.0](https://www.mozilla.org/en-US/MPL/2.0/)