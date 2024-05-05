import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import config from './configDetails'

export default defineConfig({
  name: 'default',
  title: 'Portfolio-CMS',

  ...config,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
