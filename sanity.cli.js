import {defineCliConfig} from 'sanity/cli'
import config from './configDetails'

export default defineCliConfig({api: config})
