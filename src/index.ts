import { Plugin } from 'unified'
import { squeezeLinks as mdastSqueezeLinks } from 'mdast-squeeze-links'
import { Root } from 'mdast'

export const squeezeLinks: Plugin<any[], Root, Root> = () => {
  return mdastSqueezeLinks
}
