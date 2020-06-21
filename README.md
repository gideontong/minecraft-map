# Overviewer Web Map

This web map covers the private Minecraft SMP server run by [Gideon Tong](https://gideontong.com) and was created using [Minecraft Overviewer](https://overviewer.org).

## Getting Started

The fastest way to get started is to simply download the build for your corresponding operating system from the [downloads page](https://overviewer.org/downloads) and simply running the command `overviewer /path/to/world /path/to/output`, where `/path/to/world` is the location where your world is in, and `/path/to/output` is where you want to get the map to be saved. The map is a static Leaflet-based map that you can host anywhere (in this case, you can see this site is deployed live using [GitHub Pages](https://pages.github.com)). By default, Overviewer will render with the default render mode, which is the Overworld, and in the Northeast quadrant facing upwards with standard lighting.

For advanced options, visit [their wiki](https://docs.overviewer.org) and learn more about supporting multiple dimensions, separate resource packs, custom lighting or alternate lighting engines, as well as a multitude of other features.

## Advanced Configuration

Here is the advanced configuration used to generate this website:

```python
worlds['survival'] = 'world'
texturepath = 'client.jar'
outputdir = '/mounts/remote-git-sync/map'

renders['day'] = {
    'world': 'survival',
    'title': 'Daytime',
    'rendermode': smooth_lighting,
    'dimension': 'overworld'
}

renders['night'] = {
    'world': 'survival',
    'title': 'Nighttime',
    'rendermode': smooth_night,
    'dimension': 'overworld'
}

renders['nether'] = {
    'world': 'survival',
    'title': 'Nether (Northeast)',
    'rendermode': nether_smooth_lighting,
    'dimension': 'nether'
}

renders['nethersouth'] = {
    'world': 'survival',
    'title': 'Nether (Southwest)',
    'rendermode': nether_smooth_lighting,
    'dimension': 'nether',
    'northdirection': 'lower-right'
}

renders['end'] = {
    'world': 'survival',
    'title': 'The End',
    'rendermode': 'smooth_lighting',
    'dimension': 'end'
}
```

This world was generated from a snapshot taken from the server backups rather than the live server, and the entire world directory was in a folder called `world` inside the Overviewer build directory. Textures were linked to a copy of the latest client jar (as of this writing, Minecraft snapshot 1.16-pre5, which is the version the Minecraft server is on) and placed in the same directory, named `client.jar`. Do note that since writing this guide, the latest version of Minecraft has been updated to 1.16-rc2.

## Additional Notes

The map here takes very few customizations to the source code of Overviewer, only changing the title and the favicon of the website. However, from the Wiki there are some really good highlights of what you can do with Overviewer, so I highly reccomend you go check those out as well.
