from .optimizeimages import pngnq, optipng

worlds['survival'] = 'world'
world = 'survival'
optimizeimg = [pngnq(), optipng()]
texturepath = 'client.jar'

renders['day'] = {
    'title': 'Daytime',
    'rendermode': smooth_lighting,
    'dimension': 'overworld'
}

renders['night'] = {
    'title': 'Nighttime',
    'rendermode': smooth_night,
    'dimension': 'overworld'
}

renders['nether'] = {
    'title': 'Nether (Northeast)',
    'rendermode': nether_smooth_lighting,
    'dimension': 'nether'
}

renders['nethersouth'] = {
    'title': 'Nether (Southwest)',
    'rendermode': nether_smooth_lighting,
    'dimension': 'nether',
    'northdirection': 'lower-right'
}

renders['end'] = {
    'title': 'The End',
    'rendermode': 'smooth_lighting',
    'dimension': 'end'
}

renders['biomes'] = {
    'title': 'Biomes',
    'rendermode': [ClearBase(), BiomeOverlay()],
    'overlay': ['day']
}

outputdir = 'map'
